var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuba = /** @class */ (function () {
    function Tuba(height, width) {
        this.height = 0;
        this.width = 0;
        this.taburetid = [];
        this.pingid = [];
        this.height = height;
        this.width = width;
    }
    //lisab tabureti tuppa
    Tuba.prototype.addTaburet = function (r) {
        this.taburetid.push(r);
    };
    //lisab pingi tuppa
    Tuba.prototype.addPink = function (r) {
        this.pingid.push(r);
    };
    //joonistamise jaoks leiab asjad
    Tuba.prototype.getWidth = function () {
        var sum = 0;
        for (var _i = 0, _a = this.taburetid; _i < _a.length; _i++) {
            var r = _a[_i];
            sum += r.getWidth();
        }
        return sum + 10;
    };
    Tuba.prototype.getHeight = function () {
        return Math.max.apply(Math, this.taburetid.map(function (r) { return r.getHeight(); })) + 20;
    };
    //joonistab toolide ümber toa
    Tuba.prototype.draw = function (g, startx, y) {
        var x = startx;
        g.beginPath();
        g.moveTo(x, y);
        x += 5;
        g.stroke();
        var areaStartX = x;
        for (var i = 0; i < this.taburetid.length; i++) {
            this.taburetid[i].draw(g, x, y);
            x += this.taburetid[i].getWidth();
        }
        g.strokeStyle = "lightgray";
        g.beginPath();
        g.rect(areaStartX, y - this.getHeight() / 2, x - areaStartX, this.getHeight());
        g.stroke();
        g.strokeStyle = "black";
        g.beginPath();
        g.moveTo(x, y);
        x += 5;
        g.stroke();
    };
    return Tuba;
}());
var Taburet = /** @class */ (function () {
    function Taburet(külg, x, y, nimi) {
        this.nimi = "";
        this.külg = 0;
        this.x = 0;
        this.y = 0;
        this.külg = külg;
        this.x = x;
        this.y = y;
        this.nimi = nimi;
    }
    //joonistab tabureti
    Taburet.prototype.draw = function (g, startx, y) {
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx + this.getWidth() / 4, y - 10, this.getWidth() / 2, 20);
        g.moveTo(startx + this.getWidth() * 3 / 4, y);
        g.stroke();
    };
    //leiab pikkuse ja laiuse
    Taburet.prototype.getWidth = function () { return 30; };
    Taburet.prototype.getHeight = function () { return 30; };
    //lisab uue tabureti
    Taburet.prototype.newTaburet = function (g, startx, y) {
        g.clearRect();
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx + this.getWidth() / 4, y - 10, this.getWidth() / 2, 20);
        g.moveTo(startx + this.getWidth() * 3 / 4, y);
        g.stroke();
    };
    return Taburet;
}());
var Pink = /** @class */ (function (_super) {
    __extends(Pink, _super);
    function Pink(külg, x, y, nimi) {
        var _this = _super.call(this, 10, 10, 10, "pink") || this;
        _this.nimi = "";
        _this.külg = 0;
        _this.x = 0;
        _this.y = 0;
        _this.külg = külg;
        _this.x = x;
        _this.y = y;
        _this.nimi = nimi;
        return _this;
    }
    //joonistab pingi
    Pink.prototype.draw = function (g, startx, y) {
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx + this.getWidth() / 4, y - 10, this.getWidth() / 2, 20);
        g.moveTo(startx + this.getWidth() * 3 / 4, y);
        g.stroke();
    };
    //leiab asjad pingi jaoks
    Pink.prototype.getWidth = function () { return 50; };
    Pink.prototype.getHeight = function () { return 30; };
    //teeb uue pingi
    Pink.prototype.newPink = function (g, startx, y) {
        g.clearRect();
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx + this.getWidth() / 4, y - 10, this.getWidth() / 2, 20);
        g.moveTo(startx + this.getWidth() * 3 / 4, y);
        g.stroke();
    };
    return Pink;
}(Taburet));
