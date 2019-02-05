<template>
  <panel title="SongsSearchPanel.vueHbk">
    hbkxxxxxx  {{ $store.state.isUserLoggedIn }}  {{ $store.state.counterhbkState }}  hbky
      <!--<a v-bind:href ="url">Link to Google</a>-->
      <!--<a href="www.google.com"> {{ google }} </a>-->
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
    ></v-text-field>
    <v-btn icon href="http://ibm.com" target="_blank">
      <v-icon>window</v-icon> ibm
    </v-btn>

    <v-btn icon href="/fooRoute" target="_blank">
      <v-icon>window</v-icon> Link Text
    </v-btn>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
