(() => {
  const refs = {
    openModalBtn:  document.querySelector(".modal__btn--open"),
    closeModalBtn: document.querySelector(".modal__btn--close"), 
    modal: document.querySelector(".modal__data"),
    modalSection: document.querySelector(".modal__section")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    /* refs.modal.classList.toggle("is-hidden"); */
    refs.modal.classList.toggle("modal");
    refs.modalSection.classList.toggle("modal2")
  }
})();