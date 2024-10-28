import { change } from '../dbScript';

change(async (db) => {
  await db.changeTable('test', (t) => ({
    ...t.add(
      t.check(t.sql`first_name != ''`)
    ),
  }));
});
