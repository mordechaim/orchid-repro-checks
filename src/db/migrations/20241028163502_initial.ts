import { change } from '../dbScript';

change(async (db) => {
  await db.createTable('test', (t) => ({
    id: t.identity().primaryKey(),
    firstName: t.text(),
    lastName: t.text(),
  }));
});
