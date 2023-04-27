import React, {FC} from "react";
import ReactPaginate from "react-paginate";
import './pagination.scss'

interface PizzaProps{
    onChangePage: any
}

export const Pagination: FC<PizzaProps> = ({onChangePage}) => {
    return (
        <div className='pagination'>
            <ReactPaginate
                className='rootP'
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
            />
        </div>
    );
}
