<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
        header.vuehbk
      </router-link>
    </v-toolbar-title>
    {{"hbkHeader.vue"}}

    <v-text-field
      label="searchhbk"
      v-model="searchhbk"
    ></v-text-field>

    <v-btn
      flat
      dark
      @click="upcounterhbk">
      upcou
    </v-btn>

{{counterhbk}}
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>


      <v-btn
        v-if="!$store.state.hbkstate"
        flat
        dark
        :to="{
          name: 'login'
        }">
        hbklogin1
      </v-btn>

      <v-btn
        v-if="$store.state.hbkstate"
        flat
        dark
        :to="{
          name: 'login'
        }">
        hbklogin2
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      x  {{ $store.state.isUserLoggedIn }}  {{ $store.state.counterhbkState }}  y
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      counterhbk: 2,
      counterhbk2: 6,
      searchhbk: 'xhbk'
    }
  },
  methods: {
    logout () {
      this.$store.state.hbkstate = true
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    },
    upcounterhbk () {
      // this.$store.dispatch('setcounterhbkState')

      // works console.log('localStorage.vuex:' + localStorage.vuex)
      // console.log('this.searchhbk:' + this.searchhbk)
      // console.log('this.counterhbk:' + this.counterhbk)
      // console.log('this.$store.state.counterhbkState:' + this.$store.state.counterhbkState)
      // this.counterhbk = this.counterhbk + parseInt(this.searchhbk, 10)
      // this.counterhbk = this.counterhbk + 1
      // this.$store.state.counterhbkState = this.$store.state.counterhbkState + 1
      // this.$store.dispatch('setcounterhbkState', 6)
      // this.$store.mutations.setcounterhbkState()
      // this.counterhbkState++
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
