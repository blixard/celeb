function getName(){
    var current_add = window.location.href
    var name = current_add.split("=")
    document.getElementById("name").innerHTML = name[1]
}