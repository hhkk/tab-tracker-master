<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Ustodo Metadata 2">
        <v-text-field
          label="ustodotitle"
          required
          :rules="[required]"
          v-model="ustodo.ustodotitle"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="ustodo.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="ustodo.genre"
        ></v-text-field>

        <v-text-field
          label="createdAt"
          required
          :rules="[required]"
          v-model="ustodo.createdAt"
        ></v-text-field>

        <v-text-field
          label="updatedAt"
          required
          :rules="[required]"
          v-model="ustodo.updatedAt"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="ustodo.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="ustodo.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="ustodo.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Ustodo Structure" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="ustodo.tab"
        ></v-text-field>

        <v-text-field
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="ustodo.lyrics"
        ></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="save">
        Save Ustodo
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import UstodosService from '@/services/UstodosService'

export default {
  data () {
    return {
      ustodo: {
        ustodotitle: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.ustodo)
        .every(key => !!this.ustodo[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required ustodo fields.'
        return
      }

      const ustodoId = this.$store.state.route.params.ustodoId
      try {
        await UstodosService.put(this.ustodo)
        this.$router.push({
          name: 'ustodo',
          params: {
            ustodoId: ustodoId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const ustodoId = this.$store.state.route.params.ustodoId
      this.ustodo = (await UstodosService.show(ustodoId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
