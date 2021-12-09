
#### CDN
- [https://unpkg.com/@cupcake-ds/cc-props/](https://unpkg.com/@cupcake-ds/cc-props/)
- [https://unpkg.com/@cupcake-ds/cc-props/cc-props.min.css](https://unpkg.com/@cupcake-ds/cc-props/cc-props.min.css)
- [https://unpkg.com/@cupcake-ds/cc-props/normalize.min.css](https://unpkg.com/@cupcake-ds/cc-props/normalize.min.css) - Normalize (light + dark)
- [https://unpkg.com/@cupcake-ds/cc-props/cc-props.tokens.json](https://unpkg.com/@cupcake-ds/cc-props/cc-props.tokens.json) - Design Tokens
- [https://unpkg.com/browse/@cupcake-ds/cc-props@latest/](https://unpkg.com/browse/@cupcake-ds/cc-props@latest/) - Full CDN list

#### CLI
- `npm run gen:op` - runs through `src/` js files and creates the PostCSS files in `src/`
- `npm run gen:nowhere`  - creates a version of Open Props without the use of `:where()`
- `npm run gen:prefixed` - creates a version of Open Props with each prop prefixed with `op`, like `--op-font-size-1`
- `npm run bundle` - creates all the various minified bundles of props
- `npm run lib:js` - builds the JS modules for NPM
