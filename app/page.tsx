import Welcome from "./ui/components/Welcome";
import ForAdmin from "./ui/components/ForAdmin";
import ForEmployee from "./ui/components/ForEmployee";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center md:gap-40 gap-10 md:!mt-[var(--mainMargin-top)] !mt-[var(--mainMarginResp-top)] ">
      {/* Welcome */}
      <div className=" flex-1 ">
        <Welcome />
      </div>

      {/* Admin  And Employee section */}
      <div className=" flex-1 flex flex-col md:flex-row gap-5 md:gap-0 !mb-[var(--mainMargin-bottom)]">
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
