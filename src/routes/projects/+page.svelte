<h1>Projects</h1>

<p>Most of my software projects can be found <a href="https://github.com/joseppino?tab=repositories">here</a></p>  

<div class="project-items-container">
  <ul>
    <li>
        <div class="project-item">
          <span><a href="https://flaggle.joseppino.com">Flaggle</a>🏴‍☠️</span>
          <p>A simple flag guessing game made with SvelteKit</p>
        </div>
    </li>
    <!-- <li>
      <div class="project-item">
        <span><a href="https://flaggle.joseppino.com">Project 2</a>🏴‍☠️</span>
        <p>Another project</p>
        </div>
    </li> -->
  </ul>
</div>

<style>
  .project-items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-item {
    width: 300px;
    margin: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: var(--colour3);
    border: 1px inset var(--colour1);
    box-shadow: -3px 3px 10px var(--colour1);
  }

  .project-item:hover {
    box-shadow: -3px 3px 10px var(--colour3);
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
</style>