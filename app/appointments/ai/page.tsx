import TopBar from "@/components/blocks/TopBar"
import BottomBar from "@/components/blocks/BottomBar"

export default function Home() {
  return (
    <div className="al-ver al-1 fill-x fill-y">
      <TopBar page="/appointments/ai"/>
      <div className="al-5 fill-x fill-y gap-6 bg-slate-100 p-6">
        <div className="al-ver al-1 fill-x fill-y p-6 shadow-sm rounded bg-white">
          <div className="font-normal text-2xl text-slate-800">Input Symptoms</div>
        </div>
        <div className="al-ver al-1 fill-x fill-y p-6 shadow-sm rounded bg-white gap-auto">
          <div className="font-normal text-2xl text-slate-800">AI Suggested Symptoms</div>
        </div>
        <div className="al-ver al-1 fill-x fill-y p-6 shadow-sm rounded bg-white gap-auto">
          <div className="font-normal text-2xl text-slate-800">AI Diagnosis</div>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}
