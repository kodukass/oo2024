/*
! npm install typescript jest @types/jest ts-jest
! npx ts-jest config:init
kaust __tests__ 
    tests.ts
kodutöö9.ts
! npx jest
*/

///////////kodutöö9.ts/////////////

class Calculator{
    protected panelContents:string="";
    protected memoryContents:number=0;
    protected markContents:string="";
    protected tyhjenda:boolean=false;
    protected marks:string[]=["+"];
    pressButton(b:string):void
    {

        if (this.panelContents === "error") 
        {
            return;
        }

        if (this.panelContents.length === 1 && !this.marks.includes(b) && b !== "=") 
        {
            this.panelContents = "error";
            return;
        }
        if (b === "kollane" || b === "punane" || b === "sinine" || b === "must" || b === "valge" || b === "M") 
        {
            if (this.panelContents !== "") 
            {
                this.panelContents = "error";
            }
            else 
            {
                switch (b) 
                {
                    case "kollane":
                        this.panelContents = "10";
                        break;
                    case "punane":
                        this.panelContents = "8";
                        break;
                    case "sinine":
                        this.panelContents = "6";
                        break;
                    case "must":
                        this.panelContents = "4";
                        break;
                    case "valge":
                        this.panelContents = "2";
                        break;
                    case "M":
                        this.panelContents = "0";
                        break;
                    default:
                        break;
                }
            }
        }
        else if(this.marks.includes(b))
        {
            this.memoryContents=parseFloat(this.panelContents);
            this.markContents=b;
            this.tyhjenda=true;
        } 
        else if (this.markContents === "+") 
        {
            const currentValue = parseFloat(this.panelContents);
            if (!isNaN(currentValue)) 
            {
                this.panelContents = (this.memoryContents + currentValue).toString();
            } 
            else 
            {
                this.panelContents = "error";
            }
        }
        else
        {
            if(this.tyhjenda)
            {
                this.panelContents=b;
                this.tyhjenda=false;
            }
            else
            {
                this.panelContents+=b;
            }
        }
    }
    getPanelContents():string
    {
        if(this.panelContents.length>0)
        {
            return this.panelContents;
        }
        return "0";
    } 
}
export{
    Calculator
}

/////tests.ts//////////////
import {Calculator} from "../kodutöö9";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('tühi', () => {
    expect(calcobj.getPanelContents()).toBe("0");
});

test('kollane test', ()=>{
    calcobj.pressButton('kollane');
    expect(calcobj.getPanelContents()).toBe("10");
});

test('punane test', ()=>{
    calcobj.pressButton('punane');
    expect(calcobj.getPanelContents()).toBe("8");
});

test('arvutamine', ()=>{
    calcobj.pressButton('kollane');
    calcobj.pressButton('+');
    calcobj.pressButton('punane');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("18");
});

test('kaks järjest', ()=>{
    calcobj.pressButton('kollane');
    calcobj.pressButton('punane');
    expect(calcobj.getPanelContents()).toBe("error");
});