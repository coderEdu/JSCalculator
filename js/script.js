function loaded() {
    let on = false;
	let ope = false;
	let nope = false;
	let opc = '';
	let lopc = '';
	let lope = 0;
	let dat = 0;
	let btn0 = document.getElementById('btn0');
	let btnPlus = document.getElementById('btnPlus');
	let btnEqual = document.getElementById('btnEqual');
	let monitor = document.getElementById('monitor');
	let mline = document.getElementById('mline');
	let btnC = document.getElementById('btnC');
	
    document.getElementById('btnOnOff').addEventListener('click', () => {
        if (!on) {
			monitor.style.color= 'black';
            mline.style.color = 'black';
			mline.disabled = false;
			mline.innerHTML = '0';
            on=true;
        } else {
            mline.style.color = 'rgb(213, 221, 220, 0.99)';
			mline.innerHTML = '';
			dat = 0;
			mline.disabled = true;
			monitor.innerHTML = '';
            on=false;
        }
    });	
	
	btn0.addEventListener('click', () => {
		if (mline.innerHTML !== '0') {
			mline.innerHTML += btn0.innerHTML;
			opc='';
			ope=true;
		}
	});
	
	// digits
	document.querySelectorAll('.bt').forEach(occurence => {
		let digit = occurence;
		occurence.addEventListener('click', function() { 
			if (opc=='=') monitor.innerHTML = '';
			if (mline.innerHTML === '0' || opc!=='' || opc=='=') {
				mline.innerHTML = digit.innerHTML;
				opc='';
			} else {
				mline.innerHTML += digit.innerHTML;
			}
			ope=true;		
		});
	});
	
	// arithmetic operations 
	document.querySelectorAll('.opr').forEach(occurence => {
		let operation = occurence;
		occurence.addEventListener('click', function() { 
			opc = operation.innerHTML;
			lopc = opc; // saving last operation
			nope = false;
			if (ope) {
				lope = parseFloat(mline.innerHTML); // saving last operator
				/*
				if (opc==='+') dat += lope;
				if (opc==='-') dat -= lope;
				if (opc==='*') dat *= lope;
				if (opc==='/') dat /= lope;*/

				//mline.innerHTML = dat;
				//monitor.innerHTML = dat + opc;
				monitor.innerHTML += mline.innerHTML + operation.innerHTML;
				ope=false;			
			}		
		});
	});
	
	/*
	btnPlus.addEventListener('click', () => { // button '+'
		opc = '+';
		lopc = opc;
		nope = false;
		if (ope) {
			lope = parseFloat(mline.innerHTML);
			dat += lope;
			mline.innerHTML = dat;
			ope=false;			
		}
	}); */
	
	btnEqual.addEventListener('click', () => { // button '='
		opc = '=';
		
		if (ope) {
			lope = parseFloat(mline.innerHTML);
			ope=false;
		}
		
		if (!nope) {
			lope = parseFloat(mline.innerHTML);
			nope = true;
		}
		/*
		if (lopc==='+') dat += lope;
		if (lopc==='-') dat -= lope;
		if (lopc==='*') dat *= lope;
		if (lopc==='/') dat /= lope;*/
		
		monitor.innerHTML += mline.innerHTML;
		monitor.innerHTML
		let expr = monitor.innerHTML;
		monitor.innerHTML += opc;
		mline.innerHTML = eval( expr );
	});
	
	btnC.addEventListener('click', () => {
		opc = '';
		lopc = '';
		ope = false;
		lope = 0; 
		dat = 0;
		mline.innerHTML = '0';
		monitor.innerHTML = '';
		
	});
	
}; // end function loaded

window.addEventListener('load',loaded);
