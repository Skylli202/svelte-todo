<script>
  import CreateTodoForm from './components/CreateTodoForm.svelte'
  import TodoStateButtonList from './components/TodoStateButtonList.svelte'
  import TodoList from './components/TodoList.svelte'
  import { onMount } from 'svelte'
  import { init } from './stores/todos.js'

  let todoFilter = 'all'

  onMount(async () => {
    try {
      await init()
    } catch (err) {
      console.error(err)
    }
  })
</script>

<section
  class="container pt-5"
  id="todolist"
>
  <CreateTodoForm placeholder="Something to do.." />
  <main>
    <TodoStateButtonList bind:filter={todoFilter} />
    <TodoList filter={todoFilter} />
  </main>
</section>
