<script>
  import { todos } from '../stores/todos.js'

  /**
   * @type {number} id
   */
  export let id

  $: computedId = `todo-${id}`

  /**
   * @type {string} title
   */
  export let title

  /**
   * @type {boolean} completed
   */
  export let completed

  /**
   * @type {string} trashIcon
   */
  export let trashIcon = 'bi-trash'

  const completedClick = (e) => {
    todos.update((n) => {
      return n.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    })
  }

  /**
   *
   * @param {PointerEvent} e
   */
  const trashClick = (e) => {
    console.log('trashclick')
    todos.update((n) => n.filter((todo) => todo.id !== id))
  }
</script>

<li class="todo list-group-item d-flex align-items-center">
  <input
    type="checkbox"
    class="form-check-input"
    id={computedId}
    bind:checked={completed}
    on:click={completedClick}
  />
  <label
    for={computedId}
    class="ms-2 form-check-label">{title}</label
  >
  <label
    for=""
    class="ms-auto btn btn-danger btn-sm"
  >
    <i
      class={trashIcon}
      on:click={trashClick}
      on:keydown={trashClick}
    />
  </label>
</li>
