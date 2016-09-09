

function CarDayVignette() {
		Vignette.call(this);
		this.price =  DAYLY_CAR_PRICE;
}

CarDayVignette.prototype = Object.create(Vignette.prototype);
CarDayVignette.constructor = CarDayVignette;

CarDayVignette.prototype.getPrice = function(){
	return this.price;
}