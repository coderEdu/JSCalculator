function loaded() {
    let on = false;
	let opc = '';
	let lopc = '';
	let ope = false;
	let lope = 0;
	let dat = 0;
	let display = document.getElementById('display');
	let btn0 = document.getElementById('btn0');
	let btn1 = document.getElementById('btn1');
	let btn2 = document.getElementById('btn2');
	let btn3 = document.getElementById('btn3');
	let btn4 = document.getElementById('btn4');
	let btn5 = document.getElementById('btn5');
	let btn6 = document.getElementById('btn6');
	let btn7 = document.getElementById('btn7');
	let btn8 = document.getElementById('btn8');
	let btn9 = document.getElementById('btn9');
	let btnPlus = document.getElementById('btnPlus');
	let btnEqual = document.getElementById('btnEqual');
	let btnC = document.getElementById('btnC');
	
    document.getElementById('btnOnOff').addEventListener('click', () => {
        if (!on) {
            display.style.color = 'black';
			display.disabled = false;
			display.innerHTML = '0';
            on=true;
        } else {
            display.style.color = 'rgb(213, 221, 220, 0.99)';
			display.innerHTML = '';
			dat = 0;
			display.disabled = true;
            on=false;
        }
    });	
	
	btn0.addEventListener('click', () => {
		if (display.innerHTML !== '0') {
			display.innerHTML += btn0.innerHTML;
		}
	});
	
	btn1.addEventListener('click', () => {
		if (display.innerHTML === '0' || opc!=='') {
			display.innerHTML = btn1.innerHTML;
			opc='';
		} else {
			display.innerHTML += btn1.innerHTML;
		}
		ope=true;
	});
	
	btnPlus.addEventListener('click', () => {
		opc = '+';
		if (ope) {
			lope = parseFloat(display.innerHTML);
			dat += lope;
			display.innerHTML = dat;
			ope=false;			
		}
	});
	
	btnEqual.addEventListener('click', () => {
		/*
		switch (opc) {
			case '':
				dat += lope;	
				display = dat;
				display.innerHTML = display;
				
		}*/
		dat += lope;	
		display.innerHTML = dat;
	});
	
	btnC.addEventListener('click', () => {
		opc = '';
		ope = false;
		dat = 0;
		display.innerHTML = '0';
	});
	
}; // end function loaded

window.addEventListener('load',loaded);

//let counter=0;
