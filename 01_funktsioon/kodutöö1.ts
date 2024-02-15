/*vibu nööri vahe leidmine (brace height)*/
function braceHeight(blength:number):string
{
    let vastus:string="Nöörivahe "+blength+" tollisel vibul peab olema "
    if(blength=58){return vastus+= "7,25-7,75 tolli";}
    if(blength=60){return vastus+="7,5-8,25 tolli";}
    if(blength=62){return vastus+="7,75-8,5 tolli";}
    if(blength=64){return vastus+="8-8,75 tolli";}
    if(blength=66){return vastus+="8,25-9 tolli";}
    if(blength=68){return vastus+="8,5-9,25 tolli";}
    if(blength=70){return vastus+="8,75-9,5 tolli";}
    return "andmed puuduvad";
}

console.log(braceHeight(66));