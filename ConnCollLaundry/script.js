// document.getElementById("main").innerHTML = "hi";

// Fetch the JSON file
fetch('dorms.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    // Parse the JSON data into a JavaScript object
    // console.log('Parsed JSON data:', jsonData);
    
    // Now you can access the object properties as needed
    // console.log('Value of key "foo":', jsonData.foo);
    for (const key in jsonData) {
      // console.log(`${key}: ${jsonData[key]}`);

      document.getElementById("dormlist").innerHTML += 
        `<li>
            <a href="https://laundryconnect.net/${jsonData[key]}">${key}</a>
        </li>`
    }
  })
  .catch(error => {
    console.error('There was a problem fetching or parsing the JSON file:', error);
  });



// fetch('preferences.json')
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
//   })
//   .then(jsonData => {
//     console.log(jsonData)
//     console.log("AHHHHHHHHHHHHH")
//   })
//   .catch(error => {
//     console.error('There was a problem fetching or parsing the JSON file:', error);
//   });


