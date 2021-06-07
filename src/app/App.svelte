<script lang="typescript">
  import Router, { RouteDefinition } from 'svelte-spa-router';
  import Theme from './theme/Theme.svelte';
  import Customize from './pages/customize/Customize.svelte';
  import View from './pages/view/View.svelte';
  import NotFound from './pages/notfound/NotFound.svelte';

  const routes: RouteDefinition = {
    '/customize/:option': Customize,
    '/view': View,
    '*': NotFound
  };
</script>

<Theme>
  <Router {routes} />
</Theme>
