let menuBar = document.querySelector("#menu-icon")
let search = document.querySelector("#search-icon")
let navBar = document.querySelector(".navlist")
let searchForm = document.querySelector(".search-form")


menuBar.onclick = () => {
    menuBar.classList.toggle("fa-times")
    navBar.classList.toggle("active")
    search.classList.remove("fa-times")
    searchForm.classList.remove("active")
}
search.onclick = () => {
    search.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
    menuBar.classList.remove("fa-times")
    navBar.classList.remove("active")
}

window.onscroll = () => {
    menuBar.classList.remove("fa-times")
    navBar.classList.remove("active")
    search.classList.remove("fa-times")
    searchForm.classList.remove("active")
}