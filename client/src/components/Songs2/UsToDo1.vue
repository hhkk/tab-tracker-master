<template>
  <panel title="UsToDo1.vueHbk copied from SongsPanel.vue">
    987987987a
    ustodo in ustodos in client/src/components/Songs2/UsToDo1.vue
    <v-btn
      slot="action"
      :to="{
        name: 'ustodos-create'
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
      class="ustodo"
      :key="ustodo.id">

      <v-layout>
        <v-flex xs6>
          <div class="ustodo-title">
            ustodo.sstitle:{{ustodo.ustodotitle}}
          </div>
          <div class="ustodo-artist">
            ustodo.artist:{{ustodo.artist}}
          </div>
          <div class="ustodo-genre">
            ustodo.genre:{{ustodo.genre}}
          </div>
          <div class="ustodo-genre">
            ustodo.id:{{ustodo.id}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'ustodo',
              params: {
                ustodoId: ustodo.id
              }
            }">
            Viewx
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
  .ustodo {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .ustodo-title {
    font-size: 30px;
  }

  .ustodo-artist {
    font-size: 24px;
  }

  .ustodo-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
