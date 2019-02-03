import Api from '@/services/Api'

export default {
  index (params) {
    console.log('hi hbk from /Users/hkon/utd/181209tab-tracker/tab-tracker-master/client/src/services/SongHistoryService.js')
    return Api().get('histories', {
      params: params
    })
  },
  post (history) {
    return Api().post('histories', history)
  }
}
