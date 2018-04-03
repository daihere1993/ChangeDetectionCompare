<template>
  <div id="app">
    <h1>Vue Performance Demo</h1>
    <calendar></calendar>
  </div>
</template>

<script>
import Calendar from './components/Calendar';
export default {
  name: 'App',
  components: {
    Calendar
  }
}
</script>
