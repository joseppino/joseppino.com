import { A as ADMIN_EMAIL } from './private-DnAf_y-Y.js';
import { e as error } from './index-CvuFLVuQ.js';
import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const load = async ({ cookies }) => {
  const emailcookie = cookies.get("useremail");
  if (emailcookie === ADMIN_EMAIL) {
    return { emailcookie };
  }
  error(403, "Forbidden");
};
const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const title = formData.get("title")?.toString();
    const body = formData.get("body")?.toString();
    if (title && body) {
      if (cookies.get("useremail") === ADMIN_EMAIL) {
        const { error: error2 } = await supabase.from("blog_posts").insert({
          title,
          body
        });
        if (error2) {
          console.log(error2);
        }
      } else {
        error(403, "Forbidden");
      }
    }
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CL2irMxv.js')).default;
const server_id = "src/routes/blog/new/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DRB7Nce_.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js"];
const stylesheets = ["_app/immutable/assets/7.BCfq_OMl.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-DWQNYrt-.js.map
