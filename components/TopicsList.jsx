import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

export default async function TopicsList() {
    const { books } = await getTopics();
    
    return (<>
     

    {/* {books.map((t) => (
        console.log(t.description)
    ))} */}
        <div className="p-4 border border-slate-300 my-300 flex justify-between gap-5 items-start">
            <div>
                <h2 className="font-bold text-2xl">HTML1</h2>
                <div>
                    HTML1 Description
                </div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn />
                <Link href={'/editBooks/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
        
    </>
)
}