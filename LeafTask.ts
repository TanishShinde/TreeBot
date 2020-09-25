import TreeTask from "./TreeTask.ts";

abstract class LeafTask extends TreeTask {
  constructor() {
    super();
    this.execute();
  }

  // These should never be executed
  validate(): boolean { return false; }
  successTask(): TreeTask { return this; }
  failureTask(): TreeTask { return this; }
}

export default LeafTask;