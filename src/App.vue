<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        transitionName:"slide-left",
      };
    },
  };
</script>

<style scoped>
</style>
