!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){e.setAttribute("disabled",""),o.removeAttribute("disabled"),document.body.style.backgroundColor=n(),t=setInterval((function(){document.body.style.backgroundColor=n()}),1e3)})),o.addEventListener("click",(function(){o.setAttribute("disabled",""),e.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.5db18c82.js.map
