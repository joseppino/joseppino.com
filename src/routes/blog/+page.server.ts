import { supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const blogPosts = await supabase
	.from("blog_posts")
	.select();

	const data = blogPosts.data;
	return { data }
};