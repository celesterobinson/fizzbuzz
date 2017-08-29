for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        createShape('fizzbuzz');
    } else if (i % 3 === 0) {
        createShape('fizz');
    } else if (i % 5 === 0) {
        createShape('buzz');
    } else {
        createShape('normal', i);
    }
}

function createShape(type, value){
    var shape = document.createElement('div');
    shape.innerHTML = '<h4>' + (value || type) + '</h4>';
    shape.classList.add(type);
    shape.classList.add('circle');
    document.getElementById('welcome').appendChild(shape);
}