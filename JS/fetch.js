fetch('http://localhost:3600/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": "Marcos",
            "lastName": "Silva",
            "email": "marcos.henrique@toptal.com",
            "password": "s3cr3tp4sswo4rd"
        })
    })
    .then(response => response.json())
    .then(data => console.log('Request succeeded with JSON response', data))
    .catch(error => console.log('Request failed', error));

    

fetch(endpoint, {
    method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));