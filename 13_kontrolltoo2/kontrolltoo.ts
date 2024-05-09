class Tuba
{
    height: number = 0;
    width: number = 0;
    taburetid: Taburet[]=[];
    pingid: Pink[]=[];
    constructor(height: number,width: number) 
    {
        this.height = height;
        this.width = width;
    }
    //lisab tabureti tuppa
    addTaburet(r: Taburet): void{
        this.taburetid.push(r);
    }
    //lisab pingi tuppa
    addPink(r: Pink): void{
        this.pingid.push(r);
    }
    //joonistamise jaoks leiab asjad
    getWidth(): number {
        let sum=0;
        for(let r of this.taburetid){
            sum+=r.getWidth();
        }
        return sum+10;
    }
    getHeight(): number{
        return Math.max(...this.taburetid.map(r => r.getHeight()))+20;
    }
    //joonistab toolide ümber toa
    draw(g, startx: number, y: number){
        let x=startx;
        g.beginPath();
        g.moveTo(x, y);
        x+=5;
        g.stroke()
        let areaStartX=x;
        for(let i=0; i<this.taburetid.length; i++){
          this.taburetid[i].draw(g, x, y);
          x+=this.taburetid[i].getWidth();
        }
        g.strokeStyle="lightgray";
        g.beginPath();
        g.rect(areaStartX, y-this.getHeight()/2, x-areaStartX, this.getHeight());
        g.stroke();
        g.strokeStyle="black";
        g.beginPath();
        g.moveTo(x, y);
        x+=5;
        g.stroke()
     }
}

class Taburet
{
    nimi: string="";
    külg: number = 0;
    x: number =0;
    y: number =0;
    constructor(külg: number,x: number, y:number,nimi:string) 
    {
        this.külg = külg;
        this.x = x;
        this.y = y;
        this.nimi=nimi;
    }
    //joonistab tabureti
    draw(g, startx: number, y: number): void
    {
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx+this.getWidth()/4, y-10, this.getWidth()/2, 20);
        g.moveTo(startx+this.getWidth()*3/4, y);
        g.stroke();
    }
    //leiab pikkuse ja laiuse
    getWidth():number{return 30;}
    getHeight():number{return 30;}
    //lisab uue tabureti
    newTaburet(g, startx: number, y: number)
    {
        g.clearRect();
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx+this.getWidth()/4, y-10, this.getWidth()/2, 20);
        g.moveTo(startx+this.getWidth()*3/4, y);
        g.stroke();
    }
}

class Pink extends Taburet
{
    nimi: string="";
    külg: number = 0;
    x: number =0;
    y: number =0;
    constructor(külg: number,x: number, y:number,nimi:string) 
    {
        super(10,10,10,"pink");
        this.külg = külg;
        this.x = x;
        this.y = y;
        this.nimi=nimi;
    }
    //joonistab pingi
    draw(g, startx: number, y: number): void
    {
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx+this.getWidth()/4, y-10, this.getWidth()/2, 20);
        g.moveTo(startx+this.getWidth()*3/4, y);
        g.stroke();
    }
    //leiab asjad pingi jaoks
    getWidth():number{return 50;}
    getHeight():number{return 30;}
    //teeb uue pingi
    newPink(g, startx: number, y: number)
    {
        g.clearRect();
        g.beginPath();
        g.moveTo(startx, y);
        g.rect(startx+this.getWidth()/4, y-10, this.getWidth()/2, 20);
        g.moveTo(startx+this.getWidth()*3/4, y);
        g.stroke();
    }
}

let tuba:Tuba=new Tuba(10,10);
let t1:Taburet=new Taburet(10,0,0,"taburet1");
let t2:Taburet=new Taburet(10,15,0,"taburet2");
let t3:Taburet=new Taburet(10,30,0,"taburet3");
let p1:Pink=new Pink(20,10,10,"pink1");
tuba.addTaburet(t1);
tuba.addTaburet(t1);
tuba.addTaburet(t1);
tuba.addPink(p1);