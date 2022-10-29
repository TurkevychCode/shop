import React, {FC} from "react";
import ReactPaginate from "react-paginate";
import './pagination.scss'


export const Pagination: FC = () => {
    return (
        <ReactPaginate
            className='root'
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => console.log(event.selected)}
            pageRangeDisplayed={4}
            pageCount={3}
        />
    );
}
