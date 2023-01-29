<template>
  <div>
    <h1>App 根组件</h1>
    <todo-input @add="onAddNewTask"></todo-input>
    <todo-list :list="tasklist" class="mt-2"></todo-list>
    <todo-button v-model:active="activeBtnIndex"></todo-button>
  </div>
</template>

<script>
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-input/TodoInput.vue'
import TodoButton from './components/todo-button/TodoButton.vue'
export default {
  name: 'MyApp',
  data() {
    return {
      todolist: [
        { id:1, task: '周一上午9点开会', done: false },
        { id:2, task: '周三下午三点喝咖啡', done: false },
        { id:3, task: '周二晚上8点聚餐', done: true },
      ],
      nextId : 4,
      activeBtnIndex: 0,
    }
  },
  methods: {
    onAddNewTask(taskname) {
      this.todolist.push({
        id : this.nextId,
        task: taskname,
        done: false
      })
      this.nextId ++
    },
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  computed: {
    tasklist() {
      switch (this.activeBtnIndex){
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x=>x.done)
        case 2:
          return this.todolist.filter(x=>!x.done)
      }
    },
  },
}
</script>

<style lang="less" scoped>

</style>