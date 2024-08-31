function filterVocales(letra) {
    return ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"].includes(letra)
}

function desglosarString(st, opc) {
    let starr = st.split("")
    if (opc == "vocales") {
        return starr.filter(filterVocales).length
    } else if (opc == "consonantes") {
        return st.length - starr.filter(filterVocales).length
    } 
}

function twoSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let ind = arr.findIndex((x) => return x == num - arr[i])
        if 
    }
}

console.log(twoSum([2,7,11,15],9))
