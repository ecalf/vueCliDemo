import axios,{post} from './http';



export async function uploadFile(formData,option){
    
    return post(option.path,formData);
}