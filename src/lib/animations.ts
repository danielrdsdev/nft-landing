export const fade = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: {
		once: true,
	},
}

export const fadeScale = {
	initial: { opacity: 0, scale: 0.5 },
	whileInView: { opacity: 1, scale: 1 },
	viewport: {
		once: true,
	},
}

export const fadeUp = {
	initial: { opacity: 0, y: 50 },
	whileInView: { opacity: 1, y: 0 },
	viewport: {
		once: true,
	},
}

export const fadeLeft = {
	initial: { opacity: 0, x: 50 },
	whileInView: { opacity: 1, x: 0 },
	viewport: {
		once: true,
	},
}

export const fadeRight = {
	initial: { opacity: 0, x: -50 },
	whileInView: { opacity: 1, x: 0 },
	viewport: {
		once: true,
	},
}
