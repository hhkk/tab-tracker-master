<template>
  <div id="Applrb2_OneOff">
    <v-app>
      <page-header />
      <main>
        App.vuehihk
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
// ======================== HEADER HBK
import PageHeader from '@/components/Header.vue'
export default {
  name: 'applrb2_Name1OneOff', // just a name - one off
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
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
