

function BusYearVignette() {
		Vignette.call(this);
		this.price = DAYLY_BUS_PRICE * ANNUAL_PRICE_INDEX * MONTH_PRICE_INDEX;
}

BusYearVignette.prototype = Object.create(BusMonthVignette.prototype);
BusYearVignette.constructor = BusYearVignette;

BusYearVignette.prototype.getPrice = function(){
	return this.price;
}