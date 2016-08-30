function BonusBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
}

BonusBall.prototype = Object.create(Ball.prototype);
BonusBall.prototype.constructor = BonusBall;

BonusBall.prototype.drawBonus = function() {
	var start = 0;
	var end = 2*Math.PI;
	var ctx = this.getCtx();
	ctx.fillStyle = this.getColor();
	ctx.beginPath();
	ctx.arc(this.getX(), this.getY(), this.getRadius(), start, end, false);
	ctx.closePath();
	ctx.fill();
}