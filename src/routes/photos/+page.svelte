<script lang="ts">
  import ImageModal from "$lib/components/ImageModal.svelte";
  import PhotoGrid from "$lib/components/PhotoGrid.svelte";
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
  $: openModal(chosenPhotoURI);

  function openModal(uri: string) {
    chosenPhotoURI = uri;
    showModal = true;
  }
</script>

<div class="content">
  <h1>Photos</h1>
  <ImageModal bind:showModal bind:photoURI={chosenPhotoURI} />
  <!-- <section class="photo-section"> -->
    {#await photoURIs}
      <h3>Loading...</h3>
    {:then photoURIs}
      <PhotoGrid photoUriList={shuffleArray(photoURIs)} bind:clickedPhotoUri={chosenPhotoURI}/>
    {/await}
</div>