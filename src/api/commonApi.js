import axios,{post} from './http';

export async function uploadFile(formData,option){
    //formData = {image:fileObj}
    return post('/v1/upload',formData);
}

//获取品牌种类
export async function getBrandList(){
    return post('/v1/category/get-brand-list');
}

//获取国家列表
export async function getCountrylist (){
    return post('/v1/user/countrylist');
}

//获取产品类目
export async function getProductCategory(params){
    return post('/v1/category/get-product-cate-list',params);
}

//资质类别
export async function getQualification (){
    return post('/v1/category/get-qualification-cate-list');
}