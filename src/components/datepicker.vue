<template>
  <div class="datepicker">
    <input type="text" @focus="showDatepicker" :value="date_formated" @keyup.esc="hideDatepicker"  id="">
    <calendar v-show="active" v-bind:date='date' ></calendar>
  </div>
</template>

<script>

import calendar from './calendar'
import moment from 'moment'
moment.locale('fr')

export default {
  name: 'datepicker',
  props:{
    valeur:{type: String, required: true},
    format:{type: String, default:'YYYY-MM-DD'},
  },
  computed:{
    date_formated(){
      return moment(this.valeur).format(this.format)
    }
  },
  components:{calendar},
  data () {
    return {
      active:false,
      date : moment(this.valeur , 'YYYY-MM-DD')
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
  .datepicker{
    position:relative;
  }

</style>
