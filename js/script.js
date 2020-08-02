const $=window.jQuery;
$(function(){


        $(".check__p").click(function () {

            $(this).toggleClass("check__p_vector_disable");
            $(this).next(".check__input").trigger('click');
        });


    $(".agree__title").click(function () {

        $(this).toggleClass("agree__title_vector_disable");
        $(this).next(".agree__input").trigger('click');
    });

    $(".modal-open").click(function () {

        $(".modal").addClass("modal__opened");

    });

    $(".modal-close").click(function () {

        $(".modal").removeClass("modal__opened");

    });






    /*открытие меню со странами*/

    $(".country").click(function () {
        var str = $(this).text();
        //alert(str);
        countrySelect.value =  str;
        $(".modal__country .modal__p").text( str );

        $(".modal__country .modal-button__arrow").addClass("modal-button__arrow_close");
        $(".modal__country_big").toggleClass("modal__country_big_open");
        $(".modal__country .modal-button__clean").addClass("modal-button__clean_open");

    });


    $(".modal__country .modal-button__clean").click(function () {
        $(".modal__country .modal__p").text( 'Страна' );
        $(".modal__country .modal-button__clean").removeClass("modal-button__clean_open");
        $(".modal__country .modal-button__arrow").removeClass("modal-button__arrow_close");
        countrySelect.value =  0;
    });


    $(".modal__country .modal__p").click(function () {
        $(".modal__country_big").toggleClass("modal__country_big_open");
    });

    $(".modal__country .modal-button__arrow").click(function () {
        $(".modal__country_big").toggleClass("modal__country_big_open");
    });

    $(".title__country").click(function () {
        $(this).next(".list__country").toggleClass("list__country_open");
    });





/*скрываем меню со странами при клике за его пределами*/
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".modal__country_big"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.removeClass("modal__country_big_open"); // если условия выполняются - скрываем наш элемент
        }
    });






    /*меню выбор даты*/


    $('.datepicker-here').datepicker({
        // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
        minDate: new Date()
    })


    $(".modal__date .modal__p").click(function () {
        $(".modal__date_big").toggleClass("modal__date_big_open");
        $(".datepicker-here").trigger('click');
    });


    $(".modal__date .modal-button__arrow").click(function () {
         $(".modal__date_big").toggleClass("modal__date_big_open");
         $(".datepicker-here").trigger('click');
    });

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".modal__date_big");// определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        var block2 = $(".datepicker");
        if (!block.is(e.target)// проверка условия если клик был не по нашему блоку
            && !block2.is(e.target)
            && block.has(e.target).length === 0
            && block2.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.removeClass("modal__date_big_open");// если условия выполняются - скрываем наш элемент
        }
    });






    /*выбор двух дат в календаре*/




   $("body").on("click", function () {
         if($(".datepicker--cell-day").hasClass("-range-to-") ) {
             var dateFrom = $(".-range-from-").data('date');
             var monthFrom = $(".-range-from-").data('month');
             var dateFrom2 = '0' + dateFrom;
             var monthFrom2 = '0' + monthFrom;
             var dateFrom3 =   dateFrom2.substr(-2, 2)
             var monthFrom3 =   monthFrom2.substr(-2, 2)
             var dateTo = $(".-range-to-").data('date');
             var monthTo = $(".-range-to-").data('month');
             var dateTo2 = '0' + dateTo;
             var monthTo2 = '0' + monthTo;
             var dateTo3 =   dateTo2.substr(-2, 2)
             var monthTo3 =   monthTo2.substr(-2, 2)
             var str =  dateFrom3  + '.' + monthFrom3 + '-' + dateTo3  + '.' + monthTo3;
             $(".modal__date .modal__p").text( str );
             $(".modal__date .modal-button__arrow").addClass("modal-button__arrow_close");
             $(".modal__date .modal-button__clean").addClass("modal-button__clean_open");
         }
    });




    /*передача дат в input date*/
    $("body").on("click", function () {

            var dateFrom = $(".-range-from-").data('date');
            var monthFrom = $(".-range-from-").data('month');
            var yearFrom = $(".-range-from-").data('year');
            var dateFrom2 = '0' + dateFrom;
            var monthFrom2 = '0' + monthFrom;
            var dateFrom3 =   dateFrom2.substr(-2, 2)
            var monthFrom3 =   monthFrom2.substr(-2, 2)
            var dataFrom = yearFrom + '-' + monthFrom3 + '-' + dateFrom3;
            var From = document.querySelector('.date_from');
            From.value = dataFrom;

            var dateTo = $(".-range-to-").data('date');
            var monthTo = $(".-range-to-").data('month');
            var yearTo = $(".-range-to-").data('year');
            var dateTo2 = '0' + dateTo;
            var monthTo2 = '0' + monthTo;
            var dateTo3 =   dateTo2.substr(-2, 2)
            var monthTo3 =   monthTo2.substr(-2, 2)
            var dataTO = yearTo + '-' + monthTo3 + '-' + dateTo3;
            var To = document.querySelector('.date_to');
            To.value = dataTO;
    });



    $(".modal__date .modal-button__clean").on( "click", function() {
        //alert("ghbdtn")
        if($(".datepicker--cell-day").hasClass("-range-to-") ) {
            $(".datepicker--cell-day").removeClass("-range-to-");
        }

        if($(".datepicker--cell-day").hasClass("-range-from-") ) {
            $(".datepicker--cell-day").removeClass("-range-from-");
        }


        $(".modal__date .modal__p").text("Даты");
        $(".modal__date .modal-button__clean").removeClass("modal-button__clean_open");
        $(".modal__date .modal-button__arrow").removeClass("modal-button__arrow_close");
    });



    /*открытие меню с типом путешествия*/

    $(".kind").click(function () {
        var str = $(this).text();
        kindSelect.value =  str;
        $(".modal__kind .modal__p").text( str );
        $(".modal__kind .modal-button__arrow").addClass("modal-button__arrow_close");
        $(".modal__kind_big").toggleClass("modal__kind_big_open");
        $(".modal__kind .modal-button__clean").addClass("modal-button__clean_open");

    });


    $(".modal__kind .modal-button__clean").click(function () {
        $(".modal__kind .modal__p").text( 'Тип путешествия' );
        $(".modal__kind .modal-button__clean").removeClass("modal-button__clean_open");
        $(".modal__kind .modal-button__arrow").removeClass("modal-button__arrow_close");
        kindSelect.value =  0;
    });





    $(".modal__kind .modal__p").click(function () {
        $(".modal__kind_big").toggleClass("modal__kind_big_open");
    });


    $(".modal__kind .modal-button__arrow").click(function () {
        $(".modal__kind_big").toggleClass("modal__kind_big_open");
    });






    /*скрываем меню с типом путешествия при клике за его пределами*/
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".modal__kind_big"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            block.removeClass("modal__kind_big_open"); // если условия выполняются - скрываем наш элемент
        }
    });




});




