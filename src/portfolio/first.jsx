import React from "react";
import { useLocation } from "react-router-dom";
import bgImage from '../img/bg.png'; 
import NintendoSwitch from '../img/NintendoSwitch.png'; 
import AnalogKiri from '../img/analogkiri.png';
import ArahAtas from '../img/Arrow top.png';
import ArahBawah from '../img/Arrow bottom.png';
import ArahKiri from '../img/Arrow left.png';
import Arahkanan from '../img/Arrow right.png';
import A from '../img/A.png';
import B from '../img/B.png';
import X from '../img/X.png';
import Y from '../img/Y.png';
import Plus from '../img/plus.png';
import Home from '../img/Home.png';
import Strip from '../img/strip.png';

export default function First() {
  const location = useLocation();
  const ticketData = location.state;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={bgImage} 
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      <div>
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95 
                        sm:top-[22%] sm:left-[6.65%]
                        md:top-[22%] md:left-[6.65%]
                        lg:top-[22%] lg:left-[6.65%]
                        xl:top-[22%] xl:left-[6.65%]
                        2xl:top-[22%] 2xl:left-[6.65%]">
          <img
            src={AnalogKiri}
            alt="Analog Kiri"
            className="sm:w-[100px] md:w-[120px] lg:w-[97px] xl:w-[97px] 2xl:w-[97px] rounded-full active:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[42.8%] sm:left-[8.15%]
                        md:top-[42.8%] md:left-[8.15%]
                        lg:top-[42.8%] lg:left-[8.15%]
                        xl:top-[42.8%] xl:left-[8.15%]
                        2xl:top-[42.8%] 2xl:left-[8.15%]">
          <img
            src={ArahAtas}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[56.2%] sm:left-[8.15%]
                        md:top-[56.2%] md:left-[8.15%]
                        lg:top-[56.2%] lg:left-[8.15%]
                        xl:top-[56.2%] xl:left-[8.15%]
                        2xl:top-[56.2%] 2xl:left-[8.15%]">
          <img
            src={ArahBawah}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[49.6%] sm:left-[5.1%]
                        md:top-[49.6%] md:left-[5.1%]
                        lg:top-[49.6%] lg:left-[5.1%]
                        xl:top-[49.6%] xl:left-[5.1%]
                        2xl:top-[49.6%] 2xl:left-[5.1%]">
          <img
            src={ArahKiri}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[49.6%] sm:left-[11.3%]
                        md:top-[49.6%] md:left-[11.3%]
                        lg:top-[49.6%] lg:left-[11.3%]
                        xl:top-[49.6%] xl:left-[11.3%]
                        2xl:top-[49.6%] 2xl:left-[11.3%]">
          <img
            src={Arahkanan}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[14.3%] sm:left-[12.5%]
                        md:top-[14.3%] md:left-[12.5%]
                        lg:top-[14.3%] lg:left-[12.5%]
                        xl:top-[14.3%] xl:left-[12.5%]
                        2xl:top-[14.3%] 2xl:left-[12.5%]">
          <img
            src={Strip}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[38px] xl:w-[38px] 2xl:w-[38px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      <div>
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[46%] sm:left-[87%]
                        md:top-[46%] md:left-[87%]
                        lg:top-[46%] lg:left-[87%]
                        xl:top-[46%] xl:left-[87%]
                        2xl:top-[46%] 2xl:left-[87%]">
          <img
            src={AnalogKiri}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[97px] xl:w-[97px] 2xl:w-[97px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[18.7%] sm:left-[88.55%]
                        md:top-[18.7%] md:left-[88.55%]
                        lg:top-[18.7%] lg:left-[88.55%]
                        xl:top-[18.7%] xl:left-[88.55%]
                        2xl:top-[18.7%] 2xl:left-[88.55%]">
          <img
            src={X}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute top-[25.2%] left-[85.45%] z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[25.2%] sm:left-[85.45%]
                        md:top-[25.2%] md:left-[85.45%]
                        lg:top-[25.2%] lg:left-[85.45%]
                        xl:top-[25.2%] xl:left-[85.45%]
                        2xl:top-[25.2%] 2xl:left-[85.45%]">
          <img
            src={Y}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[25.2%] sm:left-[91.65%]
                        md:top-[25.2%] md:left-[91.65%]
                        lg:top-[25.2%] lg:left-[91.65%]
                        xl:top-[25.2%] xl:left-[91.65%]
                        2xl:top-[25.2%] 2xl:left-[91.65%]">
          <img
            src={A}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[31.57%] sm:left-[88.55%]
                        md:top-[31.57%] md:left-[88.55%]
                        lg:top-[31.57%] lg:left-[88.55%]
                        xl:top-[31.57%] xl:left-[88.55%]
                        2xl:top-[31.57%] 2xl:left-[88.55%]">
          <img
            src={B}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[12.5%] sm:left-[85%]
                        md:top-[12.5%] md:left-[85%]
                        lg:top-[12.5%] lg:left-[85%]
                        xl:top-[12.5%] xl:left-[85%]
                        2xl:top-[12.5%] 2xl:left-[85%]">
          <img
            src={Plus}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[38px] xl:w-[38px] 2xl:w-[38px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
        
        <div className="absolute z-20 transition-transform duration-200 ease-in-out transform active:scale-95
                        sm:top-[66%] sm:left-[86.35%]
                        md:top-[66%] md:left-[86.35%]
                        lg:top-[66%] lg:left-[86.35%]
                        xl:top-[66%] xl:left-[86.35%]
                        2xl:top-[66%] 2xl:left-[86.35%]">
          <img
            src={Home}
            alt="Analog"
            className="sm:w-[150px] md:w-[200px] lg:w-[50px] xl:w-[50px] 2xl:w-[50px] rounded-full active:shadow-[0_0_10px_3px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src={NintendoSwitch}
          alt="Overlay"
          className="sm:w-[600px] md:w-[900px] lg:w-[1000px] xl:w-[1450px] max-w-none"
        />
      </div>
      
    </div>
  );
}
