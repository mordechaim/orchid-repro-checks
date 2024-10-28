import { BaseTable } from '../baseTable';

export class TestTable extends BaseTable {
  readonly table = 'test';

  columns = this.setColumns(
    (t) => ({
      id: t.identity().primaryKey(),
      firstName: t.text().check(t.sql`first_name != ''`),
      lastName: t.text(),
    }),
    (t) => t.check(t.sql`first_name != last_name`)
  );
}
