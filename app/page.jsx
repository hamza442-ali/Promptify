
import Feed from "@components/Feed"
 const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

        <h1 className="head_text text-center">
             Descover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">
                AI-Powered Prompts 
            </span>     
        </h1>
        <p className="desc text-center">
            Promptify is an Open source AI Prompting tool for modern world to 
            descover and share creative Prompts 
        </p>

        {/* Feed component  */}
        <Feed/>

    </section>
  )
}
 

export default Home; 
