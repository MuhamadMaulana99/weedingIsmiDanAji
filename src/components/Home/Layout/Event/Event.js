import React from 'react';
import styled from 'styled-components';


const Event = () => {
    return (
        <>
            <EventContainer>
                <h1>Wedding</h1>
                <h4>ORGANIZATION</h4>
                <Box>
                    <div className="box box-1">
                        <h2>O1</h2>
                        <h3>CEREMONY</h3>
                        <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                    </div>
                    <div className="box box-2">
                        <h2>O2</h2>
                        <h3>LUNCH TIME</h3>
                        <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                    </div>
                    <div className="box box-3">
                        <h2>03</h2>
                        <h3>PARTY</h3>
                        <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                    </div>
                    <div className="box box-4">
                        <h2>O4</h2>
                        <h3>CAKE CUTTING</h3>
                        <p>Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                    </div>
                </Box>
            </EventContainer>
        </>
    )
}

export default Event


const EventContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
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
const Box = styled.div `

    display: grid;
    grid-gap: 2em;
    
    @media(min-width:1020px){
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(4, 1fr);
    }
    @media(max-width:920px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width:768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:600px){
        grid-template-columns: repeat(1, 1fr);
    }


    .box{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 1rem;
        background: #fff;
        border-radius: 3px;
    }

    .box-1{
        position: relative;
        z-index: 1;
        
        &:hover{
            color: #fff;
            background:url('gambar/pengantin/box1.jpeg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            z-index: 1;

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
        }
    }
    .box-2{
        position: relative;
        z-index: 1;
        
        &:hover{
            color: #fff;
            background:url('gambar/pengantin/box2.jpeg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            z-index: 1;

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
        }
    }
    .box-3{

        position: relative;
        z-index: 1;
        
        &:hover{
            color: #fff;
            background:url('gambar/pengantin/box3.jpeg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            z-index: 1;

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
        }
    }
    .box-4{
        position: relative;
        z-index: 1;
        
        &:hover{
            color: #fff;
            background:url('gambar/pengantin/box4.jpeg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            z-index: 1;

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
        }
    }



    h2{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 2rem;
        margin: .5rem  0 1rem 0;
    }


    h3{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom:2rem;
    }

    p{
        font-size:.9rem;
        font-weight: 500;
        line-height: 1.4rem;
    }
`;
