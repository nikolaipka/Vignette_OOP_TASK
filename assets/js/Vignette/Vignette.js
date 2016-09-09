const DAYLY_CAR_PRICE = 5;
const DAYLY_TRUCK_PRICE = 7;
const DAYLY_BUS_PRICE = 9;

const MONTH_PRICE_INDEX = 10;
const ANNUAL_PRICE_INDEX = 6;

function Vignette(price) {
	if (this.constructor == 'DayVignette') {
		throw new Error ('Abstract class');
	}
	this.price = price;
	this.soldDay = new Date();
	this.expirationDate = 0;
}

Vignette.prototype.calculateExpirationDate = function(DayMonthOrYear) {
	var expDate = new Date();
	
	if (DayMonthOrYear == 'year') {
		expDate.setYear(expDate.getFullyear() + 1);
	}
	
	if (DayMonthOrYear == 'month') {
		expDate.setMonth(expDate.getMonth() + 1);
	}
	if (DayMonthOrYear == 'day') {
		expDate.setDay(expDate.getDay() + 1);
	}
	
	return expDate;
}