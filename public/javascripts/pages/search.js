window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('sort')) {
        sortClick(urlParams.get('sort'));
    }
}

function sortClick(str) {
    var button = document.getElementById(str);
    button.click();

    var link = document.getElementById(str+'-link');
    var allLinks = document.getElementsByClassName('sort');
    
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style = "";
    }

    link.style = "color: #FFFFFF;";

    console.log("Clicked: " + button.value);
}