(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=async n=>{const o=`https://pixabay.com/api/?key=48615456-7478b61ba219341e00e1cbdfc&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;console.log(o);try{const r=await fetch(o);if(!r.ok)throw new Error(`Error: ${r.status} - ${r.statusText}`);const e=await r.json();if(!e.hits||e.hits.length===0)throw new Error("No images found for the given search query.");return e.hits}catch(r){throw console.error("Error fetching images:",r),new Error(r.message)}},l=n=>{const s=document.querySelector(".gallery"),o=n.map(r=>`
    <a href="${r.largeImageURL}">
    <div class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </div>
  </a>
    `).join("");s.innerHTML=o,new SimpleLightbox(".gallery a"),document.querySelectorAll(".gallery-item img")},u=()=>{iziToast.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"})},i=()=>{const n=document.querySelector(".loader");n.style.display="none"},d=document.querySelector("#search-form"),f=document.querySelector(".search-input"),m=document.querySelector(".loader"),y=document.querySelector(".gallery");d.addEventListener("submit",async n=>{n.preventDefault(),console.log("Search button clicked");const s=f.value.trim();if(s!==""){m.style.display="block",y.innerHTML="";try{const o=await a(s);i(),o.length>0?l(o):u()}catch{i(),iziToast.error({title:"Sorry",message:"An error occurred while fetching the images."})}}});
//# sourceMappingURL=index.js.map
