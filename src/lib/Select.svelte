<script lang="ts">
  export let label: string = "Заголовок";
  export let options: { value: string; text: string }[];
  export let value: string;
</script>

<div class="w-full">
  <div class="block text-sm font-medium text-gray-600">{label}</div>
  <select
    bind:value
    class="mt-2 border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {#each options as option}
      <option value={option.text}>{option.text}</option>
    {/each}
  </select>
</div>
