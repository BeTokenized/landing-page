import Image from "next/image";
import HeroCurrency from "../../public/heroCurrency.svg";

const Hero = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-4 h-screen ">
      <Image src={HeroCurrency} alt="Hero Currency" />
      <p className="text-4xl font-fraunces font-semibold bg-gradient-to-b from-btGray to-gray-50 bg-clip-text text-transparent">
        Experience Events in a <br />
        Whole New Way
      </p>
      <p className="text-base">
        Get Tokenized and enjoy hassle-free payments at your next <br /> event,
        you can start by registering for your event
      </p>
      <button className="py-4 px-10  border-2 rounded-full border-btGray">
        <span className="bg-gradient-to-b from-btGray to-white  bg-clip-text text-transparent">
          Register Now
        </span>
      </button>
    </div>
  );
};

export default Hero;
