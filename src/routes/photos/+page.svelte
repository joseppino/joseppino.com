<script lang="ts">
  import ImageModal from "$lib/components/ImageModal.svelte";
  import { supabase } from "$lib/supabaseClient";

  async function listPhotos(orientation: string) {
    const response = await supabase
    .storage
    .from('photos')
    .list(orientation, {
      limit: 20,
      offset: 0
    });

    if(!response.error) {
      return response.data;
    } else {
      console.log(response.error.message);
      throw new Error(response.error.message);
    }
  }

  async function getPhotoURIArray(orientation: string) {
    let arr: string[] = [];
    const photoList = await listPhotos(orientation);
    photoList.forEach(item => {
      if(item.name.toUpperCase().includes(".JP")) {
        arr.push(`https://nuyavgdfgnfsizjcvrds.supabase.co/storage/v1/object/public/photos/${orientation}/${item.name}`);
      }
    });
    return arr;
  }

  async function fetchAllPhotoURIs() {
    let portraits = await getPhotoURIArray("portrait");
    let landscapes = await getPhotoURIArray("landscape");
    let allURIs = [...portraits, ...landscapes];
    return allURIs;
  }

  function shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  let photoURIs = fetchAllPhotoURIs();
  let showModal: boolean = false;
  let chosenPhotoURI: string;

  function openModal(uri: string) {
    chosenPhotoURI = uri;
    showModal = true;
  }
</script>

<main>
<h1>Photos</h1>
<ImageModal bind:showModal bind:photoURI={chosenPhotoURI} />
<section class="photo-section">
  {#await photoURIs}
    <h3>Loading...</h3>
  {:then photoURIs}
    {#each shuffleArray(photoURIs) as photoURI}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img class="grow" src={photoURI} alt="" width="200px"
      on:click={() => {
        openModal(photoURI);
      }}>
    {/each}
  {/await}
</section>

</main>

<style>
  .photo-section {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    max-width: 100vw;
    overflow: hidden;
    align-items: center;
  }

  .photo-section img {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100px;
    overflow-y: visible;
  }

  .photo-section img:hover {
    opacity: 80%;
    cursor: pointer;
  }

  .grow { 
    transition: all .2s ease-in-out; 
  }

  .grow:hover { 
      transform: scale(1.1); 
  }

  @-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)}
    to {-webkit-transform:scale(1)}
  }

  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  @media only screen and (max-width: 600px) {
    .photo-section {
      display: flex;
      flex-direction: column;
  }

  .photo-section img {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    width: 300px;
    overflow-y: visible;
  }

  .photo-section img:hover {
    opacity: 80%;
    cursor: pointer;
  }
}
</style>