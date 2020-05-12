import { IScheduler } from 'aurelia';
import { Entity, EntitySpecification } from './server/entity';
import { randomInt } from './server/utils';
import { World } from './server/world';

export class MyApp {
  public message = 'Hello, World!';

  public world: World;

  public constructor(@IScheduler private scheduler: IScheduler) { }

  public beforeAttach(): void {
    this.main();
  }

  public main(): void {
    this.world = new World();
    this.world.define({ size: [500, 400] });
    this.world.draw();

    const entity = this.world.createEntity({
      position: [250, 250],
      size: [50, 50],
      // velocity: [randomInt(-75, 75), randomInt(-75, 75)],
      velocity: [75, 65],
      image: 'fish-swim.png',
    });
    this.world.addEntity(entity);

    for (let i = 0; i < 10; i++) {
      this.createRandomEntity();
    }

    this.scheduler.queueRenderTask(this.update, { persistent: true });
  }

  public update = (deltaTime: number): void => {
    deltaTime /= 1000;

    this.world.update(deltaTime);

    this.world.draw();

    if (randomInt(1, 60) === 1) {
      // this.entity.randomizeVelocity();
    }
  }

  private createRandomEntity(): void {
    const size = randomInt(25, 75);
    const halfSize = size * 0.5;
    const entity = this.world.createEntity({
      position: [
        randomInt(halfSize, this.world.rect.width - halfSize),
        randomInt(halfSize, this.world.rect.height - halfSize)
      ],
      size: [size, size],
      velocity: [randomInt(-175 + size, 175 - size), randomInt(-175 + size, 175 - size)],
      image: 'dark-fish-swim.png',
    });
    this.world.addEntity(entity);
  }
}
