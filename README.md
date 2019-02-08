# 💅 Styled-Responsive

Simple responsive grid system layout for React. Also you can inject the breakpoints in any component.

**Warning**

This component was created just for fun. You can find better components in: [awesome-styled-components](https://github.com/styled-components/awesome-styled-components#grid-systems) repository.

## 👉🏻 Install Package

```
yarn add @ricardocanelas/styled-responsive
```

### Required Dependencies

- `react` > 16 or higher
- `styled-components` 4 or higher

## 👉🏻 Code Examples

```
import React, { Component } from "react";
import Container, { Responsive } from "styled-responsive";

/**
 * Configure breakpoints in any file which is being called
 * on the top aplication level (e.g. App.js, utils.js, etc.)
 */

Responsive.setBreakpoints({
  xs: { min: "0", width: "100%" },
  sm: { min: "576px", width: "576px" },
  md: { min: "768px", width: "768px" },
  lg: { min: "992px", width: "992px" },
  xl: { min: "1200px", width: "1200px" }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>Hello World!</h1>
        </Container>

        <Container>
          {({ current, breakpoints, visibles }) => (
            <div>
              <h1>
                Example with 'RenderProps' <b>({current})</b>
              </h1>

              <li>Current: {current}</li>
              <li>Info: {JSON.stringify(breakpoints[current])}</li>
              <li>Visibles: {JSON.stringify(visibles)}</li>
            </div>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
```

### **Another Example:**

```
// Box.js

import React from 'react'
import styled from 'styled-components'
import { withResposive } from 'styled-responsive'

const StyleColumn = withResposive(styled.div`
    padding: 6px;
    text-align: center;
`)

export default const Box = props => {
    return <StyleColumn {...props} />
}

// App.js

import React from "react";
import Container from "styled-responsive";
import Box from "./Box";

const App = props => {
  return (
    <Container>
      <Box xs="12" sm="6" md="4" lg="3">A</Box>
      <Box xs="12" sm="6" md="4" lg="3">B</Box>
      <Box xs="12" sm="6" md="4" lg="3" xl="12">C</Box>
    </Container>
  )
}
```


## License

MIT © [Ricardo Canelas](https://github.com/ricardocanelas)