import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline' >Popular Companions</h1>
      <section className="home-section" >
        <CompanionCard
          id="123"
          name="Neaura the brainy explorer"
          topic="Neural Networks of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countasy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#ffda6e"
        />
      </section>

      <section className="home-section" >
        <CompanionList
          title="Recently completed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
    
  )
}

export default Page