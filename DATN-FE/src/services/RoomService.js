import ApiService from './ApiService';
const RoomService  = {
  getRoom() {
    return ApiService.get('rooms')
  },
  createRoom(data) {
    return ApiService.post('rooms', data)
  },
  deleteRoom(id) {
    return ApiService.delete(`rooms/${id}`)
  },
  updateRoom(id, data) {
    return ApiService.update(`rooms/${id}`, data)
  },
  getRoomById(id) {
    return ApiService.get(`rooms/${id}`)
  },
  getMessageByRoomId(id) {
    return ApiService.get(`rooms/${id}/messages`)
  },
  seen(id) {
    return ApiService.post(`rooms/${id}/seen`)
  },
}
export default RoomService