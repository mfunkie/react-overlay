# React Overlay [![npm version](https://badge.fury.io/js/react-overlay.svg)](http://badge.fury.io/js/react-overlay)
A React component used to overlay content.

## Deprecated Warning

0.1.7 will likely be the last release of react-overlay.  Use [react-overlays](https://github.com/react-bootstrap/react-overlays) instead.  It's awesome!

## Getting Started

Install react-overlay with npm

```js
npm install react-overlay --save
```

Require the Overlay component in your code

```js
import { Overlay } from 'react-overlay';
// or
const { Overlay } = require('react-overlay');
// or
var Overlay = require('react-overlay').Overlay;
```

Use the overlay in your code

```js
render() {
  // ...
  return (
    <div>
      <Overlay>
        <span>I am attached to the body!</span>
      </Overlay>
    </div>
  );
}
```
