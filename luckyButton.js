function replyClick(thisId) {
    if (x == thisId) {
        alert("This is the winning Button!");
    } else {
        alert("This is not the winning Button:(");
    }
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];

}

var items = ["btn1", "btn2", "btn3"];
var x = random_item(items);