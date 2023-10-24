import axios from 'axios';

const userData = {
  first_name: 'Lisa',
  last_name: 'Belangel',
};

// Send a POST request to save user information
axios.post('http://localhost:3000/save', userData)
  .then((response: any) => {
    // Add a type annotation for the 'response' parameter (it may vary based on your API response)
    console.log(response.data);
  })
  .catch((error: any) => {
    // Add a type annotation for the 'error' parameter (it may vary based on your API error response)
    console.error(error);
  });

// Send a GET request to retrieve user information
axios.get('http://localhost:3000/get')
  .then((response: any) => {
    // Add a type annotation for the 'response' parameter (it may vary based on your API response)
    console.log(response.data);
  })
  .catch((error: any) => {
    // Add a type annotation for the 'error' parameter (it may vary based on your API error response)
    console.error(error);
  });
