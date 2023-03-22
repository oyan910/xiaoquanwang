
var toChange = {
    div: document.querySelector(".column"),
    events: document.querySelectorAll("a")
};



function initEvents() {
    var dom = toChange.events;
    var div = toChange.div;
    for (let i = 0; i < 5; i++) {
        dom[i].addEventListener('click', function () {
            console.log("已点击" + i);
        });
    }

    div.onclick = function () {

    }

}

export {
    initEvents
}
