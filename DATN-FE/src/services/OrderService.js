import ApiService from './ApiService';
const OrderService  = {
    getOrder() {
        return ApiService.get('orders')
    },
    createOrder(data) {
        return ApiService.post('orders', data)
    },
    deleteOrder(id) {
        return ApiService.delete(`orders/${id}`)
    },
    updateOrder(id, data) {
        return ApiService.update(`orders/${id}`, data)
    },
    getOrderById(id) {
        return ApiService.get(`orders/${id}`)
    },
    changeStatus(data) {
        return ApiService.post(`orders/change-status`, data)
    }
}
export default OrderService