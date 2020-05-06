function getData(){
    let data = [];
    for(let i=0;i<3;i++){
        let cate1 = {
            id:i,
            name:'一级分类'+i,
            child:[]
        }

        for(let j=0;j<5;j++){
            let cate2 = {
                id:j,
                name:'二级分类'+j,
                child:[]
            }

            for(let k=0;k<10;k++){
                let cate3 = {
                    id:k,
                    name:'三级分类'+k
                }
                cate2.child.push(cate3);
            }
            cate1.child.push(cate2);
        }
        data.push(cate1);
    }

    return data;
}

const data = getData();



export default data;