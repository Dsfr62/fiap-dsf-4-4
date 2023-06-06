const pageTitleElement = document.getElementById("page-title")
pageTitleElement.addEventListener("mouseenter", (e) => {
    alert(`Cor escolhida: ${e.target.className}`)
})

const inputElement = document.getElementById("input-title")
let result = ""
inputElement.addEventListener("change", (e) => {
    result = e.target.value
})

const btnContainerElement = document.getElementById("btn-container")
btnContainerElement.addEventListener("click", (e) => {
    e.preventDefault()

    pageTitleElement.style = `color: ${e.target.id}; width: fit-content;`
    pageTitleElement.className = `${e.target.id}`
    pageTitleElement.innerHTML = result
})