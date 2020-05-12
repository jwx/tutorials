export class Vector {
    public constructor(
        public x: number,
        public y: number
    ) { }

    public multiply(factor: number, update = false): Vector {
        const vector = update ? this : this.clone();
        vector.x *= factor;
        vector.y *= factor;
        return vector;
    }

    public add(delta: Vector, update = false): Vector {
        const vector = update ? this : this.clone();
        vector.x += delta.x;
        vector.y += delta.y;
        return vector;
    }

    public clone(): Vector {
        return new Vector(this.x, this.y);
    }
}