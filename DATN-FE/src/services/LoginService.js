import ApiService from "@/services/ApiService";


const LoginService = {
  login (data)
  {
    return ApiService.post('login', data)
  },
  logout ()
  {
    return ApiService.post('logout')
  }
}
export default LoginService