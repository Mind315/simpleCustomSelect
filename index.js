function select  () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectBody = document.querySelector('.select');
    let selectItem = document.querySelectorAll('.select__item');
    let selectCurrent = document.querySelector('.select__current');

    selectHeader.forEach((item) => {
        item.addEventListener('click', function () {
            this.parentElement.classList.toggle('is-opened');
        })
    })

    selectItem.forEach((item) => {
        item.addEventListener('click', function () {
            selectCurrent.innerText = this.innerText;
            document.querySelector('.select').classList.toggle('is-opened');
        })
    })
};

select();