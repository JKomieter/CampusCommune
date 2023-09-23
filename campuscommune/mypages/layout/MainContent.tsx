import FirstBox from "./FirstBox";
import Content from "./Content";


const MainContent = () => {
    return (
        <div className="w-full h-full flex flex-col gap-5 basis-2/5 max-w-[400px] overflow-y-scroll" style={{maxWidth: "700px", minWidth: "300px", overflowY: "scroll",}}>
          <FirstBox />
          <Content />
        </div>
    );
}

export default MainContent;