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

let openbtn = document.querySelector(".openbtn");
let closebtn = document.querySelector(".closebtn");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

    openbtn.style.marginRight = "250px";
    closebtn.style.marginRight = "250px";

    setTimeout(function () {
        openbtn.style.display = "none";
        closebtn.style.display = "block";
    }, 460);
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    openbtn.style.marginRight = "0";
    closebtn.style.marginRight = "0";

    setTimeout(function () {
        openbtn.style.display = "block";
        closebtn.style.display = "none";
    }, 460);
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
    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    evt.currentTarget.className += " active";
}


function reveal() {
    text = document.getElementsByClassName("blurry-text");

    var i;
    for (i = 0; i < text.length; i++) {
        para = text[i];
        para.style.textShadow = "none";
        para.style.color = "inherit";
    }

    revealButton = document.getElementById("reveal");
    revealButton.className += " hidden";

    hideButton = document.getElementById("hide");
    hideButton.classList.remove("hidden");
}

function hide() {
    text = document.getElementsByClassName("blurry-text");

    var i;
    for (i = 0; i < text.length; i++) {
        para = text[i];
        para.style.textShadow = "0 0 10px rgba(0,0,0,0.5)";
        para.style.color = "transparent";
    }

    revealButton = document.getElementById("reveal");
    revealButton.classList.remove("hidden");
    

    hideButton = document.getElementById("hide");
    hideButton.className += " hidden";
    
}

var details = false;
function openDetails(cardId) {
    let card = document.getElementById(cardId);
    let details = card.querySelector(".details");

    if (details.classList.contains("showing")) {
        details.style.maxHeight = "0";

        details.classList.remove("showing");

        card.querySelector(".more-button").querySelector("p").querySelector("i").style.transform = "rotate(0deg)";
    }
    else {
        details.style.maxHeight = details.scrollHeight + "px";

        details.classList.add("showing");

        card.querySelector(".more-button").querySelector("p").querySelector("i").style.transform = "rotate(180deg)";
    }


}

