function GetRandomCode() {
    let elem = document.getElementById('code');
    let id = Math.floor(Math.random() * (9999 - 1000)) + 1000;

    elem.textContent = id;
    let event = {
        id: id,
        history: [
            {
                emoji: 'hmm',
                time: new Date().getTime()
            }
        ]
    };
    events.push(event);
}

let events = [];

function OnClickButton(string){

    let elem1 = document.getElementById('history');
    let div = document.createElement('div');
    let image = document.createElement('img');
    let time = document.createElement('label');
    let date = new Date();
    time.textContent = date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString() + '  ';
    elem1.scrollTop = 9999;
    image.src = 'emoji/' + string + '.jpg';
    div.appendChild(time);
    div.appendChild(image);
    elem1.appendChild(div);
}

function Submit(string) {

}



