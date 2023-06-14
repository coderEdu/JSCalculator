function loaded() {
    let on = false;
	let ope = false;
	let nope = false;
	let opc = '';
	let lopc = '';
	let lope = 0;
	let dat = 0;
	let btnOn = document.getElementById('btnOnOff');
	let btn0 = document.getElementById('btn0');
	let indicator = document.getElementById('indicator');
	let btnPlus = document.getElementById('btnPlus');
	let btnEqual = document.getElementById('btnEqual');
	let monitor = document.getElementById('monitor');
	let mline = document.getElementById('mline');
	let btnC = document.getElementById('btnC');
	
    btnOn.addEventListener('click', () => {
        if (!on) {	// turning on calculator
			//indicator.style.backgroundColor = 'rgb(255, 132, 0)';
			indicator.classList.add('indicator-on');
			monitor.style.color= 'black';
            mline.style.color = 'black';
			mline.disabled = false;
			mline.innerHTML = '0';
            on=true;
        } else {
			//indicator.style.backgroundColor = 'black';
			indicator.classList.remove('indicator-on');
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
			if (monitor.innerHTML.endsWith('=')){
				monitor.innerHTML = '';
			}
			//if (opc=='=') monitor.innerHTML = '';
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
			if (monitor.innerHTML.endsWith('=')){
				monitor.innerHTML = mline.innerHTML + operation.innerHTML;
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
		mline.innerHTML = parseFloat(eval( expr ));
	});
	
	btnC.addEventListener('click', () => {
		//alert('idiota');
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
