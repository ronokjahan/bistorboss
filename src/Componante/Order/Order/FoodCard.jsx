import { useContext } from "react";
import { Authcontex } from "../../Fairbase/Authprovider";
import { data } from "autoprefixer";
import Swal from "sweetalert2";



const FoodCard = ({item}) => {
    const{image,recipe,price,name,_id}=item
    const {user}=useContext(Authcontex)
    const handeladdcart=item=>{
      console.log(item);
      if(user && user.email){
        const cartitem={menuites:image,recipe,price,name,_id,email:user.email}
        fetch('  http://localhost:3000/carts',{
          method:'POST', 
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartitem),
        })
        .then(res=>res.json())
        .then(data=>{if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }})
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} /></figure>
        <p className="text-white absolute right-0 mt-4 mr-4 bg-black px-4">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handeladdcart(item)} className="btn btn-primary mx-auto">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;