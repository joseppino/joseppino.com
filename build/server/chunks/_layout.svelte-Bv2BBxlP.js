import { c as create_ssr_component } from './ssr-DDn0MG0-.js';

const css = {
  code: ".content.svelte-1cc8ce3{width:1200px;max-width:100vw;background-color:#001D3D}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<div class=\\"content\\">\\r\\n  <slot />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .content {\\r\\n    width: 1200px;\\r\\n    max-width: 100vw;\\r\\n    /* height: 100vh; */\\r\\n    background-color: #001D3D;\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAKE,uBAAS,CACP,KAAK,CAAE,MAAM,CACb,SAAS,CAAE,KAAK,CAEhB,gBAAgB,CAAE,OACpB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1cc8ce3">${slots.default ? slots.default({}) : ``} </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Bv2BBxlP.js.map
