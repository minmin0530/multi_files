export class Base {
    name: string
    constructor() {
        this.name = "base";
    }
    doSomething(): void {
        console.log(this.name);
    }
}