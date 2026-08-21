let array = [1, 2, 3, 4, 5];
console.log(array);
array[2] = true;
console.log(array);
array[4] = 'Edson';
console.log(array);
array[8] = 10;
console.log(array);
array[6] = 'teste'
console.log(array);
console.log('Tamanho do array: ' + array.length);
//colocar itens no final do array
array.push('novo item');
console.log(array);
//remover itens do final do array
array.pop();
console.log(array);
//colocar itens no inicio do array
array.unshift('novo item no inicio');
console.log(array);
//remover itens do inicio do array
array.shift();
console.log(array);