
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};


const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};

// Handling the resolved promise
resolvedPromise()
    .then((result) => {
        console.log(result);  // Output: { message: 'delayed success!' }
    })
    .catch((error) => {
        console.error(error);
    });

// Handling the rejected promise
rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);  // Output: { error: 'delayed exception!' }
    });
