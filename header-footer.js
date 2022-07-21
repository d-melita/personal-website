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
        color: white;
    }
    
    </style>
    <header>
        <a id = "header-template" href= "index.html">
            <h1>home</h1>
        </a>
    </header>
    <footer>
        <div class = "template-footer">
            <div id = "fbox1">
                <p> e-mail: diogo@melita.pt </p>
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