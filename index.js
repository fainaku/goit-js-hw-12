import{a as L,S as w,i}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function y(s,t,r){return(await L.get("https://pixabay.com/api/",{params:{key:"52236687-26797aae28fcaf2822f6b1bf4",q:s,image_type:"photo",orientation:"horizontal",page:t,per_page:r,safesearch:!0}})).data}const g=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-btn ");function h(s){const t=s.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"/>
            </a>
            <div class="gallery-wrap">
            <ul class="gallery-list">
                <li class="gallery-item-text"><p class="gallery-text"><b>Likes </b></p>
                <p class="info-text">${r.likes}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Views </b></p>
                <p class="info-text">${r.views}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Comments </b></p>
                <p class="info-text">${r.comments}</p></li>
                 <li class="gallery-item-text"><p class="gallery-text"><b>Downloads </b></p>
                <p class="info-text">${r.downloads}</p></li>
                </ul>
            </div>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}const x=new w(".gallery a",{captionsData:"alt",captionDelay:250});function v(){g.innerHTML=""}function S(){p.classList.add("is-visible")}function u(){p.classList.remove("is-visible")}function E(){m.classList.add("show-btn")}function d(){m.classList.remove("show-btn")}const b=document.querySelector(".form"),P=document.querySelector(".load-btn");b.addEventListener("submit",q);P.addEventListener("click",B);let a=1,f=15,n=null;async function q(s){if(s.preventDefault(),S(),d(),n=s.currentTarget.elements["search-text"].value.trim(),!n){i.warning({title:"",message:"Please enter a search query!"}),u();return}v(),a=1;try{const t=await y(n,a,f);if(t.hits.length===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}),d();return}h(t.hits),E()}catch(t){i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.error(t)}finally{u(),b.reset()}}async function B(){a+=1;try{const s=await y(n,a,f);h(s.hits);const t=document.querySelector(".gallery").firstElementChild;if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2+24,behavior:"smooth"})}const r=Math.ceil(s.totalHits/f);a===r&&(d(),i.info({title:"",message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.log(s)}finally{u()}}
//# sourceMappingURL=index.js.map
