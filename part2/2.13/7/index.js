let length = 10,key;
        for(let i = 2;i<=length;i++){
            key=1
            for(let j = 2;j<i;j++){
                if(i%j==0){
                   key = 0
                }
            }
            if(key){
                console.log(i)
            }
        }