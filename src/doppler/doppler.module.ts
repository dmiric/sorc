import { Module } from '@nestjs/common';
import { DopplerService } from './doppler/doppler.service';

@Module({
  providers: [DopplerService]
})
export class DopplerModule {}
