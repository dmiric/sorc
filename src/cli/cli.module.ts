import { Module } from '@nestjs/common';
import { CreateCommand } from './commands/create.command';

@Module({
  providers: [CreateCommand],
})
export class CliModule {}