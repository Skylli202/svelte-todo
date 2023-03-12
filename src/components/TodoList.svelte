<script>
  import Todo from './Todo.svelte'
  import { todos } from '../stores/todos.js'

  export let filter
</script>

<ul class="list-group">
  {#each $todos as todo}
    {#if (filter === 'todo' && !todo.completed) || (filter === 'done' && todo.completed ) || filter === 'all'}
      <Todo {...todo} />
    {/if}
  {/each}
</ul>
