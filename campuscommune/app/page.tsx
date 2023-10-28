import Spaces from "../mypages/layout/Spaces";
import MainContent from "../mypages/layout/MainContent";
import News from "@/mypages/news/News";

export default function Home() {
  return (
    <div 
    style={{backgroundColor: "#f5f5f5"}}
    className="w-full h-screen overflow-hidden pt-[68px]">
      <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full flex flex-row gap-4 items-start">
        <Spaces />
        <MainContent />
        <News />
      </div>
    </div>
  );
}
