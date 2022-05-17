//solucao 1
function verificarPalindromo(string){
    if(!string)return;

   return string.split("").reverse().join("")===string;
}
//console.log(verificarPalindromo("ama"));

//solucao 2

function verificarPalindromo2(string){
    if(!string)return;
    
    for (let i = 0; i < string.lenght / 2; i++){
       if (string[i] !== string.lenght-1 - i){
           return false;
       }
    }
    return true;
}

console.log(verificarPalindromo2("ovo"));