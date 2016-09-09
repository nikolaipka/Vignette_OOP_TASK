

function TruckYearVignette() {
		Vignette.call(this);
		this.price = DAYLY_TRUCK_PRICE * ANNUAL_PRICE_INDEX * MONTH_PRICE_INDEX;
}

TruckYearVignette.prototype = Object.create(TruckMonthVignette.prototype);
TruckYearVignette.constructor = TruckYearVignette;

TruckYearVignette.prototype.getPrice = function(){
	return this.price;
}