/*! npm install typescript ts-node @types/node
! npx tsc kodutoo.ts*/

var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = r;
        this.height = 30;
        this.width = 70;
    }
    Resistor.prototype.setParent = function (p) {
        this.parent = p;
    };
    return Resistor;
}());
var ParallelCircuit = /** @class */ (function () {
    function ParallelCircuit(g, startx, y) {
        this.g = g;
        this.startx = startx;
        this.y = y;
        this.resistors = [];
        this.additionalWidth = 10;
    }
    //kui r on muutunud siis käivitab selle
    ParallelCircuit.prototype.push = function (r) {
        this.resistors.push(r);
        r.setParent(this);
    };
    //joonistab ruudu g, startx:number, y:number
    ParallelCircuit.prototype.draw2 = function () {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
        var x = this.startx;
        for (var i = 0; i < this.resistors.length; i++) {
            var r = this.resistors[i];
            this.g.fillStyle = 'black';
            this.g.fillRect(x, this.y - r.height / 2, r.width, r.height);
            x += r.width + this.additionalWidth;
        }
    };
    return ParallelCircuit;
}());

let r1, pc1;

function startPage() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    r1 = new Resistor(110);
    pc1 = new ParallelCircuit(ctx, 30, 100);
    pc1.push(r1);

    //kuidas slaider ise töötab
    const slider = document.getElementById('ruudulaiusslider');
    slider.oninput = function() {
        ruudulaiusslider(parseInt(this.value));
    };
    //esimene ruut
    pc1.draw2();
}

function ruudulaiusslider(newWidth) {
    //pärast slaideri muutmist joonistab uue ruudu
    r1.width = newWidth;
    pc1.draw2();
}

window.onload = startPage;