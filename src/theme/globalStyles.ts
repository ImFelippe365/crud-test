import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-Serif;
    }

    main, header {
        margin: auto;
        width: 40%;
    }

    @media only screen and (max-width: 1280px) {
        main, header {
            width: 60%;
            transition: 0.2s all;
        }
    }

    @media only screen and (max-width: 800px) {
        main, header {
            width: 80%;
            transition: 0.2s all;
        }
    }

    @media only screen and (max-width: 500px) {
        main, header {
            width: 99%;
            transition: 0.2s all;
        }
    }
`;

export default GlobalStyle