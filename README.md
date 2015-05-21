# react-overlay
A React component used to overlay content.

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
