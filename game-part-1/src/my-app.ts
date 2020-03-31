import { Entity } from "./entity";
import { Vector } from "./vector";
import { IScheduler } from 'aurelia';
import { World } from "./world";

export class MyApp {
  public message = 'Hello, World!';

  public world: World;
  public entity: Entity;

  public constructor(@IScheduler private scheduler: IScheduler) {
    console.log('scheduler', this.scheduler);
  }

  public beforeAttach() {
    this.main();
  }

  public main() {
    console.log('main');
    this.world = new World(new Vector(300, 250), new Vector(500, 400));

    this.entity = new Entity(this.world, new Vector(75, 50), new Vector(25, 25));
    this.entity.velocity = new Vector(120, 70);

    this.scheduler.queueRenderTask(this.update, { persistent: true });
  }

  public update = (deltaTime: number) => {
    deltaTime /= 1000;

    this.world.update(deltaTime);
    this.entity.update(deltaTime);

    this.world.draw();
    this.entity.draw();
  }
}
