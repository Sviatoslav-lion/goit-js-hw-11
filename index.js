(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();const l=async s=>{const o=`https://pixabay.com/api/?key=48615456-7478b61ba219341e00e1cbdfc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(o)).json()).hits}catch(n){throw console.error("Error fetching images:",n),new Error("Error fetching images")}},u=s=>{const t=document.querySelector(".gallery"),o=s.map(e=>`
    <a href="${e.largeImageURL}">
    <div class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>
  </a>
    `).join("");t.innerHTML=o,new SimpleLightbox(".gallery a").refresh(),document.querySelectorAll(".gallery-item img").forEach(e=>{e.addEventListener("click",c=>{c.preventDefault();const i=e.parentElement.href;basicLightbox.create(`
        <img src="${i}" alt="${e.alt}">
      `).show()})})},d=()=>{iziToast.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"})},a=()=>{const s=document.querySelector(".loader");s.style.display="none"},f=document.querySelector("#search-form"),m=document.querySelector(".search-input"),y=document.querySelector(".loader"),p=document.querySelector(".gallery");f.addEventListener("submit",async s=>{s.preventDefault();const t=m.value.trim();if(t!==""){y.style.display="block",p.innerHTML="";try{const o=await l(t);a(),o.length>0?u(o):d()}catch{a(),alert("An error occurred while fetching the images.")}}});
//# sourceMappingURL=index.js.map
