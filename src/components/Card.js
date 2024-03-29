import React, { useState,useRef, useEffect } from "react";
import { useDispachCart,useCart } from "./ContextReducer";
export default function Card(props) {
    const { foodName, options = {}, imgSrc } = props;
    let dispach = useDispachCart();
    let data = useCart();
    const priceOptions = Object.keys(options);
    const priceRef = useRef();
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddToCart = async() =>{
        await dispach({type:"ADD",id:props.foodItem._id, name: props.foodItem.name, price: finalPrice,qty: qty, size:size})
        console.log(data)
    }
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    let finalPrice = qty * parseInt(options[size]);
    return (
        <div className="m-10">
            <div className="card m-3" style={{ width: "18rem", maxHeight: "360px", objectFit:"fill" }}>
                <img src={[props.foodItem.img]} className="card-img-top" alt="..." style={{height:"240px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container">
                        <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}> 
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>{data}</option>
                            ))}
                        </select>
                        <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
                        
                 <button className='btn btn-success justify-center ms-2 '  onClick={handleAddToCart}>Add to Card</button>
                    </div>

                </div>
                

               
            </div>
        </div>
    );
}
