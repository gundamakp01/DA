import ApiService from './ApiService';
const DistrictService  = {
    getDistrictByProvince(id) {
        return ApiService.get(`provinces/${id}/districts`)
    },
}
export default DistrictService