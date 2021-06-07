<header class="header">
  <h1 class="title">Xbox Controller Designer</h1>
  <a class="button" href="#/view">Save & finish</a>
</header>

<style>
  .header {
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 2px solid var(--color-light-gray);
  }
  .title {
    font-size: 30px;
  }
  .button {
    background: var(--color-green);
    color: var(--color-white);
    font-family: inherit;
    font-size: 18px;
    padding: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 4px 4px var(--color-mid-gray);
    text-decoration: none;
  }
  .button:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    border-top: 20px solid var(--color-white);
    border-right: 20px solid transparent;
    width: 0;
  }
</style>
