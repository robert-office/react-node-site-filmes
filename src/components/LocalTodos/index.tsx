import { Skeleton } from "@mui/material";
import { ApiExternalResponse } from "backend/types/ApiExternalResponse";
import Card  from "components/Card";
import PaginationLink from "components/PaginationLink/PaginationLink";
import { SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getController } from "utils/seletive";

type Props = {
  content: string;
};

export const LocalTodos = ({ content }: Props) => {
  const search = useLocation().search;
  const page = Number(new URLSearchParams(search).get("page"));
  const PageAtual = page ? page : 1;
  const [alldata, setAlldata] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500,
  });

  useEffect(() => {
    const Controller = getController(content);

    Controller.handle(PageAtual).then((response: { data: SetStateAction<ApiExternalResponse>; }) => {
      setAlldata(response.data);
    });
  }, [PageAtual, content]);

  return (
    <>
      <section className="p-5 dark:bg-gray-700 rounded">
        <div className="relative">
          <h2 className="text-2xl font-extrabold dark:text-gray-50"> Todos ( {content} ) </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
          <span className="text-sm font-semibold dark:text-gray-200">
            Foram achados {alldata.total_results} registros
          </span>
        </div>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">

          {alldata.results.length > 1 ? (
            alldata.results.map((card) => {
              return (
                <>
                  <div className="w-full h-full relative flex flex-col">
                    <Card card={card} />
                    <p className="text-center text-base font-semibold mt-4 dark:text-gray-50">
                      {card.name || card.title}
                    </p>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
              <Skeleton variant="rectangular" height={290} />
            </>
          )}
        </div>
        <div className="flex justify-center mt-8">
          {!!alldata.total_pages ? (
            <PaginationLink
              content={content}
              totalPages={String(alldata.total_pages)}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};
