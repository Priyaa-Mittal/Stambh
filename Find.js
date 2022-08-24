
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Subscribed';
});

$('#btn').click(function () {
    $('#btn').css({ 'background-color': 'green', 'width': '90px' });
});


$("#Ra").click(function () {
    $(".front").hide();
    $(".Tam").hide();
    $(".Raj").show();
    $(".UP").hide();
});
$("#Tm").click(function () {
    $(".Raj").hide();
    $(".front").hide();
    $(".UP").hide();
    $(".Tam").show();
});
$("#UP").click(function () {
    $(".front").hide();
    $(".Tam").hide();
    $(".Raj").hide();
    $('.UP').show();
});
