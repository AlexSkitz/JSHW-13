/*Практика 1
Проблема

const test = [1,2,[3,4,[5,6]]];
test.flat(); // [1, 2, 3, 4, Array(2)]

Напишите мне свою реализацию метода flat, который будет отрабатывать так как нужно для любых кейсов
*/
const test = [1,2,[3,4,[5,6]]];
test.flat(Infinity); //[1,2,3,4,5,6]



/*Практика 2
Написать функцию, которая проверят строку

'dog' 'dgo' -> true (одно и то же слово) 'dog' 'dfg' -> false (слова разные) 'doog' 'ddog' -> false
*/



function stingSS(word, anotherWord){
let str1 = word.split('').sort().join('');
let str2 = anotherWord.split('').sort().join('');
    if(str1 === str2){
        return true;
    } 
    return false;
}
let result1 = stingSS('dog','dgo');
console.log('dog','dgo', result1);
let result2 = stingSS('dog','dfg');
console.log('dog','dfg', result2);




/*Практика 3*/
let a = { b: 1 },
c = Object.create(a);
  
console.log(c.b); // 1 
delete c.b; //true
console.log(c.b); // 1
delete a.b; // true
console.log(c.b) // undefined



/*Практика 4
Напишите функцию, которая будет выводить в консоль, тот индекс, который вписали

closure()[3]() === 3
closure()[1]() === 1*/


function closure() {
    return (function(){
        let arr = [];
        for(let i = 0; i < Infinity; i++){
            arr = [...arr, () => i] 
        }
        return arr;
    })()
 } 

console.log(closure()[1]()); //1
console.log(closure()[1112]()); //1112





/*Практика 5
Используем reduce*/

const data = [{
    items: [{
        file: {
            lang: 'React'
        },
        desc: 'Lib'
    }]
}, {
    items: [{
        file: {
            lang: 'Angular'
        },
        desc: 'Framework'
    }]
}, {
    items: [{
        file: {
            lang: 'EXT'
        },
        desc: 'Framework'
    }]
}];

const languages = dataParser(data); // {React: "Lib", Angular: "Framework", EXT: "Framework"}

const dataParser = (data) => {
    return data.reduce((acc, item) => {
        acc[item.items[0].file.lang] = item.items[0].desc
        return acc
    }, {});
};
