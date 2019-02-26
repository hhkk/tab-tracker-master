<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <ustodo-metadata :ustodo="ustodo" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="ustodo.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :ustodo="ustodo" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :ustodo="ustodo" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Lyrics from './Lyrics'
import Tab from './Tab'
import UstodoMetadata from './UstodoMetadata'
import YouTube from './YouTube'
import UsToDo1Service from '@/services/UsToDo1Service'
import UstodoHistoryService from '@/services/UstodoHistoryService'

export default {
  data () {
    return {
      ustodo: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const ustodoId = this.route.params.ustodoId
    this.ustodo = (await UsToDo1Service.show(ustodoId)).data

    if (this.isUserLoggedIn) {
      UstodoHistoryService.post({
        ustodoId: ustodoId
      })
    }
  },
  components: {
    UstodoMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
