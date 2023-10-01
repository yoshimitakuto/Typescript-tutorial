import sayHello from "./sayHello";

const root: HTMLElement | null = document.getElementById("root");

const sayHelloSomething = new sayHello("Hello TS Practice 2");
sayHelloSomething.sayText(root);