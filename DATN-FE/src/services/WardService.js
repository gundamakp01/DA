import ApiService from './ApiService';
const WardService  = {
    getWardByDistrictId(id) {
        return ApiService.get(`districts/${id}/wards`)
    },
}
export default WardService