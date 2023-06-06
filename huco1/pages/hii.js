import React from 'react';
import { useState, useEffect } from 'react';

function hii() {
 
    const[state, setState] = useState({})
    
    useEffect(() => {
      const url = "http://127.0.0.1:5000/api";
      
      fetch(url)
        .then(response => {
          if (response.status === 200) {
            return response.text(); // Get the response text
          } else {
            throw new Error("Failed to fetch data");
          }
        })
        .then(text => {
          console.log(text); // Log the response text
          
          try {
            const data = JSON.parse(text); // Parse the response text as JSON
            // Do something with the data
            console.log(data);
          } catch (error) {
            throw new Error("Invalid JSON format");
          }
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
    }, []);
    
    
  return(<div>
    hello
  </div>);
}

export default hii;
