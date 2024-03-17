var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var CmToInch = /** @class */ (function () {
    function CmToInch() {
    }
    CmToInch.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInch.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInch.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInch;
}());
var CmToKm = /** @class */ (function () {
    function CmToKm() {
    }
    CmToKm.prototype.calculate = function (cm) {
        return cm / 1000;
    };
    CmToKm.prototype.inputUnit = function () {
        return "cm";
    };
    CmToKm.prototype.outputUnit = function () {
        return "km";
    };
    return CmToKm;
}());
var KmHToMS = /** @class */ (function () {
    function KmHToMS() {
    }
    KmHToMS.prototype.calculate = function (kmh) {
        return kmh * 0.27778;
    };
    KmHToMS.prototype.inputUnit = function () {
        return "km/h";
    };
    KmHToMS.prototype.outputUnit = function () {
        return "m/s";
    };
    return KmHToMS;
}());
var AXplusB = /** @class */ (function () {
    function AXplusB(coeficient, inputUnitType, outputUnitType) {
        this.coeficient = coeficient;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    AXplusB.prototype.calculate = function (x) {
        return this.coeficient * x;
    };
    AXplusB.prototype.inputUnit = function () { return this.inputUnitType; };
    AXplusB.prototype.outputUnit = function () { return this.outputUnitType; };
    return AXplusB;
}());
