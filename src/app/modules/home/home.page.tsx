import { useState } from "react";
import Text from "@/atomic/atm.typography";
import Button from "@/atomic/atm.button";
import EmptyProjectMessage from "@/atomic/mol.empty-project-message";
import BoardFrame from "@/atomic/mol.board-frame";
import CreateBoardFrame from "@/atomic/mol.create-board-frame";
import { ArrowOutlineRight, ArrowOutlineLeft } from "@/atomic/icons/arrow";
import * as homeStrings from "./home.strings";
import { useListBoards } from "@/app/domain/board/list-boards.use-case";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const limit = 7;

  const { boardsData, loading } = useListBoards({
    variables: { pageInput: { limit, offset } },
    onError(error) {
      console.error(error);
    },
  });

  const totalBoards = boardsData?.boards.count || 0;
  const totalPages = Math.ceil(totalBoards / limit);
  const currentPage = Math.floor(offset / limit + 1);

  const getPaginationButtons = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const delta = 2;
    const left = Math.max(currentPage - delta, 1);
    const right = Math.min(currentPage + delta, totalPages);

    if (left > 1) {
      pageNumbers.push(1);
      if (left > 2) pageNumbers.push("...");
    }

    for (let i = left; i <= right; i++) {
      pageNumbers.push(i);
    }

    if (right < totalPages) {
      if (right < totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <>
      <Text variant="h1" className="my-md text-left">
        {homeStrings.TITLE}
      </Text>

      {loading ? (
        <div className="flex flex-wrap items-center justify-center gap-sm p-lg rounded-md bg-white">
          {[...Array(limit + 1)].map((_, index) => (
            <Skeleton key={index} className="h-[250px] w-[250px] rounded-md" />
          ))}
        </div>
      ) : totalBoards !== 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-sm p-lg rounded-md bg-white">
          <CreateBoardFrame />

          {boardsData?.boards.nodes.map((board) => (
            <BoardFrame key={board.id} title={board.name} id={board.id} />
          ))}

          <nav className="flex gap-2xs justify-center w-full">
            <Button
              variant="link"
              icon={<ArrowOutlineLeft />}
              disabled={!boardsData?.boards.pageInfo.hasPreviousPage}
              onClick={() => setOffset(offset - limit)}
            >
              Anterior
            </Button>

            <ul className="hidden items-center gap-3xs sm:flex">
              {getPaginationButtons().map((page, index) =>
                page === "..." ? (
                  <li>
                    <Button key={index} variant="link" disabled={true}>
                      ...
                    </Button>
                  </li>
                ) : (
                  <li>
                    <Button
                      key={index}
                      variant={page === currentPage ? "primary" : "link"}
                      onClick={() => setOffset((Number(page) - 1) * limit)}
                    >
                      {page}
                    </Button>
                  </li>
                )
              )}
            </ul>

            <Button
              variant="link"
              icon={<ArrowOutlineRight />}
              iconPosition="right"
              disabled={!boardsData?.boards.pageInfo.hasNextPage}
              onClick={() => setOffset(offset + limit)}
            >
              Próximo
            </Button>
          </nav>
        </div>
      ) : (
        <EmptyProjectMessage />
      )}
    </>
  );
};

export default HomePage;
