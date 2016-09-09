
function CarYearVignette() {
		Vignette.call(this);
		this.price = DAYLY_CAR_PRICE * ANNUAL_PRICE_INDEX * MONTH_PRICE_INDEX;
}

CarYearVignette.prototype = Object.create(CarMonthVignette.prototype);
CarYearVignette.constructor = CarYearVignette;

CarYearVignette.prototype.getPrice = function(){
	return this.price;
}