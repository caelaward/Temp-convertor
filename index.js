
    
let c = document.querySelector('[data-celc]');
let f = document.querySelector ('[data-farhen]');
let btn = document.querySelector('[data-btn]')

function convert1() {
    let results = (parseFloat(c.value)*9/5) + 32
    f.value = parseFloat(results.toFixed(2))
}

function convert2() {
    let results = (parseFloat(f.value)-32) *9/5
    c.value = parseFloat(results.toFixed(2))
}

    c.addEventListener('input', convert1)
    f.addEventListener('input', convert2)


