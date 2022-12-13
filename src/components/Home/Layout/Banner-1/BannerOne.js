import React from 'react';
import styled from 'styled-components';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";

const BannerOne = () => {
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
    return (
        <>
            <Container>
                <motion.section
                    ref={ref}
                    initial="hidden"

                    animate={inView ? "visible" : "hidden"}
                > <motion.div variants={paragraph}>
                        <div className="header__content">
                            <img src="image/wedding.png" alt="wedding" />
                            <h2>Ismi & Aji</h2>
                        </div>
                    </motion.div>
                </motion.section>

            </Container>
        </>
    )
}

export default BannerOne;


const Container = styled.div`

    width: 100%;
    height: 60vh;
    background: url('image/banner/banner-1.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    margin: 5em 0;

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

    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 60vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 35px;
        font-weight: 500;

        img {
            width: 0px;
            margin-bottom: 1rem;
        }

        @media(min-width:768px){
            font-size: 50px;
        }
    }

`;