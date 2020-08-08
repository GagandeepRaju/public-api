const url = "https://randomuser.me/api/?results=1";
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    let response = JSON.parse(xhr.response);
    console.log(response.results);
  }
};
xhr.open("GET", url);
xhr.send();
