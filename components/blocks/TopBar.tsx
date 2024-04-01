import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TopBar() {
    
  return (
    <div className="border-b border-slate-300 bg-base-white flex h-20 p-6 justify-between items-center gap-0 self-stretch">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search field..." />
        <Button type="submit" variant="primary">Search</Button>
      </div>
    </div>
    );
  }