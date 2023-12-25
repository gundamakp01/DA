import ApiService from './ApiService';
const ConversationService  = {
  seen(id) {
    return ApiService.post(`conversations/${id}/seen`)
  },
}
export default ConversationService