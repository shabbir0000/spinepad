import React from "react";
import Footeritem from "../Footer/Footeritem";


function Footer() {
    return (
        <>
            <footer className="bg-gray-700 text-white">
                <h1 className="px-10 py-10">
                    SPINE-PAD
                </h1>
                <div className="grid grid-cols-1 justify-center justify-items-center sm:grid sm:grid-cols-1 ">

                    <input placeholder="Enter Your Pno" className="h-10 w-72 rounded-md "></input>
                    <button className="my-5 bg-slate-600  h-10 w-40 rounded-lg">Request Code</button>
                </div>

                <Footeritem />
               
            </footer>
        </>

    )
}

export default Footer;


