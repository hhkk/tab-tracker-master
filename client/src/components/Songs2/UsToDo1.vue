<template>
  <panel title="UsToDo1.vueHbk copied from SongsPanel.vue">
    987987987
    ustodo in ustodos in client/src/components/Songs2/UsToDo1.vue
    <v-btn
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div
      v-for="ustodo in ustodos"
      class="song5"
      :key="ustodo.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ustodo.title}}
          </div>
          <div class="song-artist">
            {{ustodo.artist}}
          </div>
          <div class="song-genre">
            {{ustodo.genre}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'song',
              params: {
                songId: ustodo.id
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="ustodo.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
  import UsToDo1Service from '@/services/UsToDo1Service'

  export default {
    data () {
      return {
        ustodos: null
      }
    },
    watch: {
      '$route.query.search': {
        immediate: true,
        async handler (value) {
          this.ustodos = (await UsToDo1Service.index(value)).data
        }
      }
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
