A promise is an object that handles asynchronous data. A promise has three states:

* pending : when a promise is created or waiting for data.
* fulfilled : the asynchronous operation was handled successfully.
* rejected : the asynchronous operation was unsuccessful.

# fetch() GET Requests 

* Creates a request object that contains relevant information that an API needs.
* Sends that request object to the API endpoint provided.
* Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

```
fetch('http://api-to-call.com/endpoint').then(response => { // send request
    if(response.ok){
        return response.json();   //convert response object to json
    }
    throw new Error('Request failed!'); // code handles error

}, networkError => console.log(networkError.message) ).then(jsonResponse => {
    // code handles success
});

```
---
```
fetch('https://api-to-call.com/endpoint').then(
  response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(
    jsonResponse => {
      return jsonResponse;
  })
```

```
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint,{cache:'no-cache'}).then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

```

```
// Information to reach API
const url = 'htatps://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

```

---

# fetch() POST Requests 

```
fetch('http://api-to-call.com/endpoint',{ // send request
    method:'POST',
    body: JSON.stringify({id:'200'})
}).then(response => {
    if(response.ok){                       // convert response object to json
        return response.json();
    }
    throw new Error('Request failed!');         // handle error 
}, networkError => console.log(networkError.message)).then(jsonResponse => { // handles success
    // code 
})
```

---

```
fetch('https://api-to-call.com/endpoint',{
  method:'POST',
  body:JSON.stringify({id:'200'})
}).then(
  response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  },
  networkError => {
    console.log(networkError.message);
  }
).then(
  jsonResponse => {
    return jsonResponse;
  }
)
```

# Async GET Requests

* async and await

```
// async await GET

async function getData(){
    try {
        const response = await fetch('https:// endpoint');  // send request
        if (response.ok){
            const jsonResponse = await response.json(); // handles response if successful
            // code 
        }

        throw new Error('Request Failed');
    } catch(error) {
        console.log(error);
    }
}
```

```
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    throw new Error('Request failed!');

  } catch(error){
    console.log(error);
  }
}
```

```
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint,{
      cache:'no-cache'
    })

    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error){
    console.log(error);
  }

}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
```

# Async POST Request

```
// async await post 

async function getData(){
    try {
        const response = await fetch('https:// /endpoint',{
            method: 'POST',                                     // send request 
            body: JSON.stringify({id:'200'})
        })

        if(response.ok){
            const jsonResponse = await response.json();        // handles response if success
            // code 
        }

        throw new Error('Request Failed');

    } catch (error){
        console.log(error);
    }
}
```

```
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint',{
      method:'POST',
      body:JSON.stringify({id:200})
    });

    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    throw new Error('Request failed!');


  } catch(error){
    console.log(error);
  }
}
```

