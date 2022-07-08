import React from 'react'
import Card from './Card'

export default function AboutMePart() {


    return (
        <div className='flex flex-col' id='about'>
            <h1 className='text-white text-xs 2xl:text-4xl sm:text-[1.5rem] ml-10 mt-10'>About Me</h1>
            <hr className='w-52 mt-8' />

            <div className='flex flex-col w-[90%] self-center mt-10 sm:mt-28'>
                <h1 className='text-white text-[.56rem] sm:text-[1.2rem] xl:text-3xl self-center'>Hi there, My name is Alex. </h1>
                <h1 className='text-white text-[.56rem] sm:text-[1.2rem] xl:text-3xl self-center'>I'm a 17 y.o self thought full stack developer with over 2 years of experience </h1>
                <h1 className='text-white text-[.56rem] sm:text-[1.2rem] xl:text-3xl self-center'>and I make fast web applications</h1>

                <div className='flex w-full mt-10 2xl:mt-40 md:mt-14  border-2 md:h-80  h-40 flex-col bg-table-gray'>
                    <h1 className='text-white text-xs 2xl:text-2xl sm:text-[1rem] self-center mt-3'>Tehnologies I use</h1>
                    <hr className='mt-3' />
                    <div className='flex sm:mt-8 mt-4 content-around w-full justify-around '>
                        <Card CardName="Front End" CardBody={["NextJs", "Javascript", "Typescript"]} />
                        <Card CardName="Back End" CardBody={["Nodejs", "Expressjs", "Sql", "GoLang"]} />
                        <Card CardName="Other" CardBody={["Github"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
