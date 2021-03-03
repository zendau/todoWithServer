module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'google',
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'no-tabs': "off",
        "semi": "off",
        "quotes": "off",
        "linebreak-style": "off",
        "camelcase": "off",
        "indent": ["error", 4],
        "comma-dangle": "off",
        "require-jsdoc": "off",
        "max-len": "off",
        "arrow-parens": "off",
        "no-debugger": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-console": "off"
    },
}
