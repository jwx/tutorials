export class Vector {
    public constructor(
        public x: number,
        public y: number
    ) { }

    public add(delta: Vector, update: boolean = false) {
        if (update) {
            this.x += delta.x;
            this.y += delta.y;
            return this;
        }
        return this.clone().add(delta, true);
    }
    public multiply(factor: number): Vector {
        return new Vector(this.x * factor, this.y * factor);
    }

    public clone(): Vector {
        return new Vector(this.x, this.y);
    }
}
