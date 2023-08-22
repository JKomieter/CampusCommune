import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

const PostProgress = ({ postLoading }: { postLoading: boolean }) => {

    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);


  if (!postLoading) return null;

  return (
    <div className="w-full p-1 bg-white shadow-lg">
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default PostProgress;
