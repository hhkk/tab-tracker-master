<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      1 <songs-bookmarks />
      2 <recently-viewed-songs class="mt-2" />
      <!--3 <hk-test class="mt-2" />-->
      4 <songs-search-panel />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">

      <!-- maps to /client/src/components/Songs/UsToDo1.vue-->
      <!--5 <us-to-do-1 class="mt-2" />-->
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">

      <!-- maps to /client/src/components/Songs/UsToDo1.vue-->
      6 <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import HkTest from './HkTest'
import UsToDo1 from './UsToDo1'
import SongsService from '@/services/SongsService'
import UstodosService from '@/services/UstodosService'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs,
    HkTest,
    UsToDo1
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
    this.songs = (await UstodosService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
