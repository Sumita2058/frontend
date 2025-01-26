import { hero } from "../../image";

const Hero = () => {
    return(
         <div className="dark:bg-black dark:text-white duration-100 relative">
        <img src={hero} alt="hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-white/70 dark:bg-black/80 duration-300 relative">
        <div className="container min-h-[620px] flex items-center">
            <div className="w-full md:w-[500px] mx-auto  text-center space-y-5">
                <p className="text-primary text-2xl">
                    Start Your Fitness Journey
                </p>
                <h1 className="text-5xl md:text-7xl font-bold">Your Fitness Journey Begins</h1>
             <p>The body achieves what the mind believes.</p>
             <button className="primary-btn">Get Started</button>
            </div>
        </div>
        </div>
    </div>
    );
};
export default Hero;