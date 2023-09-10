import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col">
    <div className="text-3xl font-bold ">This is a Protected Page</div>
    <Button variant="destructive">ClickMe</Button>
    </div>
  )
}
