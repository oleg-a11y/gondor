<script lang="ts">
  import { slide } from "svelte/transition";
</script>

<div
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2"
>
  <div
    transition:slide={{ duration: 300, axis: "y" }}
    class="bg-slate-100 rounded-lg shadow-lg p-6 max-w-md w-full relative"
  >
    <slot />
  </div>
</div>
