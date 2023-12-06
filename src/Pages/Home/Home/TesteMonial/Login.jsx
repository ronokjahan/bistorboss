import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { Authcontex } from '../../../../Componante/Fairbase/Authprovider';


const Login = () => {
  const {singin}=useContext(Authcontex)
  const captcharef=useRef(null)
    const[disable,setdisable]=useState(true)
useEffect(()=>{
    loadCaptchaEnginge(6);
},[])
    
    const loginhande=event=>{
        event.preventDefault()
        const from=event.target 
        const email=from.email.value 
        const password=from.password.value 
        const all={email,password}
        console.log(all);
        singin(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });


    }
    const handelcaptch=()=>{
      const user_captch_valu=captcharef.current.value
      console.log(user_captch_valu);
      if(validateCaptcha(user_captch_valu)){
        setdisable(false)

      }
      else(
setdisable(true)
      )
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={loginhande} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name="captch" ref={captcharef} placeholder="Type your captcha" className="input input-bordered" required />
         <button onClick={handelcaptch} className=' btn btn-sm bg-black text-white '>validt</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={validateCaptcha} disabled={disable} type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <Link  to='/regstion'> <h3 className='text-center text-4xl mb-8'>
    Create Account
  </h3></Link>
    </div>
  </div>
 
</div>

</div>
    );
};

export default Login;