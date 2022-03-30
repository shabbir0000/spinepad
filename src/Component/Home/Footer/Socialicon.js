import React from 'react';
import {

  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaGithubSquare,
  FaLinkedin

} from 'react-icons/fa';

const Socialicon = () => {
  return (
    <>
      <div >

        <ul className="flex flex-row justify-items-center gap-x-5  ">
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaFacebookSquare  />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaInstagramSquare className="bg-purple-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaYoutubeSquare className="bg-red-500" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaGithubSquare className="bg-slate-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_thapa">
              <FaLinkedin className="bg-blue-300" />
            </a>
          </li>
        </ul>
        
      </div>
    </>
  )
}

export default Socialicon;