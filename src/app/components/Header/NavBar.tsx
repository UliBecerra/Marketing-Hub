"use client"
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import {Permanent_Marker, Comfortaa} from 'next/font/google' 
import Link from "next/link";
const links = [
  {
    "path" : "/",
    "link" : "Home"
  },
  {
    "path" : "/seo",
    "link" : "SEO"
  },
  {
    "path" : "/ppc",
    "link" : "PPC"
  },
  {
    "path" : "/design",
    "link" : "Diseño grafico"
  },
  {
    "path" : "/ladingPage",
    "link" : "Lading page"
  },
]

const perMark = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fuente2'
})
const comfortaa = Comfortaa({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--font-fuente1'
})

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map(({link, path}) => (
         <Typography
         key={link}
         as="li"
         variant="small"
         color="blue-gray"
         className="p-1 font-bold hover:text-blue-900"
       >
         <Link href={path} className="flex items-center">
           {link}
         </Link>
       </Typography>
      ))}
     
    
    </ul>
  );
 
  return (
    <div className={` max-h-[768px] w-[calc(100%+48px)] overflow-hidden ${comfortaa.variable} font-sans`}>
      <Navbar className="fixed w-screen top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className=" flex items-center justify-between text-blue-500 ">
          <Typography
            as="a"
            href="/"
            className={` text-2xl  ${perMark.variable} font-mono`}
          >
            Marketing Hub
          </Typography>
          <div className="flex items-center gap-4">
            <div className="M-0 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              color="blue"
              className="hidden bg-blue-900 lg:inline-block"
            >
              <span>Contactanos</span>
            </Button>
            <IconButton
              variant="text"
              className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} >
          {navList}
          <Button variant="filled" color="blue" size="sm" fullWidth >
            <span>Contactanos</span>
          </Button>
        </Collapse>
      </Navbar>
     
    </div>
  );
}