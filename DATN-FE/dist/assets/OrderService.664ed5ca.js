import{A as e}from"./index.09db911f.js";const s={getOrder(){return e.get("orders")},createOrder(r){return e.post("orders",r)},deleteOrder(r){return e.delete(`orders/${r}`)},updateOrder(r,t){return e.update(`orders/${r}`,t)},getOrderById(r){return e.get(`orders/${r}`)},changeStatus(r){return e.post("orders/change-status",r)}};export{s as O};
