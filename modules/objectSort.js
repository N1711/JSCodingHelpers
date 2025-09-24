const sortObj = (arr, key) => {
    if(!arr || !Array.isArray(arr) || arr.length == 0) return arr;  
    return arr.sort((i,j) => typeof i[key] !== "string" ? i[key] - j[key] : i[key].toLowerCase().localeCompare(j[key].toLowerCase()));
}

