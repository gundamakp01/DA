import{A as r}from"./index.8ca39612.js";const u={getUser(){return r.get("users")},createUser(e){return r.post("users",e)},deleteUser(e){return r.delete(`users/${e}`)},updateUser(e,s){return r.update(`users/${e}`,s)},getUserById(e){return r.get(`users/${e}`)},signup(e){return r.post("users/signup",e)},editProfile(e){return r.update("me",e)},payment(e){return r.get(`users/vnpay-payment/${e}`)}};export{u as U};
