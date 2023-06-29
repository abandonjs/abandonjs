export function RGBtoHSV(rgb) {
	rgb = this.getRGB(rgb)
	var rr, gg, bb,
		r = parseInt(rgb.red) / 255,
		g = parseInt(rgb.green) / 255,
		b = parseInt(rgb.blue) / 255,
		h, s,
		v = Math.max(r, g, b),
		diff = v - Math.min(r, g, b),
		diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};
	if (diff == 0) {
		h = s = 0;
	} else {
		s = diff / v; rr = diffc(r); gg = diffc(g); bb = diffc(b);
		if (r === v) {
			h = bb - gg;
		} else if (g === v) {
			h = (1 / 3) + rr - bb;
		} else if (b === v) {
			h = (2 / 3) + gg - rr;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}
	return {
		h: Math.round(h * 360),
		s: Math.round(s * 100),
		v: Math.round(v * 100)
	};
}
