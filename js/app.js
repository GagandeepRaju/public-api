const gallery = document.querySelector("#gallery");

const modContainer = document.createElement("div");
modContainer.classList.add("modal-container");
modContainer.style.display = "none";
document.querySelector("body").append(modContainer);

let res = "";

let modalId = 0;

function galleryCard(response) {
  let modalGal = "";
  res = response;
  for (let i = 0; i < response.length; i++) {
    let name = response[i].name.first + " " + response[i].name.last;
    let email = response[i].email;
    let city = response[i].location.city;
    let state = response[i].location.state;
    let imgSrc = response[i].picture.large;
    modalGal = `<div id=${i} class="card">
                <div id=${i} class="card-img-container">
                    <img id=${i} class="card-img" src=${imgSrc} alt="profile picture">
                </div>
                <div id=${i} class="card-info-container">
                    <h3 id=${i} class="card-name cap">${name}</h3>
                    <p id=${i} class="card-text">${email}</p>
                    <p id=${i} class="card-text cap">${city}, ${state}</p>
                </div>
                </div>`;
    gallery.innerHTML += modalGal;
  }

  const eventCard = document.querySelectorAll(".card");
  for (let e = 0; e < eventCard.length; e++) {
    eventCard[e].addEventListener("click", (event) => {
      modalContainer();
      buildModal(parseInt(event.target.id));
    });
  }
}

function buildModal(id) {
  //
  modalId = id;
  let modal = `<div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
            <img class="modal-img" src=${res[modalId].picture.large} alt="profile picture">
            <h3 id="name" class="modal-name cap">${res[modalId].name.first} ${res[modalId].name.last}</h3>
            <p class="modal-text">${res[modalId].email}</p>
            <p class="modal-text cap">${res[modalId].location.city}</p>
            <hr>
            <p class="modal-text">${res[modalId].phone}</p>
            <p class="modal-text">${res[modalId].location.street.number} ${res[modalId].location.street.name}., ${res[modalId].location.city}, ${res[modalId].location.state} ${res[modalId].location.postcode}</p>
            <p class="modal-text">Birthday: ${res[modalId].dob.date}</p>
            </div>
            </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>`;

  modContainer.innerHTML = modal;

  const modalClose = document.querySelector("#modal-close-btn");
  const prevBtn = document.querySelector("#modal-prev");
  const nextBtn = document.querySelector("#modal-next");

  modalClose.addEventListener("click", () => {
    modContainer.style.display = "none";
  });

  prevBtn.addEventListener("click", () => {
    prevModal();
  });

  nextBtn.addEventListener("click", () => {
    nextModal();
  });
}

function modalContainer() {
  modContainer.style.display = "";
}

function prevModal() {
  console.log(modalId);
  if (modalId >= 1) {
    modalId -= 1;
    buildModal(modalId);
  }
}

function nextModal() {
  console.log(modalId);
  if (modalId < 11) {
    modalId += 1;
    buildModal(modalId);
  }
}
