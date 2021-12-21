const sara = () => {

    const modalBtn = $('.sara__button');
    const modalClose = $('.form__modal-knopa');
    const modalOrder = $('.modal-order');
    
    modalBtn.on('click', () => {
        modalOrder.show(200);
        //  $(this).parents('body').fadeIn
        $(this).css('background-color', 'rgba(0, 0, 0, 0.67)');
        // background: rgba(0, 0, 0, 0.67); сделать задний фон другого цвета
        
    });

    modalClose.on('click', () => {
        modalOrder.hide(200);
     
        
    });

    const modalTitle = $('.form__subtitle');

    $('.form-field__input-number').focus( () => {
        modalTitle
        .text(`Введите ваш телефон`)
    })

    $('.form-field__input-email').focus( () => {
        modalTitle
        .text(`Введите ваш e-mail`)
    })

    $('.form-field__input').blur( () => {
        modalTitle.text('Заполните форму');
    })

    // $('.form-field__input').on('change', (event) => {
    //     console.log(event.type);
    // })



}

export  {sara}