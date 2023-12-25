import ApiService from './ApiService';
const HomeService  = {
    getData() {
        return ApiService.get('home')
    },
}
export default HomeService