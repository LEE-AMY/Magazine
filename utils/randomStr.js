const strArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]


const random = function (n=5) {
    let str = '';
   for(var i = 0; i < n; i++) {
       let index = Math.floor( Math.random() * strArr.length )
       str += strArr[index]
   }

   return str
}

export {random}


