const tableBody = document.getElementById('repo-table');
const fetchButton = document.getElementById('fetch-button');
const cityName = document.getElementById('city-name')

function getLocation() {
    // Convert city name to lat and lon
    let requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q={Austin}&limit=5&appid={9ab5c3c410bf6c44032e9b9b486aa30}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
            for (const repo of data) {
        }});
}
function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={9ab5c3c410bf6c44032e9b9b486aa30}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to keep track of the index `(i)`.
      for (const repo of data) {
        // Creating elements, tablerow, tabledata, and anchor
        const createTableRow = document.createElement('tr');
        const tableData = document.createElement('td');
        const link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = repo.html_url;
        link.href = repo.html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getLocation);