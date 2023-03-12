<script>
  import StateButton from '../components/StateButton.svelte'

  export let filter

  /**
   * @param {PointerEvent} e
   */
  const handleStateButtonClick = (e) => {
    /**
     * @type {HTMLElement} clickedElement
     */
    const clickedElement = e.currentTarget

    /**
     * @type {HTMLElement} parentElement
     */
    const parentElement = clickedElement.parentElement

    parentElement.querySelectorAll('.active').forEach((element) => {
      element.classList.remove('active')
    })

    clickedElement.classList.add('active')
    
    filter = clickedElement.getAttribute('data-filter')
  }
</script>

<div
  class="btn-group mb-4"
  role="group"
>
  <StateButton
    filter={'all'}
    classList="btn btn-outline-primary{filter === 'all' ? ' active' : ''}"
    onClick={handleStateButtonClick}>Toutes</StateButton
  >
  <StateButton
    filter={'todo'}
    classList="btn btn-outline-primary{filter === 'todo' ? ' active' : ''}"
    onClick={handleStateButtonClick}>A faire</StateButton
  >
  <StateButton
    filter={'done'}
    classList="btn btn-outline-primary{filter === 'done' ? ' active' : ''}"
    onClick={handleStateButtonClick}>Faites</StateButton
  >
</div>
