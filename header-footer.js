const template = document.createElement("template");
template.innerHTML = `
    <style>
    
    #header-template {
        font-size: clamp(1rem, 1vw, 1rem);
        color: lightgoldenrodyellow;
        text-decoration: none;
        position: absolute;
        left: 2.5%;
    }

    #about-template {
        font-size: clamp(1rem, 1vw, 1rem);
        color: lightgoldenrodyellow;
        text-decoration: none;
        position: absolute;
        left: 10.5%;
    }

    #header-template:hover, #about-template:hover {
        filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg);
    }
    
    .template-footer {
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100px;
        width: 350px;
        position: absolute;
        left: 50%;
        top: 80%;
        transform: translate(-50%, 50%);
    }
    
    #fbox1 {
        width: 100%;
        height: 100%;
        text-align: center;
    }
    
    #source-code {
        color: lightgoldenrodyellow;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    #source-code:hover {
        filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg);
    }

    #email {
        color: lightgoldenrodyellow;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    #email:hover {
        filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg);

    }
    
    </style>
    <header>
        <a id = "header-template" href= "index.html">
            <h1>home</h1>
        </a>
    </header>

    <about>
        <a id = "about-template" href= "aboutme.html">
            <h1>about me</h1>
        </a>
    </about>

    <footer>
        <div class = "template-footer">
            <div id = "fbox1">
                <p><a id = "email" 
                href="mailto:diogo@melita.pt">
                contact me via e-mail
                </a></p>
                <a
                    id = "source-code"
                    href="https://github.com/d-melita/personal-website"
                    target = "_blank"
                >
                <p>source code @ github</p>
                </a>
            </div>
        </div>
    </footer>
`;

document.body.appendChild(template.content);