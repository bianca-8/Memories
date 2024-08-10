function kil() {
    window.location.href = 'kil.html';
}

function inv() {
    window.location.href = 'inv.html';
}

function icdc() {
    window.location.href = 'icdc.html';
}

function six() {
    window.location.href = 'six.html';
}

function sta() {
    window.location.href = 'sta.html';
}

function apo() {
    window.location.href = 'apo.html';
}

function ri() {
    window.location.href = 'ri.html';
}

function mo() {
    window.location.href = 'mo.html';
}

function val() {
    window.location.href = 'val.html';
}

function add() {   
    const h = prompt('Name');
    console.log(h);
    if (h) {
        const div = document.createElement('div');
        div.innerHTML = '<h2>' + h + '</h2>';
        document.getElementById('memory-container').appendChild(div);
    }
}