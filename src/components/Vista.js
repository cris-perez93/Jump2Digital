import macbookimg from './../images/macbook.png'
import {MdArrowBack} from 'react-icons/md'
import Redsys from './../images/redsys.png'

import { Pmac,Pprice,Imgcontainer,Img,TermsContainer,LogoRedsys,Span,ArrowContainer,PriceContainer } from '../ui/VistaStyle'









const Vista = () => {
    return (
        <div className="container-vista">
            <ArrowContainer>
            <MdArrowBack fontSize="19px"/><p>Back to the market</p>
            </ArrowContainer>
            <div className="column-reverse">
            <PriceContainer>
                <Pmac>New mac</Pmac>
                <Pprice>$ 899.00</Pprice>
            </PriceContainer>
            <Imgcontainer>
                <Img  src = {macbookimg}/>
            </Imgcontainer>
            </div>

            <TermsContainer>
                <p>Powered by</p>
                <LogoRedsys src = {Redsys} alt ="redsys"/>
                <p>Terms <Span>Privacy</Span></p>
            </TermsContainer>
            
        </div>
        
      );
}
 
export default Vista;