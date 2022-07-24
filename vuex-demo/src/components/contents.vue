<template>
    <h2>{{ this.$store.state.message }}</h2>
    <h3>all todo </h3>
    <li v-for="todo in $store.state.todos" v-bind:key="todo.id">
        {{ todo }}
    </li>
    <h3>done todos is</h3>
    <li v-for="doneTodo in doneTodos" v-bind:key="doneTodo.id">
        {{ doneTodo }}
    </li>
    <p>count is {{ doneTodosCount }}</p>
    <p>id=2 todo is {{ getTodoById }}</p>
    <h2>Add ToDo</h2>
    <form @submit.prevent="addTodo">
        <input
            type="text"
            v-model="text"
        />
        <button>Add ToDo</button>
    </form>
    <h2>Add Todo by Actions</h2>
    <form @submit.prevent="addDoneTodo">
        <input
            type="integer"
            v-model="specific_id"
        />
        <button>Add ToDo by actions</button>
    </form>
</template>

<script>
import { mapGetters } from "vuex";

export default ({
    name: 'sampleContents',
    computed: {
        ...mapGetters({
            doneTodos: 'doneTodos',
            doneTodosCount: 'doneTodosCount',
        }),
        getTodoById () {
            return this.$store.getters.getTodoById(2);
        }
    },
    methods: {
        addTodo () {
            this.$store.commit('addTodo', {
                "id": this.$store.state.todos.length + 1,
                "text": this.text,
                "done": false
            });
            this.text = '';
        },
        addDoneTodo () {
            this.$store.dispatch('addTodoSpecifingId', this.specific_id)
        }
    }
})
</script>
