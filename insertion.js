let insertion = [10,12,20,15,1,2,4,6,5,3];
function insertionSort(insertion){
    for(let i = 1; i < insertion.length; i++){//essa estrutura for irá percorrer por todos os elementos contidos dentro do array (insertion), começando do índice 1, será explicado o motivo mais abaixo;
        let key = insertion[i];// essa variável irá receber o elemento do primeiro índice percorrido pelo for, com o loop for sendo iniciado no índice 1, já que o índice 0 já é considerado ordenado, a variável key irá armazenar o elemento 12 que está no índice 1 do array;
        let j = i - 1;//irá representar a posição a esquerda de i, ou seja, i representa a posição do elemento;
            while(j >= 0 && insertion[j] > key){//a codição j >= 0 irá certificar que não seja acessado um índice negativo. A segunda condição insertion[j] > key, irá verificar se o valor a esquerda do índice, o elemento que está na posição j, é maior que o valor que que será armazenado dentro de key. Enquanto essas duas condições forem verdadeiras, o loop while irá continuar movendo os valores menores do array para a esquerda (exemplo: 10 é o primeiro elemento do array, após isso será verificado se o segundo elemento do array (12) é menor que o primeiro, como 12 é maior que 10, 12 continuará na sua posição, mesma coisa para o valor 20, no quarto elemento do array é encontrado o número 15, que será comparado com o valor anterior (20), como 15 é menor que 20 o 15 será passado para a esquerda do número 20 e assim continuará até que todos os elementos sejam ordenados); 
                insertion[j + 1] = insertion[j];//essa linha será a responsável por mover o maior elemento para a direita dentro do array
            j = j - 1;//essa linha será a responsável por decrementar o valor de j a cada iteração, movendo-se para a esquerda;
            }

        insertion[j + 1] = key;//e por fim, após as comparações, o valor de key é ordenado e armazenado na sua posição correta que dita por j + 1, no caso a posição a direita dentro do array;
    }

    console.log(insertion);
}
insertionSort(insertion)