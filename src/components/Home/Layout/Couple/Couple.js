import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useInView } from 'react-intersection-observer';

const Couple = () => {
    // eslint-disable-next-line no-empty-pattern
    const [] = useInView({
        threshold: 0.5,
    });

    return (
        <div>
            <Flower>
                <img src="image/gif/flowers.gif" alt="Flowers" />
            </Flower>
            <CoupleContainer>
                <Box>
                    <Bride>
                        <div className="info">
                            <h2>Ismi Ayuni, SE. / Ismi</h2>
                            <h4>Putri Pertama</h4>
                            <h4>Dari</h4>
                            <h4>Bapak Tedih/Tedy & Ibu Ismah/Iis </h4>
                            <div className='batas'></div>
                            {/* <motion.section ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}>
                                <motion.div variants={paragraph}>

                                </motion.div>
                            </motion.section> */}
                            <p>Aku ingin mencintaimu dengan sederhana
                                dengan kata yang tak sempat diucapkan
                                kayu kepada api yang menjadikannya abu.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="image">
                            <img src="gambar/pengantin/ismiAji/ismiCouple.jpg" alt="Sarah Savitri" />
                        </div>
                    </Bride>
                    <Groom>
                        <div className="image">
                            <img src="gambar/pengantin/ismiAji/aji.jpg" alt="Nana Permana" />
                        </div>
                        <div className="info">
                            <h2>Muhamad Aji Firman /Aji/Ajip</h2>
                            <h4>Putra Kedua</h4>
                            <h4>Dari</h4>
                            <h4>Bapak Mad Haer/Heri & Ibu Munawaroh/Emun</h4>
                            <p>Aku mungkin tidak selalu bersamamu
                                Tapi saat kita berjauhan
                                Ingatlah kamu akan bersamaku
                                Tepat dalam hatiku</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                    </Groom>
                </Box>
            </CoupleContainer>
        </div>
    )
}

export default Couple;



const Flower = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 2rem auto 5rem auto;

    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;


const CoupleContainer = styled.div`

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div`

    display: grid;
    grid-gap: 2em;
    
    @media(min-width:1020px){
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    }


    

    h4{
        font-family: 'Alex Brush', cursive;
        color: #C75B89;
        font-size: 1.5rem;
        margin: .5rem  0 1rem 0;
    }

    p{
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }


    .icon{
        width: 40px;
        height: 40px;
        background: #fff;
        padding: 12px;
        border-radius: 50%;
        color: #999;
        cursor: pointer;
        transition: all .6s ease;

        &:hover{
            background: #cb966a;
            color: #fff;
        }
    }

    .twitter{
        margin: 0 1rem;
    }

`;
const Bride = styled.div`
    display: flex;


    .image {
        margin-left: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    .info{
        text-align: right;

        @media(max-width:1020px){
            text-align: center;
        }
    }
    .batas{
        margin-top: 50px;
        
        @media(max-width:1020px){
            margin-top: 0px;
        }
    }

   


    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
        .image{
            order: -1;
        }
    } 
    

`;
const Groom = styled.div`
    display: flex;


    .image {
        margin-right: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
    } 




`;

