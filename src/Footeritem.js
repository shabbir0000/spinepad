import React from 'react';
import Fitems from './Fitems';
import { PRODUCTS, COMPANY, RESOURCES, SUPPORT } from './Fitemdata';
import Socialicon from './Socialicon';
import {Icons} from './Fitemdata';

function Footeritem() {
    return (
        <>
            <div className="bg-slate-900 text-white">
                <Fitems link={PRODUCTS} title="PRODUCTS" />
                <Fitems link={COMPANY} title="COMPANY" />
                <Fitems link={RESOURCES} title="RESOURCES" />
                <Fitems link={SUPPORT} title="SUPPORT" />

                <div className="grid grid-cols-1 justify-items-center pt-5">
                    <span>@ 2020 Apply.All Right Reserved</span>
                    <span>Terms . Privacy Policy</span>
                    <Socialicon icons={Icons} />
                </div>
            </div>
        </>
    )
}

export default Footeritem;