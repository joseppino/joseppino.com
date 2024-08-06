import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const load = async () => {
  const blogPosts = await supabase.from("blog_posts").select();
  const data = blogPosts.data;
  return { data };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D18IBSXE.js')).default;
const server_id = "src/routes/blog/+page.server.ts";
const imports = ["_app/immutable/nodes/5.BuEw_9ZA.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = ["_app/immutable/assets/5.2UwxGZdO.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-B0-4zvbQ.js.map
