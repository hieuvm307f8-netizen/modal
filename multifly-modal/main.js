const btnOpen = document.querySelectorAll('.btn');
const btnClose = document.querySelectorAll('.modal-close');
const modalBackdrop = document.querySelectorAll('.modal-backdrop');


let currentModal = null;


btnOpen.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e.target.dataset.modal)
    const modal = document.querySelector(e.target.dataset.modal);
    if(modal) {
      modal.classList.add('show');
      currentModal = modal;
    } else {
      console.error(`${e.target.dataset.modal} does not exist!`);
    }
  })
})


// close
btnClose.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal-backdrop');
    if(modal) {
      modal.classList.remove('show');
      currentModal = null;
    }
  })
})


modalBackdrop.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if(e.target.matches('.modal-backdrop')) {
      modal.classList.remove('show');
      currentModal = null;
    }
  })
})

document.addEventListener('keydown', (e) => {
  if(e.code === "Escape" && currentModal) {
    currentModal.classList.remove('show');
  }
})

