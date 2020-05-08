import { Vector } from "./vector";
import { Rect } from "./rect";
import { randomInt } from './utils';

export interface EntitySpecification {
    position: number[];
    size: number[];
    velocity: number[];
}

export class EntityContext {
    top: number;
    left: number;
    width: number;
    height: number;
}

export class Entity {
    public position: Vector;
    public size: Vector;
    public rect: Rect;

    public velocity: Vector;

    public context: EntityContext;

    public constructor() {
        this.context = new EntityContext();
    }

    public define(spec: EntitySpecification): void {
        this.position = new Vector(spec.position[0], spec.position[1]);
        this.size = new Vector(spec.size[0], spec.size[1]);
        this.rect = new Rect(this.position, this.size);

        this.velocity = new Vector(spec.velocity[0], spec.velocity[1]);
    }

    public update(deltaTime: number): void {
        this.position.add(this.velocity.multiply(deltaTime), true);
    }

    public draw(): void {
        this.context.left = this.rect.left;
        this.context.top = this.rect.top;
        this.context.width = this.rect.width;
        this.context.height = this.rect.height;
    }

    public randomizeVelocity(): void {
        this.velocity.x = randomInt(-75, 75)
        this.velocity.y = randomInt(-75, 75)
    }
}
