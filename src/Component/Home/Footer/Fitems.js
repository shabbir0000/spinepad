import React from 'react'

const Fitems = ({ link, title }) => {
    return (
        <>
            <ul  >
                <h1 >{title}</h1>
                {
                    link.map((links) => (
                        <>
                            <li   key={links.name}>

                                <a className="text-blue-500 hover:text-white duration-300" href={links.link}>{links.name}</a>

                            </li>

                        </>
                    ))

                }
            </ul>
        </>
    )
}

export default Fitems;