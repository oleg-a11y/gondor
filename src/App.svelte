<script lang="ts">
  import { HOME_ROUTE } from "@/constants/routes";
  import HomePage from "@/pages/HomePage.svelte";
  import { Route, Router } from "svelte-routing";
</script>

<Router>
  <div class="bg-slate-100 h-screen flex flex-col gap-5">
    <Route path={HOME_ROUTE} component={HomePage} />
  </div>
</Router>
