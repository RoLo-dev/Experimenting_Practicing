let modal = document.getElementById('modal');
let modalContent = document.getElementById('modalContent');
let closeBtn = document.getElementById('closeBtn');
let modalBtn = document.getElementById('modalBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideModal);

function openModal() {
    modalContent.style.top = '40%';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.transition = 'all 0.3s';
}
function closeModal() {
    modalContent.style.top = '100%';
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modal.style.transition = '0.5s';
}
function outsideModal(e) {
    if (e.target == modal) {
        modalContent.style.top = '100%';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        modal.style.transition = '0.5s';
    }
}







// function openModal() {
//     modal.style.transition = '0.8s';
//     modal.style.top = '0';
//     modal.style.height = '100%';
//     console.log('Open sesame');
// }
// function closeModal() {
//     modal.style.height = '0%';
//     modal.style.top = '100%';
//     modal.style.transition = '0.4s';
//     console.log('See you next time');
// }
// function outsideModal(e) {
//     if (e.target == modal) {
//         modal.style.transition = '0.4s';
//         modal.style.top = '100%';
//         modal.style.height = '0%';
//     }
// }

