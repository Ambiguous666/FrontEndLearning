<template>
  <h1>App 根组件</h1>
  <hr>
  <todo-input @add="onAddNewTask"></todo-input>
  <todo-list :list="tasklist" class="mt-2"></todo-list>
  <todo-button v-model:active="activeBtnIndex"></todo-button>
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
        { id:1, task: '周一早上9点开会', done: false },
        { id:2, task: '周一晚上8点聚餐', done: false },
        { id:3, task: '准备周三上午的演讲稿', done: true },
      ],
      nextId:4,
      activeBtnIndex:0,
    }
  },
  methods:{
    onAddNewTask(taskname){
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false
      })
      this.nextId++
    }
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  computed: {
    tasklist(){
      switch(this.activeBtnIndex){
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x =>x.done===true)
        case 2:
          return this.todolist.filter(x =>x.done !== true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>