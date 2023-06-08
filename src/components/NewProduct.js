import { useEffect,useState } from "react"

export default function NewProduct()
{

const [productdetails,setProductdetails]=useState([])


const [name,setName]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState('');
const [quantity,setQuantity]=useState('');
const [productid,setProductID]=useState('')

const handleAddSubmit= (e) => {
   e.preventDefault()
   let productdetail = {
    name,
    description,
    price,
    quantity,
    productid
    }

    setProductdetails([...productdetails,productdetail])
    setName('')
    setDescription('')
    setPrice('')
    setQuantity('')
    setProductID('')
}
useEffect(()=>{
    localStorage.setItem('productdetails',JSON.stringify(productdetails));
  },[productdetails])

return (

<div className="maindiv">
      
    <div className="wrapper">

    
      <div className="form-container">
      <form autoComplete="off" className='form-group' onSubmit={handleAddSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required placeholder="Enter Product Name"
            onChange={(e)=>setName(e.target.value)} value={name} ></input>
            <br></br>
            <label>Description</label>
            <input type="text" className='form-control' required placeholder="Enter Product Details"
            onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <br></br>
            <label>Price</label>
            <input type="text" className='form-control' required placeholder="Enter the Price of the Product"
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <label>Quantity</label>
            <input type="text" className='form-control' required placeholder="Enter the Quantity"
            onChange={(e)=>setQuantity(e.target.value)} value={quantity}></input>
            <br></br>
            <label>ProductID</label> 
            <input type="text" className='form-control' required placeholder='Please enter a 6-Digit unique ID'
            onChange={(e)=>setProductID(e.target.value)} value={productid}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
          </div>
     </div>
     </div>


); 
}