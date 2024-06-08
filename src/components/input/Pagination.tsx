import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface PaginationProps {
  disabled?: boolean;
  currentPage: number;
  totalPages: number;
  changePage: (page: number) => void;
}

const buttonStyle = "w-10 h-10 rounded-lg border-[1px] border-border flex justify-center items-center body-md text-neutral-900 cursor-pointer transition-fast hover:bg-primary-500 hover:text-neutral-100"
const buttonStyleActive = "w-10 h-10 bg-primary-500 rounded-lg flex justify-center items-center body-md text-neutral-100 cursor-pointer "

const Pagination = (props: PaginationProps) => {
  const { disabled, currentPage, totalPages, changePage } = props;

  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);

  useEffect(() => {
    if (currentPage < 3) {
      setPages([1, 2, 3, 4, 5]);
    } else if (currentPage > totalPages - 2) {
      setPages([totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
    } else {
      setPages([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]);
    }

  }, [currentPage, totalPages]);

  return (
    <div className={`mt-24 flex gap-1 justify-center items-center ${disabled && 'opacity-40 pointer-events-none'}`}>
      {
        currentPage !== 1 && (
          <>
            <div className={buttonStyle} onClick={() => changePage(1)}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </div>
            <div className={buttonStyle} onClick={() => changePage(currentPage + 1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </>
        )
      }
      {
        pages.map((page) => (
          <div key={page} className={page === currentPage ? buttonStyleActive : buttonStyle} onClick={() => changePage(page)}>
            {page}
          </div>
        ))
      }
      {
        currentPage !== totalPages && (
          <>
            <div className={buttonStyle}>
              <FontAwesomeIcon icon={faAngleRight} onClick={() => changePage(currentPage + 1)} />
            </div>
            <div className={buttonStyle} onClick={() => changePage(totalPages)}>
              <FontAwesomeIcon icon={faAnglesRight} />
            </div>
          </>
        )
      }
    </div>
  );
};

export default Pagination;