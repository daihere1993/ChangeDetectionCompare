<template>
  <div
    :class="{
      goodresults: status.searchResults.options > 3,
      weakresults: status.searchResults.options >= 1 && status.searchResults.options <= 3,
      badresults: status.searchResults.options == 0,
      searching: status.isSearching
    }"
    >
    <div v-if="showSpinner()">
      ...
    </div>
    <div v-if="showHour()" class="time">
      {{hour}}:00
    </div>
    <div v-if="showSearchResults()" @click="cellClicked()">
      <div>{{status.searchResults.options}}</div>
      <div class="result-label">results</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calendarCell',
    data() {
      return {
        status: {
          isSearching: false,
          searchResults: {
            options: null
          }
        }
      }
    },
    props: ['hour', 'search'],
    mounted() {
      this.search.subscribe(() => {
        this.cellClicked();
      })
    },
    methods: {
      cellClicked() {
        this.status.searchResults.options = null;
        this.status.isSearching = true;
        // simulate AJAX request
        setTimeout(() => {
          this.status.isSearching = false;
          this.status.searchResults = {
            options: Math.floor(Math.random() * 5)
          };
        }, 0);
      },
      showSpinner() {
        return this.status.isSearching;
      },
      showHour() {
        return !this.status.isSearching && this.status.searchResults.options === null;
      },
      showSearchResults() {
        return this.status.searchResults.options !== null;
      }
    },
  }
</script>

<style>
  .searching {
  color: blue;
  font-size: 10px;
  padding-top: 6px;
}
.goodresults {
  color: #090;
  background: #efffef;
}
.result-label {
  font-size: 8px;
}
.weakresults {
  color: orange;
  background: #ffffef;
}
.badresults {
  color: red;
  background: #ffefef;
}
</style>