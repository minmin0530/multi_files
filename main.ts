import { Base } from "./base";

class Main extends Base {
    constructor() {
        super();
        this.name = "main";
    }
    doSomething(): void {
        const div: HTMLDivElement = document.createElement("div");
        div.textContent = this.name;
        document.body.appendChild(div);
    }
}

const main: Main = new Main();
main.doSomething();