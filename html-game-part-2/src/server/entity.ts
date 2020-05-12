import { Vector } from "./vector";
import { Rect } from "./rect";
import { randomInt } from './utils';
import { EntityContext } from "./entity-context";
import { World } from "./world";

export interface EntitySpecification {
    position: number[];
    size: number[];
    velocity: number[];
    image: string;
}

export class Entity {
    public position: Vector;
    public size: Vector;
    public rect: Rect;

    public velocity: Vector;
    public image: string;
    public heading: number;

    public context: EntityContext;

    public constructor(public world: World) {
        this.context = new EntityContext();
    }

    public define(spec: EntitySpecification): void {
        this.position = new Vector(spec.position[0], spec.position[1]);
        this.size = new Vector(spec.size[0], spec.size[1]);
        this.rect = new Rect(this.position, this.size);

        this.velocity = new Vector(spec.velocity[0], spec.velocity[1]);
        this.heading = this.velocity.x < 0 ? -1 : 1;
        this.image = spec.image;
    }

    public update(deltaTime: number): void {
        this.position.add(this.velocity.multiply(deltaTime), true);

        if (this.velocity.x !== 0) {
            this.heading = Math.sign(this.velocity.x);
        }

        this.checkCollisions();
    }

    public draw(): void {
        this.context.left = this.rect.left;
        this.context.top = this.rect.top;
        this.context.width = this.rect.width;
        this.context.height = this.rect.height;

        this.context.image = this.image;
        this.context.heading = this.heading;
    }

    public checkCollisions(): void {
        if (this.rect.left < this.world.rect.left) {
            this.rect.left = this.world.rect.left;
            this.velocity.x = -this.velocity.x;
        } else if (this.rect.right > this.world.rect.right) {
            this.rect.right = this.world.rect.right;
            this.velocity.x = -this.velocity.x;
        } else if (this.rect.top < this.world.rect.top) {
            this.rect.top = this.world.rect.top;
            this.velocity.y = -this.velocity.y;
        } else if (this.rect.bottom > this.world.rect.bottom) {
            this.rect.bottom = this.world.rect.bottom;
            this.velocity.y = -this.velocity.y;
        }
    }
    public randomizeVelocity(): void {
        this.velocity.x = randomInt(-75, 75)
        this.velocity.y = randomInt(-75, 75)
    }
}
