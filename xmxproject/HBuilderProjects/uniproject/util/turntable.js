(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define ===
		"function" && define.amd ? define(factory) : global.Turntable = factory()
})(this, function() {
	"use strict";
	var appendCSS = function(css) {
		var head = document.head || document.getElementsByTagName("head")[0];
		var style = document.createElement("style");
		style.appendChild(document.createTextNode(css));
		head.appendChild(style)
	};
	var extend = function(target) {
		var arguments$1 = arguments;
		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments$1[i];
			for (var p in arg) {
				target[p] = arg[p]
			}
		}
		return target
	};
	var createSvgEle = function(name) {
		return document.createElementNS("http://www.w3.org/2000/svg", name)
	};
	var setAttrs = function(ele, attrs) {
		for (var t in attrs) {
			if (t == "href") {
				ele.setAttributeNS("http://www.w3.org/1999/xlink", t, attrs[t])
			} else {
				ele.setAttribute(t, attrs[t])
			}
		}
		return ele
	};
	var getPathPoint = function(oPoint, degree) {
		return {
			x: oPoint.x + oPoint.r * Math.cos(degree * (Math.PI / 180)),
			y: oPoint.y + oPoint.r * Math.sin(degree * (Math.PI / 180)),
			degree: degree
		}
	};
	var getPointsDistance = function(o, t) {
		return Math.sqrt(Math.pow(t.x - o.x, 2) + Math.pow(t.y - o.y, 2))
	};
	var movePoint = function(oPoint, tPoint, dis, len) {
		var x = -1 * (dis * (tPoint.x - oPoint.x) / len - tPoint.x);
		var y = -1 * (dis * (tPoint.y - oPoint.y) / len - tPoint.y);
		return {
			x: x,
			y: y
		}
	};
	var random = function(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1))
	};
	var defaults = {
		type: "frame",
		size: 320,
		textSpace: 15,
		imgSpace: 50,
		speed: 5,
		fastSpeed: 10,
		slowSpeed: 5,
		speedUp: 2e3,
		speedDown: 2e3,
		values: [],
		className: "turntable-effect",
		ring: 8
	};
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var Turntable = function Turntable(options) {
		this.opts = extend({}, defaults, options);
		if (!this.opts.values) {
			throw Error("values必须要有值");
			return
		}
		var half = this.opts.size / 2;
		this.center = {
			x: half,
			y: half,
			r: half
		};
		this.startPoint = {
			x: this.opts.size,
			y: half
		};
		this.values = this.opts.values;
		this.count = this.opts.values.length;
		this.degree = 360 / this.count;
		this.container = null;
		this.svg = null;
		if (this.opts.container) {
			this.draw(this.opts.container)
		}
	};
	Turntable.prototype.getValueIndexById = function getValueIndexById(id) {
		var r = this.values.filter(function(d) {
			return d.id == id
		}).map(function(d) {
			return d.index
		});
		return r[random(0, r.length - 1)]
	};
	Turntable.prototype.getValueDegreeByIndex = function getValueDegreeByIndex(index) {
		return this.values[index].degree
	};
	Turntable.prototype.setTransform = function setTransform(val) {
		this.svg.style.msTransform = val;
		this.svg.style.oTransform = val;
		this.svg.style.mozTransform = val;
		this.svg.style.webkitTransform = val;
		this.svg.style.transform = val
	};
	Turntable.prototype.turning = function turning() {
		this.turnTotal += this.turnBase;
		if (this.turnTotal >= 360 || this.turnTotal <= -360) {
			this.turnTotal = 0
		}
		this.setTransform("rotate(" + -this.turnTotal + "deg)")
	};
	Turntable.prototype.turned = function turned() {
		if (this.turnTotal >= 360 || this.turnTotal <= -360) {
			this.turnTotal = 0
		}
		this.turnTotal += this.turnBase;
		if (parseInt(this.turnTotal, 10) == parseInt(this.turnEndDegree)) {
			cancelAnimationFrame(this.animation);
			this.setTransform("rotate(" + -this.turnTotal + "deg)");
			this.isTurning = false;
			this.turnCallback(this.opts.values[this.index]);
			return false
		}
		this.setTransform("rotate(" + -this.turnTotal + "deg)");
		return true
	};
	Turntable.prototype.turn = function turn() {
		this.animation = requestAnimationFrame(function() {
			if (!this.isTurnStop) {
				this.turning();
				this.turn()
			} else {
				if (this.turned()) {
					this.turn()
				}
			}
		}.bind(this))
	};
	Turntable.prototype.start = function start() {
		if (this.isTurning) {
			return
		}
		this.turnBase = this.opts.speed;
		this.turnTotal = 0;
		this.isTurnStop = false;
		this.index = null;
		this.isTurning = true;
		this.turn();
		setTimeout(function() {
			this.turnBase = this.opts.fastSpeed
		}.bind(this), this.opts.speedUp)
	};
	Turntable.prototype.stop = function stop(id, cb) {
		this.index = this.getValueIndexById(id);
		this.turnEndDegree = this.getValueDegreeByIndex(this.index);
		this.turnBase = this.opts.slowSpeed;
		if (typeof cb !== "function") {
			cb = function() {}
		}
		this.turnCallback = cb;
		setTimeout(function() {
			this.turnBase = 1;
			this.isTurnStop = true
		}.bind(this), this.opts.speedDown)
	};
	Turntable.prototype.goto = function goto(id, cb) {
		if (this.isTurning) {
			return
		}
		this.isTurning = true;
		var deg = Math.abs(this.svg.style.transform.replace("rotate(", "").replace("deg)", "") || 0);
		var ndeg = deg != 0 ? Math.abs(this.turnEndDegree) : 0;
		ndeg = Math.abs(this.opts.ring * 360 + deg - ndeg);
		this.index = this.getValueIndexById(id);
		this.turnEndDegree = this.getValueDegreeByIndex(this.index);
		this.turnCallback = cb;
		this.setTransform("rotate(-" + (ndeg + this.turnEndDegree) + "deg)")
	};
	Turntable.prototype.draw = function draw(container) {
		var this$1 = this;
		var that = this;
		this.container = container;
		var svg = setAttrs(createSvgEle("svg"), {
			width: this.opts.size,
			height: this.opts.size,
			xmlns: "http://www.w3.org/2000/svg",
			"xmlns:xlink": "http://www.w3.org/1999/xlink"
		});
		var degree = this.degree;
		var pathStartPoint = this.startPoint;
		var pathEndPoint = getPathPoint(this.center, degree);
		this.values = this.values.map(function(info, i) {
			info.degree = i == 0 ? 90 + this$1.degree / 2 : this$1.values[i - 1].degree + this$1.degree;
			if (info.degree >= 360) {
				info.degree = info.degree - 360
			}
			info.index = i;
			var g = createSvgEle("g");
			var path = setAttrs(createSvgEle("path"), {
				fill: info.bg,
				d: "\n          M" + this$1.center.x + ", " + this$1.center.y + "\n          L" + pathStartPoint.x + ", " +
					pathStartPoint.y + "\n          A" + this$1.center.x + ", " + this$1.center.y +
					"\n          1 0, 1\n          " + pathEndPoint.x + ", " + pathEndPoint.y + "\n          z\n        "
			});
			g.appendChild(path);
			var fanCenterPoint = {
				x: (pathEndPoint.x + pathStartPoint.x) / 2,
				y: (pathEndPoint.y + pathStartPoint.y) / 2
			};
			var centerDistance = getPointsDistance(fanCenterPoint, this$1.center);
			var textDegree = 180 - (360 - this$1.degree * 2) / 2 / 2;
			var textPoint = movePoint(this$1.center, fanCenterPoint, this$1.opts.textSpace, centerDistance);
			var rotate = textDegree + this$1.degree * i;
			var text = setAttrs(createSvgEle("text"), {
				x: textPoint.x,
				y: textPoint.y,
				"text-anchor": "middle",
				fill: info.color,
				transform: "rotate(" + rotate + ", " + textPoint.x + ", " + textPoint.y + ")"
			});
			text.appendChild(document.createTextNode(info.name));
			g.appendChild(text);
			if (info.img) {
				var imgPoint = movePoint(this$1.center, fanCenterPoint, this$1.opts.imgSpace, centerDistance);
				var img = setAttrs(createSvgEle("image"), {
					width: info.img.width,
					height: info.img.height,
					href: info.img.src,
					x: imgPoint.x,
					y: imgPoint.y,
					transform: "rotate(" + rotate + ", " + imgPoint.x + ", " + imgPoint.y + ") translate(" + -(info.img.width /
						2) + ", " + -(info.img.height / 2) + ")"
				});
				g.appendChild(img)
			}
			svg.appendChild(g);
			pathStartPoint = pathEndPoint;
			pathEndPoint = getPathPoint(this$1.center, this$1.degree + this$1.degree * (i + 1));
			return info
		});
		container.appendChild(svg);
		this.svg = svg;
		if (this.opts.type == "transition") {
			this.initTransition()
		}
	};
	Turntable.prototype.initTransition = function initTransition() {
		var this$1 = this;
		setAttrs(this.svg, {
			class: this.opts.className
		});
		this.svg.addEventListener("transitionend", function() {
			this$1.isTurning = false;
			this$1.turnCallback(this$1.values[this$1.index])
		}, false);
		appendCSS("\n      ." + this.opts.className + " {\n        -webkit-transition: -webkit-transform " + this.opts.speed +
			"s ease-in-out;\n        transition: transform " + this.opts.speed + "s ease-in-out;\n      }\n    ")
	};
	return Turntable
});
