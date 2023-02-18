import { getProviders, signIn as signIntoProvider} from "next-auth/react";
import Image from "next/image";


function Login ({providers} ){
    return(
        
     <div 
        className="">
       
     
       { Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIntoProvider(provider.id)}>
              Sign in  with {provider.name}
            </button>
          </div>
        ))}
      </div> 

    );
}

  

export async  function getServersideprops(){
    const providers = await getProviders();
    return{
        props: {
            providers

        }
   }
}


export default Login;


        
    



        
    
