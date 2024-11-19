"use client";

import { useContext, useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { PaginationContext } from "@/store/context/Pagination.context"; // Ensure the correct path

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

import { NodataPlaceHolder } from "@/Molecules/Atoms/No-Data-Placeholder.Atom";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { pagination, nextPage, prevPage, jumpToPage } =
    useContext(PaginationContext);

  const table = useReactTable({
    data,
    columns,
    pageCount: pagination.totalPages,
    state: {
      pagination: {
        pageIndex: pagination.page - 1,
        pageSize: pagination.size,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true, // Let context control pagination
  });

  const MemorizedPagination = useMemo(() => {
    const pageCount = pagination.totalPages;
    const currentPage = pagination.page;

    return (
      <section className="flex items-center justify-end space-x-2 py-4">
        {pageCount > 1 ? (
          <Pagination>
            <PaginationContent>
              {currentPage > 1 ? (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={prevPage}
                    className={`cursor-pointer ${
                      currentPage > 1
                        ? ""
                        : "hover:bg-slate-200 cursor-not-allowed"
                    }`}
                  />
                </PaginationItem>
              ) : null}
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      onClick={() => jumpToPage(pageNum)}
                      className={`cursor-pointer ${
                        currentPage === pageNum ? "bg-secondary" : ""
                      }`}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              {currentPage < pageCount ? (
                <PaginationItem>
                  <PaginationNext
                    onClick={nextPage}
                    className={`cursor-pointer ${
                      currentPage < pageCount
                        ? ""
                        : "hover:bg-slate-200 cursor-not-allowed"
                    }`}
                  />
                </PaginationItem>
              ) : null}
            </PaginationContent>
          </Pagination>
        ) : null}
      </section>
    );
  }, [pagination, nextPage, prevPage, jumpToPage]);

  return (
    <section className="flex flex-col items-center justify-between gap-5 w-full h-full">
      <section className="rounded-md border overflow-hidden w-full">
        <Table className="rounded-md flex flex-col items-center justify-center p-3">
          <TableHeader className="bg-secondaryBg rounded-lg w-full flex items-center justify-between">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                className="w-full flex items-center justify-between px-3"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    className="flex items-center justify-center w-full"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="w-full flex flex-col items-center justify-center">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="w-full flex items-center justify-between px-2"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="w-full flex items-center justify-center" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-40 text-center w-full"
                >
                  <section className="h-full w-full flex items-center justify-center">
                    <NodataPlaceHolder />
                  </section>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      {MemorizedPagination}
    </section>
  );
}
