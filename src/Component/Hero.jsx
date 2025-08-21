import Sidebar from "./Sidebar";

function Hero() {
    return (

        <div>
            
            <div className="flex flex-col items-center justify-center mb-16 p-7 space-y-15">
                <img src="/payment.png" alt="Money transfer" className="rounded-x-l shadow-lg w-[650px] h-auto object-contain"/>
            
            <p className="text-gray text-center font-manrope w-60 ">
                We escalate transfer efficiency and productivity
            </p>
             
             <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
                <div className="flex space-x-2 items-center">
                    <img src="/Blooming.svg" alt="Blooming"className="h-10 w-10 mb-2"/>
                    <span className="text-sm font-medium text-[#619111] ">Blooming </span>
                </div>
                <div  className="flex space-x-2 items-center">
                    <img src="/BuildRight.svg" alt="BuildRight" className="h-10 w-10 mb-2" />
                    <span className="text-sm font-medium text-[#619111] ">BuildRight</span>
                </div>
                <div  className="flex space-x-2 items-center">
                    <img src="/Flowbot.svg" alt="Flowbot" className="h-10 w-10 mb-2" />
                    <span className="text-sm font-medium text-[#619111] ">Flowbot</span>
                </div>
                <div  className="flex space-x-2 items-center">
                    <img src="/Expor.svg" alt="EXPOR" className="h-10 w-10 mb-2" />
                    <span className="text-sm font-medium text-[#619111] ">EXPOR</span>
                </div>
                <div  className="flex items-center">
                    <img src="/Redo.svg" alt="Redo" className="h-4 w-20 mb-2" />
                </div>
             </div>
             </div>
                <section id="section1">
               <div className="mb-8 text-center px-7">
                <h2 className="text-5xl text-[#619111] font-bold mb-4">Get More Done In A Week</h2>
                <p className="text-sm text-gray-700 w-110 mx-auto">Maximize your Productivity with smarter tools designed to streamline your workflow to automate tasks, stay oraganized.</p>
                  </div>
                <div className="mb-8 grid grid-cols-2 p-7 gap-6 justify-center">
                  <div className="bg-[#D2FD9C] p-10 rounded-lg flex flex-col items-center justify-center text-[#619111] shadow-md">
                    <h3 className="text-7xl font-medium ">2x</h3>
                    <p className="mt-2 font-medium text-center">Double Your Productivity</p>
                </div>
                    <div className="bg-[#D2FD9C] p-10 rounded-lg flex flex-col items-center justify-center text-[#619111] shadow-md">
                         <img src="/effect.svg" alt="Efficiency Increase"  className="w-20 h-17 mb-4"/>
                         <p className="text-center text-sm font-medium "> Efficiency Increase Per Transfer</p>
                    </div>
                    <div className="bg-[#D2FD9C] p-10 rounded-lg flex flex-col items-center justify-center text-[#619111] shadow-md">
                        <img src="/lolo.svg" alt="Centralize Finance" className="w-30 h-25 mb-4" />
                        <p className="text-center text-sm font-medium">Centralize Your Finance</p>
                    </div>
                    <div className="bg-[#D2FD9C] p-10 rounded-lg flex flex-col items-center justify-center text-[#619111] shadow-md">
                        <img src="/more.svg" alt="More Activity Per Account" className="w-35 h-20 m-4" />
                        <p className="text-center text-sm font-medium">More Activity Per Account</p>
                    </div>
                </div>
              </section>
               <section id="section2" className="mt-50 px-7">
                    <h1 className="text-5xl text-center mb-6 text-[#619111] ">
                        The Most Reliable App
                    </h1>
                    <div className="flex justify-center gap-x-4 mb-4 ">
                        <img src="/card.png" alt="Card showcase" className="rounded-lg w-1/2" />
                        <img src="/2020.png" alt="Transaction feature" className="rounded-lg w-1/2"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                        <div>
                            <p className=" text-sm text-[#619111] font-medium w-70">Scale your team, not your card expenses.</p>
                             <span className="text-gray-700 font-stretch-condensed text-sm w-85" >Issue virtual and physical cards at no additional cost to support teams of any size.</span>
                        </div>
                       <div>
                            <p className="text-sm text-[#619111] font-medium  ">Effortless paper tracking, mobile convenience. </p>
                            <span className="text-gray-700 font-stretch-condensed text-sm w-90">Get precise control-at scale-with the ability to lock any card and restrict spend.</span>
                       </div>
                    </div>
               </section>
                <section className="mt-40 text-center px-7">
                       <img src="/smiling.png" alt="Happy customer" className="mx- auto rounded-lg" />
                </section>
                <section id="section3" className="mt-40 text-center px-7">
                       <h1 className="text-[#619111] text-5xl mb-4">First Class Software</h1>
                       <p className="text-gray-700 w-100 mx-auto mb-6 font-medium text-sm">
                        Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.
                       </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                             <img src="/wallet.png" alt="wallet" className="rounded-lg shadow-md w-40 h-40" />
                             <img src="/finger.png" alt="fingerprint" className="rounded-lg shadow-md w-40 h-40" />
                             <img src="/money.png" alt="money management" className="rounded-lg shadow-md w-40 h-40" />
                             <img src="/people.png" alt="team collaboration" className="rounded-lg shadow-md w-40 h-40" />
                        </div>
                         <div className="flex flex-wrap gap-x-26 justify-center mt-6 text-sm font-medium text-gray-700">
                            <p>Safe Storage</p>
                            <p>Secure</p>
                            <p>Earn Interest</p>
                            <p>Family Plans</p>
                         </div>
                </section>
                 <section className="mt-40 relative px-7">
                        <img src="/presser.png" alt="press feature" className="mx-auto rounded-lg shadow-lg" />
                        <div className="absolute bottom-6 left-6 p-6 text-white max-w-sm">
                            <h2 className="text-3xl font-semibold leading-snug">
                                Download Etran and Manage everything from your phone
                            </h2>
                            <button className="bg-[#D2FD9C] mt-4 text-black px-4 py-2 rounded  hover:bg-[#619111] font-semibold">
                                Get started
                            </button>
                        </div>
                 </section>
                  <footer className="mt-30 bg-gray-200">
                        <div className="flex justify-between items-start p-6 border-b border-gray-300">
                            <img src="ziggy.svg" alt="ziggy logo" className="w-15 h-15 " />

                            <div className="text-start mr-20">
                                <h5 className="text-sm text-gray-500 mb-2">Contact</h5>
                                <p className="text-sm hover:text-gray-400">hello@figma.com</p>
                                <p className="text-sm hover:text-gray-400">Instagram</p>
                                <p className="text-sm hover:text-gray-400">X</p>
                                <p className="text-sm hover:text-gray-400">LinkedIn</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-6 ">
                            <h1 className="text-5xl font-bold">Etran</h1>
                            <div className="text-start mr-15">
                                <p  className="text-sm hover:text-gray-500">Terms and Conditions</p>
                                <p  className="text-sm hover:text-gray-500">Privacy</p>
                            </div>
                        </div>
                  </footer>
        </div>
    );
}
export default Hero;