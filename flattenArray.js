let arr = [45,6,7,[12,3,[78,56,43]]];

const flattenArray = (arr) => {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            const oneDimensional = flattenArray(cur);
            acc = [...acc, ...oneDimensional];
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
}

console.log(flattenArray(arr));