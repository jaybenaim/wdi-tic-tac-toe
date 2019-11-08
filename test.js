const winConditions = [
    [1,2,3],
    [3,2,1],
    [1,5,9],
    [9,5,1],
    [1,4,7],
    [7,4,1],
    [2,5,8],
    [8,5,2],
    [3,6,9],
    [9,6,3],
    [4,5,6],
    [6,5,4],
    [7,8,9], 
    [9,8,7], 
]


// let x = winConditions.sort() 
// winConditions.forEach(num => { 
//     num = num.sort() 
//     console.log(num) 
// })


function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
const allConditions = combinations("1,2,3");
function getCombinations(array) { 
    var result = []; 
    var f = function(prefix=[], array) { 
        for (var i = 0; i < array.length; i++) { 
            result.push([...prefix,array[i]]); 
            f([...prefix,array[i]], array.slice(i + 1)); 
        } } 
        f('', array);
         return result; }

const all = getCombinations(winConditions)
const list = [] 
// console.log(allConditions)
// console.log(all)
const a = all.forEach(num => { 
    if (num % 3 == 0){ 
        list.push([num])
    }
})

// console.log(all)

if (winConditions[0].includes(player1[0])){ 
    
}