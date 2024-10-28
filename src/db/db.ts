import { orchidORM } from 'orchid-orm';
import { TestTable } from './tables/test.table';

export const db = orchidORM(
  {
    databaseURL: process.env.DATABASE_URL,
  },
  {
    test: TestTable,
  }
);
