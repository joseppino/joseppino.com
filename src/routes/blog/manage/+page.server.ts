import { env } from "$env/dynamic/private";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabaseClient";

export const load: PageServerLoad = async ({ cookies }) => {
	const emailcookie = cookies.get("useremail");
  if(emailcookie === env.ADMIN_EMAIL) {
    const blogPosts = await supabase
    .from("blog_posts")
    .select();

    const data = blogPosts.data;
    return { data }
  }
  error(403, "Forbidden");
};