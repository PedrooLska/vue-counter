<template>
  <div id="nav">
    <h1>{{ getCounter }}</h1>

    <button @click="incrementCounter">+1</button>
    <button @click="doubleCounter">x2</button>
    <button @click="resetCounter">Reset</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const counter = userCounterStore();

    const { getCounter } = storeToRefs(counter);
    const { incrementCounter, doubleCounter, resetCounter } = counter;

    return {
      getCounter,
      incrementCounter,
      doubleCounter,
      resetCounter,
    };
  },
});
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
