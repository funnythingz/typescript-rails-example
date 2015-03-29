/// <reference path="interface.ts" />

class Precure implements IPrecure {
    name: string = 'プリキュア';

    greeting(): string {
        return "Hello, I'm " + this.name;
    }
}
