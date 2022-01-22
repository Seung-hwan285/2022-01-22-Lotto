const $=(s)=>document.querySelector(s);
const showResultButton = $('.open-result-modal-button')
const modalClose =$('.modal-close')
const modal = $('.modal')


const lottoNumbersToggleButton = $('.lotto-numbers-toggle-button')

const onModalShow = () => {
  modal.classList.add('open')
}

const onModalClose = () => {
  modal.classList.remove('open')
}

showResultButton.addEventListener('click', onModalShow)
modalClose.addEventListener('click', onModalClose)
