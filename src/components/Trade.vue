<template>
  <div v-if="trade">
    <h1>Trade Details</h1>
    <div>
      <h1>{{ trade.name }}</h1>
      <p>City: {{ trade.city }}</p>
      <p>Address: {{ trade.address }}</p>
      <p>Email: {{ trade.email }}</p>
      <p>Phone: {{ trade.phone_number }}</p>
      <div v-if="trade.hours.length">
        <div v-for="(hour, i) in  trade.hours" :key="i">
          <span v-if="hour.day"><b>Open:</b> {{ hour.day}}</span>
          <span v-else>No opened for today</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Trade',
    computed: {
      trade() {
        return this.$store.state.trades.find(trade => trade._id == this.$route.params.id)
      }
    }
  }
</script>