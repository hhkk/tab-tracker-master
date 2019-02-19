import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('ustodos', {
      params: {
        search: search
      }
    })
  },
  show (ustodoId) {
    console.log('hbkjhjbjhbshow ustodoId:' + ustodoId)
    return Api().get(`ustodos/${ustodoId}`)
  },
  post (ustodo) {
    return Api().post('ustodos', ustodo)
  },
  put (ustodo) {
    return Api().put(`ustodos/${ustodo.id}`, ustodo)
  }
}
