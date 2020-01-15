Array.prototype.uniq = function () {
    let arr = []

    for (let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])){
            arr.push(this[i])
        }
        // console.log(this[i])
    }
    return arr
};

// let x = [1, 2, 2, 3, 3, 3].uniq()
// console.log(x)

//---------------------------------------

Array.prototype.twoSum = function () {
    let arr = []

    for (let i = 0; i < this.length-1; i++) {
        for (let j = i+1; j < this.length; j++) {
            if(this[i]+this[j] === 0){
                arr.push([ i, j ])
            }
        }
    }
    return arr
};

// let x = [1,-4,2,4,6,-1].twoSum()
// console.log(x);
// [ [0,5], [1,3] ]


Array.prototype.transpose = function () {
    let arr = []

    for (let i = 0; i < this[0].length; i++) {
        let newRow = []
        for (let j = 0; j < this.length; j++) {
            newRow.push(this[j][i])                
        }
        arr.push(newRow)
    }
    return arr
};

// let x = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ].transpose()
// console.log(x);

// [1,2,3] [1,4,7]
// [4,5,6] [2,5,8]
// [7,8,9] [3,6,9]

Array.prototype.myEach = function (cb) {
    for(let i = 0; i < this.length; i++) {
        // debugger
        const el = this[i];
        cb(el)    
    }
}

const myFunc = function (el) {
    let el2 = el * 10;
    console.log(el2);
}

// let x = [1, 2, 3].myEach((el) => {
//     let el2 = el * 10;
//     console.log(el2);
// })

// let x = [1, 2, 3].myEach(myFunc)

Array.prototype.myMap = function (mapCallBack) {
    let arr = []
    this.myEach( function (ele) {
        arr.push(mapCallBack(ele))
    } )
    return arr
}

Array.prototype.myReduce = function (reduceCallBack, el) {
    arr = this
    let acc = this[0]
    if(el !== undefined) {
        acc = el 
    } else {
        arr = arr.slice(1)
    }
    arr.myEach(function (ele) {
        acc = reduceCallBack(acc, ele)
    })
    return acc
}

const myFunc2 = function (acc, el) {
    return el + acc
}

let x = [2, 2, 3, 4].myReduce(myFunc2)
console.log(x)




// [1, 2, 3, 4]






// def my_map(&prc)

//     self.each do |ele|
//         arr << prc.call(ele)
//     end
// end

// arr.myMap {|ele| puts ele }