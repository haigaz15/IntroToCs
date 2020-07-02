//2
const triangleStars = function(dots){
  let newarray = []
  let array = ["  *** "," ***** ","******* "] 
  let index = array.length - 1
  while(dots>1){
      console.log(array[index]) 
      newarray[newarray.length] = array[index]
      index = index - 1
      dots = dots - 1
 }
 return "   *"
};
const result = triangleStars(4)
console.log(result)
//3 
const regrouper = function(x){
   let f = []
   let index02 = 3
    while(index02>0){
    f[f.length] =x[0][x[0].length-index02]
    index02 = index02 - 1
        }
        let index03 = 3
        while(index03>0){
         f[f.length] =  x[1][x[1].length-index03]
        index03 = index03 - 1
        }
    return f 
   }
console.log(regrouper([[1, 2, 3], [4, 5, 6]]));
//4
const pick = function(a,b){
  let index00= 1
  let minimax = a[0]
 while(index00<=a.length){
 if(b===true){
  if(minimax<a[a.length-index00]){
 	minimax = a[a.length-index00]
  }
 }
  if(b===false){
			if(a[a.length-index00]<minimax){
             minimax = a[a.length-index00]
			}
		}
  index00 = index00 + 1 
  }
 return minimax
}
 console.log(pick([0,9,11,-6,3],true))
 //5
 const forEach = function(first,second){
 let index12 = 3
 while(index12>0){
    second(first[first.length-index12])
   index12 = index12 - 1 
   }
  return  ""
 }
console.log(forEach([4, 3, 2], function(val) {
  console.log(val);
}));
//6
const sum = function(num){
   let index0 = 1
   let index1 = 0
   while(index0<= num.length){
   index1 = index1 + num[num.length-index0]
   index0 = index0 + 1
   }
   return index1
}
console.log(sum([4, 3, 2]))
//7
const reverse2 = function(str){
	changer0= 1
	changer = ""
	while(changer0<=str.length){
		changer = changer + str[str.length-changer0]
		changer0= changer0 + 1
	}
    return changer
}
console.log(reverse2("abcdefg"))
 //8
const checkboard = function(check){
   let checker = ["*****"," *****","*****"," *****"]
   let index = 0
   while(index<checker.length){
     console.log(checker[index]) 
     index = index+1
   }
   return "*****"
};
console.log(checkboard(5));
