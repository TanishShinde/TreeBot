import TreeTask from './TreeTask.ts'

abstract class BranchTask extends TreeTask {
  constructor() {
    super();
    
    if (this.validate()) {
      this.successTask()
    } else {
      this.failureTask();
    }
  }
  // This should never be executed
  execute(): void {}
}

export default BranchTask;