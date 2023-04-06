const amount = document.querySelector('.field');
const tipSlider = document.querySelector('#tip-slider');
const tipPerc = document.querySelector('#tip-perc');
const tipAmount = document.querySelector('#tip');
const totalAmount = document.querySelector('#total');

const errorMsg = document.querySelector('#error');
errorMsg.style.display = "none";

amount.addEventListener('change', () => {
	if(!isNaN(parseFloat(amount.value))) {
		tipSlider.disabled = false;
		errorMsg.style.display = "none";
	}
	else {
		errorMsg.style.display = "block";
		tipSlider.disabled = true;
	}
});

tipSlider.addEventListener('input', () => {
	
	const amt = parseFloat(amount.value);
	const tip = parseInt(tipSlider.value);
	tipPerc.textContent = `${tip}%`;

	tipAmount.textContent = ((amt * tip) / 100).toFixed(2);

	totalAmount.textContent = (amt +  (amt * tip) / 100).toFixed(2); 
})

