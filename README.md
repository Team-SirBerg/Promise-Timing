# Hello!
Thanks for checking out my Repository. This is just a simple Module to measure how long a Promise takes to Resolve while getting the Results of the Promise
# Usage
```javascript
const {measurePromise} = require('promise-timing')

await measurePromise(yourPromiseBasedFunction, yourFirstArgument, yourSecondArgument, ...)
```
The arguments after the function will be passed to that function

The Output will look like this:
```javascript
{ time: 123445, result: "your_result"}
```
The time is measured in Milliseconds (so 1sec = 1000ms)