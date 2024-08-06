import { e as error } from './index-CvuFLVuQ.js';
import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const load = async ({ params }) => {
  const post = await supabase.from("blog_posts").select().eq("id", params.slug);
  if (post) {
    return post;
  }
  error(404, "Not found");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BKnoNe69.js')).default;
const server_id = "src/routes/blog/posts/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.Cyfi0-z3.js","_app/immutable/chunks/scheduler.B720Wybo.js","_app/immutable/chunks/index.Ctv-Nbzx.js"];
const stylesheets = ["_app/immutable/assets/8.BF7l2STx.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-CDTA72cf.js.map
