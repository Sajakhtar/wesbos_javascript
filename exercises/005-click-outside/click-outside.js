const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handlecardButtonClick(e) {
        // console.log('clicked it');
        const button = e.currentTarget;
        const card = button.closest('.card');

        // grab the image src
        const imagSrc = card.querySelector('img').src;
        const name = card.querySelector('h2').textContent;
        const desc = card.dataset.description;

        // populate the modal
        modalInner.innerHTML = `
        <img width="600" height="600" src=${imagSrc.replace('200', '600')} alt=${name}>
        <p>${desc}</p>
        `;

        // show modal
        modalOuter.classList.add('open');
}

cardButtons.forEach((button) => button.addEventListener('click', handlecardButtonClick));

function closeModal() {
        modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (e) {
        // bool to see if event click is outside of modal
        const isOutside = !e.target.closest('.modal-inner');

        // remove modal open class, so modal disappears
        if (isOutside) {
                closeModal();
        }
});

window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
                closeModal();
        }
});
