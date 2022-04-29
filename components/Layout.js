import Link from "next/link";
import Image from "next/image";


export default function Layout({children}) {
    const linkedin = "https://www.linkedin.com/in/lukmon-abdulsalam/";
    const github = "https://github.com/litmus-zhang"
    const twitter = "https://twitter.com/litmus13lukman";
  return (
    <div className='text-left flex flex-col justify-between bg-bg-dark items-left justify-between w-full   m-auto'>
<header className='flex justify-between items-center w-full m-4 px-8'>
    <div className='font-bold text-gray-5'>
        Litmus.eth
    </div>

    <nav  className='text-white flex items-center justify-center'>
        <Link href="/">
        <a className='p-4'>Home</a>
        </Link>
        <Link href="/work">
        <a  className='p-4'>My Works</a>
        </Link>
        <Link href="/clients" >
        <a  className='p-4'>Clients</a>
        </Link>
        <Link href="/contact">
        <button  className='p-4 bg-primary text-white'>Hire Me</button>
        </Link>
    </nav>
</header>
{children}

    <footer className='flex flex-col justify-between items-left w-full m-4 px-8'>
    <div className='font-bold text-gray-4'>
        Litmus.eth
    </div>
    <p className='text-gray-3'>
        Love to work with me? 
        Reach out to me on my socials
        </p>
    <span  className='text-gray-4 flex items-center justify-start'>
        <Link href={linkedin} >
        <a  target="_blank"  className='p-0'>Linkedin</a>
        </Link>
        <Link href={twitter}>
        <a target="_blank"  className='p-4 pr-0'>Twitter</a>
        </Link>
        <Link href={github} >
        <a target="_blank" className='p-4'>Github</a>
        </Link>
       
    </span>
        </footer>
    </div>
  )
}
