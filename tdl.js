$('input').keypress(function(event) {
    if (event.which == 13 && $('input').val() != "") {
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + todoText + '<span><i class = "fa fa-check"</i></span>');
    }
});
$('ul').on('click', "span", function(event) { //to remove tasks
    $(this).parent().fadeOut(500, function() {
        var tt = $(this).text();

        $(this).remove();
        $('ol').append('<li>' + tt + '<span><i class = "fa fa-trash"</i></span>');

    });
    event.stopPropogation();
});
$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
});

function fn1() {
    var str = document.getElementsById("bb");
    alert("value ");
}
$('ol').on('click', "span", function(event) { //to remove completed tasks
    $(this).parent().fadeOut(500, function() {
        $(this).remove();


    });
    event.stopPropogation();
});