<template>
  <div>
    <h1>Saloon App</h1>
    <div v-if="! loading" class="app-container">
      <router-link class="trade-link"  :to="`/${trade._id}`" v-for="(trade, i) in trades" :key="i">
        <span><div class="status" :class="{ 'is-active': trade.is_active}"></div>{{ trade.name }}</span>
      </router-link>
      <h1 v-if="error">An error occured</h1>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        route: 'trades'
      }
    },
    mounted() {
      this.$store.dispatch('getTrades', this.route)
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      },
      trades() {
        return this.$store.getters.trades
      },
      error() {
        return this.$store.getters.error
      },
    }
  }
</script>

<style scoped>
  .app-container {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .trade-link {
    padding: 24px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ccc;
    display: inline-block;
  }
  .is-active {
    background: green;
  }
</style>
