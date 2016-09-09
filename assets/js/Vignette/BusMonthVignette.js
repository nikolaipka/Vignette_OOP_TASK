
function BusMonthVignette() {
		Vignette.call(this);
		this.price = DAYLY_BUS_PRICE * MONTH_PRICE_INDEX;
}

BusMonthVignette.prototype = Object.create(BusDayVignette.prototype);
BusMonthVignette.constructor = BusMonthVignette;

BusMonthVignette.prototype.getPrice = function(){
	return this.price;
}