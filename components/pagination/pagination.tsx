import React from 'react';
import {FaAngleLeft} from "react-icons/fa";

const Pagination = () => {
    return (
            <nav className="mt-4 pt-1 " aria-label="Page navigation" dir="ltr">
                <ul className="justify-content-center pagination">
                    <li className="page-item ">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true"><FaAngleLeft style={{width:"8px"}}/></span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
                </ul>
            </nav>
    );
};

export default Pagination;