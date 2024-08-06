import { A as ADMIN_EMAIL } from './private-DnAf_y-Y.js';
import { e as error } from './index-CvuFLVuQ.js';
import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const load = async ({ cookies }) => {
  const emailcookie = cookies.get("useremail");
  if (emailcookie === ADMIN_EMAIL) {
    const blogPosts = await supabase.from("blog_posts").select();
    const data = blogPosts.data;
    return { data };
  }
  error(403, "Forbidden");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-TbW8B-iv.js')).default;
const server_id = "src/routes/blog/manage/+page.server.ts";
const imports = ["_app/immutable/nodes/6.BcB3LD4Q.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/supabaseClient.BQrSqomd.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js"];
const stylesheets = ["_app/immutable/assets/6.CIjuub_H.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DNwKWqvk.js.map
