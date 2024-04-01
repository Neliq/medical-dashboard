import { Button } from "../ui/button";

export default function BottomBar() {
    
  return (
    <div className="border-t border-slate-300 bg-base-white flex h-20 pr-6 flex-col justify-center items-end gap-0 self-stretch">
      <div className="flex justify-center items-center gap-4">
        <Button variant='destructive'>Cancel</Button>
        <Button variant='secondary'>Draft</Button>
        <Button variant='primary'>Finish</Button>
      </div>
    </div>
    );
  }