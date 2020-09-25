import TreeTask from "./TreeTask.ts";

abstract class TreeBot {
  loopDelay: number = 200

  abstract onLoop(): void
  abstract createRootTask(): TreeTask
  abstract onStart(): void

  run(): void {
    this.onStart();

    setInterval(() => {
      this.onLoop();
      this.createRootTask();
    }, this.getLoopDelay());
  }

  setLoopDelay(loopDelay: number): void {
    this.loopDelay = loopDelay
  }
  
  getLoopDelay(): number {
    return this.loopDelay
  }
}

export default TreeBot;