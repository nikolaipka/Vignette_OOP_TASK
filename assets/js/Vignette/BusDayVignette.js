

function BusDayVignette() {
		Vignette.call(this);
		this.price = DAYLY_BUS_PRICE;
		this.expirationDate = this.calculateExpirationDate('year');
}

BusDayVignette.prototype = Object.create(Vignette.prototype);
BusDayVignette.constructor = BusDayVignette;

BusDayVignette.prototype.getPrice = function(){
	return this.price;
}