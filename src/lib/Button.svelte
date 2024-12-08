<script lang="ts">
  export let isDisabled: boolean | undefined = undefined;
  export let variant: "primary" | "secondary" | "gray" = "primary";
  export let onClick: () => void;

  const getButtonClasses = () => {
    if (isDisabled) {
      return "bg-gray-200 text-gray-400 cursor-not-allowed";
    }
    switch (variant) {
      case "primary":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "secondary":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "gray":
        return "bg-gray-200 hover:bg-gray-300 text-gray-500";
      default:
        return "";
    }
  };
</script>

<button
  class={`transition duration-300 rounded w-full py-2 px-2 flex justify-center ${getButtonClasses()}`}
  disabled={isDisabled}
  on:click={onClick}
>
  <slot />
</button>
