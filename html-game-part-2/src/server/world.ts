import { Vector } from "./vector";
import { Rect } from "./rect";
import { WorldContext } from "./world-context";
import { Entity, EntitySpecification } from "./entity";

export interface WorldSpecification {
    size: number[];
}

export class World {
    public size: Vector;
    public rect: Rect;

    public entities: Entity[] = [];

    public context: WorldContext;

    public constructor() {
        this.context = new WorldContext();
    }

    public define(spec: WorldSpecification): void {
        this.size = new Vector(spec.size[0], spec.size[1]);
        this.rect = new Rect(this.size.multiply(0.5), this.size);
    }

    public update(deltaTime: number): void {
        for (const entity of this.entities) {
            entity.update(deltaTime);
        }
    }

    public draw(): void {
        this.context.width = this.rect.width;
        this.context.height = this.rect.height;

        for (const entity of this.entities) {
            entity.draw();
        }
    }

    public createEntity(spec: EntitySpecification): Entity {
        const entity = new Entity(this);
        entity.define(spec);
        return entity;
    }

    public addEntity(entity: Entity): void {
        this.entities.push(entity);
    }
}
