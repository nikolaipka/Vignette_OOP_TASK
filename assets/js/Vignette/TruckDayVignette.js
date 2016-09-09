

function TruckDayVignette() {
		Vignette.call(this);
		this.price = DAYLY_TRUCK_PRICE;
}

TruckDayVignette.prototype = Object.create(Vignette.prototype);
TruckDayVignette.constructor = TruckDayVignette;

TruckDayVignette.prototype.getPrice = function(){
	return this.price;
}