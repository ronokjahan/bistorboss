import { useContext } from "react";

import { Authcontex} from "../../../../Componante/Fairbase/Authprovider";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form";


const Regstion = () => {
  const { singups}=useContext(Authcontex)
  const {
    register,handleSubmit, formState: { errors } } = useForm()
   const onSubmit=data=>{
    console.log(data);
    singups(data.email,data.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
     
    console.log(errorCode);
    });

   }

 
  
    return (
<div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sing Up Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  {...register("name",{ required: true })} placeholder="name" name="name" className="input input-bordered" required />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email")}  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")}  name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Sing Up</button>
        </div>
        <Link to='/login'><h1 className="text-3xl mb-8 text-center">Login Now</h1></Link>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Regstion;