import DopplerSDK from '@dopplerhq/node-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DopplerService {

    private doppler;

    constructor(private configService: ConfigService) {
        this.doppler = new DopplerSDK({ accessToken: this.configService.get<string>('DOPPLER_ACCESS_TOKEN') });
    }

    async getProjects() {
        try {
            const res = await this.doppler.projects.list();
            console.log(res);
        } catch (err) {
            const error = err as Error;
            console.error(error.message);
        }
    }

    async getToken() {
        try {
            const result = await this.doppler.secrets.get(this.configService.get<string>('DOPPLER_PROJECT_NAME'), this.configService.get<string>('DOPPLER_CONFIG_NAME'), 'NEON_API_KEY');
            //console.log(result);
            console.debug("test", result);
            console.log("testb");

        } catch (err) {
            const error = err as Error;
            console.log("testa");
            console.dir(JSON.stringify(error));
        }
    }
}
