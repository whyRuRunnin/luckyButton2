function replyClick(thisId) {
    if (x == thisId) {
        alert("This is the winning Button!");
    } else {
        alert("This is not the winning Button:(");
    }
}

function random_item() {
    var y = 3;
    return Math.floor(Math.random() * y);

}
var x = random_item();