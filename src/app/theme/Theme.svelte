<style>
  @font-face {
    font-family: 'Segoe UI';
    font-weight: normal;
    src: url('../../assets/fonts/seguisb.ttf') format('truetype');
  }
  * {
    color: var(--color-slate-gray);
    font-family: 'Segoe UI';
  }
  :global(html, body) {
    height: 100%;
    width: 100%;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Segoe UI';
    background: var(--color-white);
  }
  :root {
    --color-green: #107c10;
    --color-light-green: #2ca243;
    --color-yellow-green: #77bb44;
    --color-slate-gray: #3a3a3a;
    --color-mid-gray: #6b6b6b;
    --color-light-gray: #c2c2c2;
    --color-white: #f1f1f1;
  }
</style>

<slot />
