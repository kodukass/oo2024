/*! npm install typescript ts-node @types/node
! npx ts-node kt.ts*/

class Akvaarium
{
    nimi:string;
    pikkus: number;
    laius:number;
    kõrgus: number;
    vesi:number;

    constructor(pikkus: number, laius: number, kõrgus: number, vesi:number,nimi:string) {
        this.pikkus = pikkus;
        this.laius = laius;
        this.kõrgus = kõrgus;
        this.vesi=vesi;
        this.nimi=nimi;
    }

    ruumala()
    {
        let V:number=0;
        V=this.pikkus*this.laius*this.kõrgus;
        return V;
    }
    lisaVett()
    {
        this.vesi=this.vesi+10;
        return this.vesi;
    }
    kysiVett()
    {
        return this.vesi;
    }
    
}

class Grupp
{
    akvaariumid:Akvaarium[]=[];

    lisaAk(ak:Akvaarium)
    {
        this.akvaariumid.push(ak);
    }
    näitaAksid()
    {
        return this.akvaariumid.length;
    }
    valaVett():number
    {
        this.akvaariumid[0].vesi=this.akvaariumid[0].vesi-9;
        this.akvaariumid[1].vesi=this.akvaariumid[1].vesi+9;
        if (this.akvaariumid[1].kõrgus-this.akvaariumid[1].vesi<2)
        {
            console.log("Hoiatus! Akvaariumi ääreni on jäänud vähem kui 2 sentimeetrit!")
        }
        return this.akvaariumid[1].vesi;
    }
    kysiakd(): Akvaarium[]
    {
        return this.akvaariumid;
    }
}
let g=new Grupp();
let ak1=new Akvaarium(10,10,10,0,"ak1");
let ak2=new Akvaarium(20,10,10,10,"ak2");

console.log("Esimese akvaariumi ruumala on: "+ak1.ruumala()+"cm3 ja selles on praegu "+ak1.vesi+"cm3 jagu vett.");
console.log("Lisan vett...");
ak1.lisaVett();
console.log("Vett on nüüd "+ak1.kysiVett()+"cm3 jagu.");

//console.log("akvaariume gruppis: "+g.näitaAksid());
g.lisaAk(new Akvaarium(10,10,10,0,"ak3"));
g.lisaAk(new Akvaarium(20,10,20,10,"ak4"));
//console.log("akvaariume lisatud gruppis: "+g.näitaAksid());
//console.log(g.kysiakd());
console.log("Valan ühest akvaariumist teise 9cm3 vett...")
console.log("Akvaariumis on nüüd "+g.valaVett()+"cm3 vett.");
