const newHeadline = document.createElement("h1");

    // Hier Setze ich den Text des H1-Elements
    newHeadline.textContent = "JavaScript Übung";
    // Hier Füge ich das H1-Element zum Body der Seite hinzu
    document.body.appendChild(newHeadline);

    // Hier Style ich nur die Headline 
    newHeadline.style.display = "flex";
    newHeadline.style.justifyContent = "center";
    newHeadline.style.fontSize = "3rem";
    newHeadline.style.textShadow = "10px 10px 10px black";

    //  Hier werde ich dan ein Bild einbinden für die Seite

    const titleImage = document.createElement("titleImage");

    titleImage.src = "public/titleImage.webp";
    document.body.appendChild(titleImage);