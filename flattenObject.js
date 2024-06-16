let obj = {
    key1: {
        key2: {
            key3: 25,
            key6: 30,
        }
    },
    
    key4: {
        key5: 60,
    }
}

// output
// {
//     "key1.key2.key3": 25,
//     "key1.key2.key6": 30,
//     "key4.key5": 30
// }

const flatObj = (obj, keyString) => {
    let ans = {};
    
    for (key in obj) {
        let val = obj[key];
        const keyStr = keyString + `${keyString ? '.': ''}` + key;
        if (!Array.isArray(val) && typeof val === 'object') {
            let flatAns = flatObj(val, keyStr);
            ans = {
                ...ans,
                ...flatAns,
            }
        } else {
            ans = {
                ...ans,
                [keyStr]: val,
            }
        }
        
    }
    return ans;
}

console.log(flatObj(obj, ''));


