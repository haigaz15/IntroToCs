const s = function(a,b,c){
	return a*b-1*c-2
};
console.log(s(6,9,12));
const d = function(){
   return [[2,3,6],
           [2,9,4]
          ] 
};
console.log(d());
const f = function(m){
  alert(m);  
};
console.log(f("This is function life"));
const g = function(string1,string2,string3){
	if (string1.length >= 6){
		return string1
	} 
    if (string2.length >= 6){
		return string2
	} 
    if (string3.length >=6){
		return string3
	}	  
};
console.log(g("look","Civilization","bright"));
const h = function(x,y){
	if (x===y){
		return 0
	}
	if (x>y){
		return 1
	}
	if (x<y){
		retrun -1
	}
};
console.log(h(12,9));
const j = function(x,y){
	return x*y
};
console.log(j(4,1));
const k = function(c,z){
	return c/z
};
console.log(k(1,2));
const traingleA = function(base,height){
	const traingleA1 = j(base,height)
	const tra= k(traingleA1,2)
	return tra
}
console.log(traingleA(2,3));
const numLength = function(x,y){
     return x.length + " " + y.length
};
console.log(numLength("096321","56454215"));
const somefunc = function(x,y,z){
	const u = x+y
	const uf = u.length
	if (uf>z){
		return 1
	} else {
		return -1
	}
};
console.log(somefunc("mark","sam",8));
const funstuf = function (x,y,z){
	if (z==="rectangle"){
		return x*y
	} else if (z==="traingle") {
		return traingleA(x,y)
	} else{
		return -1
	}
};
console.log(funstuf(2,4,"traingle"));