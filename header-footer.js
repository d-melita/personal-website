const template = document.createElement("template");
template.innerHTML = `
    <style>
    header, footer {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        background: var(--bg-color);
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding-left: 15px;  /* Adjusted padding for left alignment */
        font-family: "Lucida Console", monospace; /* Matching the body font */
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    #header-template, #about-template {
        font-size: clamp(1.5rem, 2vw, 2rem); /* Larger font size */
        color: lightgoldenrodyellow;
        text-decoration: none;
        margin: 0 15px;
    }

    #header-template:hover, #about-template:hover, 
    #source-code:hover, #email:hover {
        filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg);
    }

    .template-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    #source-code, #email {
        color: lightgoldenrodyellow;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    </style>
    
    <header>
        <a id="header-template" href="index.html">home</a>
        <a id="about-template" href="aboutme.html">about me</a>
    </header>

    <footer>
        <div class="template-footer">
            <p><a id="email" href="mailto:diogo@melita.pt">contact me via e-mail</a></p>
            <p><a id="source-code" href="https://github.com/d-melita/personal-website" target="_blank">source code @ github</a></p>
        </div>
    </footer>
`;

document.body.appendChild(template.content);
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typewriter h1");
  const text = textElement.textContent.trim();
  textElement.textContent = ""; // Clear initial text

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text[i];
      i++;
      setTimeout(typeWriter, 55); // Adjust speed here
    }
  }

  typeWriter();
});
