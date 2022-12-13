import React, { useState } from 'react'
import styled from 'styled-components';
import Friends from '../friends/Friends';
import Friends2 from '../friends2/Friends2';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";


const Friend = () => {
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

    const [show, setShow] = useState(false)


    const showBride = () => {
        setShow(!show)
    }

    return (
        <>

            <FriendsContainer>
                <h1>Our best friends ever</h1>
                <h4>THANKS FOR BEING THERE</h4>
                <Box>
                    <div className="buttons">
                        <button onClick={showBride} className={show ? "bride " : "bride active"}>Arip Friends</button>
                        <button onClick={showBride} className={show ? "bride active" : "bride "}>Fitri Friends</button>
                    </div>
                    <motion.section
                        ref={ref}
                        initial="hidden"

                        animate={inView ? "visible" : "hidden"}
                    > <motion.div variants={paragraph}>
                            {show ? (

                                <div>
                                    <Friends />
                                </div>

                            ) : (
                                <div>
                                    <Friends2 />
                                </div>
                            )}
                        </motion.div>
                    </motion.section>

                </Box>
            </FriendsContainer>



        </>
    )
}

export default Friend;


const FriendsContainer = styled.div`

    max-width: 1140px;
    margin: 5rem auto 2rem auto;
    padding: 0 15px;


    h1{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 2.5rem;
        margin: .5rem  0 1rem 0;
    }

    h4{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom:2rem;
    }

`;


const Box = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
height: 680px;
border-radius: 3px;



    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;


        button{
            width: 200px;
            outline: none;
            border: none;
            font-family: 'Sen',sans-serif;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 3px;
            padding: .7rem 1rem;
            background: #CB966A;
            margin: 1rem;
            color: #000;
            text-transform: uppercase;
            cursor: pointer;
        }

        .bride.active{
            background: none;
            border: 2px solid #CB966A;
        }
    }

`;
