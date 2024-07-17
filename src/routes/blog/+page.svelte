<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const blogPosts = data.data;
</script>

<main>
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
</main>

<style>
  main {
    width: 900px;
    height: 100vh;
    background-color: #001D3D;
  }
</style>