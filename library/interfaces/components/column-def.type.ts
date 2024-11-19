import { ColumnDef } from "@tanstack/react-table";

// Example trueType and falseType, replace these as needed
export type inheritColumnDefType<T> = ColumnDef<T> extends { accessorKey: string }
  ? string // Replace `string` with your desired type for the true case
  : string; // Replace `number` with your desired type for the false case
