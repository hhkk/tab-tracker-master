<template>
  <panel title="RecentlyViewedSongs.vuehbk2">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories">
      <template slot="items" scope="props">
        <td class="text-xs-right">
          xx{{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title1',
          value: 'title'
        },
        {
          text: 'Artist1',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index()).data
    }
  }
}
</script>

<style>

</style>
