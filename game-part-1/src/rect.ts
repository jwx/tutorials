import { Vector } from "./vector";

export class Rect {
    public half: Vector;

    public constructor(public position: Vector, public size: Vector) {
        this.half = size.multiply(0.5);
    }

    public get left(): number {
        return this.position.x - this.half.x;
    }
    public set left(value: number) {
        this.position.x = value + this.half.x;
    }
    public get right(): number {
        return this.position.x + this.half.x;
    }
    public set right(value: number) {
        this.position.x = value - this.half.x;
    }
    public get top(): number {
        return this.position.y - this.half.y;
    }
    public set top(value: number) {
        this.position.y = value + this.half.y;
    }
    public get bottom(): number {
        return this.position.y + this.half.y;
    }
    public set bottom(value: number) {
        this.position.y = value - this.half.y;
    }

    public get width(): number {
        return this.size.x;
    }
    public get height(): number {
        return this.size.y;
    }
}
