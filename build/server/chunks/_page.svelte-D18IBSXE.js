import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from './ssr-DDn0MG0-.js';

const css = {
  code: "p.svelte-aqp04j{margin-top:10px;margin-bottom:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\nconst blogPosts = data.data;\\n<\/script>\\r\\n\\r\\n<div class=\\"content\\">\\r\\n  <h1>Blog</h1>\\r\\n  {#if blogPosts}\\r\\n    <hr>\\r\\n    {#each blogPosts as blogPost}  \\r\\n      <div class=\\"posts-list\\">\\r\\n        <p>{new Date(blogPost.created_at).toLocaleDateString()}</p>\\r\\n        <a href={`/blog/posts/${blogPost.id}`}>{blogPost.title}</a>\\r\\n      </div>\\r\\n      <hr>\\r\\n    {/each}\\r\\n  {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  /* .content {\\r\\n    width: 1200px;\\r\\n    max-width: 100vw;\\r\\n    height: 100vh;\\r\\n    background-color: #001D3D;\\r\\n  } */\\r\\n\\r\\n  p {\\r\\n    margin-top: 10px;\\r\\n    margin-bottom: 10px;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AA0BE,eAAE,CACA,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const blogPosts = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="content"><h1 data-svelte-h="svelte-dbxyy8">Blog</h1> ${blogPosts ? `<hr> ${each(blogPosts, (blogPost) => {
    return `<div class="posts-list"><p class="svelte-aqp04j">${escape(new Date(blogPost.created_at).toLocaleDateString())}</p> <a${add_attribute("href", `/blog/posts/${blogPost.id}`, 0)}>${escape(blogPost.title)}</a></div> <hr>`;
  })}` : ``} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D18IBSXE.js.map
