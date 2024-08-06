import { c as create_ssr_component, v as validate_component } from './ssr-DDn0MG0-.js';
import 'purecss';

const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="top-menu pure-menu pure-menu-horizontal pure-menu-scrollable" data-svelte-h="svelte-2ez1xj"> <ul class="pure-menu-list"><li class="pure-menu-item"><a href="/" class="pure-menu-link">Home</a></li> <li class="pure-menu-item"><a href="/blog" class="pure-menu-link">Blog</a></li> <li class="pure-menu-item"><a href="/photos" class="pure-menu-link">Photos</a></li> <li class="pure-menu-item"><a href="https://github.com/joseppino?tab=repositories" class="pure-menu-link">Projects</a></li> <li class="pure-menu-item"><a href="https://www.linkedin.com/in/josephm-lloyd/" class="pure-menu-link">LinkedIn</a></li> <li class="pure-menu-item"><a href="#" class="pure-menu-link">CV</a></li></ul></div>`;
});
const css = {
  code: "main.svelte-w5h5b2{width:1080px;max-width:100vw;min-height:100vh;background-color:#001D3D;box-shadow:1em 0.75em 2.5em var(--colour3)}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n  import \\"purecss\\";\\r\\n  import \\"../global.css\\";\\r\\n  import Menu from \\"$lib/components/Menu.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Menu />\\r\\n<main>\\r\\n  <slot />\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    width: 1080px;\\r\\n    max-width: 100vw;\\r\\n    min-height: 100vh;\\r\\n    background-color: #001D3D;\\r\\n    box-shadow: 1em 0.75em 2.5em var(--colour3);\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAYE,kBAAK,CACH,KAAK,CAAE,MAAM,CACb,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,SAAS,CAC5C"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})} <main class="svelte-w5h5b2">${slots.default ? slots.default({}) : ``} </main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-CFoN9OU0.js.map
