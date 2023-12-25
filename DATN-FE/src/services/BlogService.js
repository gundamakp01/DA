import ApiService from './ApiService';
const BlogService  = {
    getBlog() {
        return ApiService.get('blogs')
    },
    createBlog(data) {
        return ApiService.post('blogs', data, {headers : { 'Content-Type': 'multipart/form-data'}})
    },
    deleteBlog(id) {
        return ApiService.delete(`blogs/${id}`)
    },
    updateBlog(id, data) {
        return ApiService.post


        (`blogs/${id}`, data, {headers : { 'Content-Type': 'multipart/form-data'}})
    },
    getBlogById(id) {
        return ApiService.get(`blogs/${id}`)
    }
}
export default BlogService