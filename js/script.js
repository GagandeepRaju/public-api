const url = "https://randomuser.me/api/?results=12";
const xhr = new XMLHttpRequest();

//api request for 12 users preconfigured with url paramaters
//calling gallery card function with response result after state is ready and status is OK
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    const response = JSON.parse(xhr.response);
    galleryCard(response.results);
  }
};
xhr.open("GET", url);
xhr.send();
