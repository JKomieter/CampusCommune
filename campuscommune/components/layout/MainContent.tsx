import FirstBox from "./FirstBox";
import Content from "./Content";


const MainContent = () => {
    return (
      <div className="w-full flex flex-col gap-5 md:basis-3/5">
        <FirstBox />
        <Content />
      </div>
    );
}

export default MainContent;