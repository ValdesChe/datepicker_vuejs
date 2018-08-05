<template>
  <div id="app">
    <datepicker  valeur="2018-08-05" ></datepicker>
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
  font-family: 'Bree', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
