import { ADMIN_EMAIL } from "$env/static/private";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ cookies }) => {
	const emailcookie = cookies.get("useremail");
  let signedIn: boolean = false;
  if(emailcookie === ADMIN_EMAIL) {
    const blogPosts = await supabase
    .from("blog_posts")
    .select();

    const data = blogPosts.data;
    return { data }
  }
  error(403, "Forbidden");
};