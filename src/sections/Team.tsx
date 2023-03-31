import ProfileCard from "@/components/ProfileCard";

const Team = () => {
  return (
    <div id="team" className="w-full flex p-10 justify-center items-center">
      <div className="lg:w-3/5 flex lg:justify-around justify-evenly items-center">
        <ProfileCard Role="Creative Designer" instagramTag="@harshii04" />
        <ProfileCard Role="Creative Developer" instagramTag="@ameeshagkm" />
        <ProfileCard
          Role="Creative Developer"
          instagramTag="@sanjayybaskaran"
        />
      </div>
    </div>
  );
};

export default Team;
