<template>
 <div id="app_root">
  <div id="content">
    <Sidebar></Sidebar>
    <div id="tools_wrapper">
      <router-view />
    </div>
  </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style lang="scss">
@import "/assets/scss/themeMixin.scss";
div, span, a {
  box-sizing: border-box;
}
#app_root {
  font-family: "Quicksand", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: $transition-all;
  @include bg_color($background-color-theme1);
}
#content {
  height: 680px;
  width: 1080px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
}
#tools_wrapper {
  width: 60%;
}
</style>
