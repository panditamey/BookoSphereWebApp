import GenerateBook from "@/components/GenerateBook"
import Hero from "@/components/Hero"

function Home() {
    return (
        <>
            <GenerateBook />
            <Hero type="generated" />
            <Hero type="books" />
        </>
    )
}

export default Home