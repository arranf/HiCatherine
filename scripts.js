let stopped = true;
let me = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null && stopped == false) {
        angle += (time - lastTime) * 0.001;
    }
    me.style.top = (Math.sin(angle) * 200 - 60) + "px";
    me.style.left = (Math.cos(angle) * 200) + "px";
    if (stopped) return;
    requestAnimationFrame(newTime => animate(newTime, time));
}
function buttonPress() {
    if (stopped) {
        stopped = false;
        me.style.visibility = 'visible';
    }
    else stopped = true;
    requestAnimationFrame(animate);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    let content = document.querySelector(".content");

    if (content.clientWidth > 600) {
        content.style.margin = "0px 375px 0px  125px";
    };


}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".content").style.margin = "0px 15% 0px 15%";
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}