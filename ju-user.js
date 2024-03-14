// var js_user = document.querySelector(".Atz")
// console.log(js_user);
// js_user.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("hi");
// })


var daita = document.querySelector(".navbar-toggler")
// console.log(daita);

daita.onclick = function(){
    var NYm = document.querySelector(".TYZ");
    // NYm.style.backgroundColor = "red"
    NYm.style.cssText = "dispaly: flex; background-color: red; align-items: center;"
}