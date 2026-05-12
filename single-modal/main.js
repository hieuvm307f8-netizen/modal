const btnOpen = document.querySelector("#open-modal");
const btnClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-backdrop");

const handleOpenModal = () => {
  modal.classList.add("show");
};

const handleCloseModal = () => {
  modal.classList.remove("show");
};

const handleCloseByKey = (e) => {
  if (e.code === "Escape") {
    modal.classList.remove("show");
  }
};

const handleClose = (e) => {
   if(e.target.matches('.modal-backdrop')) {
    modal.classList.remove('show');
   }
}

btnOpen.addEventListener("click", handleOpenModal);
btnClose.addEventListener("click", handleCloseModal);
modal.addEventListener("click", handleClose)
document.addEventListener("keydown", handleCloseByKey);
