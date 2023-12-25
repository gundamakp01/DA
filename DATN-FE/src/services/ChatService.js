import ApiService from './ApiService';
const ChatService  = {
  getChat() {
    return ApiService.get('chats')
  },
  createChat(data) {
    return ApiService.post('chats', data)
  },
  deleteChat(id) {
    return ApiService.delete(`chats/${id}`)
  },
  updateChat(id, data) {
    console.log(typeof id)
    return ApiService.update(`chats/${id}`, data)
  },
  getChatById(id) {
    return ApiService.get(`chats/${id}`)
  },
}
export default ChatService