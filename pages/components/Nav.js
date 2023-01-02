import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import Image from "next/image";
import { signOut, signIn , useSession } from "next-auth/react";

export default function Nav() {
  const { isDark } = useTheme();

  const { data: session } = useSession();

  console.log(session); 

  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
         
          <Text b color="inherit" hideIn="xs">
            HuCo
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="#">Exoughts</Navbar.Link>
          <Navbar.Link isActive href="#">Posts</Navbar.Link>
          <Navbar.Link href="#">videos</Navbar.Link>
          <Navbar.Link href="#">updates</Navbar.Link>
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
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} onClick={ signIn }>
              Sign Up
            </Button>
          </Navbar.Item>
          </>
          )
          }
      
          </>        
          </Navbar.Content>
      </Navbar>   
    </Layout>
  )
}

