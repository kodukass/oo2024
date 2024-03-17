/*//! npm install typescript ts-node @types/node
//! npx ts-node tund.ts

interface Adder{
    add(nr: number):void;
    getSum():number;
 }
 
 class CharCounter{
     constructor(protected adder:Adder){}

     addWordCharacters(word:string):void
     {
         this.adder.add(word.length);
     }
     getCharacterCount()
     {
         return this.adder.getSum();
     }
     /*massiiviCount([massiiv])
     {
        for(let i=0;i=massiiv.length;i++)
        {
            this.adder.add(massiiv[i].length);
        }
        return this.adder.getSum();
     }//
     addSentenceCharacters(sentence:string)
     {
        this.addWordsCharacters(sentence.split(" "));
     }
     addWordsCharacters(words:string[]):void
     {
        for(let word of words)
        {
            this.addWordCharacters(word);
        }
     }
 }
 
 class SimpleAdder implements Adder{
     protected sum:number=0;
     add(nr:number)
     {
        this.sum+=nr;
     }

     getSum(): number 
     {
         return this.sum;
     }
 }

 class CountingAdder implements Adder{
    protected sum:number=0;
    protected count:number=0;
    protected max:number=0;
    //numbrid:CharCounter;
    add(nr:number){
        this.sum+=nr;
        this.count++;
        if(nr>this.max){this.max=nr;}
    }
    getSum(): number {
        return this.sum;
    }
    getAverage(){
        if(this.count>0){
            return this.sum/this.count;
        }
        return 0;
    }
    getMax():number
    {
        return this.max;
    }
}

class StoringAdder implements Adder{
    protected store:number[]=[];
    add(nr:number){
        this.store.push(nr);
    }
    getSum(): number {
        let sum:number=0;
        for(let amount of this.store){sum+=amount;}
        return sum;
    }
    getAverage(){
        if(this.store.length>0){
            return this.getSum()/this.store.length;
        }
        return 0;
    }
    getRange(){
        if(this.store.length==0){return 0;}
        let minimum:number=this.store[0];
        let maximum:number=minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount;}
        }
        return maximum-minimum;
    }
    getMax()
    {
        if(this.store.length==0){return 0;}
        let maximum:number=this.store[0];
        for(let amount of this.store){
            if(amount>maximum){maximum=amount;}
        }
        return maximum;
    }
    getMin()
    {
        if(this.store.length==0){return 0;}
        let minimum:number=this.store[0];
        for(let amount of this.store){
            if(amount>minimum){minimum=amount;}
        }
        return minimum;
    }
    /*kysisuurim()
    {
        let suurim:number=0;
        for(let num of this.store)
        {
            if(num.getSum()>suurim)
            {
                suurim=num.getSum();
            }
        }
        return suurim;
    }//
}
 
 let adder1:Adder=new SimpleAdder();
 let adder2:CountingAdder=new CountingAdder();
 let adder3:StoringAdder=new StoringAdder();
 let counter1:CharCounter=new CharCounter(adder3);
 counter1.addWordsCharacters(["nimi","nimi"]);
 counter1.addSentenceCharacters("nimi nimi");
 counter1.addWordCharacters("Juku");
 counter1.addWordCharacters("tuli");
 counter1.addWordCharacters("kooli");
 console.log(counter1.getCharacterCount());
console.log(adder2.getAverage());
console.log(adder2.getMax());
console.log(adder3.getRange());
console.log(adder3.getMax());
console.log(adder3.getMin());
//console.log(adder2.kysisuurim());*/

/*! npm install typescript
! npx tsc tund.ts*/

interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class CmToInch implements CalculatingFunction{
    calculate(cm: number):number{
        return cm/2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string{
        return "in";
    }
}

class CmToKm implements CalculatingFunction{
    calculate(cm: number):number{
        return cm/1000;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string{
        return "km";
    }
}

class KmHToMS implements CalculatingFunction{
    calculate(kmh: number):number{
        return kmh*0.27778;
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string{
        return "m/s";
    }
}

class AXplusB implements CalculatingFunction{
    constructor(protected coeficient:number, protected inputUnitType:string , protected outputUnitType:string){}
	calculate(x:number):number{
	   return this.coeficient*x;
	}
	inputUnit():string{return this.inputUnitType;}
	outputUnit():string{return this.outputUnitType;}
}