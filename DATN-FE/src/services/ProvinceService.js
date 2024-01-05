import ApiService from './ApiService';
const ProvinceService  = {
    getProvinces() {
        return ApiService.get('provinces')
    },
}
export default ProvinceService