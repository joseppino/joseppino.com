<script lang="ts">
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
    console.log(allURIs);
    return allURIs;
  }

  let photoURIs = fetchAllPhotoURIs();
</script>

<main>
<h1>Photos</h1>
<section class="photo-section">
  {#await photoURIs}
    <!-- LOADING ICON HERE -->
  {:then photoURIs}
    {#each photoURIs as photoURI}
      <img src={photoURI} alt="" width="200px">
    {/each}
  {/await}
</section>
<!-- <section class="landscapes"></section> -->
</main>

<style>
  .photo-section {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%; 
    grid-template-rows: 25% 25% 25% 25%;
  }

  .photo-section img {
    padding: 10px;
  }
</style>