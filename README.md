# [React Components TypeScript npm Starter](https://github.com/the-mes/react-components-typescript-npm-starter) WIP

[![NPM version](https://img.shields.io/npm/v/react-components-typescript-npm-starter?style=flat-square)](https://www.npmjs.com/package/react-components-typescript-npm-starter)
[![NPM downloads](https://img.shields.io/npm/dm/react-components-typescript-npm-starter?style=flat-square)](https://www.npmjs.com/package/react-components-typescript-npm-starter)
[![NPM license](https://img.shields.io/npm/l/react-components-typescript-npm-starter?style=flat-square)](https://www.npmjs.com/package/react-components-typescript-npm-starter)
[![Codecov](https://img.shields.io/codecov/c/github/the-mes/react-components-typescript-npm-starter?style=flat-square)](https://codecov.io/gh/the-mes/react-components-typescript-npm-starter)
[![Travis](https://img.shields.io/travis/the-mes/react-components-typescript-npm-starter/master?style=flat-square)](https://travis-ci.org/the-mes/react-components-typescript-npm-starter)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-components-typescript-npm-starter?style=flat-square)](https://bundlephobia.com/result?p=react-components-typescript-npm-starter)

## About

Template for React TypeScript Component library

### Alternatives

<!-- TODO -->
<!-- - [Fluent UI styles](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout) -->

## Contents

- [Demo](#demo)
- [How to Install](#how-to-install)
- [Components](#components)
  - [Grid](#grid)
  - [Row](#row)
  - [Col](#col)
- [Example](#example)

## Demo

[**Playground – play with library in Storybook**](https://the-mes.github.io/react-components-typescript-npm-starter/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-components-typescript-npm-starter
```

Or Yarn:

```sh
$ yarn add react-components-typescript-npm-starter
```

## Getting Started

**Import `Grid` and use as Compound Component:**

```jsx
import { Grid } from 'react-components-typescript-npm-starter';

...

<Grid>
  <Grid.Row>
    <Grid.Col>Col content here...</Grid.Col>
    ...
  </Grid.Row>
  ...
</Grid>

...
```

**Or import all components:**

```jsx
import { Grid, Row, Col } from 'react-components-typescript-npm-starter';

...

<Grid>
  <Row>
    <Col>Col content here...</Col>
    ...
  </Row>
  ...
</Grid>

...
```

## Components

### Grid

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

_You need to specify grid order for correct positioning. Add `dir="ltr"` – (order from left to right) or `dir="rtl"` – (right to left/reversed order)_

### Row

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

### Col

#### Available options

[HTML div element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) and dedicated params based on Fluent UI class names

[Check corresponding Fulent UI class names here](https://developer.microsoft.com/en-us/fluentui#/styles/web/layout)

| Param           | Type                            |
| --------------- | ------------------------------- |
| `sizeSm`        | number or string (between 1-12) |
| `sizeMd`        | number or string (between 1-12) |
| `sizeLg`        | number or string (between 1-12) |
| `sizeXl`        | number or string (between 1-12) |
| `sizeXxl`       | number or string (between 1-12) |
| `sizeXxxl`      | number or string (between 1-12) |
| `smPush`        | number or string (between 1-12) |
| `mdPush`        | number or string (between 1-12) |
| `lgPush`        | number or string (between 1-12) |
| `xlPush`        | number or string (between 1-12) |
| `xxlPush`       | number or string (between 1-12) |
| `xxxlPush`      | number or string (between 1-12) |
| `smPull`        | number or string (between 1-12) |
| `mdPull`        | number or string (between 1-12) |
| `lgPull`        | number or string (between 1-12) |
| `xlPull`        | number or string (between 1-12) |
| `xxlPull`       | number or string (between 1-12) |
| `xxxlPull`      | number or string (between 1-12) |
| `hiddenSm`      | boolean                         |
| `hiddenMd`      | boolean                         |
| `hiddenMdDown`  | boolean                         |
| `hiddenMdUp`    | boolean                         |
| `hiddenLg`      | boolean                         |
| `hiddenLgDown`  | boolean                         |
| `hiddenLgUp`    | boolean                         |
| `hiddenXl`      | boolean                         |
| `hiddenXlDown`  | boolean                         |
| `hiddenXlUp`    | boolean                         |
| `hiddenXxl`     | boolean                         |
| `hiddenXxlDown` | boolean                         |
| `hiddenXxlUp`   | boolean                         |
| `hiddenXxxl`    | boolean                         |

## Example

### Basics

```jsx
<Grid dir="ltr">
  <Grid.Row>
    <Grid.Col sizeSm={6} sizeMd={4} sizeLg={2}>
      A
    </Grid.Col>

    <Grid.Col sizeSm={6} sizeMd={6} sizeLg={10}>
      B
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Inheritance

```jsx
<Grid dir="ltr">
  <Grid.Row>
    <Grid.Col sizeSm={12} sizeLg={4}>
      Example
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Push and pull

```jsx
<Grid dir="ltr">
  <Grid.Row>
    <Grid.Col sizeSm={4} smPush={8}>
      First in code
    </Grid.Col>

    <Grid.Col sizeSm={8} smPull={4}>
      Second in code
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Visibility

```jsx
<Grid dir="ltr">
  <Grid.Row>
    <Grid.Col sizeSm={12} hiddenXxlUp>
      Visible on smaller screens
    </Grid.Col>

    <Grid.Col sizeSm={12} hiddenXlDown>
      Visible on larger screens
    </Grid.Col>
  </Grid.Row>
</Grid>
```

### Without Compound Components

```jsx
<Grid style={style} dir="ltr">
  <Row>
    <Col sizeSm="6" sizeMd={4} sizeLg={2}>
      <DemoBlock>A</DemoBlock>
    </Col>

    <Col sizeSm={6} sizeMd="8" sizeLg={10}>
      <DemoBlock>B</DemoBlock>
    </Col>
  </Row>
</Grid>
```

## License

This project is licensed under the MIT License © 2021-present Jakub Biesiada
