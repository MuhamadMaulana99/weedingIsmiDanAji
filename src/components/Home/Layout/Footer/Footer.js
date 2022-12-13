import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from '@mui/material';


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Box>
                    <img src="image/footer.png" alt="footer" />
                    <h4>Follow Our developer</h4>
                    <div className="social">
                        <Link  href='https://web.facebook.com/alan.nhoriz' target='_blank'>
                        <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        </Link>
                        <Link  href='https://api.whatsapp.com/send?phone=6288709721340&text=Hi!! Ada Yang Bisa Saya Bantu?' target='_blank'>
                        <FontAwesomeIcon icon={faWhatsapp} className="icon twitter" />
                        </Link>
                        <Link  href='https://www.instagram.com/muhamad_maulana00?r=nametag' target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </Link>
                    </div>
                    <h2>Muhamad Maulana</h2>
                </Box>
            </FooterContainer>
        </>
    )
}

export default Footer;

const FooterContainer = styled.div`

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div`

    text-align: center;
    margin-top: 100px;

    img{
        width: 100px;
    }

    h2{
        font-family: 'Alex Brush', cursive;
        color: #000;
        font-size: 2.5rem;
        margin: .5rem  0 1rem 0;
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
        .twitter{
            margin: 0 1rem;
        }
    

`;