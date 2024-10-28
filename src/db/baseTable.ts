import { createBaseTable, ForeignKeyTable } from 'orchid-orm';

export const BaseTable = createBaseTable({
  snakeCase: true,

  columnTypes: (t) => ({
    ...t,
  }),
});

export const { sql } = BaseTable;
