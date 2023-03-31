import Link from "next/link";

const ProfileCard = ({
  Role,
  instagramTag,
}: {
  Role: string;
  instagramTag: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="border-2 rounded-full border-white  h-12 w-12"></div>
      <div className="flex flex-col">
        {/* <Image src="/" alt="Something" /> */}
        <p className="text-white">{Role}</p>
        <Link
          href={`https://linkedin.com/in/${instagramTag.replace("@", "")}`}
          target="_blank"
        >
          {instagramTag}
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
