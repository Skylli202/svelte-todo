<script>
  import { todos } from '../stores/todos.js'

  export let placeholder = ''
  /**
   * @param {SubmitEvent} e
   */
  const onSubmit = (e) => {
    /**
     * @type {HTMLFormElement} form
     */
    const form = e.submitter.parentElement
    const formData = new FormData(form)
    const todo = {
      completed: false,
      title: formData.get('title'),
      id: new Date().getMilliseconds(),
      userId: undefined
    }
    todos.update((n) => {
      n.push(todo)
      return n
    })
    form.reset()
  }
</script>

<form
  class="d-flex pb-4"
  on:submit|preventDefault={onSubmit}
>
  <input
    type="text"
    name="title"
    class="form-control me-2"
    required
    {placeholder}
  />
  <button class="btn btn-primary">Ajouter</button>
</form>
