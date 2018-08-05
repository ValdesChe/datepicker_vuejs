<template>
  <div class="calendar"> 
    <div class="month">
      <ul>
        <li class="prev"><button @click="isSelected(15)" class="calendar__prev calendar__nav" ></button></li>
        <li class="next"><button class="calendar__next calendar__nav" ></button></li>
        <li><span style="font-size:14px; "> {{year}} </span><br> <span style="font-size:18px;font-weight:bold">{{date_formated}}</span> </li>
      </ul>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-bind:key="day.index" >{{day}}</li>
    </ul>
    <ul class="days">
      <li v-for="i in month.getWeekStart()" v-bind:key="i+'01'"> </li>
      <li v-for="day in month.getDays()" @click="selectionOf(day)" v-bind:key="day+'0'" :class="{selected : isSelected(day)}" class="day_elt" >
        <span class="days_effect"></span>
        <span class="days_text"> {{day.format('D')}} </span>
      </li>
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
      console.log(day)
      this.date = day.clone()
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
    padding: 7px 0px;
    background-color:#ddd;
  }

  .weekdays li {
    display: inline-block;
    width: 14%;
    color: #666;
  }

  /* Days (1-31) */
  .days {
    padding: 10px 0;
    background: #eee;
    cursor: pointer;
    margin: 0;
    text-align: center;
  }

  .days li {
    position: relative;
    list-style-type: none;
    display: inline-block;
    width: 13.5%;
    text-align: center;
    margin-bottom: 15px;
    font-size:13px;
    transition: all 500ms cubic-bezier(0.23);
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
    transition: all 500ms cubic-bezier(0.23);
    transform:scale(0);
    opacity: 0;
  }

  
  /* Hi hover */
  .days li:hover .days_effect {
    transform: scale(1);
    opacity: 1;
  }

  .days li.selected{
    color: white;
    z-index:1000;
  }

  .days li.selected .days_effect {
    transform: scale(1);
    opacity: 1;
    z-index: 15;
  } 

  .days li:hover .days_text {
    color: white;
    font-weight:bold;
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
        left: 5px;
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
        right: 5px;
        left: auto;
        background-image: url(../assets/next.png)
    }

</style>
