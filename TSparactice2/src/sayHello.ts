export default class sayHello {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    public sayText(elem: HTMLElement | null) {
        if (elem) {
            elem.innerText = this.message;
        }
    }
};