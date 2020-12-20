import { useContext } from 'react';
import { UserContext } from '../../App';
import { googleSignIn, initializeFirebase } from './loginManager';


const Login = () => {

    initializeFirebase();
    
    const [user,setUser]=useContext(UserContext)
    const handleGoogleSignIn = () =>{
        googleSignIn()
         .then(res=> {
           const userInfo={...user,...res}
           setUser(userInfo)
        //    history.push('/registration')
         })
     }

    return (
        <div>
       <button 
         onClick={handleGoogleSignIn}
         className='btn btn-warning'>
         Google  Sign In
       </button>
    </div>
    );
};

export default Login;