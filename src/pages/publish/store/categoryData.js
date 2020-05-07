function getData(){
    let data = [];
    for(let i=0;i<10;i++){
        let cate1 = {
            id:i,
            text:'一级分类'+i,
            child:[]
        }

        for(let j=0;j<10;j++){
            let cate2 = {
                id:j,
                text:'二级分类'+j,
                child:[]
            }

            for(let k=0;k<10;k++){
                let cate3 = {
                    id:k,
                    text:'三级分类'+k
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