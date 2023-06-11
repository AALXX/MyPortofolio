import React, { useEffect, useState } from 'react'

interface CardProps {
  CardName: string,
  CardBody: Array<string>,
}

export default function Card(props: CardProps) {

  const [cardBodyTehnologies, setCardBodyTehnologies] = useState<Array<string>>([]);

  useEffect(() => {
    setCardBodyTehnologies(props.CardBody)
  }, [])

  return (
    <div className='flex border-2 lg:w-80 sm:w-[13rem] w-24 h-20 sm:h-48 flex-col'>
      <h1 className='text-white text-[.5rem] sm:text-[1rem] lg:text-2xl mt-1 sm:mt-2 self-center'>{props.CardName}</h1>
      <hr className='mt-1 sm:mt-3' />
      {cardBodyTehnologies.map((body, index) => (
        <h1 key={index} className='text-white text-[.5rem] sm:text-[.8rem] lg:text-xl sm:mt-1 self-center'>{body}</h1>
      ))}
    </div>
  )
}
