var modal = document.getElementById('modal-index');
var show = document.getElementById("show-modal");
var close = document.getElementsByClassName("modal-close")[0];
show.onclick = function () {
    modal.style.display = "block"
    show.style.display = "none"
    close.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none"
    show.style.display = "block"
    close.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}