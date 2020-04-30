import axios from "@src/utils/enhanceAxios";

console.log('axios>>>',axios);

export default {
    async getNames(params){
        console.log('api getNames');

        //let res = await axios.get('/js/api.test.js',{id:params.id});

        let res = {
            code:0,
            data:{
                nameList:['nick','alex','lily']
            },
            msg:'success'
        };

        return res.data.nameList;
    }
}