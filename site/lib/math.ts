export const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(n, a));

export const hex2rgb = (hex: string): [number, number, number] => {
	const val = parseInt(hex, 16);
	const r = (val >> 16) & 255;
	const g = (val >> 8) & 255;
	const b = val & 255;
	return [r, g, b];
}
