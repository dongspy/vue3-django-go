<template>
    <div class="tasks_container">
        <div class="tasks_content">
            <h1>Tasks</h1>
            <ul class="tasks_list">
                <li v-for="task in tasks" :key="task.id">
                    <h2>{{ task.name }}</h2>
                    <p>{{ task.name }}</p>
                    <button @click="toggleTask(task)">
                        {{ task.completed ? 'Undo' : 'Complete' }}
                    </button>
                    <button @click="deleteTask(task)">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                // tasks
                tasks: [{"name": "aa"}]
            }
        },
        methods: {
            async getData() {
                try {
                    // fetch tasks
                    console.log("loading tasks");
                    const response = await axios.get('http://127.0.0.1:8000/categories/');
                    // set the data returned as tasks
                    this.tasks = response.data; 
                } catch (error) {
                    // log the error
                    console.log(error);
                }
            },
        },
        created() {
            console.log("tasks created");
            // Fetch tasks on page load
            this.getData();
        }
    }
</script>