import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import MiddleBar from "@/components/homepage/news/MiddleBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsByCategories } from "@/lib/data-fetch";



const page = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const newsData = await getNewsByCategories(id);
    const allNews = newsData.data;
    // console.log(allNews);

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-10">
            <div className="col-span-3">
                <LeftSideBar activeId={id} />
            </div>
            <div className="col-span-6">
                <MiddleBar allNews={allNews} />
            </div>
            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default page;