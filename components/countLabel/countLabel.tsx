import React from 'react';


export type divElement = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children">

interface labelCount extends divElement {
    children?: number
    count:number
}

const CountLabel = ({className,count, ...rest}: labelCount) => {
    return (
        <div className={`count-label ${className??''}`} {...rest}>
            {count}
        </div>
    );
};

export default CountLabel;