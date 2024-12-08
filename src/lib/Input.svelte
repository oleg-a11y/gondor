<script lang="ts">
  export let label: string = "Заголовок";
  export let type: string = "text";
  export let placeholder: string = "Плейсхолдер";
  export let value: string | number | null;
</script>

<div class="w-full">
  <div class="block text-sm font-medium text-gray-600">{label}</div>
  <input
    {type}
    bind:value
    class="mt-2 border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    {placeholder}
  />
</div>
