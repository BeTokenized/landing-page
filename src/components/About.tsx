import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-white"> About </p>
      <div className="flex">
        <p>
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
