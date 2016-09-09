

function TruckMonthVignette() {
		Vignette.call(this);
		this.price = DAYLY_TRUCK_PRICE * MONTH_PRICE_INDEX;
}

TruckMonthVignette.prototype = Object.create(TruckDayVignette.prototype);
TruckMonthVignette.constructor = TruckMonthVignette;

TruckMonthVignette.prototype.getPrice = function(){
	return this.price;
}