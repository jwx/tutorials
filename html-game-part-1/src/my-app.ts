import { IScheduler } from 'aurelia';
import { Entity, EntitySpecification } from './entity';
import { randomInt } from './utils';

export class MyApp {
  public message = 'Hello, World!';

  public entity = new Entity();

  public constructor(@IScheduler private scheduler: IScheduler) { }

  public beforeAttach(): void {
    this.main();
  }

  public main(): void {
    this.entity = this.createEntity({
      position: [250, 250],
      size: [50, 50],
      velocity: [randomInt(-75, 75), randomInt(-75, 75)],
    });
    this.entity.draw();

    this.scheduler.queueRenderTask(this.update, { persistent: true });
  }

  public update = (deltaTime: number): void => {
    deltaTime /= 1000;

    this.entity.update(deltaTime);
    this.entity.draw();

    if (randomInt(1, 60) === 1) {
      this.entity.randomizeVelocity();
    }
  }

  public createEntity(spec: EntitySpecification): Entity {
    const entity = new Entity();
    entity.define(spec);
    return entity;
  }
}
