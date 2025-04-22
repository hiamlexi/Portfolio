import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="info-box sm:text-xl sm:leading-snug text-center text-black bg-[#ffe4f0] shadow-[0_0_12px_rgba(255,182,193,0.6)] py-4 px-8 rounded-xl mx-5">
      <p className="font-medium sm:text-xl text-center">
        Hi, I'm <span className="font-semibold">Linh Pham</span> 👋
        <br /> A Software Engineer from Sweden 👩‍💻
      </p>
    
      <Link to="/about" className="neo-brutalism-white neo-btn mt-3">
        About Me
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain ml-2" />
      </Link>
    </div>
    
    );

  if (currentStage === 2) {
    return (
      <div className='info-box sm:text-xl sm:leading-snug text-center text-black bg-[#ffe4f0] shadow-[0_0_12px_rgba(255,182,193,0.6)] py-4 px-8 rounded-xl mx-5'>
        <p className='font-medium sm:text-xl text-center'>
        Thanks for stopping by👋!
        <br/>  Drag the scene 🖱️ or use arrows ⬅️➡️ to look around.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          About Me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box sm:text-xl sm:leading-snug text-center text-black bg-[#ffe4f0] shadow-[0_0_12px_rgba(255,182,193,0.6)] py-4 px-8 rounded-xl mx-5'>
        <p className='font-medium text-center sm:text-xl'>
           <br /> Wanna see what I’ve been building?✨

        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box sm:text-xl sm:leading-snug text-center text-black bg-[#ffe4f0] shadow-[0_0_12px_rgba(255,182,193,0.6)] py-4 px-8 rounded-xl mx-5'>
      <p className='font-medium sm:text-xl text-center'>
      Wanna get in touch? I'm just a click away ✉️ 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Contact!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;