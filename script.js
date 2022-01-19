const colorObj = {
    simpleColor: ["black", "red", "purple", "yellow", "green", "white", "blue", "orange", "pink"],
    hexColor: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
};


const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let y = Math.floor(Math.random() * 2);
    if (y == 0) {
        var col = getSimpleRandomColorName();
        const span = document.getElementById('name');
        document.body.style.backgroundColor = col;
        span.innerText = col;
        if (col != 'black') {
            // document.body.innerText.style.color = 'grey';
            span.style.color = col;
            span.parentElement.style.color = col;
        } else {
            span.style.color = 'white';
            span.parentElement.style.color = 'white';
        }
    } else {
        var col = getHexRandomColorName();
        const span = document.getElementById('name');
        document.body.style.backgroundColor = col;
        span.innerText = col;
        span.style.color = col;
        span.parentElement.style.color = col;
    }
});

function getSimpleRandomColorName() {
    return colorObj.simpleColor[Math.floor(Math.random() * colorObj.simpleColor.length)];
};

function getHexRandomColorName() {
    var hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += colorObj.hexColor[Math.floor(Math.random() * colorObj.hexColor.length)];
    }
    return hexcolor;

};