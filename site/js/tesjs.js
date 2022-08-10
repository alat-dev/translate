const button=document.querySelector('.btn');

const element=document.querySelector(".formulir");
const menu=document.querySelector(".menu");
const jenisdok=document.querySelector(".jenisdok");
function munculinform(jenisdokumen){
	element.style.visibility="visible";
	element.style.height="auto";
	menu.style.visibility="hidden";
	menu.style.height="0";
	jenisdok.setAttribute("readonly","true");
	jenisdok.setAttribute("value",jenisdokumen);
};


function hilanginform(){
	element.style.visibility="hidden";
	element.style.height="0";
	menu.style.visibility="visible";
	menu.style.height="auto";
};
function formTinjau1(){
	munculinform("Rapot Sem 1-6");
	
};

function formTinjau2(){
	munculinform("Rapot Sem 1-5");
};

function formTinjau3(){
	munculinform();
};

function formTinjau4(){
	munculinform();
};

function formTinjau5(){
	munculinform();
};

function formTinjau6(){
	munculinform();
};



function FormSubmit(){
	console.log("HI");
		
	const tes=document.querySelector(".btn-primary");
	console.log(tes);
};