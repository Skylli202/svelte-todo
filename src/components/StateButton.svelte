<script>
  /**
   * @type {string} classList
   */
  export let classList
  export let onClick
	export let filter
</script>

<button
  type="button"
  class={classList}
  on:click={onClick}
	data-filter={filter}
>
  <slot />
</button>
