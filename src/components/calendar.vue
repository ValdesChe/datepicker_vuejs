<template>
  <div class="calendar">

    <div class="month">
      <div class="actual_date">
        <span style="font-size:20px;font-weight:bold;color:white;">{{year}}</span><br>
        <span style="font-size:16px;color:white;">{{date_formated}} </span><br>
      </div>
      <ul>
        <li class="prev">
          <button @click="prevMonth" class="calendar__prev calendar__nav" >
            <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
						</svg>
          </button>
        </li>
        
        <li class="current__month"><span style="font-size:16px; "> {{month.getFormated()}} </span> </li>
      
        <li class="next">
          <button @click="nextMonth" class="calendar__next calendar__nav" >
            <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
						</svg>
          </button>
        </li>
      </ul>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-bind:key="day.index" >{{day}}</li>
    </ul>
    <ul class="days">
      <li v-for="i in month.getWeekStart()" v-bind:key="i+'01'"> </li>
      <li v-for="day in month.getDays()" @click="selectionOf(day)" v-bind:key="day+'0'" >
        <span class="days_effect"></span>
        <span class="days_text" :class="{active : isSelected(day)}"> {{day.format('D')}} </span>
      </li>
    </ul>
    <div class="footer">
       <button @click="cancelModif" class="button cancel">Cancel</button>
       <button @click="saveModif" class="button save">Valider</button>
    </div>

  </div>
</template>

<script>

import Month from './../modules/Month.js';
export default {
  name: 'calendar',
  props:['date'],
  data () {
    return {
      months: ['Janvier', 'Fevrier' , 'Mars' , 'Avril' , 'Mai' , 'Juin' , 'Juillet' ],
      days: ['Lun', 'Mar' , 'Mer' , 'Jeu' , 'Ven' , 'Sam' , 'Dim' ],
      month: new Month(this.date.month() , this.date.year())
    }
  },
  computed:{
    year(){
      return this.date.format('YYYY')
    },
    date_formated(){
      //console.log(this.date.format('dddd DD MMM'));
      return this.date.format('dddd DD MMM')
    }
  },
  methods:{
    isSelected(day){
      return this.date.unix() === day.unix()
    },
    selectionOf(day){
      this.$emit('clickDate',day.clone())
      //this.date = day.clone()
    },
    cancelModif(){

    },
    saveModif(){
      this.$emit('save',this.date)
    },
    nextMonth(){
      let month  = this.month.month
      let year  = this.month.year
      
      month++
      if(month > 11){
        month = 0
        year++
      }
      this.month = new Month(month,year)
    },
    prevMonth(){
      let month  = this.month.month
      let year  = this.month.year
      
      month--
      if(month < 0){
        month = 11
        year--
      }
      
      this.month = new Month(month,year)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  @import './../assets/style/calendrier.css';
</style>
