

function get_link(){
    var current_loaction = window.location.href
    var name = current_loaction.split("=")
    var link = "blixard.github.io/celeb/index.html?q="+name[1]
    document.getElementById("link").innerHTML = link
}

function gotolink(){
    var current_loaction = window.location.href
    var name = current_loaction.split("=")
    var n = "index.html?q="+name[1]
    console.log(n)
    var link = "blixard.github.io/celeb/index.html?q="+name[1]
    document.goto_form.action = link
    return true;
}