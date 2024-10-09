import Header from "../Component/Header";
import SideBarAdmin from "../Component/SideBar";

function Index() {
    return ( <>
    <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
            <SideBarAdmin />
            {/* right sidebar  */}
            <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
                <Header />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                    <div className="flex mb-4 justify-between items-center">
                        <h2 className="text=-[#1E1E1E] text-lg lg:text-xl font-semibold m-0">Overview</h2>
                    </div>
                   <h2>Hello</h2>
                </div>
            </div>
        </div>
    </> );
}

export default Index;