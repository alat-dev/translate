function hujan(a,b){
	return a>b;
}

var social = {
	twitter:"Daniel",
	instagram:"ALT",
	ceo:{
		1:"ALAT",
		2:"MANTAP"
	}
}
// var hujan = hujan(){
// }
var x= "Hello World!";
console.log("Ini variabel x = " + x);
console.log("Ini bandingin a=5 lebih besar b=2 = " + hujan(5,2));
console.log(social.instagram);


var p=4,q="4";p
if(p==q){
	console.log("P sama dengan Q kalau ==");
}
if(p===q){
	console.log("P and Q jenis dan nilainya sama");
} else {
	console.log("Entah jenis atau nilainya ada yg beda");
}

for(var i=1;i<=10;i++){
	console.log(i);
}



var company= new Object();
company.name=new Object();
//sama aja dengan 
company["name"]=new Object();

//ternyata bisa juga
company[4]=new Object();
console.log(company.name); 
//sama aja dengan
console.log(company["name"]);
company.name.LastName="ALAT";
console.log(company);

console.log(social);


function makeMultiplier(multiplier){
	var myFunc=function(x){
		return x * multiplier;
	};
	return myFunc;
}

var tes1=makeMultiplier(3);
//myFuncnya di oper ke tes1
console.log(tes1(100));

function autoOper(x,operation){
	return operation(x);
}

console.log(autoOper(1.5,makeMultiplier(12)));


//Function constructors, huruf depan kapital biar ingat

function Circle (r){
this.radius=r;
};

//prototype itu nnti apply ke semua new Construction yg kita buat 
Circle.prototype.GetArea= function (){
return Math.PI * Math.pow(this.radius,2);
};

var myCircle = new Circle(15);
console.log(myCircle);
console.log(myCircle.GetArea());


const button=document.querySelector('.btn')

const element=document.querySelector('.card');
function formSubmit(){
	
	element.style.backgroundColor='red';
}