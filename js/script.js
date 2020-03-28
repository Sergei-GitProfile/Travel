const $=window.jQuery;
$(function(){


        $(".check__p").click(function () {

            $(this).toggleClass("check__p_vector_disable");
            $(this).next(".check__input").trigger('click');


        });





   /*$(".check__p").click(clickPrev);

    function clickPrev(){
        $(".check__input").trigger('click');
    };*/



});
