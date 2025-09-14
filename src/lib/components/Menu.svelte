<script lang="ts">
  import { fly } from "svelte/transition";

  let mobileNavToggled = false;

  function toggleMobileNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNavToggled = !mobileNavToggled;
  }
</script>

<div class="wide-menu top-menu pure-menu pure-menu-horizontal pure-menu-scrollable">
  <!-- <a href="/" class="pure-menu-heading pure-menu-link"><img src="favicon.png" alt="" width="24px" height="24px"></a> -->
  <ul class="pure-menu-list">
    <li class="pure-menu-item">
      <a href="/" class="pure-menu-link">Home</a>
    </li>
    <li class="pure-menu-item">
        <a href="/blog" class="pure-menu-link">Blog</a>
    </li>
    <li class="pure-menu-item">
        <a href="/photos" class="pure-menu-link">Photos</a>
    </li>
    <li class="pure-menu-item">
      <a href="/projects" class="pure-menu-link">Projects</a>
    </li>
    <li class="pure-menu-item">
        <a href="https://github.com/joseppino" class="pure-menu-link">GitHub</a>
    </li>
    <li class="pure-menu-item">
      <a href="https://docs.google.com/document/d/11FkygEOJKSYeWJd9Zr2Qc0kxyULZT-tPqJTxdvSpWGc/edit?usp=sharing" class="pure-menu-link">CV</a>
    </li>
  </ul>
</div>

<div class="mobile-menu top-menu pure-menu pure-menu-horizontal">
  <!-- <a href="/" class="pure-menu-heading pure-menu-link"><img src="favicon.png" alt="" width="24px" height="24px"></a> -->
  <ul class="pure-menu-list">
    <li class="pure-menu-item">
      <!-- <a href="/" class="pure-menu-link"><i class="fa-solid fa-bars"></i></a> -->
       {#if !mobileNavToggled}
        <button class="menu-burger" on:click={toggleMobileNav}><i class="fa-solid fa-bars"></i></button>
       {:else}
        <button class="menu-burger" on:click={toggleMobileNav}><i class="fa-solid fa-bars-staggered"></i></button>
       {/if}
    </li>
  </ul>
</div>

{#if mobileNavToggled}
  <div class="mobile-nav">
    <div class="pure-menu custom-restricted-width" in:fly={{ y: '-100%', duration: 300 }} out:fly={{ y: '-100%', duration: 300 }} style="font-size: 1.5rem;">
      <span class="pure-menu-heading">MENU</span>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a href="/" class="pure-menu-link" on:click={toggleMobileNav}>Home</a>
        </li>
        <li class="pure-menu-item">
            <a href="/blog" class="pure-menu-link" on:click={toggleMobileNav}>Blog</a>
        </li>
        <li class="pure-menu-item">
            <a href="/photos" class="pure-menu-link" on:click={toggleMobileNav}>Photos</a>
        </li>
        <li class="pure-menu-item">
          <a href="/projects" class="pure-menu-link" on:click={toggleMobileNav}>Projects</a>
        </li>
        <li class="pure-menu-item">
            <a href="https://github.com/joseppino" class="pure-menu-link" on:click={toggleMobileNav}>GitHub</a>
        </li>
        <li class="pure-menu-item">
          <a href="https://docs.google.com/document/d/11FkygEOJKSYeWJd9Zr2Qc0kxyULZT-tPqJTxdvSpWGc/edit?usp=sharing" class="pure-menu-link" on:click={toggleMobileNav}>CV</a>
        </li>
      </ul>
    </div>
  </div>
{/if}

<style>
  a {
    color: var(--colour5);
  }
  
  a:visited {
    color: var(--colour4);
  }

  a:hover {
    background-color: var(--colour1);
    filter: contrast(0.75)
  }

  a:focus {
    background-color: var(--colour1);
  }

  .hidden {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .menu-burger {
    background-color: var(--colour2);
    border: none;
    color: var(--colour5);
    font-size: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    z-index: 2;
  }

  @media only screen and (max-width: 600px) {
    .wide-menu {
      display: none;
    }
    .mobile-menu {
      display: flex;
      z-index: 2;
    }
    .mobile-nav {
      /* display: block; */
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 1;
      height: 100vh;
      width: 100%;
      background-color: var(--colour2);
      margin-top: 60px;
    }
  }

  @media only screen and (min-width: 600px) {
    .mobile-nav {
      display: none;
    }
  }
</style>