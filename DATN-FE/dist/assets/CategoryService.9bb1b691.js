import{A as t}from"./index.85923ff2.js";const o={getCategory(){return t.get("categories")},createCategory(e){return t.post("categories",e,{headers:{"Content-Type":"multipart/form-data"}})},deleteCategory(e){return t.delete(`categories/${e}`)},updateCategory(e,r){return t.post(`categories/${e}`,r,{headers:{"Content-Type":"multipart/form-data"}})},getCategoryById(e){return t.get(`categories/${e}`)},getProductByCategoryId(e,r){return t.get(`categories/${e}/children`,r)}};export{o as C};
