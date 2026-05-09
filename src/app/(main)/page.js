import LeftSideBar from "@/components/homepage/news/LeftSideBar";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
      <div className="col-span-3">
        <LeftSideBar activeId={null} />
      </div>
      <div className="col-span-6">
        <p className="font-bold text-2xl">All News</p>
      </div>
      <div className="col-span-3">
        <p className="font-bold text-2xl">Social References</p>
      </div>
    </div>
  );
}
