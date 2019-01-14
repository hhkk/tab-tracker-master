<template>
  <div id="appHbk">
    <v-app>
      <page-header />
      <main>
        AppHbk.vue
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header2.vue'

export default {
  name: 'appHbk',
  components: {
    PageHeader
  }
}
</script>

<style>
#appHbk {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert {
  color: red;
}
</style>
