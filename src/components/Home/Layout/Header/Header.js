import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Timer } from './Timer';
import lagu from './Westlife.mp3';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";



const Header = () => {
    const [audio] = useState(new Audio(lagu));
    const [ref, inView] = useInView({
        threshold: 0.5
        // triggerOnce: true
    });
    const paragraph = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05,
                type: "spring",
                damping: 100,
                mass: 20
            }
        }
    };
    console.log(lagu.onLoad, "lagu")


    return (
        <>
            <Headers>
                {audio.onload ? (
                    <>
                        <div id="load">
                            <div>G</div>
                            <div>N</div>
                            <div>I</div>
                            <div>D</div>
                            <div>A</div>
                            <div>O</div>
                            <div>L</div>
                        </div>
                    </>
                ) : (
                    <>
                    {/* <div><Text/></div> */}
                        <div className="header__content">
                            <div className='header__content1'>
                                <div className='deco'>
                                    <img className='deco1' src="gambar/decoration/foliage-horizontal-1.svg" alt="" />
                                </div>
                                <div className='decor1'>
                                    <img src="gambar/decoration/card-decoration-section-3-1.svg" alt="" />
                                    <img src="gambar/decoration/card-decoration-section-3-2.svg" alt="" />
                                </div>
                                <motion.section
                                    ref={ref}
                                    initial="hidden"

                                    animate={inView ? "visible" : "hidden"}
                                > <motion.div variants={paragraph}>

                                        <h2>Insya Allah Kami Menikah</h2>
                                        <h2>Ismi</h2>
                                        <h3>&</h3>
                                        <h3>Aji</h3>
                                        <h4>25 Desember 2022</h4>
                                    </motion.div>
                                </motion.section>
                                <div><Timer /></div>
                            </div>
                        </div>
                        <ReactPlayer
                            url={lagu}
                            width="0px"
                            height="0px"
                            playing={true}
                            onProgress={audio.onload}
                            controls={true}
                        />
                    </>
                )}
            </Headers>
        </>
    )
}

export default Header;


const Headers = styled.div`

body {
    background:#000;
  }
  
  #load {
    position:absolute;
    width:600px;
    height:36px;
    left:50%;
    top:40%;
    margin-left:-300px;
    overflow:visible;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor:default;
  }
  
  #load div {
    position:absolute;
    width:20px;
    height:36px;
    opacity:0;
    font-family:Helvetica, Arial, sans-serif;
    animation:move 2s linear infinite;
    -o-animation:move 2s linear infinite;
    -moz-animation:move 2s linear infinite;
    -webkit-animation:move 2s linear infinite;
    transform:rotate(180deg);
    -o-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    color:#35C4F0;
  }
  
  #load div:nth-child(2) {
    animation-delay:0.2s;
    -o-animation-delay:0.2s;
    -moz-animation-delay:0.2s;
    -webkit-animation-delay:0.2s;
  }
  #load div:nth-child(3) {
    animation-delay:0.4s;
    -o-animation-delay:0.4s;
    -webkit-animation-delay:0.4s;
    -webkit-animation-delay:0.4s;
  }
  #load div:nth-child(4) {
    animation-delay:0.6s;
    -o-animation-delay:0.6s;
    -moz-animation-delay:0.6s;
    -webkit-animation-delay:0.6s;
  }
  #load div:nth-child(5) {
    animation-delay:0.8s;
    -o-animation-delay:0.8s;
    -moz-animation-delay:0.8s;
    -webkit-animation-delay:0.8s;
  }
  #load div:nth-child(6) {
    animation-delay:1s;
    -o-animation-delay:1s;
    -moz-animation-delay:1s;
    -webkit-animation-delay:1s;
  }
  #load div:nth-child(7) {
    animation-delay:1.2s;
    -o-animation-delay:1.2s;
    -moz-animation-delay:1.2s;
    -webkit-animation-delay:1.2s;
  }
  
  @keyframes move {
    0% {
      left:0;
      opacity:0;
    }
      35% {
          left: 41%; 
          -moz-transform:rotate(0deg);
          -webkit-transform:rotate(0deg);
          -o-transform:rotate(0deg);
          transform:rotate(0deg);
          opacity:1;
      }
      65% {
          left:59%; 
          -moz-transform:rotate(0deg); 
          -webkit-transform:rotate(0deg); 
          -o-transform:rotate(0deg);
          transform:rotate(0deg); 
          opacity:1;
      }
      100% {
          left:100%; 
          -moz-transform:rotate(-180deg); 
          -webkit-transform:rotate(-180deg); 
          -o-transform:rotate(-180deg); 
          transform:rotate(-180deg);
          opacity:0;
      }
  }
  
  @-moz-keyframes move {
      0% {
          left:0; 
          opacity:0;
      }
      35% {
          left:41%; 
          -moz-transform:rotate(0deg); 
          transform:rotate(0deg);
          opacity:1;
      }
      65% {
          left:59%; 
          -moz-transform:rotate(0deg); 
          transform:rotate(0deg);
          opacity:1;
      }
      100% {
          left:100%; 
          -moz-transform:rotate(-180deg); 
          transform:rotate(-180deg);
          opacity:0;
      }
  }
  
  @-webkit-keyframes move {
      0% {
          left:0; 
          opacity:0;
      }
      35% {
          left:41%; 
          -webkit-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
      }
      65% {
          left:59%; 
          -webkit-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
      }
      100% {
          left:100%;
          -webkit-transform:rotate(-180deg); 
          transform:rotate(-180deg); 
          opacity:0;
      }
  }
  
  @-o-keyframes move {
      0% {
          left:0; 
          opacity:0;
      }
      35% {
          left:41%; 
          -o-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
      }
      65% {
          left:59%; 
          -o-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
      }
      100% {
          left:100%; 
          -o-transform:rotate(-180deg); 
          transform:rotate(-180deg); 
          opacity:0;
      }
  }


#audio{
    display: none;
}

    width: 100%;
    height: 100vh;
    background: url('gambar/pengantin/ismiAji/3.JPG') no-repeat center/cover;
    position: relative;
    z-index: 1;
    @media(min-width:768px){
        height: 140vh;
        // min-height: 150vh;
    } 
}

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .decor1{
        width;  50px;
        @media(min-width:768px){

        } 
    }
    .decor1 img{
        margin-top: 100px;
        width: 20px;
        @media(min-width:768px){
            width: 50px;
        } 
    }
    .deco{
        position: absolute;
        top: 100px;
        left: 0;
        width: 100%;
        @media(min-width:768px){
            width: 0;
        } 
    }
    .deco .deco1{
        width: 100%;
        
        @media(min-width:768px){
            width: 100%;
            
        } 
    }
    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 120vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 35px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
            min-height: 150vh;
        } 
    }
    .header__content1{
        color: #fff;
        font-family: 'Alex Brush', cursive;
        // font-family: 'Tangerine', serif;
        font-size: 25px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
        } 
    }

`;