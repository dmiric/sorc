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

    async getSecret(projectSpec, secretName) {
        try {
            const result = await this.doppler.secrets.get(projectSpec.project.doppler.project_name, projectSpec.project.doppler.config_name, secretName);
            console.debug("test", result);

        } catch (err) {
            const error = err as Error;
            console.dir(JSON.stringify(error));
        }
    }
}
