export default {
    input: 'dist/es6/index.js',
    external: ['deck.gl'],
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        globals: {
            'deck.gl': 'deck'
        }
    }
};
