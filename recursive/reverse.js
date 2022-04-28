// function reverse(str){
//     let result = '';

//     const helper =(str)=>{
//         if(!str.length) return result
//         result+=str[str.length -1]
//         return helper(str.slice(0, -1))
//     }

//     return helper(str)
// }

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'