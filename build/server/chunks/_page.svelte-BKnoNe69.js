import { c as create_ssr_component, e as escape } from './ssr-DDn0MG0-.js';
import { marked } from 'marked';

const css = {
  code: ".content.svelte-1t5zj2y{display:block;text-align:start;margin:10px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { marked } from \\"marked\\";\\nexport let data;\\nlet blogPost;\\nlet parsedBody;\\nif (data.data) {\\n  blogPost = data.data[0];\\n  parsedBody = marked.parse(blogPost.body);\\n}\\nconsole.log(blogPost);\\n<\/script>\\r\\n\\r\\n{#if blogPost}\\r\\n  <h1>{blogPost.title}</h1>\\r\\n  <div class=\\"content\\" contenteditable=\\"false\\"\\r\\n  bind:innerHTML={parsedBody}></div>\\r\\n{:else}\\r\\n  <h2>Nothing to see here...</h2>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .content {\\r\\n    display: block;\\r\\n    text-align: start; \\r\\n    margin: 10px;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAoBE,uBAAS,CACP,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,IACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let blogPost;
  let parsedBody;
  if (data.data) {
    blogPost = data.data[0];
    parsedBody = marked.parse(blogPost.body);
  }
  console.log(blogPost);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${blogPost ? `<h1>${escape(blogPost.title)}</h1> <div class="content svelte-1t5zj2y" contenteditable="false">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(parsedBody)}</div>` : `<h2 data-svelte-h="svelte-k9yrdf">Nothing to see here...</h2>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BKnoNe69.js.map
