import React from "react";
import  './css/pagination.css'

const Pagination =({postsPerPage,totalPosts,paginate} ) => {
    const pageNumbers =[]

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
        
    }
    
    return (
        <div className="p1">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <div onClick={()=>paginate(number)} className="page-link">{number}</div>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Pagination