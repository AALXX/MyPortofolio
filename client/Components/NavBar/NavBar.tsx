import React from 'react'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'

export default function NavBar() {
    const router = useRouter()

    const MoveToFirstPage = () => {

        if (router.pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }, 20)
        } else {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className='flex w-full  bg-nav-gray h-20 fixed z-10'>
            <h1 className='text-white self-center font-Exo_2 lg:ml-12 sm:ml-10 text-2xl ml-6 sm:text-4xl cursor-pointer' onClick={MoveToFirstPage} >S3RBVN</h1>
            <div className='flex ml-auto h-full  w-full sm:w-[60%] lg:w-6/12 justify-end'>
                <Link className='self-center mr-4 lg:mr-28 md:mr-10' to="about" spy={true} smooth={true} offset={-80} duration={500}>
                    <button className='text-white font-Exo_2  text-xs sm:text-lg' onClick={MoveToFirstPage} >About</button>
                </Link>
                <Link className='self-center mr-4 lg:mr-28 md:mr-10' to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                    <button className='text-white font-Exo_2  text-xs sm:text-lg' onClick={MoveToFirstPage} >Projects</button>
                </Link>
                <a className='mr-4 lg:mr-28 sm:mr-10 self-center' href={"/contact"}><button className='text-white font-Exo_2  text-xs sm:text-lg'>Contact Me</button></a>
            </div>
        </div>
    )
}

