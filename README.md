# 💅 Styled-Responsive

Simple responsive grid system layout for React. Also you can inject the breakpoints in any component.

Live example: [https://codesandbox.io/s/88vyq66yk0](https://codesandbox.io/s/88vyq66yk0)

**Warning**

This component was created just for fun. You can find better components in: [awesome-styled-components](https://github.com/styled-components/awesome-styled-components#grid-systems) repository.

## 👉🏻 Install Package

```
yarn add @ricardocanelas/styled-responsive
```

### Required Dependencies

## 👉🏻 Code Examples

Using with the `styled-components` lib.

```
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { responsive, media } from '@ricardocanelas/styled-responsive';

const theme = {
  breakpoints: {
    xs: 0,
    sm: '48em',
    md: '64em',
    lg: '75em',
  },
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Grid = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${media('xs')`max-width: 100%;`}
  ${media('sm')`max-width: 49em;`}
  ${media('md')`max-width: 65em;`}
  ${media('lg')`max-width: 76em;`}
`

const GridItem = styled.div`
  ${responsive('width')}
  ${responsive('background-color', 'bg')}
  ${media('lg')`
    padding: 10px;
    box-sizing: border-box;
  `}
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