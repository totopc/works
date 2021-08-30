import React from 'react'

const Home = () =>{
return (
    <div className="w-full text-white overflow-hidden ">

    <div className=" px-10 1/2 p-5 grid grid-cols-8 gap-4  text-left">
        <div className="z-10 col-start-2 col-span-5">
         <h3 className = "flex text-xs font-orbitron">PROJECT NAME
         <p className=" border-t-2 border-gray-800 w-40 ml-5 mt-1 bg">
        </p>
         </h3> 
         <h1 className = "text-7xl font-russo">REDACT.DEV</h1>
        </div>
        <ul className=" col-start-7 col-span-2 row-span-5 font-orbitron">
            <li className="flex my-5">
            <p className="w-5 text-xs font-black text-green2  transform -rotate-90 mr-5 ">01</p>
            <p className="underline  underline-green2-DEFAULT underline-style-wavy">Redact.dev</p>
            </li>

            <li className="ml-10 filter blur-sm">
            <li className="flex my-5">
            <p className="w-5 text-xs font-black text-green2  transform -rotate-90 mr-5 ">02</p>
            <p className="">TTM</p>
            </li>
            
            <li className="flex my-5">
            <p className="w-5 text-xs font-black text-green2  transform -rotate-90 mr-5 ">03</p>
            <p className="">T-Mobile Pets </p>
            </li>

            <li className="flex my-5">
            <p className="w-5 text-xs font-black text-green2  transform -rotate-90 mr-5 ">04</p>
            <p className="">Whirpool Smart Appliance</p>
            </li>

            <li className="flex my-5">
            <p className="w-5 text-xs font-black text-green2  transform -rotate-90 mr-5 ">04</p>
            <p className="">Woobot.io</p>
            </li>
            

            </li>

            

            
       
        </ul>

        <div className=" w-1/4 z-0 -ml-80 absolute col-start-2 col-span-4 border-2 border-gray-800 mt-5 p-5">
            <img className="  filter blur-sm" src="src/images/02_ttm/featured.png" alt="" />
        </div>

        <div className=" z-10 col-start-2 col-span-4 border-2 border-gray-800 m p-5">
            <img src="src/images/01_redact/featured.png" alt="" />
        </div>
        <div className="font-orbitron col-start-2 col-span-5 mt-10 flex">
        <h1 className=" font-black text-green2 text-6xl">01</h1>
        <p className=" border-t-2 border-gray-800 w-20 m-4 bg">
        </p>

        <p className="mt-7 -ml-20 "> 
        Redact.dev 
        <span className="text-green2 mx-2">◆</span> 
        Product Design, Animation, Prototyping, Illustration
        <span className="text-green2 mx-2">◆</span>
        2021
        </p>
        
        </div>

        <div className=" font-orbitron ">
            <p><span className="line-through text-green2">Read</span>  Read Read Read Read Read Read Read Read Read Read Read Read  ➔ </p> 
            
        </div>
      
        <div className="col-start-2 col-span-3 ">
            <p className= "font-buenard">Excuse me, but as a knowledgeable software developer, bugs are literally IMPOSSIBLE to fix. If you had any idea how coding worked you'd know that. It is completely unreasonable to suggest that professional developers be able to develop a game. Now you may think that us not being able to fix bugs makes us look incompetent, but you have to understand that programming is the hardest job any human can possibly do. It isn't just applying learned skills. Proper programming requires an ethereal binding of the mind and soul with the source code. It isn't as simple as the normie non-software developer types suggest. Please send more money.</p>
        </div>
        <div className="flex text-xl items-center justify-around font-russo transform rotate-90 ">
            <p className="underline text-green2 underline-green2-DEFAULT underline-style-wavy"  >MORE INFO</p>
        </div>
     
    
        <div className="flex col-span-6  border-b border-gray-800 font-orbitron  p-10">
            <div className="flex-grow">
            <p className=" text-xl font-black">TOTOPC</p>
            <p className="text-sm">Seeeeexx</p>
            </div>
            <div className="flex items-end  "> 
            
           

            <a className="mr-5" href="mailto:raymarlobaton@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg> </a>

            <a href="https://www.youtube.com/channel/UClXBtnbCQoeAyR5AQLMLCBg"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg></a>
                        
             
            </div>
            
          
        </div>
    </div>

    </div>


);

};
export default Home;