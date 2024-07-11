import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'create',
  options: {
    isDefault: true,
  },
})
export class CreateCommand extends CommandRunner {
  async run(): Promise<void> {
     console.log('Test!');
  }
}