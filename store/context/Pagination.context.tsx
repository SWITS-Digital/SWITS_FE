import React, { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { paginationEnum } from "@/library/enum/common.enum";

type PaginationOption = {
  page: number;
  size: number;
  totalPages: number;
};

const INIT_PAGINATION_OPTIONS: PaginationOption = {
  page: paginationEnum.PAGE,
  size: paginationEnum.SIZE,
  totalPages: paginationEnum.TOTALPAGES,
};

type paginationContextType = {
  pagination: PaginationOption;
  nextPage: () => void;
  prevPage: () => void;
  jumpToPage: (index: number) => void;
  setTotalPages: (pages: number) => void;
  resetPagination: () => void;
};

export const PaginationContext = createContext<paginationContextType>({
  pagination: INIT_PAGINATION_OPTIONS,
  nextPage: () => {},
  prevPage: () => {},
  jumpToPage: () => {},
  setTotalPages: () => {},
  resetPagination: () => {},
});

function PaginationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [pagination, setPagination] = useState<PaginationOption>(
    INIT_PAGINATION_OPTIONS
  );

  function nextPage() {
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
  }

  function prevPage() {
    setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
  }

  function jumpToPage(index: number) {
    setPagination((prev) => ({ ...prev, page: index }));
  }

  function setTotalPages(pages: number) {
    setPagination((prev) => ({ ...prev, totalPages: pages }));
  }

  function resetPagination() {
    setPagination(INIT_PAGINATION_OPTIONS);
  }

  const value: paginationContextType = {
    pagination,
    nextPage,
    prevPage,
    jumpToPage,
    setTotalPages,
    resetPagination,
  };

  useEffect(() => {
    resetPagination();
  }, [pathname]);

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationContextProvider;
