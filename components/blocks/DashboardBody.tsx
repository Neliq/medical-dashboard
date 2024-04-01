import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

export default function DashboardBody({children}: {children: React.ReactNode}) {
    
  return (
    <div className="flex p-0 flex-col justify-between items-start flex-grow flex-shrink-0 flex-basis-0 self-stretch">
        <TopBar />
        <div className="flex flex-col justify-between items-start flex-grow flex-shrink-0 flex-basis-0 self-stretch bg-base-white">
          {children}
        </div>
        <BottomBar />
    </div>
    );
  }