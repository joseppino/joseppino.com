import { c as create_ssr_component } from './ssr-DDn0MG0-.js';

const css = {
  code: "fieldset.svelte-1xyoi5a{display:flex;flex-direction:column;align-items:center}textarea.svelte-1xyoi5a{min-height:200px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\n<\/script>\\r\\n\\r\\n<h2>New Blog Post</h2>\\r\\n<form class=\\"pure-form\\" method=\\"POST\\">\\r\\n  <fieldset class=\\"pure-group\\">\\r\\n      <input type=\\"text\\" name=\\"title\\" class=\\"pure-input-1-2\\" placeholder=\\"A title\\" />\\r\\n      <textarea class=\\"pure-input-1-2\\" name=\\"body\\" placeholder=\\"Write some markdown here...\\"></textarea>\\r\\n  </fieldset>\\r\\n  <button type=\\"submit\\" class=\\"pure-button pure-input-1-2 pure-button-primary\\">Post</button>\\r\\n</form>\\r\\n\\r\\n<style>\\r\\n  fieldset {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  textarea {\\r\\n    min-height: 200px;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAaE,uBAAS,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,uBAAS,CACP,UAAU,CAAE,KACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<h2 data-svelte-h="svelte-30xrim">New Blog Post</h2> <form class="pure-form" method="POST" data-svelte-h="svelte-1suhwax"><fieldset class="pure-group svelte-1xyoi5a"><input type="text" name="title" class="pure-input-1-2" placeholder="A title"> <textarea class="pure-input-1-2 svelte-1xyoi5a" name="body" placeholder="Write some markdown here..."></textarea></fieldset> <button type="submit" class="pure-button pure-input-1-2 pure-button-primary">Post</button> </form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CL2irMxv.js.map
