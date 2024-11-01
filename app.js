async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
}

// Example usage
iterateWithAsyncAwait(['apple', 'banana', 'cherry']);



async function awaitCall() {
    // Simulating an API call with a promise
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched from API');
        }, 2000);
    });

    const data = await fetchData();
    console.log(data);
}

// Example usage
awaitCall();





async function awaitCall() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success/failure
            success ? resolve('Data fetched from API') : reject('API call failed');
        }, 2000);
    });

    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

// Example usage
awaitCall();





async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => {
        setTimeout(() => resolve('Response from API 1'), 2000);
    });

    const fetchData2 = () => new Promise(resolve => {
        setTimeout(() => resolve('Response from API 2'), 1500);
    });

    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log('Combined Results:', result1, result2);
}

// Example usage
concurrentRequests();






async function parallelCalls(urls) {
    const fetchData = (url) => new Promise(resolve => {
        setTimeout(() => resolve(`Response from ${url}`), 1000); // Simulating fetch delay
    });

    const promises = urls.map(url => fetchData(url));
    const results = await Promise.all(promises);
    console.log('All Responses:', results);
}

// Example usage
parallelCalls(['https://api.example.com/1', 'https://api.example.com/2', 'https://api.example.com/3']);
