import Nav from './components/Nav'
import Exoughts from './components/Exoughts'
import Posts from './components/Posts'
import styles from '../styles/Home.module.css'
import  Link  from 'next/link'







export default function Home() {
  return (
    <>
      
        <Link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>HuCo</title>
        
        <Nav/>
        <div className={styles.container}>
          <main className={styles.main}>
          <h1> Welcome to Human Consciousness </h1>
          </main>
        </div>
        <div className="flex justify-between max-w-6xl">
          {/* Right */}
        <Exoughts/> <Posts/>
        </div>
       
        
        
         
    </>
  )
}
