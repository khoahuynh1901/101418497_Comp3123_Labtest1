const mixedArray = ["PIZZA", 10, true, 25, false, "wings"];

function lowerCaseWords(){
    return new Promise((resolve, reject) => {
        let stringValue = [];
        for (let i in mixedArray){
            if (typeof mixedArray[i] === 'string'){
                mixedArray[i] = mixedArray[i].toLowerCase();
                stringValue.push(mixedArray[i]);
                // console.log(stringValue);
            }
        }
        if (stringValue.length > 0) {
            resolve(stringValue);
        } else {
            reject("No string values found to process.");
        }
    })
}

lowerCaseWords().then((message)=> {
    console.log(message)
}).catch((error) =>{
    console.log(error)
})