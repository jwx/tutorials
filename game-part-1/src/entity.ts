import { Vector } from "./vector";
import { Rect } from "./rect";
import { World } from "./world";

export class EntityContext {
    public top: number;
    public left: number;
    public width: number;
    public height: number;
}

export class Entity {
    public rect: Rect;

    public velocity: Vector;

    public context: EntityContext = new EntityContext();
    public constructor(
        public world: World,
        public position: Vector,
        public size: Vector
    ) {
        this.rect = new Rect(position, size);
    }

    public checkCollisions() {
        if (this.rect.left < 0) {
            this.rect.left = 0;
            this.velocity.x = -this.velocity.x;
            console.log('PLAYER LOOSES!');
        } else if (this.rect.right > this.world.rect.width) {
            this.rect.right = this.world.rect.width;
            this.velocity.x = -this.velocity.x;
            console.log('PLAYER WINS!');
        } else if (this.rect.top < 0) {
            this.rect.top = 0;
            this.velocity.y = -this.velocity.y;
        } else if (this.rect.bottom > this.world.rect.height) {
            this.rect.bottom = this.world.rect.height;
            this.velocity.y = -this.velocity.y;
        }
    }

    public update(deltaTime: number) {
        this.position.add(this.velocity.multiply(deltaTime), true);
        this.checkCollisions();
    }

    public draw() {
        this.context.left = this.rect.left;
        this.context.top = this.rect.top;
        this.context.width = this.rect.width;
        this.context.height = this.rect.height;
    }
}