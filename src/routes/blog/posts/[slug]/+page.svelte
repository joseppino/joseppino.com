<script lang="ts">
  import { marked } from "marked";
  import type { PageData } from "./$types";

  export let data: PageData;

  let blogPost: any;
  let parsedBody: any;
  if(data.data) { 
    blogPost = data.data[0]
    parsedBody = marked.parse(blogPost.body);
  }
  console.log(blogPost);
  
</script>

{#if blogPost}
  <h1>{blogPost.title}</h1>
  <div class="content" contenteditable="false"
  bind:innerHTML={parsedBody}></div>
{:else}
  <h2>Nothing to see here...</h2>
{/if}

<style>
  .content {
    display: block;
    text-align: start; 
    margin: 10px;
  }
</style>