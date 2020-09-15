import { Injectable } from '@nestjs/common';
import tcb from '@cloudbase/node-sdk';
import Thing from '../../models/thing';
import config from '../../../tcb.config';

@Injectable()
export class TestService {

  // app = tcb.init(config ?? null);
  app = tcb.init();
  db = this.app.database();

  getTest(): string {
    return 'tested.';
  }

  async getThings(): Promise<Thing> {
    console.log(config ?? 'no config.');

    const auth = await this.app.auth();
    console.log(auth);
    console.log(auth.getUserInfo());
    console.log(auth.getUserInfo().isAnonymous);

    const res = await this.db.collection('things').get();
    const thing = new Thing(res.data[0].id, res.data[0].name);
    return thing;
  };
}
