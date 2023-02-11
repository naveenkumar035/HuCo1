
import  Link  from 'next/link'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'











export default function Home() {
  return (
    
            
      
        <div className="">
        
        <Link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>HuCo</title>
       
    
          <main className="bg-white h-[400px] min-h-screen flex max-w-[1500px] mx-auto" >
    
          
          <Feed/>
          
          </main>
         

        </div>
      

        
        
        
         
    
  )
}

