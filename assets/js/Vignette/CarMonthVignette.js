


function CarMonthVignette() {
		Vignette.call(this);
		this.price = DAYLY_CAR_PRICE*MONTH_PRICE_INDEX;
}

CarMonthVignette.prototype = Object.create(CarDayVignette.prototype);
CarMonthVignette.constructor = CarMonthVignette;

CarMonthVignette.prototype.getPrice = function(){
	return this.price;
}