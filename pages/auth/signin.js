import { getProviders, signIn as signIntoProvider} from "next-auth/react";
import Image from "next/image";





function signIn( { providers } ) {

  const signIn = document.querySelector('signin');
    return( 
        
        signIn.addEventListener('submit', (event) => {

         event.preventDefault();
    
        
        { Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIntoProvider(provider.id)}>
              Sign in  with {provider.name}
            </button>
          </div>
        ))}

       window.location.href = "/Market.js";
    })






      
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


export default signIn;
