import Image from "next/image";
import HeroCurrency from "../../public/heroCurrency.svg";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col text-center items-center p-6 lg:p-0 justify-center gap-4 h-screen"
    >
      <Image src={HeroCurrency} alt="Hero Currency" />
      <p className="text-3xl lg:text-4xl font-fraunces font-semibold bg-gradient-to-b from-btGray to-gray-50 bg-clip-text text-transparent">
        Experience Events in a <br />
        Whole New Way
      </p>
      <p className="text-sm lg:text-base ">
        Get Tokenized and enjoy hassle-free payments at your next event, you can
        start by registering for your event
      </p>
      {/* <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."> */}

      <button className="py-4 px-10  border-2 rounded-full border-btGray transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-100  duration-300">
        <span className="bg-gradient-to-b from-btGray to-white bg-clip-text text-transparent">
          Coming Soon
        </span>
      </button>
    </div>
  );
};

export default Hero;
