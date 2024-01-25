
    
    // var img = document.getElementById("zoomM");

    // img.onmouseover = function() {
    //     this.style.transform = "scale(1.2)";
    // }
    // img.onmouseout = function() {
    //     this.style.transform = "scale(1)";
    // }

// function zoomIn (element) {
//     element.style.transform = "scale(1.3) translate(15%, 10%)";
// }
// function zoomOut (element) {
//     element.style.transform = "scale(1) translate(0,0)";
// }

function openModal (imageSrc, description) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = description;
}

function closeModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}


document.getElementById('expandBtn').addEventListener('click', function() {
    var description = document.querySelector('.description');
    description.classList.toggle('open');
    if (description.classList.contains('opan')) {this.textContent = 'Свернуть';
        } else {
            this.textContent = 'Развернуть';
        }
})
