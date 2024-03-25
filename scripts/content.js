var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `

    @media only screen and (max-width: 600px) {

        .generic-component__content {
            flex-direction: column;
        }

        .template-column {
            width: 100%;
        } 

        .template-column {
            width: 100%;
            flex-direction: column-reverse;
        }

    }
`;
document.getElementsByTagName('head')[0].appendChild(style);
