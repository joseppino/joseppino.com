<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h2>New Blog Post</h2>
<form class="pure-form" method="POST">
  <fieldset class="pure-group">
      <input type="text" name="title" class="pure-input-1-2" placeholder="A title" />
      <textarea class="pure-input-1-2" name="body" placeholder="Write some markdown here..."></textarea>
  </fieldset>
  <button type="submit" class="pure-button pure-input-1-2 pure-button-primary">Post</button>
</form>

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea {
    min-height: 200px;
  }
</style>