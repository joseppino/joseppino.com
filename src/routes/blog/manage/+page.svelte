<script lang="ts">
  import { supabase } from "$lib/supabaseClient";
import type { PageData } from "../$types";

  export let data: PageData;
  $: blogPosts = data.data;
    
  async function deletePost(uuid: string) {
    const response = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', uuid);
    return response;
  }
</script>

<div class="t-wrapper">
  <table class="pure-table">
    <thead>
      <tr>
        <th>UUID</th>
        <th>Date</th>
        <th>title</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#if blogPosts}
        {#each blogPosts as blogPost}
          <tr>
            <td>
              {blogPost.id}
            </td>
            <td>
              {new Date(blogPost.created_at).toLocaleDateString()}
            </td>
            <td>
              {blogPost.title}
            </td>
            <td>
              <button type="button" class="pure-button" on:click={async () => { 
                const res = await deletePost(blogPost.id);
                if(!res.error && blogPosts) {
                  blogPosts = blogPosts.filter(post => {
                    return post !== blogPost;
                  })
                }
              }}
              >Delete</button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>

<style>
  .t-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
</style>