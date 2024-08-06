import { c as create_ssr_component } from './ssr-DDn0MG0-.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<h1 data-svelte-h="svelte-1d5mfrr">Admin</h1> <h2 data-svelte-h="svelte-bhb3ah">Login</h2> <form class="pure-form pure-form-stacked" method="POST" action="?/login" data-svelte-h="svelte-1th3ujo"><fieldset><label for="stacked-email">Email</label> <input type="email" name="email" id="stacked-email" placeholder="Email"> <label for="stacked-password">Password</label> <input type="password" name="password" id="stacked-password" placeholder="Password"> <button type="submit" class="pure-button pure-button-primary">Sign in</button></fieldset></form> ${data.signedIn ? `<form method="POST" action="?/logout" data-svelte-h="svelte-u2dh94"><button class="pure-button pure-button-secondary">Log Out</button></form>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BhMHd44g.js.map
