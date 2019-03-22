//builds monument html element utilizing buildElement from domManager.js
const buildMonumentHtml = monumentObject => {
    // <article>
    //  <h3>Monument Name</h3>
    //  <p>State the monument is located in</p>
    // </article>
    const monumentArticle = buildElement("article");
    monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
    monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

    let deleteMonumentButton = buildElement("button", `delete-monument--${monumentObject.id}`, "Delete Monument")
    monumentArticle.appendChild(deleteMonumentButton);
    deleteMonumentButton.addEventListener("click", handleMonumentDelete)
    return monumentArticle;
}