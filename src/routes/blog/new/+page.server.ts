import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ cookies }) => {
	const emailcookie = cookies.get("useremail");
  if(emailcookie === env.ADMIN_EMAIL) {
    return { emailcookie };
  }
  error(403, "Forbidden");
};

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
    const title = formData.get('title')?.toString();
    const body = formData.get('body')?.toString();
    
    if(title && body) {
      if(cookies.get("useremail") === env.ADMIN_EMAIL) {
        const { error } = await supabase
        .from("blog_posts")
        .insert({
          title: title,
          body: body
        });
        if(error) {
          console.log(error);
        }
      } else {
        error(403, "Forbidden");
      }
    }
		return { success: true };
	}
} satisfies Actions;