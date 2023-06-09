function loaded() {
    let on = false;
	let ope = false;
	let nope = false;
	let opc = '';
	let lopc = '';
	let lope = 0;
	let dat = 0;
	let display = document.getElementById('display');
	let btn0 = document.getElementById('btn0');
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
			opc='';
			ope=true;
		}
	});
	
	// digits
	document.querySelectorAll('.bt').forEach(occurence => {
		let digit = occurence;
		occurence.addEventListener('click', function() { 
			if (display.innerHTML === '0' || opc!=='') {
				display.innerHTML = digit.innerHTML;
				opc='';
			} else {
				display.innerHTML += digit.innerHTML;
			}
			ope=true;		
		});
	});
	
	btnPlus.addEventListener('click', () => { // button '+'
		opc = '+';
		lopc = opc;
		nope = false;
		if (ope) {
			lope = parseFloat(display.innerHTML);
			dat += lope;
			display.innerHTML = dat;
			ope=false;			
		}
	});
	
	btnEqual.addEventListener('click', () => { // button '='
		opc = '';
		if (ope) {
			lope = parseFloat(display.innerHTML);
			ope=false;
		}
		if (!nope) {
			lope = parseFloat(display.innerHTML);
			nope = true;
		}
		switch (lopc) {
			case '+':
				dat += lope;	
				display.innerHTML = dat;
				
		}
	});
	
	btnC.addEventListener('click', () => {
		opc = '';
		lopc = '';
		ope = false;
		lope = 0; 
		dat = 0;
		display.innerHTML = '0';
	});
	
}; // end function loaded

window.addEventListener('load',loaded);
