export class Claculator {
    private latest: number = 0;

    get value(): number { return this.latest;}

    add(op: number) {
        this.latest += op;
    }
}