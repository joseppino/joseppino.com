<script lang="ts">
  export let photoUriList: string[];
  export let clickedPhotoUri: string = "";

  let chunkedPhotoList = chunk(photoUriList, 3);

  function chunk(arr: any[], chunkSize: number) {
    let chunks: any[] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      chunks.push(chunk);
    }
    return chunks;
  }
</script>

<div class="grid">
  {#each chunkedPhotoList as uriList}
    {#each uriList as photoUri}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img class="pure-img grow" src={photoUri} alt=""
      on:click={() => clickedPhotoUri = photoUri}>
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    margin: 20px;
  }

  .grow { 
    transition: all .2s ease-in-out; 
  }

  .grow:hover { 
      transform: scale(1.05); 
  }
</style>