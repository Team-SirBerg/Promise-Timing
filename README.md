# Hello!
Thanks for checking out my Repository. This is just a simple Module to measure how long a Promise takes to Resolve while getting the Results of the Promise.
If you have any Problems feel free to create an Issue over on [Github](https://github.com/Team-SirBerg/Promise-Timing/issues) :D
# Usage
```javascript
const {measurePromise} = require('promise-timing')

await measurePromise(yourPromiseBasedFunction, yourFirstArgument, yourSecondArgument, ...)
```
The arguments after the promisedBasedFunction will be passed to that function
So if you have a function that takes arguemnts like this:
```javascript
async function testfunction(argumentone, argumenttwo, argumentthree){
  return new Promise((resolve, reject)=>{
    //do heavy stuff
    resolve(yourresult)
  })
}
```
You could still pass the parameters to the function like this:
```javascript
await measurePromise(testfunction, argumentone, argumenttwo, argumentthree, etc...)
```

The Output will look like this:
```javascript
{ time: 123445, result: "your_result"}
```
The time is measured in Milliseconds (so 1sec = 1000ms)
