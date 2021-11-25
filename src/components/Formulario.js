import axios from "axios";
import { useEffect, useState } from "react";

//mui
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
//mask
import InputMask from "react-input-mask";
//icons
import { BiErrorCircle } from "react-icons/bi";

//imagenes e iconos
import Cards from "./../images/cards.png";
import { FaApple } from "react-icons/fa";
import Cvv from "./../images/cvv.png";
import Redsys from "./../images/redsys.png";

//styles
import {
  Form,
  P,
  SpanLine,
  Span,
  Campo,
  Campoflex,
  Select,
  Img,
  ContainerInputCards,
  Spancard,
  Spancardcv,
  Pay,
  Imgcvv,
  TermsContainer,
  LogoRedsys,
  Spanterm,
} from "../ui/Form";
import { Error, Errorflexcolumn } from "../ui/Error";
import { Btn } from "../ui/Btn";

//sweetalert
import Swal from "sweetalert2";

//custom-validation-hook
import useValidation from "../hooks/useValidation";
import formValidate from "../Validationrules/formValidate";

const INITIAL_STATE = {
  email: "",
  numbercard: "",
  expiry: "",
  cvc: "",
  namecard: "",
  country: "",
  zip: "",
};

//customize inputs
const CssTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "grey",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(60, 66, 87, 0.12)",
      boxShadow: `${alpha(theme.palette.primary.main, 0.1)} 0.1rem 0.1rem 0.2rem 0.1rem`,
    },
    "&:hover fieldset": {
      borderColor: "rgba(60, 66, 87, 0.12)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(64, 126, 240, 0.671)",
    },
  },
}));

const Formulario = () => {

  const [datacountry, setDataCountry] = useState([]);

  const { value, error, setValue, handleSubmit, handleChange, /*handleBlur*/ } =
    useValidation(INITIAL_STATE, formValidate, fnSucess);

  const { email, numbercard, expiry, cvc, namecard, country, zip } = value;

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/unicode")
      .then(function (response) {
        setDataCountry(response.data.data);
      });
  }, []);

  function fnSucess() {
    Swal.fire({
      icon: "success",
      title: "Successfully purchased",
      showConfirmButton: false,
      timer: 1500,
    });

    //reset form
    setValue({
      email: "",
      numbercard: "",
      expiry: "",
      cvc: "",
      namecard: "",
      country: "",
      zip: "",
    });
  }

  return (
    <div className="container-form">
      <Form onSubmit={handleSubmit} noValidate>
        <Btn primary type="submit">
          <FaApple fontSize="23" />
          <Pay>Pay</Pay>
        </Btn>
        <SpanLine>
          <P>
            <Span>Or pay with card</Span>
          </P>
        </SpanLine>

        <Campo>
          <CssTextField
            fullWidth
            id="fullWidth"
            label="Email"
            variant="outlined"
            size="small"
            name="email"
            value={email}
            onChange={handleChange}
            //onBlur={handleBlur} optional
            error={!!error.email}
          />
          {error.email && (
            <Error>
              <div>
                <BiErrorCircle />
              </div>
              {error.email}
            </Error>
          )}
        </Campo>

        <Campo>
          <InputMask
            mask="9999 9999 9999 9999"
            name="numbercard"
            value={numbercard}
            onChange={handleChange}
            maskChar=" "
            //onBlur={handleBlur} optional
          >
            {() => (
              <CssTextField
                fullWidth
                id="fullWidth"
                label="Card Number"
                variant="outlined"
                size="small"
                type="text"
                name="numbercard"
                fontSize="10"
                error={!!error.numbercard}
              />
            )}
          </InputMask>
          <Spancard>
            <Img src={Cards} />
          </Spancard>

          {error.numbercard && (
            <Error>
              <div>
                <BiErrorCircle />
              </div>
              {error.numbercard}
            </Error>
          )}
        </Campo>

        <Campoflex>
          <Errorflexcolumn>
            <InputMask
              mask="99/99"
              value={expiry}
              onChange={handleChange}
              //onBlur={handleBlur} optional
              maskChar=" "
            >
              {() => (
                <CssTextField
                  fullWidth
                  id="fullWidth"
                  label="Expiry date"
                  variant="outlined"
                  size="small"
                  type="text"
                  name="expiry"
                  error={!!error.expiry}
                />
              )}
            </InputMask>
            {error.expiry && (
              <Error>
                <div>
                  <BiErrorCircle />
                </div>
                {error.expiry}
              </Error>
            )}
          </Errorflexcolumn>

          <ContainerInputCards>
            <Errorflexcolumn>
              <CssTextField
                fullWidth
                id="fullWidth"
                label="CVC"
                variant="outlined"
                size="small"
                type="text"
                name="cvc"
                onChange={handleChange}
                //onBlur={handleBlur} optional
                error={!!error.cvc}
                value={cvc}
              />

              <Spancardcv>
                <Imgcvv width="25" src={Cvv} />
              </Spancardcv>

              {error.cvc && (
                <Error>
                  <div>
                    <BiErrorCircle />
                  </div>
                  {error.cvc}
                </Error>
              )}
            </Errorflexcolumn>
          </ContainerInputCards>
        </Campoflex>

        <Campo>
          <CssTextField
            fullWidth
            id="fullWidth"
            label="Name"
            variant="outlined"
            size="small"
            type="text"
            name="namecard"
            onChange={handleChange}
            value={namecard}
            error={!!error.namecard}
            //onBlur={handleBlur} optional
          />
        </Campo>
        {error.namecard && (
          <Error>
            <div>
              <BiErrorCircle />
            </div>
            {error.namecard}
          </Error>
        )}

        <Campo>
          <Select value={country} name="country" onChange={handleChange}>
            {datacountry.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </Select>
        

        
          <CssTextField
            fullWidth
            id="fullWidth"
            variant="outlined"
            size="small"
            label="Zip"
            type="text"
            name="zip"
            value={zip}
            onChange={handleChange}
            error={!!error.zip}
            //onBlur={handleBlur} optional
          />
        </Campo>
        {error.zip && (
          <Error>
            <div>
              <BiErrorCircle />
            </div>
            {error.zip}
          </Error>
        )}

        <Btn type="submit">Pay $899</Btn>

        <TermsContainer>
          <p>Powered by</p>
          <LogoRedsys src={Redsys} alt="redsys" />
          <p>
            Terms <Spanterm>Privacy</Spanterm>
          </p>
        </TermsContainer>
      </Form>
    </div>
  );
};

export default Formulario;
