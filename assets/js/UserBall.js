function UserBall(ctx, x, y, radius, color) {
	Ball.call(this, ctx, x, y, radius, color)
}

UserBall.prototype = Object.create(Ball.prototype);
UserBall.prototype.constructor = UserBall;

UserBall.prototype.drawBall = function() {
	var start = 0;
	var end = 2*Math.PI;
	var ctx = this.getCtx();
	ctx.fillStyle = this.getColor();
	ctx.beginPath();
	ctx.arc(this.getX(), this.getY(), this.getRadius(), start, end, false);
	ctx.closePath();
	ctx.fill();
}

UserBall.prototype.move = function() {
	var isMovingUp = false;
	var isMovingRight = false;
	var isMovingLeft = false;
	var isMovingDown = false;
	
	var speed = 5;
	
	handleKey() {
		if (e.keyCode == 37) {
			isMovingLeft = true;
		}
		if (e.keyCode == 38) {
			isMovingUp = true;
		}
		if (e.keyCode == 39) {
			isMovingRight = true;
		}
		if (e.keyCode == 40) {
			isMovingDown = true;
		}
	}
	
	init() {
		var _this = this;
		document.addEventListener('keyup', function(e) {
			_this.handleKey(e.keyCode, false)
		});
		document.addEventListener('keydown', function(e) {
			_this.handleKey(e.keyCode, true)
		});
		
	}
}