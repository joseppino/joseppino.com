<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const blogPosts = data.data;
</script>

<div class="content">
  <h1>Blog</h1>
  {#if blogPosts}
    <hr>
    {#each blogPosts as blogPost}  
      <div class="posts-list">
        <p>{new Date(blogPost.created_at).toLocaleDateString()}</p>
        <a href={`/blog/posts/${blogPost.id}`}>{blogPost.title}</a>
      </div>
      <hr>
    {/each}
  {/if}
</div>

<style>
  /* .content {
    width: 1200px;
    max-width: 100vw;
    height: 100vh;
    background-color: #001D3D;
  } */

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>