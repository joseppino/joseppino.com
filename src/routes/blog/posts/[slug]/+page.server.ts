import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ params }) => {
	const post = await supabase
  .from("blog_posts")
  .select()
  .eq("id", params.slug)

	if (post) {
		return post;
	}

	error(404, 'Not found');
};