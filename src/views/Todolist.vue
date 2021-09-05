<template>
  <div class="Todolist">
    <ul :class="{ grab: list.length > 5 }" class="list" v-dragscroll="true">
        <li v-for="(item,index) in list" :key=index>
            <input class="select" type="checkbox" v-model="item.status">
            <span class="checkmark"></span>
            <span>{{item.content}}</span>
        </li>
    </ul>
    <input ref="ReadyAdd" v-model.trim="readyToAdd" class="add_input" type="text" placeholder="type something....">
    <div class="tools">
        <a href="#" @click.prevent="addTodo">
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span>ADD</span>
        </a>
        <a href="#" @click.prevent="removeSelected">
            <span class="icon"><i class="fas fa-times"></i></span>
            <span>Remove</span>
        </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Todolist',
  data () {
    return {
      date: '',
      list: [
        {
          content: 'misson1',
          status: false
        },
        {
          content: 'misson2',
          status: false
        },
        {
          content: 'misson3',
          status: false
        },
        {
          content: 'misson4',
          status: false
        }
      ],
      readyToAdd: ''
    }
  },
  methods: {
    addTodo () {
      if (this.readyToAdd) {
        this.list.push(
          {
            content: this.readyToAdd,
            status: false
          }
        )
        this.readyToAdd = ''
      } else {
        this.$refs.ReadyAdd.focus()
      }
    },
    removeSelected () {
      const newArray = [...this.list]
      const indexArray = []
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].status) {
          indexArray.push(i)
        }
      }
      indexArray.reverse()
      indexArray.forEach(item => {
        newArray.splice(item, 1)
      })
      this.list = newArray
    }
  }
}

</script>

<style scoped lang="scss">
@import "../assets/scss/themeMixin.scss";
.Todolist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 100%;
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 450px;
    overflow-y: auto;
  }
  .list.grab {
    cursor: pointer;
  }
  .list::-webkit-scrollbar {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1.5rem;
    margin-bottom: 25px;
    padding: 20px;
    transition: $transition-all;
    @include font_color($theme1-font-color);
    @include sec_bg_color($background-color-theme1-2ndbg);
    .select {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 20px;
      width: 20px;
      &:checked ~ .checkmark {
        background-color: rgb(30, 34, 83);
      }
      &:checked ~ .checkmark::after {
        display: block;
      }
    }
    .checkmark {
      pointer-events: none;
      position: relative;
      display: inline-block;
      margin-right: 15px;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      &::after {
        position: absolute;
        content: "";
        display: none;
        left: 7px;
        top: 3px;
        width: 4px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
  .tools {
    display: flex;
    a {
      padding: 15px;
      width: 40%;
      margin: 0 5%;
      border-radius: 20px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      transition: $transition-all;
      @include btn_font_color($theme1-btn-font-color);
      @include btn_border($theme1-btn-border);
      span {
        font-size: 1.2rem;
      }
      .icon {
        margin-right: 10px;
      }
      &:hover {
        @include btn_hover_font_color($theme1-btn-hover-font-color);
        @include btn_hover_bg($theme1-btn-hover-bg);
      }
    }
  }
  .add_input {
    font-size: 1.5rem;
    padding: 10px;
  }
}
</style>
