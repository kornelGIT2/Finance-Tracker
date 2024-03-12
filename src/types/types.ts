export type Tag = {
  id: number;
  label: string;
  expenseId?: number;
  createdById?: string;
  color: string;
  __isNew__?: boolean;
};

export type Expense = {
  id: number;
  title: string;
  value: number;
  desc?: string | null;
  date: Date;
  createdById: string;
  tags: Tag[];
};
