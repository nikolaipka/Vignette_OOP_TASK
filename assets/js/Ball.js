function Ball(ctx, x, y, radius, color) {
	
	if (this.constructor === Ball) {
		throw new Error ('this class is abstract');
	}
	
	var _ctx = ctx
	var _x = x;
	var _y = y;
	var _radius = radius;
	var _color = color;
	
	this.getCtx = function() {
		return _ctx;
	}
	this.setCtx = function(value) {
		_ctx = value;
	}

	this.getX = function() {
		return _x;
	}
	this.setX = function(value) {
		_x = value;
	}
	this.getY = function() {
		return _y;
	}
	this.setY = function(value) {
		_y = value;
	}
	this.getRadius = function() {
		return _radius;
	}
	this.setRadius = function(value) {
		_radius = value;
	}
	this.getColor = function() {
		return _color;
	}
	this.setColor = function(value) {
		_color = value;
	}
}
