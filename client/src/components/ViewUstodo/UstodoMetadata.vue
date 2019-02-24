<template>
  <panel title="Ustodo Metadata 3">
    <v-layout>
      <v-flex xs6>
        <div class="ustodo-title">
          titlexy: {{ustodo.ustodotitle}}
        </div>

        <div class="ustodo-artist">
          {{ustodo.artist}}
        </div>
        <div class="ustodo-genre">
          {{ustodo.genre}}
        </div>

        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'ustodo-edit',
            params () {
              return {
                ustodoId: ustodo.id
              }
            }
          }">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set As Ustodo Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
          Unset As Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="ustodo.albumImageUrl" />
        <br>
        {{ustodo.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'ustodo'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async ustodo () {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          ustodoId: this.ustodo.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          ustodoId: this.ustodo.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
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
