# 💅 Styled-Responsive

Simple responsive grid system layout for React. Also you can inject the breakpoints in any component.

Live example: [https://codesandbox.io/s/n56nvvkm90](https://codesandbox.io/s/n56nvvkm90)

**Warning**

This component was created just for fun. You can find better components in: [awesome-styled-components](https://github.com/styled-components/awesome-styled-components#grid-systems) repository.

Not require `styled-component` BUT all example below are using that library.

## 👉🏻 Install Package

```
yarn add @ricardocanelas/styled-responsive
```

## 👉🏻 How to Use

1 - Add breakpoints

```
import { ThemeProvider } from 'styled-components'

const theme = {
  breakpoints: {
    xs: 0,
    sm: '48em',
    md: '64em',
    lg: '75em',
  },
}

class App extends Component {
  render() {
    return(
      <ThemeProvider theme={theme}>
        <Grid>
          <Box sm='50%' lg-bg='yellow'>
        </Grid>
      <ThemeProvider>
    )
  }
)
```

2 - Creating the Grid Component

*using the `media` method*

```
import styled from 'styled-components'
import { media } from '@ricardocanelas/styled-responsive'

export const Grid = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  ${media('xs')`max-width: 100%; padding: 8px;`}
  ${media('sm')`max-width: 49em;`}
  ${media('md')`max-width: 65em;`}
  ${media('lg')`max-width: 76em;`}
`
```

3 - Customizing any component

*using the `responsive` method*

```
import styled from 'styled-components'
import { responsive } from '@ricardocanelas/styled-responsive'

export const Box = styled.div`
  display: block;
  box-sizing: border-box;
  ${responsive('width')}
  ${responsive('background', 'bg')}
`
```

## 👉🏻 API

### **media(breakpoint)(css)**

Example:

```
${media('xs')`max-width: 100%; padding: 8px;`}
````

Will be:

```
@media (min-width: 0) {
  max-width: 100%;
  padding: 8px;
}
```


### **responsive(property, sufix)**

Example:

```
${responsive('width')}
````

Will be:

```
@media (min-width: 0) {
  width: ${props => props.xs};
}
@media (min-width: 48em) {
  width: ${props => props.sm};
}
@media (min-width: 64em) {
  width: ${props => props.md};
}
@media (min-width: 75em) {
  width: ${props => props.lg};
}
```

Using

```
<Mycomp sm='50%' />
```

---

Another Example:

```
${responsive('background', 'fundo')}
````

Will be:

```
@media (min-width: 0) {
  background: ${props => props['xs-fundo']};
}
@media (min-width: 48em) {
  background: ${props => props['sm-fundo']};
}
@media (min-width: 64em) {
  background: ${props => props['md-fundo']};
}
@media (min-width: 75em) {
  background: ${props => props['lg-fundo']};
}
```

Using

```
<Mycomp sm-fundo='#ccc' />
```

## 👉🏻 Code Examples

```
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { responsive, media } from '@ricardocanelas/styled-responsive';

const theme = {
  breakpoints: {
    xs: 0,
    sm: '48em',
    md: '64em',
    lg: '75em',
  },
}

const Grid = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  ${media('xs')`max-width: 100%;`}
  ${media('sm')`max-width: 49em;`}
  ${media('md')`max-width: 65em;`}
  ${media('lg')`max-width: 76em;`}
`

const GridItem = styled.div`
  box-sizing: border-box;
  ${responsive('width')}
  ${responsive('background-color', 'bg')}
  ${media('lg')`
    padding: 10px;
    box-sizing: border-box;
  `}
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Grid>
            <Flex>
              <GridItem
                xs='100%' sm='50%' md='33.3%' lg='10%'
                md-bg='blue' lg-bg='red'>
                First Item
              </GridItem>
              <GridItem
                xs='100%' sm='50%' md='33.3%' lg='90%'
                md-bg='blue' lg-bg='lightcoral'>
                Second item
              </GridItem>
            </Flex>
          </Grid>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
```

## License

MIT © [Ricardo Canelas](https://github.com/ricardocanelas)