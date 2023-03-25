const modal = document.querySelector(".modal"),
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

// Open modal
const openModal = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};
// Close modal
const closeModal = function () {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
};

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
