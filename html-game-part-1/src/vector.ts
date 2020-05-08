export class Vector {
    public constructor(
        public x: number,
        public y: number
    ) { }

    public multiply(factor: number, update = false): Vector {
        if (update) {
            this.x *= factor;
            this.y *= factor;
            return this;
        }
        return this.clone().multiply(factor, true);
    }

    public add(delta: Vector, update = false): Vector {
        if (update) {
            this.x += delta.x;
            this.y += delta.y;
            return this;
        }
        return this.clone().add(delta, true);
    }

    public clone(): Vector {
        return new Vector(this.x, this.y);
    }
}