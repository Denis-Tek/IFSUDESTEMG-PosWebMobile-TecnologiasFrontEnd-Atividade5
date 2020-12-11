import {createGlobalStyle} from "styled-components"

export const EstiloGlobal = createGlobalStyle`
  body {
	  background: ${({theme}) => theme.bodyBackgroundColor};
	  transition: all 0.30s linear;
  }

  h1 {
    color: ${({theme}) => theme.h1Color};
    transition: all 0.30s linear;  
  }

  #toggle {
    color: ${({theme}) => theme.toggleColor};
    transition: all 0.30s linear;  
  }

  .form-control {
    color: ${({theme}) => theme.inputColor};
    background-color: ${({theme}) => theme.inputBackgroundColor};
    transition: all 0.30s linear;
  }

  .form-control:focus {
    color: ${({theme}) => theme.inputColor};
    background-color: ${({theme}) => theme.inputBackgroundColor};
  }
 
  button {
	  &:hover {
	    opacity: 0.6;
  	}
  }
`;
