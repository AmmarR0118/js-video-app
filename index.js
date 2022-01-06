var titles = document.getElementsByClassName('sidebar-txt')
var videos = document.getElementsByClassName('side-vid')
var wrapper = document.getElementsByClassName('wrapper')
var video = document.querySelector('#video')
var title = document.querySelector('.title-vid')
var desc = document.querySelector('.desc')

for (var i = 0; i < titles.length; i++) {
    titles[i].innerHTML = jsonData[i].title;
    videos[i].src = jsonData[i].vid;
}
generate(0)
function generate(index) {
    video.src = jsonData[index].vid;
    title.innerHTML = jsonData[index].title;
    desc.innerHTML = jsonData[index].desc
}
for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener('click', function() {
        generate(i)
    })
    videos[i].addEventListener('mouseover', function() {
        this.play();
    })
    videos[i].addEventListener('mouseout', function() {
        this.pause();
    })
}
window.onload() = function() {
    video.play();
}