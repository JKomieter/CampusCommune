import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import QuestionTagsSelect from "./QuestionTagsSelect";


interface FinalStepProps {
    text: string;
}


const FinalStep: React.FC<FinalStepProps> = ({
    text,
}) => {

    const [ mode, setMode ] = useState<number>(0);

    const modeStyles = {
      color: "#FF725E",
    //   backgroundColor: "#F5F5F5 ",
      borderBottomWidth: "2px",
      borderColor: "#FF725E",
    } as React.CSSProperties;

    return (
      <>
        <div className="flex flex-col items-start w-full gap-0.5 md:text-[16px] text-sm text-neutral-800 font-semibold px-3">
          <h4 className="w-full">Request Answers:</h4>
          <h4 className="w-full">{text}</h4>
        </div>
        <div className="flex flex-col items-center w-full bg-neutral-200 pt-2 gap-2">
          <div className="px-3 w-full">
            <div className="flex flex-row rounded-sm p-2 w-full gap-1 bg-neutral-100 text-sm">
              <FiSearch size={22} className="text-neutral-400" />
              <input
                type="text"
                placeholder="Search for people for people and spaces"
                className="w-full outline-none bg-transparent text-neutral-800"
              />
            </div>
          </div>
          <div className="w-full flex flex-row items-start font-semibold md:text-sm text-xs">
            <div
              onClick={() => setMode(0)}
              style={mode === 0 ? modeStyles : {}}
              className="flex justify-center items-center py-3 px-4 cursor-pointer"
            >
              People
            </div>
            <div
              onClick={() => setMode(1)}
              style={mode === 1 ? modeStyles : {}}
              className="flex justify-center items-center py-3 px-4 cursor-pointer"
            >
              Spaces
            </div>
          </div>
        </div>
        <QuestionTagsSelect />
      </>
    );
}

export default FinalStep;