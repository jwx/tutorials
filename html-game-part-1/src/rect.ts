import { Vector } from "./vector";

export class Rect {
    public half: Vector;

    public constructor(
        public position: Vector,
        public size: Vector
    ) { 
        this.half = this.size.multiply(0.5);
    }

    public get left(): number {
        return this.position.x - this.half.x;
    }
    public get right(): number {
        return this.position.x + this.half.x;
    }
    public get top(): number {
        return this.position.y - this.half.y;
    }
    public get bottom(): number {
        return this.position.y + this.half.y;
    }

    public get width(): number {
        return this.size.x;
    }
    public get height(): number {
        return this.size.y;
    }
}