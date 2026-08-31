alert('Bem-vindo ao jogo do número secreto!'); 
let numeroMaximo= 5000;
let numeroSecreto= parseInt(Math.random() * numeroMaximo + 1);// Gera um número aleatório entre 1 e 5000
console.log(numeroSecreto); 
let chute; 
let tentativas= 1;  

//Enquanto chute não for igual ao número secreto  
while ( chute != numeroSecreto){  
    chute =  prompt(`Escolha o número entre 1 e ${numeroMaximo}`);   
// Verifica se o chute é igual ao número secreto  
    if (numeroSecreto == chute){   
       break; // Sai do loop 
    } else {   
        if ( chute > numeroSecreto){  
            alert (`O número secreto é menor que ${chute}`);  
        } else {  
            alert (`O número secreto é maior que ${chute}`);  
        }  
        tentativas++;   
    }    
}  

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`); 
