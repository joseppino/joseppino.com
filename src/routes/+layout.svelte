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
    min-width: 1080px;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #001D3D;
    box-shadow: 1em 0.75em 2.5em var(--colour3);
    margin: 0px 10px;
  }

  @media only screen and (max-width: 600px) {
  main {
    width: 100vw;
    min-width: unset;
  }
}

</style>
