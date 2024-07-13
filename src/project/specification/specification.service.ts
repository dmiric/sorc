import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

@Injectable()
export class SpecificationService {

    public load(file = 'sorc.yml') {
        return yaml.load(
            readFileSync(file, 'utf8'),
        ) as Record<string, any>;
    }

    public show() {
        console.log(this.load());
    }
}
