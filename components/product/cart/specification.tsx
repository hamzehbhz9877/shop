import React, {useState} from 'react';
import ToomanIcon from "components/toomanIcon/toomanIcon";
import {FaMinus, FaPlus, FaShoppingCart} from "react-icons/fa";

const colors=["#3F4551","#f59e0b","#3b82f6","#f43f5e"]
const sizes=["S","M","L","XL"]

const Specification = () => {
    const [size,setSize]=useState("L")
    const [color,setColor]=useState("#3F4551")
    const [count,setCount]=useState(1)

    const pickColor=(color:string)=>setColor(color)
    const pickSize=(size:string)=>setSize(size)
    const handlePlus=()=>setCount(count+1)
    const handleMinus=()=>setCount(count-1)

    return (
        <div className="product__cart">
            <div className="pt-0">
                <h6 className="color-mischka fw-light">رنگ :</h6>
                <div>
                    <ul>{colors.map((item,index)=><li onClick={()=>pickColor(item)}
                                                      role="button" className={`product__cart-color-item d-inline-block opacity-40
                                                      ${color===item?"product__cart-color-item--active opacity-100":""}`} key={index}
                                                      style={{backgroundColor:item}}> </li>)}</ul>
                </div>
                <div className="mt-2">
                    <h6 className="color-mischka fw-light">سایز :</h6>
                    <div>
                        <ul>{sizes.map((item,index)=>
                            <li onClick={()=>pickSize(item)} role="button" className={`product__cart-size-item d-inline-block  opacity-40
                             ${size===item?"opacity-100 text-black":""}`} key={index}>{item}</li>)}</ul>
                    </div>
                </div>
            </div>

            <div><span className="color-mischka">موجودی :</span>{" "}<span className="fw-bold">5 عدد</span></div>
            <div><span className="color-mischka">تخفیف :</span>{" "}<span className="fw-bold">%20</span></div>
            <div><span className="color-mischka"> قیمت :</span>{" "}
                <span className="text-decoration-line-through fw-bold font-15 color-mischka">325000</span>{" "}
                <span className="fw-bold font-18 me-1">250000</span>
                <ToomanIcon className="color-mischka font-13"/>
            </div>
            <div>
                <span className="color-mischka mb-2 d-inline-block">تعداد :</span>
                <div className="product__cart-count d-flex justify-content-between align-items-center">
                    <button onClick={handlePlus} className={`product__cart-count-plus ${count>0?"product__cart-count-plus--active":""}`}>
                        <FaPlus />
                    </button>
                    <span className="mx-2 font-16 min-w-0">{count}</span>
                    <button onClick={handleMinus} disabled={count===1} className={`product__cart-count-minus ${count>0?"product__cart-count-minus--active":""}`}>
                        <FaMinus/>
                    </button>
                </div>
            </div>
            <button className="btn w-100 btn-ebony-clay py-10 font-15">
                <FaShoppingCart className="ms-2"/>افزودن به سبد خرید</button>
        </div>
    );
};

export default Specification;