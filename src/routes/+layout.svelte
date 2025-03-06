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
    margin: 0px 10px;
  }

  @media only screen and (max-width: 600px) {
  main {
    width: 100vw;
    min-width: unset;
  }
}

</style>
