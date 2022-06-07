exports.measurePromise =  async function (fun){
    //starting timer
    const start = performance.now()

    //slicing the array to only pass the real arguments to the function
    let args = [].slice.call(arguments)
    args.shift()

    //executing function
    const result = await fun.apply(this, args)

    //stopping timer
    const end = performance.now()

    //calculating time
    let time = end-start

    return({"time":time, "result": result})
}