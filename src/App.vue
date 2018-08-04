<template>
  <div id="app">
    <datepicker/>
  </div>
</template>

<script>
import datepicker from './components/datepicker'

export default {
  name: 'App',
  components: {
    datepicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
