export class SampleClass {
    constructor(private temp: number) {
        temp += 2;
    }

    getTemp() {
        return this.temp;
    }
}
