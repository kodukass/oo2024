class Room {
    height: number = 0;
    width: number = 0;
    name: string="";
    constructor(height: number,width: number, name:string) {
        this.height = height;
        this.width = width;
        this.name=name;
    }
    //võtab toa pikkuse ja laiuse välja
    getRoomDimensions(): number {
        return this.height, this.width;
    }
    //arvutab toa pindala
    getRoomsSize(): number {
        return this.height * this.width;
    }
    askName(): string
    {
        return this.name;
    }
}

class ConsoleR extends Room 
{
    constructor(name:string) 
    {
        super(0,0,name);
    }
    //mitu aastat liigub ajas
    timeTravel(oldTime:number, newTime:number) 
    {
        let time:number=0;
        //kui liikuda ajas edasi
        if(oldTime<newTime)
        {
            time=newTime-oldTime;
        }
        //kui liikuda tagasi
        else
        {
            time=oldTime-newTime;
        }
        return time;
    }
    //mitu valgusaastat liigub ühest kohast teise
    spaceTravel(x1:number, y1:number, x2:number, y2:number) 
    {
        const dx = x1 - x2;
        const dy = y1-y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class WardrobeR extends Room
{
    constructor(name:string) {
        super(0,0,name);
    }
    //mitu riidestanget on toas toa suurust arvestades
    stanged()
    {
        let stanged:number=0;
        if(this.height*this.width<50)
        {
            stanged=5;
        }
        else
        {
            stanged=2;
        }
        return stanged;
    }
}
class Tardis extends Room {
    rooms: Room[] = [];
    constructor(name:string) {
        super(0,0,name);
    }
    //lisab tube
    push(r: Room) {
        this.rooms.push(r);
    }
    //loeb toad kokku numbrina
    roomCount() {
        let sum: number = 0;
        this.rooms.forEach((r: Room) => { sum += 1 });
        return sum;
    }
    //nimetab toad
    askNames()
    {
        return this.rooms.map(r => r.askName()).join(", ");
    }
}

let tuba:Room=new Room(10,10,"elutuba");
let konsool:ConsoleR=new ConsoleR("konsooli ruum");
let garderoob:WardrobeR=new WardrobeR("garderoob");
let tardis:Tardis=new Tardis("TARDIS");
tardis.push(tuba);
tardis.push(konsool);
tardis.push(garderoob);
console.log(tardis.name+" koosneb "+tardis.roomCount()+"-st toast.");
console.log(tardis.name+"-es on "+tardis.askNames()+".");
console.log(tuba.name+" suurus on "+tuba.getRoomsSize()+" ruutmeetrit.");
console.log(tardis.name+" liikus ruumis "+(konsool.spaceTravel(10,20,30,10)).toFixed(2)+" valgusaastat edasi.");
console.log(tardis.name+" liikus ajas "+konsool.timeTravel(100,1000)+" aastat.")
console.log(garderoob.name+"-is on "+garderoob.stanged()+ " riidestanget.")