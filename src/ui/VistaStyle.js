import styled from "styled-components";


export const Pmac = styled.p `
    color:#697386;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    font-weight:500 ;
    margin: 0;
   
`
export const Pprice = styled.p`
    font-size:36px;
    font-weight: 900;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #1A1F36;
    margin: 0;
    margin-top: 8px;

    

`
export const Imgcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 66px;
  
  
`

export const Img = styled.img`
   width: 99%;

   @media (max-width: 520px) {
    width: 60%;
  }
`

export const TermsContainer = styled.div`
  display: flex ;
  margin: 0 auto;
  margin-top: 94px;
  font-size: 12px;
  color: #8792A2;
  align-items: center;
  @media (max-width: 1019px) {
    display: none;
  }
 
`

export const LogoRedsys =  styled.img`
   width: 50px;
   height: 18px;
   margin-left: 4px;
   margin-right: 22px;
   padding-right:16.46px;
   border-right:solid 1px #8792A2;
   margin-bottom:2px;

   
`
export const Span = styled.span`
  padding-left: 19px;
`

export const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    width: 160px;
    margin-top: 150px;
    height: 20px;
    margin-left:80px;

    @media (max-width: 520px) {
      margin-left: 60px;
      margin-top: 80px;
  }
    
`
export const PriceContainer = styled.div`
    margin-top: 44px;
    width: 165px;
    margin-left:80px;
    display: block;
    flex-direction: column;

    @media (max-width: 520px) {
      margin:0 auto;
      margin-top: 44px;
      text-align: center;
  }
`