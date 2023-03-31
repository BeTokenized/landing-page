import Image from "next/image";
import FlyingCoin from "../../public/flyingCoin.svg";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center gap-6 h-screen p-6 lg:p-0 container lg:w-3/5 mx-auto"
    >
      <p className="text-white font-fraunces font-semibold text-3xl">About</p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Image src={FlyingCoin} alt="FlyingCoin" />
        <p className="text-base lg:text-lg ">
          Tokenized is a virtual currency based payment system for events.
          We&apos;re passionate about revolutionising the event industry by
          providing a secure, easy-to-use payment solution that eliminates the
          need for cash and credit cards.
        </p>
      </div>
    </div>
  );
}

export default About;
