<template>
  <div id="app">
    <button @click="toggle = !toggle">toggle me</button>
    <div v-annoying-background:orange="toggle">yolo</div>
  </div>
</template>

<script>
import { AnnoyingBackground } from "./scripts/directive.js";

export default {
  data() {
    return {
      toggle: false
    };
  },
  directives: {
    AnnoyingBackground
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
