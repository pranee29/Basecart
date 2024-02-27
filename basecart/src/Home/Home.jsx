import Header from "./Header";


// import {
//     Carousel,
//     initTE,
//   } from "tw-elements";
  import { useEffect } from "react";
import ItemCard from "./ItemCard";
// import SideBar from "./SideBar";

function Home(){
    useEffect(() => {
        // initTE({ Carousel });

      }, []);

    return(
        <div className="w-full h-full flex">
            {/* <SideBar/> */}
            <div className="flex flex-col gap-10 w-full h-full">
                <Header/>
                <div className="flex gap-10 ml-10 flex-wrap">
                    <ItemCard/>
                   
                </div>
            </div>
        </div>
    );
}

export default Home;