class Resistor 
{
    r: number;
    height: number;
    width: number;
    protected parent:ParallelCircuit;

    constructor(r: number) 
    {
        this.r = r;
        this.height = 30;
        this.width = 70;
    }
    setParent(p:ParallelCircuit)
    {
        this.parent=p;
    }
}

class ParallelCircuit 
{
    protected resistors: Resistor[];
    protected additionalWidth: number;

    constructor(protected g, protected startx: number, protected y: number) 
    {
        this.resistors = [];
        this.additionalWidth = 10;
    }
//kui r on muutunud siis käivitab selle
    push(r: Resistor): void 
    {
        this.resistors.push(r);
        r.setParent(this);
    }

//joonistab ruudu g, startx:number, y:number
    draw2() 
    {
        this.g.clearRect(0, 0, this.g.canvas.width, this.g.canvas.height);
        let x = this.startx;
        for (let i = 0; i < this.resistors.length; i++) 
        {
            const r = this.resistors[i];
            this.g.fillStyle = 'black';
            this.g.fillRect(x, this.y - r.height / 2, r.width, r.height);
            x += r.width + this.additionalWidth;
        }
    }
}