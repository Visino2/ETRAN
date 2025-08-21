function Sidebar() {
    return (
        <div className="bg-[#394508] w-4/5 flex flex-shrink-0 flex-col p-14 justify-between ">
        
           <div> 
                <div className="flex items-center justify-between mb-8">
                 <h1 className="font-semibold text-white text-2xl">Etran</h1>   
              <button className="bg-[#D2FD9C] text-black px-4 py-2 rounded hover:bg-[#619111]">
               Get started
              </button>
                </div>

                <h2 className=" font-plex text-4xl w-90 font-bold mb-4 leading-snug">Money Transfers Made <span className="text-[#D2FD9C]">Simple</span></h2>
                <p className="text-gray-200 mb-8">
                    No personel credit checks or founder guarantee.
                </p>
                <h3 className="text-sm font-semibold mb-4 mt-10 text-[#D2FD9C]">Our offerings</h3>
                   <div className="flex gap-x-5 mb-8 ">
                    <a href="#section1" className="bg-[#619111] p-6 rounded text-black flex flex-col items-center w-40 h-40 justify-center gap-2 hover:bg-[#D2FD9C] transition">
                        <img src="/icon.png" alt="" className="w-10 h-10" />
                        <p className="text-center font-medium text-sm">Instant Productivity</p>
                    </a>
                    <a href="#section2"  className="bg-[#619111] p-6 rounded text-black flex flex-col items-center w-40 h-40 justify-center gap-2 hover:bg-[#D2FD9C] transition">
                        <img src="/web.png" alt="" className="w-10 h-10" />
                        <p className="text-center font-medium text-sm">Expense Productivity</p>
                    </a>
                    <a href="#section3"  className="bg-[#619111] p-6 rounded text-black flex flex-col items-center w-40 h-40 justify-center gap-2 hover:bg-[#D2FD9C] transition">
                        <img src="/mark.png" alt="" className="w-10 h-10" />
                        <p className="text-center font-medium text-sm">Advanced Technology</p>
                     </a>
                   </div>
            </div>
                <footer className="flex gap-x-4  text-sm font-medium text-[#D2FD9C] mt-1 space-y-1">
                    <a href="/Contact" className="hover:text-shadow-white hover:underline">Contact</a>
                    <a href="" className="hover:text-white cursor-pointer">Socials</a>
                    <a href="" className="hover:text-white cursor-pointer">Address</a>
                    <a href="" className="hover:text-white cursor-pointer">Legal Terms</a>
                </footer>
    </div>
    );
}

export default Sidebar;