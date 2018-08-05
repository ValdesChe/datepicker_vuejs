<template>
  <div class="calendar"> 
    <div class="month">
      <ul>
        <li class="prev"><button class="calendar__prev calendar__nav" ></button></li>
        <li class="next"><button class="calendar__next calendar__nav" ></button></li>
        <li><span style="font-size:14px; "> {{year}} </span><br> <span style="font-size:18px;font-weight:bold">{{date_formated}}</span> </li>
      </ul>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-bind:key="day.index" >{{day}}</li>
    </ul>
    <ul class="days">
      <li v-for="i in month.getWeekStart()" v-bind:key="i"> </li>

      <li></li>
      <li></li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="active">10</span></li>
      <li>11</li>
    </ul>

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
      
      console.log(this.month.getDays());
      return this.date.format('YYYY')
    },
    date_formated(){
      return this.date.format('dddd DD MMM')
    }
  },
  methods:{
    showDatepicker(){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .calendar{
    width: 300px;
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
    padding: 7px 0px;
    background-color:#ddd;
  }

  .weekdays li {
    display: inline-block;
    width: 14%;
    color: #666;
    text-align: center;
  }

  /* Days (1-31) */
  .days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
  }

  .days li {
    list-style-type: none;
    display: inline-block;
    width: 13%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    clear: both;
    color: #777;
  }


  /* Highlight the "current" day */
  .days li .active {
    
    padding: 5px;
    background: #1abc9c;
    color: white !important
  }


  
    .calendar__nav{
        position: relative;
        top:50%;
        border:none;
        left: 10px;
        cursor: pointer;
        opacity: 0.4;
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
        right: 10px;
        left: auto;
        background-image: url(../assets/next.png)
    }

</style>
