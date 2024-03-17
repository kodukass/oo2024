

/*! npm install typescript
! npx tsc tund.ts*/

interface ColorMixing {
    calculate(): number;
    firstColor(): string;
    secondColor(): string;
}

class Orange implements ColorMixing {
    calculate(): number {
        return 3;
    }

    firstColor(): string {
        return "yellow";
    }

    secondColor(): string {
        return "red";
    }
}

class Green implements ColorMixing {
    calculate(): number {
        return 7;
    }

    firstColor(): string {
        return "yellow";
    }

    secondColor(): string {
        return "blue";
    }
}

class Purple implements ColorMixing {
    calculate(): number {
        return 8;
    }

    firstColor(): string {
        return "red";
    }

    secondColor(): string {
        return "blue";
    }
}