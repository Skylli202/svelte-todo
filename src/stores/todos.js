import { writable } from 'svelte/store';

/**
 * @typedef {Object} Todo
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Initialize the todos store
 * 
 * @param {string} url
 */
async function createTodosWritable(url) {
    /**
     * @type {Todo[]} jsonResponse
     */
    const jsonResponse = await (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')).json()
    return writable(jsonResponse);
}

export async function init() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const json = await response.json()
    todos.set(json)
}
/**
 * @type {Todo[]}
 */
let initialValue = []
export const todos = writable(initialValue)