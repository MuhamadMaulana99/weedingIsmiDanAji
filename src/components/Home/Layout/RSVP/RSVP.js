/* eslint-disable no-unused-vars */
import { Alert, Badge, Button, TextField } from '@mui/material';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from '@mui/lab'
import axios from 'axios';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";
const RSVP = () => {
    const [data, setData] = useState();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
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


    const getData = async () => {
        // setLoading(true)
        const response = await axios
            .get(`https://633fa89dd1fcddf69ca6ec51.mockapi.io/jabawan/v1/commentTodo`)
            .then((res) => {
                console.log(res, 'dummy data');
                setData(res.data);
                // setLoading(false)
            })
            .catch((err) => {
                // setLoading(false)
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, [ignored]);
    const HandleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const response = await axios
            .post(`https://633fa89dd1fcddf69ca6ec51.mockapi.io/jabawan/v1/commentTodo`, {
                name,
                comment
            })
            .then((res) => {
                toast.success(' Pesan Terkirim!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(res, ' Tambah coment');
                setLoading(false)
                setName('');
                setComment('');
                window.location.reload(true);
            })
            .catch((err) => {
                toast.error(' Pesan Gagal Terkirim!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
                console.log(err, 'err');
            });
        forceUpdate();
    };
    console.log(loading)

    return (
        <>

            <Container>
                <motion.section
                    ref={ref}
                    initial="hidden"

                    animate={inView ? "visible" : "hidden"}
                > <motion.div variants={paragraph}>
                        <Box>
                            <div className="form__box">
                                <Badge color="success" badgeContent={data?.length}>
                                    <MailIcon />
                                </Badge>
                                {/* <Alert severity="success">{data?.length} Ucapan</Alert> */}
                                <h2>Will you attend?</h2>
                                <div className="title">Berikan Ucapan</div>
                                <form className="form">
                                    <FormDiv className="form_div">
                                        <TextField
                                            id="outlined-textarea"
                                            label="Nama"
                                            placeholder="Masukan Nama Anda"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            multiline
                                            color="warning"
                                        />
                                    </FormDiv>
                                    <FormDiv className="form_div">
                                        <TextField
                                            id="outlined-textarea"
                                            label="Pesan"
                                            placeholder="Berikan Kami Ucapan"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            multiline
                                            color="warning"
                                        />
                                    </FormDiv>
                                    {loading
                                        === true ? (
                                        <LoadingButton loading variant="outlined">
                                            Submit
                                        </LoadingButton>

                                    ) : (
                                        <Button disabled={comment === '' && comment === ''} variant="contained" endIcon={<SendIcon />} onClick={HandleSubmit}>Kirim</Button>
                                    )}
                                </form>
                            </div>
                        </Box>
                    </motion.div>
                </motion.section>
            </Container>
            <ToastContainer />

        </>
    )
}

export default RSVP;



const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url('image/banner/banner-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    margin: 7rem  0 5rem 0;


    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.4);
        z-index: -1;
    }
`;


const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 15px;
    
    .form__box{
        width: 100%;
        padding: 1rem;
        background: #fff;
        border-radius: 3px;
        margin: 7rem 0;

        h2{
           text-align: center;
           font-family: 'Alex Brush', cursive;
            color: #CB966A;
            font-size: 2.5rem;
            margin: .5rem  0 1rem 0; 
        }

        .title{
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            font-weight: 500;
        }

        p{
            margin-top: 1rem;

            .link {
                text-decoration: none;
                color: rgb(24, 71, 199);
            }
        }

        form{
            width: 100%;
        }
        
        @media(min-width:650px){
            width: 450px;
        }
    }
`;



const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    label{
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: .4rem;

        span {
            color: crimson;
        }
    }

    
    textarea{
        font-size: 1rem;
        font-weight: 500;
        font-family: "Sen",sans-serif;
        padding: .8rem;
        border-radius: 3px;
        outline: none;
        // border: 1px solid #ddd;
    }

    textarea{
        resize: none;
        height: 100px;
    }

    p{
        color: crimson;
        font-weight: 600;
    }
`;

// const Button = styled.button `
//     width: 100%;
//     font-size: 1rem;
//     font-weight: 500;
//     font-family: 'Sen',sans-serif;
//     padding: .8rem;
//     border-radius: 3px;
//     outline: none;
//     border: none;
//     background: #cb966a;
//     color: #fff;
//     text-transform: uppercase;
//     cursor: pointer;
//     box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
// `;

