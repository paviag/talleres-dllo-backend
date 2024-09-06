function filterVocales(letra) {
    return ["a", "e", "i", "o", "u"].includes(letra)
}

function desglosarString(st, opc) {
    let starr = st.toLowerCase().split("")
    if (opc == "vocales") {
        return starr.filter(filterVocales).length
    } else if (opc == "consonantes") {
        return st.length - starr.filter(filterVocales).length
    } 
}

function twoSum(arr, num) {
    // returns -1 in case of finding none
    for (let i = 0; i < arr.length; i++) {
        let ind = arr.findIndex((x) => {return x == num - arr[i]})
        if (ind != -1 & ind != i) {
            return [i, ind]
        }
    }
    return -1
}

function conversionRomana(nr) {
    let eq = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let res = eq[nr[nr.length-1]]
    for (let i = 0; i < nr.length-1; i++) {
        if (eq[nr[i]] < eq[nr[i+1]]) {
            res -= eq[nr[i]]
        } else {
            res += eq[nr[i]]
        }
    }
    return res
}
