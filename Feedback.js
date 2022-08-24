$(".know-btn").click(function () {
    $(".know").show();
    $(".feed").hide();
    $(".know-btn").css({ 'border-bottom': '2px solid Green' });
    $(".background").css({ 'height': '100%' });
    $('.feed-btn').css({ 'border-style': 'none' });
});
$(".feed-btn").click(function () {
    $(".know").hide();
    $(".feed").show();
    $(".feed-btn").css({ 'border-bottom': '2px solid Green' });
    $('.know-btn').css({ 'border-style': 'none' });
});
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Subscribed';
});

$('#btn').click(function () {
    $('#btn').css({ 'background-color': 'green', 'width': '90px' });