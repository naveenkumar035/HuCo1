import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { PlusCircleIcon } from "@heroicons/react/outline"


import { signOut, signIn , useSession } from "next-auth/react";


import { useState } from "react";


export default function Nav() {
  const collapseItems = [

    
  ];
  const { isDark } = useTheme();
   const [theme, setTheme] = useState("light")


  const { data: session } = useSession();

  console.log(session); 

  return (
     
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
           
         
          <Text b color="inherit" hideIn="xs">
            HuCo
          </Text>
        </Navbar.Brand>
      
       
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link style={{ color: 'black' }} href="#"> </Navbar.Link>
          <Navbar.Link style={{ color: 'black' }}  href="#"></Navbar.Link>
          <Navbar.Link style={{ color: 'black' }} href="#"></Navbar.Link>
          <Navbar.Link style={{ color: 'black' }} href="#"></Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <>
          {session ? (
                <img
                onClick={ signOut }
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 rounded-full cursor-pointer"
              />

          ): (
            <>
          <Navbar.Link color="inherit" href="#">
            
          </Navbar.Link>
          <Navbar.Item>
            <Button style={{ color: 'black' }}  auto flat as={Link} onClick={ signIn }>
              
            </Button>
          </Navbar.Item>
          </>
          )
          }
      
        </>
     </Navbar.Content>
     
     <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              
              {item}
            </Link>
          

          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link style={{ color: 'black' }}  auto flat as={Link} onClick={ signIn }>
            
          </Link>
          </Navbar.CollapseItem>
      </Navbar.Collapse>
      
      </Navbar>   
    
  )
}

