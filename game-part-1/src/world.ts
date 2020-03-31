import { Vector } from "./vector";
import { Rect } from "./rect";

export class WorldContext {
    public top: number;
    public left: number;
    public width: number;
    public height: number;
}

export class World {
    public rect: Rect;

    public context: WorldContext = new WorldContext();

    public constructor(
        public position: Vector,
        public size: Vector
    ) {
        this.rect = new Rect(position, size);
    }

    public update(deltaTime: number) {
    }

    public draw() {
        this.context.left = this.rect.left;
        this.context.top = this.rect.top;
        this.context.width = this.rect.width;
        this.context.height = this.rect.height;
    }
}