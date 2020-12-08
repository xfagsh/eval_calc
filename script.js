function insert(num) {
    document.querySelector('.output').value = document.querySelector('.output').value+num;
    console.log("insert")
}

function clean() {
    document.querySelector('.output').value = "";
}

function equal() {
    let exp = document.querySelector('.output').value;

    if(exp){
        document.querySelector('.output').value = eval(document.querySelector('.output').value)
    }
}