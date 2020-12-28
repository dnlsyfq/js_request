

// XMLHttpRequest POST

```
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

const data = JSON.stringify({id:'200'}); // converts data to a string 

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        // handle response
    }
};

xhr.open('POST',url);  // open requests and send 
xhr.send(data);
```

// fetch

fetch('http://api-to-call.com/endpoint').then(  // send request
    response => {
        if(response.ok){                                // convert response object to json
            return response.json();
        }
    }, networkError => console.log(networkError.message) // handle error
).then(
    jsonResponse => {   // handle success

    }
);


