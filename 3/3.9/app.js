const searchInput = document.querySelector("#searchInput");
const gallery = document.querySelector("#gallery");
const status = document.querySelector("#status");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const modalClose = document.querySelector("#modalClose");

let images = [];

status.innerText = "Loading . . .";

fetch("https://picsum.photos/v2/list?pages=1&limit-30")
  .then((res) => res.json())
  .then((data) => {
    images = data;
    status.innerText = "";
    renderGallery(images);
  })
  .catch(() => {
    status.innerText = "Failed to load images";
  });

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = images.filter((img) => {
    return img.author.toLowerCase().includes(query) || img.id.includes(query);
  });

  renderGallery(filtered);
});

function renderGallery(list) {
  gallery.innerHTML = "";

  if (list.length === 0) {
    gallery.innerText = "No results";
    return;
  }

  list.forEach((img) => {
    const card = document.createElement("div");
    card.className = "card";

    const thumb = document.createElement("img");

    thumb.src = `https://picsum.photos/id/${img.id}/300/200`;
    thumb.alt = img.author;

    const caption = document.createElement("p");
    caption.innerText = img.author;

    card.appendChild(thumb);
    card.appendChild(caption);

    card.addEventListener("click", () => {
      openModal(img);
    });
    gallery.appendChild(card);
  });
}

function openModal(img) {
  modalImage.src = `https://picsum.photos/id/${img.id}/1200/800`;
  modalImage.alt = img.author;
  modalCaption.innerText = `Author: ${img.author} | ID: ${img.id}`;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modalImage.src = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
