import styled from "styled-components";

export const StoryContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  margin: 0 -140px;
  transform: ${(props) => {
    let offset = props.offset;
    if (props.offset === 2) {
      offset = -1;
    } else if (props.offset === -2) {
      offset = 1;
    }
    return `translate(${offset * 300}px, -50%)`;
  }};
  transition: 1s;
`;

export const CarouselContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: 801px) {
    margin: 30px auto;
  }
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const SlideShowLeftArrow = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  width: 20px;
  height: 20px;
  background: purple;
`;

export const SlideShowRightArrow = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  width: 20px;
  height: 20px;
  background: purple;
`;

export const SaveLivesStory = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 340px;
  margin: 10px auto 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  color: black;
`;
export const Image = styled.img`
  width: 310px;
  height: 210px;
`;
