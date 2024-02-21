/*Banaanid

Sisu            1               masinkoodi käsk
Sisu+koor       1               makrokäsk
kimp            5               progekeele käsk
banaanikast     30              funktsioon
euroalus        5000            klass/objekt
merekonteiner   200'000         komponendid/teenused
laev/laohoone   200'000'000     konteiner

! npm install typescript ts-node @types/node
! npx ts-node tund2.ts

*/

class Student {
    name: string;
    age: number;
    city: string;
    height: number;

    constructor(name: string, age: number, city: string, height: number) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.height = height;
    }

}

let john = new Student("John", 17, "Tallinn", 178);
let mary = new Student("Mary", 18, "Tartu", 167);
let alex = new Student("Alex", 18, "London", 189);
let emma = new Student("Emma", 21, "Tallinn", 164);

console.log(john.name);
console.log(mary.age);
console.log(alex.city);
console.log(emma.height);

class S6num {
    /*sisu: string;
    autor: string;
    aeg: number;
    meeldimised: number;*/

    constructor(protected sisu: string, protected autor: string, protected aeg: number, protected meeldimised: number) {
        /*this.sisu = sisu;
        this.autor = autor;
        this.aeg = aeg;
        this.meeldimised = meeldimised;*/
    }

    populaarsus(): number 
    {
        return this.meeldimised/this.aeg;
    }
    kysisisu()
    {
        return this.sisu;
    }

    lisaMeeldimine()
    {
        this.meeldimised= this.meeldimised+1;
    }

}

let s1 = new S6num("Tere, kuidas läheb", "Emma", 3, 5);
let s2 = new S6num("Tere, kuidas läheb?", "Ott", 7, 0);

console.log(s1.kysisisu, s1.populaarsus());
s1.lisaMeeldimine();
console.log(s1.populaarsus(), s2.populaarsus());

/*---------------------*/

class Isik
{
    constructor(protected eesnimi:string, protected synd:number){}
    toString()
    {
        return this.eesnimi+" aastast "+this.synd;
    }
    kassarnane(isik:Isik)
    {
        return this.eesnimi==isik.eesnimi;
    }
    kysisynd()
    {
        return this.synd;
    }
}

console.log(new Isik("juku", 2010).toString());
console.log("teade: "+new Isik("juku", 2010));

class Grupp1
{
    //eesnimed:string[]=[];
    /*lisanimi(eesnimi: string)
    {
        let puudu=true;
        for(let e of this.eesnimed)
        {
            if (e==eesnimi)
            {
                puudu=false;
            }
        }
        if(puudu)
        {
            this.eesnimed.push(eesnimi);
        }
        //lisa nimi kui ei ole veel
        if(this.eesnimed.includes(eesnimi))
        {
            console.log(eesnimi + "on juba olemas.");
        }
        else
        {
            this.eesnimed.push(eesnimi);
        }
    }*/
    isikud:Isik[]=[];
    lisaisik(isik: Isik)
    {
        let puudu=true;
        for(let i of this.isikud)
        {
            if(i.kassarnane(isik))
            {
                puudu=false;
            }
        }
        if(puudu)
        {
            this.isikud.push(isik);
        }
    }
    kysinimed(): Isik[]
    {
        return this.isikud;
    }
    kysisuurim()
    {
        let suurim:number=-1;
        for(let isik of this.isikud)
        {
            if(isik.kysisynd()>suurim)
            {
                suurim=isik.kysisynd();
            }
        }
        return suurim;
    }
    kysinoorim():Isik[]
    {
        let noorimad:Isik[]=[];
        let suurimsynd=this.kysisuurim();
        if(suurimsynd==-1)
        {
            return noorimad;
        }
        for(let isik of this.isikud)
        {
            if(isik.kysisynd()==suurimsynd)
            {
                noorimad.push(isik);
            }
        }
        return noorimad;
    }
}

let g1=new Grupp1();
g1.lisaisik(new Isik("juku",2010));
g1.lisaisik(new Isik("kati",2020));
g1.lisaisik(new Isik("jukku",2015));
//g1.lisanimi("kati");
//g1.lisanimi("kati");
console.log(g1.kysinimed());
console.log(g1.kysisuurim());
console.log(g1.kysinoorim());

/*John
18
London
164
[Function: kysisisu] 1.6666666666666667
2 0
juku aastast 2010
teade: juku aastast 2010
[
  Isik { eesnimi: 'juku', synd: 2010 },
  Isik { eesnimi: 'kati', synd: 2020 },
  Isik { eesnimi: 'jukku', synd: 2015 }
]
2020
[ Isik { eesnimi: 'kati', synd: 2020 } ] */