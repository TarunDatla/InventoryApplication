import { useEffect,useState } from "react"
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
export default function Home() {

    const [productdetail,setProductdetail]=useState([ ])

    const deleteProductdetails = (prodid) => {
        const filterproducts = productdetail.filter((item)=>{
        return item.productid !== prodid
        })
          setProductdetail(filterproducts)
          localStorage.setItem('productdetails',JSON.stringify(filterproducts));
        }
        
        useEffect(()=>{
             const data= localStorage.getItem('productdetails');
            if(data){
              setProductdetail(JSON.parse(data));
            }
            else{
              setProductdetail([]);
            }
          },[])
return(

<div className="totaltable">
 <table className="table">
  
  <tbody>
  <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">ProductID</th>
      <th scope="col">Delete and Edit</th>
    </tr>
  {productdetail.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.productid}</td>
            <td>
                <Icon onClick={()=>deleteProductdetails(item.productid)} icon={trash}/>
            </td>
        </tr>
      ))}
  </tbody>
</table>
      </div>

  );
}
