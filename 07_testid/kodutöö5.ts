/*
! npm install typescript jest @types/jest ts-jest
! npx ts-jest config:init
kaust __tests__ 
    tests.ts
kodutoo.ts
! npx jest
*/

export function findDuplicates(numbers: number[]): number[] {
    class DuplicateFinder {
        //kuhu lükatakse numbrid
        private numberCount: { [key: number]: number } = {};

        constructor(private numbers: number[]) 
        {
            this.initialize();
        }
        //hakkab numbreid läbi vaatama
        initialize(): void 
        {
            this.numbers.forEach(number => 
                {
                //kui sellise key numbriga on juba olemas siis ta lisab sellele ühe juurde
                if (this.numberCount[number]) 
                {
                    this.numberCount[number]++;
                } 
                else 
                {
                    this.numberCount[number] = 1;
                }
            });
        }
        //leiab numbrid mida on rohkem kui üks
        findDuplicates(): number[] 
        {
            const duplicates: number[] = [];
            for (const number in this.numberCount) 
            {
                //vaatab kus on number üle 1
                if (this.numberCount[number] > 1) 
                {
                    duplicates.push(parseInt(number));
                }
            }
            return duplicates;
        }
    }

    const finder = new DuplicateFinder(numbers);
    return finder.findDuplicates();
}

/////////////////////////////////////

import { findDuplicates } from "../kodutoo";

test('test', () => 
{
    const inputNumbers = [1, 2, 3, 4, 5, 2];
    const expectedOutput = [2];
    const actualOutput = findDuplicates(inputNumbers);
    expect(actualOutput).toEqual(expectedOutput);
});