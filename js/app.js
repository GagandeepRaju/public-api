const gallery = document.querySelector("#gallery");

function galleryCard(response) {
  let modalGal = "";
  for (let i = 0; i < response.length; i++) {
    // console.log(response[i].picture.thumbnail);
    let name = response[i].name.first + " " + response[i].name.last;
    let email = response[i].email;
    let city = response[i].location.city;
    let state = response[i].location.state;
    let imgSrc = response[i].picture.large;

    modalGal = `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src=${imgSrc} alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${name}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${city}, ${state}</p>
                </div>
                </div>`;
    gallery.innerHTML += modalGal;
  }
}
