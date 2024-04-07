import TopBar from "@/components/blocks/TopBar"
import BottomBar from "@/components/blocks/BottomBar"

export default function Home() {
  return (
    <div className="al-ver al-1 fill-x fill-y">
      <TopBar page="/appointments/papers"/>
      <div className="al-5 fill-x fill-y gap-6 bg-slate-100 p-6">
        <div className="al-ver al-1 fill-x fill-y p-6 shadow-sm rounded bg-white">
          <div className="font-normal text-2xl text-slate-800">Home</div>
        </div>
        <div className="al-ver al-1 fill-x fill-y p-6 shadow-sm rounded bg-white gap-auto">
          <div className="bg-red-500 al-5 al-ver">Block</div>
          <div className="fill-x bg-red-500 al-5 al-hor">Block</div>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}
