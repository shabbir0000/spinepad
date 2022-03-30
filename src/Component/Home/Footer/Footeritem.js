import React from 'react';
import Fitems from './Fitems';
import { PRODUCTS, COMPANY, RESOURCES, SUPPORT } from './Fitemdata';
import Socialicon from './Socialicon';
function Footeritem() {
    return (
        <>
            <div className="bg-slate-900 text-white grid grid-cols-1 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4">
                <Fitems link={PRODUCTS} title="PRODUCTS" />
                <Fitems link={COMPANY} title="COMPANY" />
                <Fitems link={RESOURCES} title="RESOURCES" />
                <Fitems link={SUPPORT} title="SUPPORT" />
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-y-5 pt-5 sm:grid sm:grid-cols-3">
                <span>@ 2020 Apply.All Right Reserved</span>
                <span>Terms . Privacy Policy</span>

                <Socialicon />


            </div>

        </>
    )
}

export default Footeritem;