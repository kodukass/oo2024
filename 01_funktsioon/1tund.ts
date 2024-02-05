! npm install typescript ts-node @types/node
! npx ts-node tervitus2.ts

let eesnimi:string="Juhu";
let j:number=0;
for(let i:number=0;i<3;i++)
{
  j+=1
  console.log("tere, "+eesnimi+" "+j+". korda");
}

//arvude ruudud 1-10

let arv:number=1;
let ruut:number=0;
for(let i:number=0;i<=10;i++)
{
  ruut=arv*arv;
  console.log(ruut);
  arv+=1;
}

//korrutustabel

let ridu:number=7, veerge:number=8;
for(let rida:number=1;rida<=ridu;rida++)
{
  let reastr:string="";
  for(let veerg:number=1;veerg<veerge;veerg++)
  {
    //reastr+=rida*veerg+" ";
    reastr+=(rida*veerg).toString().padStart(4);
  }
  console.log(reastr);
}

//korrutustabel2

let ridu:number=7, veerge:number=8;
for(let rida:number=1;rida<=ridu;rida++)
{
  let reastr:string[]=[];
  for(let veerg:number=1;veerg<veerge;veerg++)
  {
    reastr.push((rida*veerg).toString().padStart(4));
  }
  console.log(reastr.join(""));
}


//funktsioonid

function korrutaKahega(arv:number)
{
  return arv*2;
}
console.log(korrutaKahega(7));

//kehamassiindeks

function bmi(a:number,b:number)
{
  return a/(b*b);
}
console.log(bmi(65,1.7).toFixed(1));

//hinnang

function bmihinnang(indeks:number):string //väljund on string
{
  if(indeks<16.5){return "ohtlik alakaal";} //pärast täidetud returni edasi ei lähe
  if(indeks<18.5){return "alakaal";}
  if(indeks<25){return "normaalkaal";}
  if(indeks<30){return "ülekaal";}
  if(indeks<35){return "rasvumine";}
  if(indeks<40){return "tugev rasvumine";}
  return "ohtlik rasvumine";
}

console.log(bmihinnang(32));

let arvud:number[]=[25,18,38,28];
let hinnangud=arvud.map(bmihinnang);
console.log(hinnangud);