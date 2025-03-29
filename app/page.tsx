import Welcome from "./ui/HomePageComponent/Welcome";
import ForAdmin from "./ui/HomePageComponent/ForAdmin";
import ForEmployee from "./ui/HomePageComponent/ForEmployee";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 ">
      {/* Welcome */}
      <Welcome />
      {/* Admin  And Employee section */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 !mb-20">
        {/* For Admin */}
        <ForAdmin />
        {/* Line */}
        <p className=" border !ml-10 !mr-10 md:!m-0 border-[#A0AEC0]  opacity-50 rounded-2xl "></p>
        {/* For Employee */}
        <ForEmployee />
      </div>
    </div>
  );
}
