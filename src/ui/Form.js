import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 103px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  @media (max-width: 520px) {
    margin-top: 32px;
  }
`;

export const P = styled.p`
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid rgba(60, 66, 87, 0.12);
  position: relative;
`;
export const SpanLine = styled.span`
  display: block;
  margin: 25px;
  margin-bottom: 20px;
`;
export const Span = styled.span`
  background-color: white;
  position: relative;
  top: 10px;
  padding: 0 10px;
  color: #8792a2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const Campo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 32px;
  position: relative;
  padding: 5px;
`;
export const Campoflex = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const Select = styled.select`
  padding: 9px 12px;
  position: static;
  height: 40px;
  left: 0px;
  right: 0px;
  top: 30px;
  width: 100%;
  background: #ffffff;
  border-color: rgba(60, 66, 87, 0.12);
  box-sizing: border-box;
  box-shadow: rgb(25 118 210 / 10%) 0 0 0 0.1rem;
  border-style: solid;
  border-radius: 5px;
  margin: 8px 0px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px rgb(64, 126, 240);
  }
`;

export const Img = styled.img`
  width: 120px;

  @media (max-width: 429px) {
    width: 70px;
  }
`;

export const Spancard = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  @media (max-width: 429px) {
    top: 15px;
  }
  @media (max-width: 355px) {
    display: none;
  }
`;
export const ContainerInputCards = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Spancardcv = styled.span`
  position: absolute;
  right: 3px;
  top: 10px;
`;

export const Pay = styled.span`
  margin-top: 2px;
`;

export const Imgcvv = styled.img`
  opacity: 0.4;
`;

export const TermsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 94px;
  font-size: 12px;
  color: #8792a2;
  align-items: center;
  display: none;
  @media (max-width: 1019px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 47px;
    width: 200px;
  }
`;

export const LogoRedsys = styled.img`
  width: 50px;
  height: 18px;
  margin-left: 4px;
  margin-bottom: 2px;
`;
export const Spanterm = styled.span`
  padding-left: 19px;
`;
