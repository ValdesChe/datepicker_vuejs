<template>
  <div class="calendar"> 
    <div class="month">
      <ul>
        <li class="prev"><button @click="prevMonth" class="calendar__prev calendar__nav" ></button></li>
        <li class="next"><button @click="nextMonth" class="calendar__next calendar__nav" ></button></li>
        <li><span style="font-size:14px; "> {{year}} </span><br> <span style="font-size:18px;font-weight:bold">{{date_formated}}</span> </li>
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
      this.date = day.clone()
    },
    cancelModif(){

    },
    saveModif(){

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
<style scoped>
  
  .calendar{
    width: 300px;
    box-shadow: rgba(0, 1, 1 , 0.4) -1px 0px 12px;
    display:flex;
    position: absolute;
    left: auto;
    top: 100%;
    flex-direction: column;
  }

  ul {list-style-type: none;}

  /* Month header */
  .month {
    padding: 20px 5px;
    background: #1abc9c;
    text-align: center;
  }

 /* Month list */
  .month ul {
    margin: 0;
    padding: 0;
  }

  .month ul li {
    color: white;
    font-size: 20px;
    letter-spacing: 3px;
  }

  /* Previous button inside month header */
  .month .prev {
    float: left;
    padding-top: 10px;
  }

  /* Next button */
  .month .next {
    float: right;
    padding-top: 10px;
  }

  /* Weekdays (Mon-Sun) */
  .weekdays {
    margin: 0;
   /*  padding: 10px 0; */
    width: 100%;
    padding: 10px 0px;
    background-color:#ddd;
  }

  .weekdays li {
    display: inline-block;
    width: 14.2%;
    color: #666;
  }

  /* Days (1-31) */
  .days {
    padding: 10px 0;
    background: #eee;
    cursor: pointer;
    margin: 0;
  }

  .days li {
    position: relative;
    list-style-type: none;
    display: inline-block;
    width: 14%;
    text-align: center;
    margin-bottom: 10px;
    font-size:13px;
    transition: all 1s cubic-bezier(0.53);
  }
  .days li .days_effect {
    position: absolute;
    top: -4px;
    left: 8px;
    width:20px;
    height: 20px;
    padding:3px;
    border-radius: 50%;
    background-color: rgb(0, 151, 167 );
    transition: all 1s cubic-bezier(0.53);
    transform:scale(0);
    opacity: 0;
    z-index: 10;
  }
  .days li .days_text {
    color: rgb(0, 100, 100) !important; 
    opacity: 1;
    z-index: 150;
    
    transition: all 2s cubic-bezier(0.53);
  } 
  .days li:hover .days_text {
    color: blue!important;/* 
    text-shadow: #a2ce 0px 1px 0px; */
    z-index: 1000 !important;
    font-weight: 100;
  }
  .days li:hover .days_effect {
    transform: scale(1);
    opacity: 0.7 !important;
    z-index: 200 !important;
  }
  /* 
  .days li.selected .days_text {
    color: lightcoral !important; 
    opacity: 1;
    z-index: 15000 !important;
  } 
  .days li.selected .days_effect {
    transform: scale(1);
    opacity: 0.8;
    z-index: 1 !important;
  }  */

  /* Highlight the "current" day */
  .days li .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
  }

  /* Highlight the "current" day */
  .days li:hover .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
  }
  .calendar__nav{
    position: relative;
    top:50%;
    border:none;
    left: 5px;
    cursor: pointer;
    opacity: 0.4;
    -webkit-appearance: none;
    background: url(../assets/prev.png) 40px 40px;
    width:40px;
        height: 40px;
    }
    
    .calendar__nav:hover{
        opacity: 0.9;
    }

    .calendar__prev{
        
    }

    .calendar__next{
        right: 5px;
        left: auto;
        background-image: url(../assets/next.png)
    }
  
  .button{
    padding: 10px;
    line-height: 16px;
    -webkit-appearance: none;
    border:none;
    float: right;
    color:white;
    background: #ddd;
  }

  .cancel{
    border-left: 2px solid tan;
  }

  .cancel:hover{
    background: orange;
  }

  .save:hover{
    background: greenyellow;  
  }
</style>
