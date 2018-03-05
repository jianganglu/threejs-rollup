export default {
	input: 'src/Three.js',
	output: [
		{
			format: 'umd',
			name: 'THREE',
			file: 'build/three.js',
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/three.module.js',
			indent: '\t'
		}
	]
}