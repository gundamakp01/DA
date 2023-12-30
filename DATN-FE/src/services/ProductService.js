import ApiService from './ApiService';
const ProductService  = {
  getProduct(page) {
    return ApiService.get('products', {page : page})
  },
  createProduct(data) {
    return ApiService.post('products', data, {headers : { 'Content-Type': 'multipart/form-data'}})
  },
  deleteProduct(id) {
    return ApiService.delete(`products/${id}`)
  },
  updateProduct(id, data) {
    return ApiService.post(`products/${id}`, data, {headers : { 'Content-Type': 'multipart/form-data'}})
  },
  getProductById(id) {
    return ApiService.get(`products/${id}`)
  },
  getProductByCategoryId(id, params) {
    return ApiService.get(`categories/${id}/products`, params)
  }
}
export default ProductService