<script>
  import "purecss";
  import "../global.css";
  import Menu from "$lib/components/Menu.svelte";
</script>

<Menu />
<main>
  <slot />
</main>

<style>
  main {
    width: 1080px;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #001D3D;
    box-shadow: 1em 0.75em 2.5em var(--colour3);
  }
</style>