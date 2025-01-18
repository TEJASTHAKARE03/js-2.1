// real world ex
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback({ id: 1, name: "John Doe" }); // Pass data to the callback
    }, 2000);
}

function handleData(data) {
    console.log("Received data:", data);
}

fetchData(handleData);
