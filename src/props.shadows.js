export default {
  '--shadow-color': '220 3% 15%',
  '--shadow-strength': '1%',
  
  '--shadow-0': 'none',
  '--shadow-xs': '0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))',
  '--shadow-sm': `
    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))`,
  '--shadow-md': `
    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
  '--shadow-lg': `
    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))`,
  '--shadow-xl': `
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
  '--shadow-xxl': `
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
}
