import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { redirect } from "next/navigation";

const default_category_id = "01";

export default function Home() {
    redirect(`/category/${default_category_id}`)
}
