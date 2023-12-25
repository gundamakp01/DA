import ApiService from './ApiService';
const CartService  = {
  getCart() {
    return ApiService.get('carts')
  },
  createCart(data) {
    return ApiService.post('carts', data)
  },
  deleteCart(id) {
    return ApiService.delete(`carts/${id}`)
  },
  updateCart(id, data) {
    console.log(typeof id)
    return ApiService.update(`carts/${id}`, data)
  },
  getCartById(id) {
    return ApiService.get(`carts/${id}`)
  },
  getCartByOrderID(id) {
    return ApiService.get(`carts-order/${id}`)
  }
}
export default CartService