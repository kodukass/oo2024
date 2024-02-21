/*vibu tüüpide ja värvide küsimine*/
class Vibu 
{
    type: string;
    color: string;

    constructor(type: string, color: string)
    {
        this.type=type;
        this.color=color;
    }
    
}
class Grupp
{
    vibud:Vibu[]=[];
    /* näitab kõik pruunid vibu tüübid */
    pruunid()
    {
        let pruunidVibud: string[] = [];
        for (let i of this.vibud) {
            if (i.color == "Pruun") {
                pruunidVibud.push(i.type);
            }
        }
        return pruunidVibud;
    }
    /* näitab kõik vaistuvibu värvid */
    vaistud()
    {
        let vaistuVärvid: string[] = [];
        for (let i of this.vibud) {
            if (i.type == "Vaistuvibu") {
                vaistuVärvid.push(i.color);
            }
        }
        return vaistuVärvid;
    }
}

let v=new Grupp();
let v1=new Vibu("Vaistuvibu", "Kollane");
let v2=new Vibu("Sportvibu", "Roosa");
let v3=new Vibu("Pikkvibu", "Roheline");
let v4=new Vibu("Plokkvibu", "Must");
let v5=new Vibu("Pikkvibu", "Pruun");
let v6=new Vibu("Vaistuvibu", "Roosa");
v.vibud.push(v1, v2, v3, v4, v5, v6);

console.log("Antud pruunid vibud on:");
console.log(v.pruunid());
console.log("Antud vaistuvibude värvid on:");
console.log(v.vaistud());