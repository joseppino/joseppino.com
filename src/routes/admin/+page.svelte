<script lang="ts">
  import type { PageData, ActionData } from './$types';
	
  export let data: PageData;
	export let form: ActionData;
</script>

<div class="content">
<h1>Admin</h1>
<h2>Login</h2>
<form class="pure-form pure-form-stacked" method="POST" action="?/login">
  <fieldset>
    <label for="stacked-email">Email</label>
    <input type="email" name="email" id="stacked-email" placeholder="Email" />
    <label for="stacked-password">Password</label>
    <input type="password" name="password" id="stacked-password" placeholder="Password" />
    <button type="submit" class="pure-button pure-button-primary">Sign in</button>
  </fieldset>
</form>
{#if data.signedIn}
  <form method="POST" action="?/logout">
    <button class="pure-button pure-button-secondary">Log Out</button>
  </form>
{/if}
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>