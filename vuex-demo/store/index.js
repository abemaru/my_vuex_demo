import { createStore} from "vuex";

export default createStore({
    state: {
        message: 'Hello Vuex!',
        todos: [
            {id: 1, text: 'Learn Vuex', done: false},
            {id: 2, text: 'Learn Vue.js', done: true},
            {id: 3, text: 'Learn Python', done: true},
            {id: 4, text: 'Learn Node.js', done: false},
            {id: 5, text: 'Learn Julia', done: true}
        ]
    },
    getters: {
        doneTodos (state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount (state, getters) {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    },
    mutations: {
        addTodo (state, todo) {
            state.todos.push( todo );
        }
    },
    actions: {
        addTodoSpecifingId ({commit}, number) {
            commit('addTodo', {id: number, text: 'Learn Linux', done: false});
        }
    }
});