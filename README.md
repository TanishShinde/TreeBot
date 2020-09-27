# TreeBot
![Example](https://github.com/TanishShinde/TreeBot/workflows/Example/badge.svg)
![Deno](https://github.com/TanishShinde/TreeBot/workflows/Deno/badge.svg)
<br><br>
treebot is a framework to create decision trees in deno

## Example:
```typescript
import { TreeBot, TreeTask, BranchTask, LeafTask } from 'https://deno.land/x/treebot/mod.ts'

class IsSunday extends BranchTask {
  validate() {
    return (new Date().getDay()) === 0
  }

  successTask() {
    return new LogSunday();
  }

  failureTask() {
    return new LogNotSunday();
  }
}

class LogSunday extends LeafTask {
  execute() {
    console.log('Its sunday today!')
  }
}

class LogNotSunday extends LeafTask {
  execute() {
    console.log('Its not sunday today!')
  }
}

class ExampleBot extends TreeBot {
  createRootTask(): TreeTask {
    return new IsSunday();
  }

  onLoop() {
    console.log("Loop!!");
  }

  onStart() {
    console.log("Started");
  }
}

const bot = new ExampleBot();
bot.run();
```
