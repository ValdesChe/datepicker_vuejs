<template>
  <div class="calendar"> 
    <div class="month">
      <ul>
        <li class="prev"><button >&#10094;</button></li>
        <li class="next"><button >&#10095;</button></li>
        <li>August<br><span style="font-size:18px">2017</span></li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>
    <ul class="days">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>8</li>
      <li>9</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="active">10</span></li>
      <li>11</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'calendar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    showDatepicker(){
      alert("some") 
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
    text-transform: uppercase;
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
    width: 13%;
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
    background: pink; 
    color: #777;
  }

  /* Highlight the "current" day */
  .days li .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
  }
</style>
