import{a as w,S as x,i}from"./assets/vendor-BNibzuFn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function g(o,e,r){return(await w.get("https://pixabay.com/api/",{params:{key:"52236687-26797aae28fcaf2822f6b1bf4",q:o,image_type:"photo",orientation:"horizontal",page:e,per_page:r,safesearch:!0}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-btn ");function b(o){const e=o.map(r=>`
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
      `).join("");p.insertAdjacentHTML("beforeend",e),v.refresh()}const v=new x(".gallery a",{captionsData:"alt",captionDelay:250});function S(){p.innerHTML=""}function E(){m.classList.add("is-visible")}function d(){m.classList.remove("is-visible")}function P(){h.classList.add("show-btn")}function f(){h.classList.remove("show-btn")}const L=document.querySelector(".form"),q=document.querySelector(".load-btn");L.addEventListener("submit",B);q.addEventListener("click",$);let l=1,y=15,n=null,c=0;async function B(o){if(o.preventDefault(),E(),f(),n=o.currentTarget.elements["search-text"].value.trim(),!n){i.warning({title:"",message:"Please enter a search query!"}),d();return}S(),l=1;try{const e=await g(n,l,y);if(c=Math.ceil(e.totalHits/y),e.hits.length===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}l>=c?f():P(),console.log(l,c),b(e.hits)}catch(e){i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.error(e)}finally{d(),L.reset()}}async function $(){l+=1;try{const o=await g(n,l,y);b(o.hits);const e=document.querySelector(".gallery").firstElementChild;if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2+24,behavior:"smooth"})}l===c&&(f(),i.info({title:"",message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.log(o)}finally{d()}}
//# sourceMappingURL=index.js.map
