import fs from 'fs'

import Global from './props.global.js'
import Sizes from './props.sizes.js'
import * as OpenColors from './props.colors.js'
import BrandColors from './props.colors.brand.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Shadows from './props.shadows.js'
import Zindex from './props.zindex.js'

const [,,prefix,useWhere] = process.argv
const selector = useWhere === 'true' ? ':where(html)' : 'html'

const mainbundle = {
  'props.global.css': Global,
  'props.fonts.css': Fonts,
  'props.sizes.css': Sizes,
  'props.zindex.css': Zindex,
  'props.shadows.css': Shadows,
  'props.colors.css': OpenColors.default,
  'props.colors.brand.css': BrandColors,
  'props.borders.css': Borders,
}

const jsonbundle = {
  ...Global,
  ...OpenColors,
  ...BrandColors,
  ...Sizes,
  ...Zindex,
  ...Borders,
}
const designtokens = Object.entries(jsonbundle).map(([key, token]) => {
  return [key, {
    value: token
  }]
})

const JSONtokens = fs.createWriteStream('../cc-props.tokens.json')
JSONtokens.end(JSON.stringify(Object.fromEntries(designtokens), null, 2))

const buildPropsStylesheet = ({filename, props}) => {
  const file = fs.createWriteStream(filename)

  let appendedMeta = ''
  if (filename.includes('shadows')) {
    file.write(`@import 'props.media.css';\n\n`)
    appendedMeta = `@media (--OSdark) {
  ${selector} {
    --shadow-strength: 25%;
    --shadow-color: 220 40% 2%;
  }
}`
  }
  file.write(`${selector} {\n`)

  Object.entries(props).forEach(([prop, val]) => {
    if (prefix)
      prop = `--${prefix}-` + prop.slice(2)
    
    if (Array.isArray(val)) {
      let [animation, keyframes] = val
      appendedMeta += keyframes
      val = animation
    }

    file.write(`  ${prop}: ${val};\n`)
  })

  file.write('}\n')
  file.end(appendedMeta)
}

// gen prop variants
Object.entries({...mainbundle}).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props})
})

// gen index.css
const entry = fs.createWriteStream('index.css')
entry.write(`@import 'props.media.css';
`)
Object.keys(mainbundle).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()