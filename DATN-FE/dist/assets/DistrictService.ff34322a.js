import{A as t}from"./index.1f0d45a7.js";const i={getProvinces(){return t.get("provinces")}},s={getWardByDistrictId(r){return t.get(`districts/${r}/wards`)}},c={getDistrictByProvince(r){return t.get(`provinces/${r}/districts`)}};export{c as D,i as P,s as W};