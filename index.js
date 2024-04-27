// xmlHttpRequest to get data from api/backend
// xmlhttprequest not recognised by node and 
// hence index.js script added to index.html to get
// output in console

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);


xhr.onload = function() {
    if(xhr.status != 200){
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        let resArray = JSON.parse(xhr.responseText);
        resArray.forEach(element => {
            console.log("Flag : "+ element["flags"]["png"]);
            console.log("Name : "+ element["name"]["common"]);
            console.log("Region : "+ element["region"]);
            console.log("SubRegion : "+ element["subregion"]);
            console.log("Population : "+ element["population"]);
        });
    }
};

xhr.send();