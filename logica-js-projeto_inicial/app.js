alert('boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 99 + 1)
console.log(numeroSecreto)
let chute;
let tentativas = 1;

/* enquanto chute não for igual a numerosecreto*/
while (chute != numeroSecreto){
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    /* se chute for igual a numerosecreto */
        if (chute == numeroSecreto) {
        break;
        } else {
            if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
}
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//}
    
  //  if (tentativas > 1) {
    //    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
   // }else{
     //   alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
        
   // }
