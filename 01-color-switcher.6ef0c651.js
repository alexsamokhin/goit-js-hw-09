const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),document.body.style.backgroundColor=r(),timerId=setInterval((()=>{document.body.style.backgroundColor=r()}),1e3)})),e.addEventListener("click",(()=>{e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.6ef0c651.js.map