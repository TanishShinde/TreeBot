abstract class TreeTask {
  abstract execute(): void
  abstract failureTask(): TreeTask
  abstract successTask(): TreeTask
  abstract validate(): boolean
}

export default TreeTask;