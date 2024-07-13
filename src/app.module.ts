import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliModule } from './cli/cli.module';
import { DopplerModule } from './doppler/doppler.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ConfigModule.forRoot( {isGlobal: true} ), CliModule, ProjectModule, DopplerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
