import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop, f as add_attribute, d as each } from './ssr-DDn0MG0-.js';
import { s as supabase } from './supabaseClient-_w_vjOy7.js';
import '@supabase/supabase-js';

const css$1 = {
  code: ".modal-img.svelte-8fs7xy.svelte-8fs7xy{max-width:95vw;max-height:80vh}@media only screen and (max-width: 500px){dialog.svelte-8fs7xy.svelte-8fs7xy{display:none}}@media only screen and (max-height: 500px){dialog.svelte-8fs7xy.svelte-8fs7xy{display:none}}dialog.svelte-8fs7xy.svelte-8fs7xy{max-width:96em;border-radius:0.4em;border:none;padding:0;background-color:rgba(0, 0, 0, 0.6);;}dialog.svelte-8fs7xy.svelte-8fs7xy::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-8fs7xy>div.svelte-8fs7xy{padding:1em}dialog[open].svelte-8fs7xy.svelte-8fs7xy{animation:svelte-8fs7xy-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-8fs7xy-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-8fs7xy.svelte-8fs7xy::backdrop{animation:svelte-8fs7xy-fade 0.2s ease-out}@keyframes svelte-8fs7xy-fade{from{opacity:0}to{opacity:1}}button.svelte-8fs7xy.svelte-8fs7xy{display:block}",
  map: '{"version":3,"file":"ImageModal.svelte","sources":["ImageModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let showModal;\\nexport let photoURI;\\nlet dialog;\\n$: if (dialog && showModal) dialog.showModal();\\n<\/script>\\r\\n\\r\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\r\\n{#if photoURI}\\r\\n\\t<dialog\\r\\n\\t\\tbind:this={dialog}\\r\\n\\t\\ton:close={() => {\\r\\n\\t\\t\\tshowModal = false;\\r\\n\\t\\t\\tphotoURI = \\"\\";\\r\\n\\t\\t}}\\r\\n\\t\\ton:click|self={() => dialog.close()}\\r\\n\\t>\\r\\n\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n\\t\\t<div on:click|stopPropagation>\\r\\n\\t\\t\\t<img class=\\"modal-img\\" src={photoURI} alt=\\"\\">\\r\\n\\t\\t\\t<!-- svelte-ignore a11y-autofocus -->\\r\\n\\t\\t\\t<button type=\\"button\\" class=\\"pure-button\\" autofocus\\r\\n\\t\\t\\tstyle=\\"font-size: 70%;\\"\\r\\n\\t\\t\\ton:click={() => dialog.close()}>Close &times;</button>\\r\\n\\t\\t</div>\\r\\n\\t</dialog>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.modal-img {\\r\\n\\t\\tmax-width: 95vw;\\r\\n\\t\\tmax-height: 80vh;\\r\\n\\t}\\r\\n\\t\\r\\n\\t/* Hide dialog popup if screen is smaller than 500px in width or height */\\r\\n\\t@media only screen and (max-width: 500px){\\r\\n\\t\\tdialog {\\r\\n\\t\\t\\tdisplay: none;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t@media only screen and (max-height: 500px){\\r\\n\\t\\tdialog {\\r\\n\\t\\t\\tdisplay: none;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\tdialog {\\r\\n\\t\\tmax-width: 96em;\\r\\n\\t\\tborder-radius: 0.4em;\\r\\n\\t\\tborder: none;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tbackground-color: rgba(0, 0, 0, 0.6);;\\r\\n\\t}\\r\\n\\tdialog::backdrop {\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.3);\\r\\n\\t}\\r\\n\\tdialog > div {\\r\\n\\t\\tpadding: 1em;\\r\\n\\t}\\r\\n\\tdialog[open] {\\r\\n\\t\\tanimation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\\r\\n\\t}\\r\\n\\t@keyframes zoom {\\r\\n\\t\\tfrom {\\r\\n\\t\\t\\ttransform: scale(0.95);\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\ttransform: scale(1);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tdialog[open]::backdrop {\\r\\n\\t\\tanimation: fade 0.2s ease-out;\\r\\n\\t}\\r\\n\\t@keyframes fade {\\r\\n\\t\\tfrom {\\r\\n\\t\\t\\topacity: 0;\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\topacity: 1;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tbutton {\\r\\n\\t\\tdisplay: block;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BC,sCAAW,CACV,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACb,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,CACxC,kCAAO,CACN,OAAO,CAAE,IACV,CACD,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,aAAa,KAAK,CAAC,CACzC,kCAAO,CACN,OAAO,CAAE,IACV,CACD,CAEA,kCAAO,CACN,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACtC,CACA,kCAAM,UAAW,CAChB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC9B,CACA,oBAAM,CAAG,iBAAI,CACZ,OAAO,CAAE,GACV,CACA,MAAM,CAAC,IAAI,6BAAE,CACZ,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACtD,CACA,WAAW,kBAAK,CACf,IAAK,CACJ,SAAS,CAAE,MAAM,IAAI,CACtB,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CACnB,CACD,CACA,MAAM,CAAC,IAAI,6BAAC,UAAW,CACtB,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,QACtB,CACA,WAAW,kBAAK,CACf,IAAK,CACJ,OAAO,CAAE,CACV,CACA,EAAG,CACF,OAAO,CAAE,CACV,CACD,CACA,kCAAO,CACN,OAAO,CAAE,KACV"}'
};
const ImageModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let { photoURI } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0) $$bindings.showModal(showModal);
  if ($$props.photoURI === void 0 && $$bindings.photoURI && photoURI !== void 0) $$bindings.photoURI(photoURI);
  $$result.css.add(css$1);
  return ` ${photoURI ? `<dialog class="svelte-8fs7xy"${add_attribute("this", dialog, 0)}> <div class="svelte-8fs7xy"><img class="modal-img svelte-8fs7xy"${add_attribute("src", photoURI, 0)} alt="">  <button type="button" class="pure-button svelte-8fs7xy" autofocus style="font-size: 70%;" data-svelte-h="svelte-eiqpci">Close ×</button></div></dialog>` : ``}`;
});
const css = {
  code: ".grid.svelte-1rslq8u{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));align-items:center;margin:20px}.grow.svelte-1rslq8u{transition:all .2s ease-in-out}.grow.svelte-1rslq8u:hover{transform:scale(1.05)}",
  map: '{"version":3,"file":"PhotoGrid.svelte","sources":["PhotoGrid.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let photoUriList;\\nexport let clickedPhotoUri = \\"\\";\\nlet chunkedPhotoList = chunk(photoUriList, 3);\\nconsole.log(chunkedPhotoList);\\nfunction chunk(arr, chunkSize) {\\n  let chunks = [];\\n  for (let i = 0; i < arr.length; i += chunkSize) {\\n    const chunk2 = arr.slice(i, i + chunkSize);\\n    chunks.push(chunk2);\\n  }\\n  return chunks;\\n}\\n<\/script>\\r\\n\\r\\n<div class=\\"grid\\">\\r\\n  {#each chunkedPhotoList as uriList}\\r\\n    {#each uriList as photoUri}\\r\\n      <!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\r\\n      <img class=\\"pure-img grow\\" src={photoUri} alt=\\"\\"\\r\\n      on:click={() => clickedPhotoUri = photoUri}>\\r\\n    {/each}\\r\\n  {/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .grid {\\r\\n    display: grid;\\r\\n    gap: 1rem;\\r\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n    align-items: center;\\r\\n    margin: 20px;\\r\\n  }\\r\\n\\r\\n  .grow { \\r\\n    transition: all .2s ease-in-out; \\r\\n  }\\r\\n\\r\\n  .grow:hover { \\r\\n      transform: scale(1.05); \\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AA0BE,oBAAM,CACJ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IACV,CAEA,oBAAM,CACJ,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,WACtB,CAEA,oBAAK,MAAO,CACR,SAAS,CAAE,MAAM,IAAI,CACzB"}'
};
function chunk(arr, chunkSize) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk2 = arr.slice(i, i + chunkSize);
    chunks.push(chunk2);
  }
  return chunks;
}
const PhotoGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { photoUriList } = $$props;
  let { clickedPhotoUri = "" } = $$props;
  let chunkedPhotoList = chunk(photoUriList, 3);
  console.log(chunkedPhotoList);
  if ($$props.photoUriList === void 0 && $$bindings.photoUriList && photoUriList !== void 0) $$bindings.photoUriList(photoUriList);
  if ($$props.clickedPhotoUri === void 0 && $$bindings.clickedPhotoUri && clickedPhotoUri !== void 0) $$bindings.clickedPhotoUri(clickedPhotoUri);
  $$result.css.add(css);
  return `<div class="grid svelte-1rslq8u">${each(chunkedPhotoList, (uriList) => {
    return `${each(uriList, (photoUri) => {
      return `  <img class="pure-img grow svelte-1rslq8u"${add_attribute("src", photoUri, 0)} alt="">`;
    })}`;
  })} </div>`;
});
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function listPhotos(orientation) {
    const response = await supabase.storage.from("photos").list(orientation, { limit: 20, offset: 0 });
    if (!response.error) {
      return response.data;
    } else {
      console.log(response.error.message);
      throw new Error(response.error.message);
    }
  }
  async function getPhotoURIArray(orientation) {
    let arr = [];
    const photoList = await listPhotos(orientation);
    photoList.forEach((item) => {
      if (item.name.toUpperCase().includes(".JP")) {
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
  let photoURIs = fetchAllPhotoURIs();
  let showModal = false;
  let chosenPhotoURI;
  function openModal(uri) {
    chosenPhotoURI = uri;
    showModal = true;
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      openModal(chosenPhotoURI);
    }
    $$rendered = `<div class="content"><h1 data-svelte-h="svelte-1clfsxh">Photos</h1> ${validate_component(ImageModal, "ImageModal").$$render(
      $$result,
      { showModal, photoURI: chosenPhotoURI },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        },
        photoURI: ($$value) => {
          chosenPhotoURI = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <h3 data-svelte-h="svelte-1kiwilm">Loading...</h3> `;
      }
      return function(photoURIs2) {
        return ` ${validate_component(PhotoGrid, "PhotoGrid").$$render(
          $$result,
          {
            photoUriList: shuffleArray(photoURIs2),
            clickedPhotoUri: chosenPhotoURI
          },
          {
            clickedPhotoUri: ($$value) => {
              chosenPhotoURI = $$value;
              $$settled = false;
            }
          },
          {}
        )} `;
      }(__value);
    }(photoURIs)}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-YM_k9W4U.js.map
