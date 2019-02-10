
export const responsive = (property, sufix) => (...args) => {
  const props = args[0];
  const theme = args[0].theme;
  if (theme && theme.hasOwnProperty('breakpoints')) {
    let out = ''
    Object.keys(theme.breakpoints).forEach(label => {
      const propName = sufix ? `${label}-${sufix}` : `${label}`;
      const value = props[propName];
      if (theme.breakpoints.hasOwnProperty(label) && value) {
        out += `@media (min-width: ${theme.breakpoints[label]}) {
          ${property}: ${value};
        }`
      }
    })
    return out;
  }
}

export const media = (breakpoint) => {
  return (css) => (...args) => {
    const theme = args[0].theme;
    let out = ''
    if (theme && theme.hasOwnProperty('breakpoints')) {
      Object.keys(theme.breakpoints).forEach(label => {
        if (label === breakpoint) {
          out += `@media (min-width: ${theme.breakpoints[label]}) {`
          out += css
          out += '}';
        }
      })
    }

    return out;
  }
}
