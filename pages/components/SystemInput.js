import { ArrowCircleRightIcon, ArrowLeftIcon, ArrowRightIcon, FolderIcon, PaperAirplaneIcon, PlusCircleIcon ,PlusIcon  } from "@heroicons/react/solid";
import { Popover } from "@nextui-org/react";
import { useRef, useState , useEffect } from "react";
import { db  } from '../../firebase';
import { addDoc , collection , serverTimestamp , onSnapshot, orderBy ,  query ,doc , updateDoc } from "firebase/firestore";
import { useSession  } from "next-auth/react";
import Tip from "./Tip";
import {useRouter} from "next/navigation";

function SystemInput(){
    const router =  useRouter();
    const { data: session } = useSession();
    const [inat, setInat]  = useState('');
    const [chat, setChat] = useState(false);
    const [input, setInput] = useState('');
    const [intip, setIntip ] = useState('');
    const tipRef = useRef(null);
    const [tips, setTips] = useState([]);
    const [showIcon, setShowIcon] = useState(true);
    const [showSegment, setShowSegment ] = useState(true);
    const [count, setCount] = useState(1);
    const [newName, setNewName] = useState(''); 
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const renameSystem = async () => {
      const oldCollectionName = "system name";
      const oldCollectionRef = db(collection(oldCollectionName));
      const newCollectionRef = db(collection(intip));
    const oldDocs = await oldCollectionRef.get();
    oldDocs.forEach((doc) => {
      newCollectionRef.doc(doc.id).set(doc.data());
    });
    await oldCollectionRef.delete();
  }

   const showchat = () => {
     setChat(true);
     setShowSegment(false);
   } 



    const createsystem = () => {
      setCount(count + 1);
      setShowSegment()
    }

    const sendsystem =  () => {
      setShowSegment(false);
      }
  
      


    useEffect(
      () => 
        onSnapshot(
          query(collection(db,"system name"), orderBy("timestamp","asc")),
          (snapshot) => {
             setTips(snapshot.docs);
          }
        ),
      [db]
    );
    const scrollToBottom = (e) => {
        tipRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };
    const sendUser = async () => {
        const docRef = await addDoc(collection(db,'system name'),{
            usertip : input,
            email: session?.user?.email,
            timestamp: serverTimestamp(),     
        }); 
           }
    const sendMe = async () => {
      const docRef = await addDoc(collection(db, 'system name'),{
        Mytip : input,
        email: session?.user?.email,
        timestamp: serverTimestamp(),     
    });
       } 
   
       const sendMessage = async () => {
        const url = 'http://127.0.0.1:5000/api/chatbot';
        const data = { message };
        console.log(data);
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const jsonResponse = await response.json();
        setResponse(jsonResponse.response);
        await addDoc(collection(db, 'chat'),{
          user : message,
          system : jsonResponse,
          email: session?.user?.email,
          timestamp: serverTimestamp(),     
      });
      };
          

     
    
    return(
        <div className="flex flex-col h-screen">
          <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 mt-1">
          {showIcon && (
            <div className=" flex space-x-5 " >
            {[...Array(count)].map((_, index) => (
             <FolderIcon key={index}  onClick={showchat}
             className="h-6 w-6  text-[#b1afaf] disabled:text-[#40444b] hover:text-white "
              disabled = {!showSegment}
             />
             ))}
             <PlusIcon onClick={createsystem} className="h-6 w-6 text-[#b1afaf] " />
             </div>
             )}
           
          
          </header>
       
        {showSegment && (
          <>
        <main className="flex-grow overflow-y-scroll scrollbar-hide">
        
            <div>
        {tips.map((tip) => (
            <Tip key={tip.id} id={tip.id} tip={tip.data()} />
            ))} 
            <div ref={tipRef} className="pb-16"/>
            </div>
            
           
        </main>
        <div className="flex  items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg object-contain">
             <form className="flex-grow "  >
                <input
                      value={input} 
                      onChange={(e) => setInput(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px
                disabled:cursor-not-allowed  disabled:text-white-300 text-white" 
                type="text"
                 placeholder="create"
                 />
             </form>
             <ArrowLeftIcon className="h-6 w-6 text-[#b1afaf]   mr-2" onClick={sendUser}/>
             <ArrowRightIcon className="h-6 w-6 text-[#b1afaf]   mr-2" onClick={sendMe}/>
             
             <Popover className="flex items-center">
                <Popover.Trigger>
                <PaperAirplaneIcon  className="text-white h-6 w-6 navbtn" />
               </Popover.Trigger>
               <Popover.Content>
                <div className=" bg-[#35353f] text-white flex p-2 items-center">
                  <form>
                    <input type="text" 
                    value={intip} 
                    onChange={(e) => setIntip(e.target.value)}
                    placeholder="Name a system" 
                    className="text-black font-bold " />
                  </form>
                  <ArrowCircleRightIcon onClick={renameSystem} className="h-6 w-6 navbtn" />
                </div>
               </Popover.Content>
             </Popover>
        </div>
        </>
        )}
        {chat &&(
          <>
          <main className="flex-grow overflow-y-scroll scrollbar-hide" >
            <p className="text-white">{response}</p>
          </main>
          <div className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg object-contain">
             <form className=" flex-grow "  >
                <input
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px
                disabled:cursor-not-allowed  disabled:text-white-300 text-white" 
                type="text"
                 placeholder="chat"
                 />
             </form>
             <div   >
             <PaperAirplaneIcon onClick={sendMessage} 
               className="h-6 w-6 navbtn" />
               </div>
          </div>
          </>
        )}
        </div>
    );
}
export default SystemInput;