const elModalOpen = document.querySelector(".js-open-button");
const elModalClose = document.querySelector(".js-modal-close");
const elModal = document.querySelector(".modal");

elModalOpen.addEventListener("click", function(){
 elModal.classList.add("modal--open");
});

elModalClose.addEventListener("click", function(){
    elModal.classList.remove("modal--open");
   });  