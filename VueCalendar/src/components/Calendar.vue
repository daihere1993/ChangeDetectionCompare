<template>
  <div class="calendar">
    <button class="btn" v-if="!isLoaded" @click="load()">Load</button>
    <button class="btn" v-if="isLoaded" @click="searchAll()">Search Whole Month</button>
    <table v-if="isLoaded">
      <tr>
        <th class="day-header" v-for="day in days">{{day}}</th>
      </tr>
      <tr v-for="hour in hours">
        <td class="hour-cell" v-for="day in days">
          <calendar-cell :search="search$" :hour="hour"></calendar-cell>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import CalendarCell from './CalendarCell';
  import * as _ from 'underscore';
  import { Subject } from 'rxjs/Subject';

  export default {
    name: 'calendar',
    components: {
      CalendarCell
    },
    data() {
      return {
        days: [],
        hours: [],
        isLoaded: false,
        search$: new Subject()
      }
    },
    created() {
      const DAYS = _.range(1, 32).map((day) => `Oct ${day}`);
      this.days = DAYS;
      this.hours = _.range(24);
    },
    methods: {
      load() {
        this.isLoaded = true;
      },
      searchAll() {
        this.search$.next();
      }
    }
  }
</script>

<style>
  table {
  border-right: 2px solid gray;
  border-spacing: 0;
  border-collapse: collapse;
}
.day-header {
  border: 1px solid gray;
  white-space: nowrap;
}
.day-header:hover {
  cursor: pointer;
}
.hour-cell {
  width: 120px;
  text-align: center;
  border-left: 1px solid gray;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  height: 30px;
  padding: 0;
}
.hour-cell > div {
  height: 100%;
}
.hour-cell .time {
  padding-top: 10px;
}
.hour-cell .searching {
  color: blue;
  font-size: 12px;
  padding-top: 12px;
}
.hour-cell .good-results {
  color: #090;
  background: #efffef;
}
.hour-cell .weak-results {
  color: orange;
  background: #ffffef;
}
.hour-cell .bad-results {
  color: red;
  background: #ffefef;
}
</style>