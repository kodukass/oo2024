//on vibud ja jubinad (vibude jaoks)
class Vibu 
{
    name: string;
    jubin: any;

    constructor(name: string)
    {
        this.name=name;
    }
}

class Jubin 
{
    name: string;
    vibud:Vibu[]=[];

    constructor(name: string)
    {
        this.name=name;
    }

    addJubin(vibu: Vibu): any {
        if (vibu.jubin == null) {
            this.vibud.push(vibu);
            vibu.jubin = this;
        }
    }
    
}
//kui vibul on jubinad siis ütleb et on sportvibu, kui ei siis on vaistuvibu
let vibu1 = new Vibu("Vibu1");
let vibu2 = new Vibu("Vibu2");

let stabikas:Jubin = new Jubin("Stabilisaator");
let joonlaud:Jubin = new Jubin("Sihik");

stabikas.addJubin(vibu1);
