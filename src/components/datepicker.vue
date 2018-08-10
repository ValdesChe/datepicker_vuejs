<template>
  <div class="datepicker">
    <input type="text" @focus="showDatepicker" :value="date_formated" @keyup.esc="hideDatepicker"  id="">
    <calendar v-show="active" :date='date' v-on:change="changeDate"  v-on:clickDate="preChange"></calendar>
  </div>
</template>

<script>

import calendar from './calendar'
import moment from 'moment'
moment.locale('fr')

export default {
  name: 'datepicker',
  props:{
    //valeur:{type: String, required: true},
    valeur:{type: String, required: false , default:moment().format('YYYY-MM-DD')},
    format:{type: String, default:'YYYY-MM-DD'},
  },
  computed:{
    date_formated(){
      //return moment(this.valeur).format(this.format)
      return this.date.format(this.format)
    },
    date_raw(){
      return this.date.format(this.format)
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
    },
    preChange(date){
      this.date = date  
    },
    // saving in input field
    changeDate(date){
      console.log(this.date);
      this.date = moment(date.format(this.format),this.format)
      console.log(this.date);
      console.log(date.format(this.format));
    },
    saved(date){
      alert(date.format(this.format))
      this.date = date.format(this.format)
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
