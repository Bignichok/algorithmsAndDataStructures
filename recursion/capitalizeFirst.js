function capitalizeFirst(array) {
    let result = [];
    if (!array.length) return result
    result = capitalizeFirst(array.slice(0, -1));
    const word = array.slice(array.length - 1)[0]
    result.push(word[0].toUpperCase() + word.slice(1));
    return result;
}

const capitalizeFirst = (array) => array.map((item)=> item.charAt(0).toUpperCase() + item.slice(1))



console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']