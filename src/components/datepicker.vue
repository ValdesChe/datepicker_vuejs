<template>
  <div>
    <input type="text" @focus="showDatepicker" @keyup.esc="hideDatepicker" id="">
    <calendar v-show="active"  ></calendar>
  </div>
</template>

<script>

import calendar from './calendar'

export default {
  name: 'datepicker',
  components:{calendar},
  data () {
    return {
      active:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    showDatepicker(){
      this.active = true
    },
    hideDatepicker(){
      this.active = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
