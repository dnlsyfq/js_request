### GET request

we’re retrieving, or getting, information from some source (usually a website). 

### POST request

For a POST request, we’re posting information to a source that will process the information and send it back.

---
## GET and POST requests by using JavaScript’s XHR object

use the Datamuse API for GET requests and the Rebrandly URL Shortener API for POST requests.

---

JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.

## XHR GET Requests I

```
// boiler plate 

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        return xhr.response;
    }
};

xhr.open('GET',url);
xhr.send();
```


A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =

```
'https://api.datamuse.com/words?key=value'
```

If you want to add an additional parameter you will have to use the & character to separate your parameters.

```
'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
```


### XHR POST Request

```
// XMLHttpRequest POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({id:'200'}); // convert data to a sting

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        // code 
    }
};

xhr.open('POST',url);
xhr.send(data);
```

```
xhr.setRequestHeader('Content-type', 'application/json');
```

## Request with ES6

A promise is an object that handles asynchronous data. A promise has three states:

* pending : when a promise is created or waiting for data.
* fulfilled : the asynchronous operation was handled successfully.
* rejected : the asynchronous operation was unsuccessful.
 
The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise.

### fetch()

* Creates a request object that contains relevant information that an API needs.
* Sends that request object to the API endpoint provided.
* Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

