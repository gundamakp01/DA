import ApiService from './ApiService';
const UserService  = {
    getUser() {
        return ApiService.get('users')
    },
    createUser(data) {
        return ApiService.post('users', data)
    },
    deleteUser(id) {
        return ApiService.delete(`users/${id}`)
    },
    updateUser(id, data) {
        return ApiService.update(`users/${id}`, data)
    },
    getUserById(id) {
        return ApiService.get(`users/${id}`)
    },
    signup(data) {
        return ApiService.post(`users/signup`, data)
    },
    editProfile(data) {
        return ApiService.update(`me`, data)
    },
    payment(id) {
        return ApiService.get(`users/vnpay-payment/${id}`)
    }
}
export default UserService