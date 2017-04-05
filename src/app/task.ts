export class Task {
    name: string;
    duration: number;
    id: number;

    constructor(id: number, name: string, duration: number) {
        this.id = id;
        this.name = name;
        this.duration = duration;
    }
}
