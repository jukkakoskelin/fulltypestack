export class bmiCalculator {
    height: number;
    weight: number;
    result: string;
    constructor(height: number, weight: number) {
        this.height = height;
        this.weight = weight;
        this.result = "";
    }
    calculateBMI(): string {
        const bmi = this.weight / Math.pow(this.height / 100, 2);        
        if (bmi < 18.5) {
            this.result = `Underweight`;
        } else if (bmi < 25) {
            this.result = `Normal (healthy weight)`;
        } else {
            this.result = `Overweight`;
        } 
        return this.result;
    }
}