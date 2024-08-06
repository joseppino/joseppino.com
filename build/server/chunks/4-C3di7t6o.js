import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import { A as ADMIN_EMAIL } from './private-DnAf_y-Y.js';
import '@supabase/supabase-js';

const load = async ({ cookies }) => {
  const emailcookie = cookies.get("useremail");
  let signedIn = false;
  if (emailcookie === ADMIN_EMAIL) {
    signedIn = true;
  }
  return { signedIn };
};
const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (email && password) {
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (data.user?.email) {
        cookies.set("useremail", data.user?.email, { path: "/" });
      }
    }
    return { success: true };
  },
  logout: async ({ cookies }) => {
    cookies.delete("useremail", { path: "/" });
    return { loggedOut: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BhMHd44g.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/4.DqI4wzeO.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-C3di7t6o.js.map
