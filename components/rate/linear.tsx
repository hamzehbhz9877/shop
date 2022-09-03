import React from 'react';

type LinearRate={
    value:{title:string,value:number}[]
}

const LinearRate = ({value}:LinearRate) => {
    return (
        <div className="linear-rate color-pale-sky">
            <ul>
                {value.map(({title,value},index)=>
                    <li key={index} className="linear-rate__item"> <h6 className="linear-rate__title font-14 mb-0">{title}</h6>
                        <div className="d-flex align-items-center">
                            <div className="linear-rate__line">
                                <div style={{width:((value*100)/5)+"%"}}/>
                            </div>
                            <span className="linear-rate__value pr-17 font-14">{value}</span>
                        </div>

                    </li>
                )}
            </ul>
        </div>
    );
};

export default LinearRate;