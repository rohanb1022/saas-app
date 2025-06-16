import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

interface CompanionCardProps{
  id : string,
  topic : string,
  subject : string
  duration: number,
  name : string,
  color : string
}

const CompanionCard = ({id , topic , subject , duration , name , color} : CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor : color}} >
      <div className="flex justify-between items-center" >
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark" >
          <Image 
            src="/icons/bookmark.svg" alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h1 className="text-2xl font-bold" >{name}</h1>
      <p className="text-sm" >{topic}</p>
      <div className="flex items-center gap-2" >
        <Image 
          src="/icons/clock.svg" alt="clock"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm" >{duration} minutes</p>
      </div>
      <div>
        <Link
          href={`/companion/${id}`}
          className="w-full"
        >
          <Button className="btn-primary w-full justify-center" >Launch Course</Button>
        </Link>
      </div>
    </article>
  )
}

export default CompanionCard
