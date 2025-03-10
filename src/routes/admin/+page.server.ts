import type { PageServerLoad, Actions } from './$types';
import { supabase } from '$lib/supabaseClient';
// import { ADMIN_EMAIL } from "$env/static/private";

// temp fix because cloudflare env vars are borked.
const ADMIN_EMAIL = "jlloyd7@proton.me"

export const load: PageServerLoad = async ({ cookies }) => {
	const emailcookie = cookies.get("useremail");
  let signedIn: boolean = false;
  if(emailcookie === ADMIN_EMAIL) {
    signedIn = true;
  }
  return { signedIn };
};

export const actions = {
	login: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

    if(email && password) {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if(data.user?.email){
        cookies.set("useremail", data.user?.email, { path: "/" });
      }
    }
		return { success: true };
	},

  logout: async ({ cookies }) => {
    cookies.delete("useremail", { path: "/" });
    return { loggedOut: true };
  }
} satisfies Actions;