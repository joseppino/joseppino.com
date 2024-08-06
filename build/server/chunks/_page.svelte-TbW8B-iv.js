import { c as create_ssr_component, d as each, e as escape } from './ssr-DDn0MG0-.js';
import './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const css = {
  code: ".t-wrapper.svelte-39jvfb{display:flex;flex-direction:column;align-items:center}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { supabase } from \\"$lib/supabaseClient\\";\\nexport let data;\\n$: blogPosts = data.data;\\nasync function deletePost(uuid) {\\n  const response = await supabase.from(\\"blog_posts\\").delete().eq(\\"id\\", uuid);\\n  return response;\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"t-wrapper\\">\\r\\n  <table class=\\"pure-table\\">\\r\\n    <thead>\\r\\n      <tr>\\r\\n        <th>UUID</th>\\r\\n        <th>Date</th>\\r\\n        <th>title</th>\\r\\n        <th></th>\\r\\n      </tr>\\r\\n    </thead>\\r\\n    <tbody>\\r\\n      {#if blogPosts}\\r\\n        {#each blogPosts as blogPost}\\r\\n          <tr>\\r\\n            <td>\\r\\n              {blogPost.id}\\r\\n            </td>\\r\\n            <td>\\r\\n              {new Date(blogPost.created_at).toLocaleDateString()}\\r\\n            </td>\\r\\n            <td>\\r\\n              {blogPost.title}\\r\\n            </td>\\r\\n            <td>\\r\\n              <button type=\\"button\\" class=\\"pure-button\\" on:click={async () => { \\r\\n                const res = await deletePost(blogPost.id);\\r\\n                if(!res.error && blogPosts) {\\r\\n                  blogPosts = blogPosts.filter(post => {\\r\\n                    return post !== blogPost;\\r\\n                  })\\r\\n                }\\r\\n              }}\\r\\n              >Delete</button>\\r\\n            </td>\\r\\n          </tr>\\r\\n        {/each}\\r\\n      {/if}\\r\\n    </tbody>\\r\\n  </table>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .t-wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAmDE,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blogPosts;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  blogPosts = data.data;
  return `<div class="t-wrapper svelte-39jvfb"><table class="pure-table"><thead data-svelte-h="svelte-miqaas"><tr><th>UUID</th> <th>Date</th> <th>title</th> <th></th></tr></thead> <tbody>${blogPosts ? `${each(blogPosts, (blogPost) => {
    return `<tr><td>${escape(blogPost.id)}</td> <td>${escape(new Date(blogPost.created_at).toLocaleDateString())}</td> <td>${escape(blogPost.title)}</td> <td><button type="button" class="pure-button" data-svelte-h="svelte-5ukzr5">Delete</button></td> </tr>`;
  })}` : ``}</tbody></table> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-TbW8B-iv.js.map
