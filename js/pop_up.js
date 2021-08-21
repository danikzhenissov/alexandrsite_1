$('.open_pop_up').click(function(e){
    e.preventDefault();
    $('.pop_up_bg').fadeIn(600)
});
$('.close_pop_up').click(function(){
    $('.pop_up_bg').fadeOut(600)
});