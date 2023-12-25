import ApiService from './ApiService';
const CategoryService  = {
  getCategory() {
    return ApiService.get('categories')
  },
  createCategory(data) {
    return ApiService.post('categories', data, {headers : { 'Content-Type': 'multipart/form-data'}})
  },
  deleteCategory(id) {
    return ApiService.delete(`categories/${id}`)
  },
  updateCategory(id, data) {
    return ApiService.post


    (`categories/${id}`, data, {headers : { 'Content-Type': 'multipart/form-data'}})
  },
  getCategoryById(id) {
    return ApiService.get(`categories/${id}`)
  },
  getProductByCategoryId(id, params) {
    return ApiService.get(`categories/${id}/children`, params)
  }
}
export default CategoryService