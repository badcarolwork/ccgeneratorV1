const srcClickMarco = "CLICK_URL_UNESC";
const imgViewMarco = "VIEW_URL_UNESC";
const ftClickMarco = "CLICK_URL_ESC";

// For Single Video format
const catfishVideo = `+'<style>body{margin: 0;}div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:auto!important;aspect-ratio:16/9;max-width:400px;max-height: 225px;position: absolute!important;left:0;top:0;}</style>';
var kultCatAdDiv = window.document.createElement("div");
kultCatAdDiv.id = "kultCatDivWrapper";
const kultCatDivExisting = window.top.document.getElementById("kultCatDivWrapper");
if (kultCatDivExisting) kultCatDivExisting.remove();
window.top.document.body.appendChild(kultCatAdDiv);
var kultCatadz_doc = '<body style="margin: 0;"><style>div#kultCatDivWrapper,iframe[id*="kultCatframe"],div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:auto!important;aspect-ratio:16/9;position:fixed;right:0;bottom:0;display:flex;justify-content:center;z-index:2147483647;max-width:400px;max-height: 225px;}@media (min-width:320px) and (max-width: 999px){div#kultCatDivWrapper,iframe[id*="kultCatframe"],div[id^="ftdiv"], div[id^="ftdiv"] iframe{max-height:150px}}</style><iframe id="kultCatframe" allow="autoplay; geolocation" allowfullscreen="true" width="100%" height="100%" scrolling="no" marginheight="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe></b';
kultCatadz_doc += 'ody>';
var kultCatadz_js = \`let kCatobserver=new MutationObserver(function(){const mainDiv=window.top.document.getElementById("kultCatDivWrapper");if(mainDiv){window.addEventListener("message",function(event){const message=event.data;if(message.source==="iframe"&&message.event==="requestCollapseFrame"){mainDiv.style.display="none";kCatobserver.disconnect();}},{once:true});}});kCatobserver.observe(window.top.document.body,{childList:true,subtree:true});\`;
const kultCatadz_js_div = window.document.createElement("script");
kultCatadz_js_div.textContent = kultCatadz_js;
kultCatadz_js_div.id = "kultCatJs";const kultCatJsDiv = window.top.document.getElementById("kultCatJs");if (!kultCatJsDiv){window.top.document.body.appendChild(kultCatadz_js_div);}
kultCatAdDiv.innerHTML = kultCatadz_doc;var iframe = window.top.document.getElementById("kultCatframe");
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(ftTag);
iframe.contentWindow.document.close();</script>\``;

// For Video + Banner format (L shape)
let catfishBannerID = "";
let catfishJs2 = "";
const catfishBanner1 = `+'<style>body{margin: 0;}div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:auto!important;aspect-ratio:375/175;max-width: 450px;max-height: 210px;position: absolute!important;left:0;top:0;}</style>';
var kultCatAdDiv = window.document.createElement("div");
kultCatAdDiv.id = "kultCatDivWrapper";
const kultCatDivExisting = window.top.document.getElementById("kultCatDivWrapper");
if (kultCatDivExisting) kultCatDivExisting.remove();
window.top.document.body.appendChild(kultCatAdDiv);
var kultCatImp = new Image(1,1);
kultCatImp.id= "kultCatpixel"
kultCatImp.src = "%%VIEW_URL_ESC%%";`
const catfishBanner3 = `var kultCatadz_doc = '<body style="margin: 0;"><style>div#kultCatDivWrapper,iframe[id*="kultCatframe"],div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:auto!important;aspect-ratio:375/175;position:fixed;right:0;bottom:0;display:flex;justify-content:center;z-index:2147483647;max-width: 450px;max-height: 210px;}</style><iframe id="kultCatframe" allow="autoplay; geolocation" allowfullscreen="true" width="100%" height="100%" scrolling="no" marginheight="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe></b';
kultCatadz_doc += 'ody>';
var kultCatadz_js = \`let kCatobserver=new MutationObserver(function(){const mainDiv=window.top.document.getElementById("kultCatDivWrapper");if(mainDiv){window.addEventListener("message",function(event){const message=event.data;if(message.source==="iframe"&&message.event==="requestCollapseFrame"){mainDiv.style.display="none";kCatobserver.disconnect();}},{once:true});}});kCatobserver.observe(window.top.document.body,{childList:true,subtree:true});\`;
const kultCatadz_js_div = window.document.createElement("script");
kultCatadz_js_div.textContent = kultCatadz_js;
kultCatadz_js_div.id = "kultCatJs";const kultCatJsDiv = window.top.document.getElementById("kultCatJs");if (!kultCatJsDiv){window.top.document.body.appendChild(kultCatadz_js_div);}
kultCatAdDiv.innerHTML = kultCatadz_doc;var iframe = window.top.document.getElementById("kultCatframe");
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(scriptMacro);
iframe.contentWindow.document.write(ftTag);
iframe.contentWindow.document.close();</script>`;

let inviewVideoID = "";
let inviewVideoJs2 = "";
const inviewVideo1 =`+'<style>body{margin: 0;}div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:auto!important;aspect-ratio:375/175;max-width: 450px;max-height: 210px;position: absolute!important;left:0;top:0;}</style>';
var kultInViewAdDiv = window.document.createElement("div");
kultInViewAdDiv.id = "kultInviewDivWrapper";
const kultInViewDivExisting = window.top.document.getElementById("kultInviewDivWrapper");
if (kultInViewDivExisting) kultInViewDivExisting.remove();
const targetEl = window.top.document.querySelector('div[id*="ros_oop_inarticle"]');
targetEl.insertAdjacentElement('afterend', kultInViewAdDiv);
//window.top.document.body.appendChild(kultInViewAdDiv);
var kultInViewImp = new Image(1,1);
kultInViewImp.id= "kultInViewpixel"
kultInViewImp.src = "%%VIEW_URL_ESC%%";`
const inviewVideo3 = `var kultInView_doc = '<body style="margin: 0;"><style>div#kultInviewDivWrapper,iframe[id*="kultInView"],div[id^="ftdiv"], div[id^="ftdiv"] iframe{width:100%!important;height:100%!important;max-width:444px!important;max-height:250px!important;aspect-ratio: 16 / 9;text-align:center;margin:auto;margin-bottom: 15px;}</style><iframe id="kultInView" allow="autoplay; geolocation" allowfullscreen="true" width="100%" height="100%" scrolling="no" marginheight="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe></b';
kultInView_doc += 'ody>';
var kultInViewadz_js = '';
const kultInView_js_div = window.document.createElement("script");
kultInView_js_div.textContent = kultInViewadz_js;
kultInView_js_div.id = "kultInView";
const kultInViewDiv = window.top.document.getElementById("kultInView");
if (!kultInViewDiv) {
    window.top.document.body.appendChild(kultInView_js_div);
}
kultInViewAdDiv.innerHTML = kultInView_doc;
var iframe = window.top.document.getElementById("kultInView");
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(scriptMacro);
iframe.contentWindow.document.write(ftTag);
iframe.contentWindow.document.close();</script>`
// const inviewVideo = `+'<style>body{margin: 0;}[id^="ftdiv"],[id^="ftdiv"] iframe{width:100%!important;height:100%!important;max-width:444px!important;max-height:250px!important;aspect-ratio: 16 / 9;}</style>';
// var kultOopImp = new Image(1,1);
// kultOopImp.src = "%%VIEW_URL_ESC%%";
// var kultInArticle = document.createElement("style");
// kultInArticle.innerHTML = \`div[id*="OOP_InArticle"],iframe[id*="OOP_InArticle"]{width:100%!important;height:100%!important;max-width:444px!important;max-height:250px!important;aspect-ratio: 16 / 9;margin-bottom: 15px;text-align:center;}div[id*="oop_inarticle"]{text-align:center}div[id*="OOP_InArticle"]{left: 0;right: 0;margin-left: auto;margin-right: auto;position: relative;}\`
// var parentDoc = window.top.document;parentDoc.body.append(kultInArticle);parentDoc.body.append(kultOopImp);document.write(ftTag);
// document.write(ftTag);
// </script>`;

// For Skinner customJS
let skinnerID = "";
const skinnerJs1 = `+'<style>body{margin: 0;}[id^="ftdiv"],[id^="ftdiv"] iframe{width:100%!important;height:100%!important;}</style>';`;
let skinnerJs2 = "";
const skinnerJs3 = 'var kultAdDiv = window.top.document.body.contains(document.getElementById("kultAdDivWrapper"));const KultDivexisting = window.top.document.getElementById("kultAdDivWrapper");if (KultDivexisting) KultDivexisting.remove();var adDiv = window.document.createElement("div"); adDiv.id = "kultAdDivWrapper";window.top.document.body.appendChild(adDiv);';
const skinnerJs4 = `var adz_doc = '<body style="margin: 0;"><style>body.kultSkin{zoom: 80%;height: auto;margin-bottom:250px;}.kultSkin .app:first-child{display: none}.kultSkin #kultAdDivWrapper{position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 1}.kultSkin #topAdDiv{height: 250px;opacity: 0}[class^="HeaderAnimation_header_wrapper"]{top: 0px;position: relative}.kultSkin [class^="HeaderAnimation_header_placeholder"]{display: none !important}.kultSkin .navbar .container{padding: 0 25px}.kultSkin #app,.kultSkin .app-container,.kultSkin #__nuxt,.kultSkin #td-outer-wrap{max-width: 1280px;min-width: unset !important;width: 100%;overflow: hidden;margin: 0px auto;z-index: 2;position: relative;top: 0px;background: white}.kultSkin .tdc-row.stretch_row_content,.kultSkin .tdc-row.stretch_row_1200,.kultSkin .tdc-row{width: 100% !important;max-width: 1280px !important;margin: unset !important;padding: unset !important}.kultSkin .tdc-row[class*="stretch_row"] > .td-pb-row > .td-element-style{width: 100% !important}.kultSkin .tdc-zone{padding: 0 20px}.kultSkin .td-header-desktop-wrap .tdc-zone{padding: 0}.kultSkin .td-header-desktop-sticky-wrap{display: none !important}.kultSkin .tdi_50:before{width: 100% !important}.kultSkin .wpb_column .wpb_wrapper{text-align: left !important}.kultSkin .tdb-logo-a{justify-content: start !important;width: fit-content;margin-left: 30px}.kultSkin .astro-login-button{margin-left: 70px}.kultSkin .tdb-template #topAdDiv{height: 0 !important}.kultSkin .Advertisement_ads_container__4nQpR,.kultSkin .AdvertisementContainer_adsContainer__tKpDh{display: none}.kultSkin [data-ad-type="mastheadTop"],.kultSkin [class*="masthead"],.kultSkin [id*="Masthead"]{display: none}.kultSkin [id*="Masthead"][id*="MIDDLE"],.kultSkin [id*="Masthead"][id*="Middle"]{display:block;}.kultSkin #navigation-menu-user-container{top: 70px;right: 17px;position: absolute}.kultSkin #user-menu{top: 56px !important;right: 0px !important;left: unset !important;position: absolute}.kultSkin .cZdIOg .sticky{position: absolute !important;top: 0px !important}.kultSkin .container{padding: 0 10px}.kultSkin #dfp-popup-modal{width: 100%;height: 100%}.kultSkin.ENUS{zoom: 85%}.kultSkin.ENUS #form{max-width: 1280px;overflow: hidden;margin: 0px auto;position: relative;top: 0px;background-color: #fff;z-index: 2;width: 100%;left: 8px}.kultSkin.ENUS .modal-backdrop.show{display: none}.kultSkin.ENUS header.nav-fixed{left: 0 !important;right: 0 !important;margin: auto}.kultSkin.ENUS .player .bar{width: 1275px;left: 0;right: 0;margin: auto}.kultSkin.ENUS #full-ads{display: none}.kultSkin.ENUS #interstitials{isolation: isolate;z-index: 10000;width: 100%;height: 100%;opacity: 1}.modal-content{box-shadow: unset}[class^="Header_header_main_container_logos"]{padding: 10px}.app-container_content,.page__header_content,[class^="sc-ifAKCX"]{zoom: 98%}.header-sub{padding: 0 10px}.hero-carousel-slider{zoom: 98%}.header .fixed-header{position: unset !important}.kultSkin .dm-story.dm-fullscreen{zoom: 127.6%}.kultSkin.xuan .header .fixed-header{position: fixed !important;max-width: 1280px;margin: auto;left: 0;right: 0}@media (min-width: 320px) and (max-width: 768px){.kultSkin.ENUS #form{left: unset}body.kultSkin,.kultSkin.ENUS{zoom: 100%;height: auto}.kultSkin #topAdDiv{height: 300px;opacity: 0}.kultSkin.xuan .hero-carousel-slider.swiper,.kultSkin.xuan .dailymotion-reels-slider,.kultSkin.xuan .carousel-thumb-slider.swiper{width: calc(100vw 20px);max-width: unset;top: 0;left: 0;right: 0;margin-left: -10px;margin-right: 0}}.kultSkin.kultBola .header,.kultSkin.kultBola footer.footer{position: relative;z-index: 100;max-width: 1320px;margin: auto}.kultSkin.kultBola > .container{background-color: #fff}.kultSkin.kultBola .header,.kultSkin.kultBola .nav-scroller{max-width: 1320px;margin: auto}.kultSkin.kultBola .container{z-index: 1000;position: relative}div[id*="div-gpt-ad"]:has(div[id*="MakanBola_ROS_Masthead"]){min-width: 1px !important;min-height: 1px !important}body.has-interstitial.kultSkin{zoom:100%}.has-interstitial.kultSkin #topAdDiv{display:none;}.has-interstitial.kultSkin #kultAdDivWrapper{display: none;}.has-interstitial .app-container{max-width: unset;}html.is-safari #kultIframe{transform: scale(0.8);transform-origin: top left;width: 125%;height: 125%;}.no-scroll .kultSkin #topAdDiv{display: none;}header:has(.fixed-header) > .block, header:has(> .block) .fixed-header{max-width: 1280px;margin: auto;left: 0;right: 0;}</style><iframe id="kultIframe" allow="autoplay; geolocation" allowfullscreen="true" width="100%" height="100%" scrolling="no" marginheight="0" marginheight="0" hspace="0" vspace="0" frameborder="0"></iframe></b';adz_doc += '\ody>';`;
const skinnerJs5 = `var adz_js = \`var elementExists=document.getElementById("topAdDiv");if(!elementExists){var topAdDiv=window.document.createElement("div");topAdDiv.id="topAdDiv",window.top.document.body.prepend(topAdDiv)}function checkAndToggleSearchClass(){const e=document.getElementById("kultAdDivWrapper");window.location.pathname.includes("/search")?(e&&e.remove(),document.body.classList.remove("kultSkin")):document.body.classList.add("kultSkin")}function checkBola(){document.getElementById("kultAdDivWrapper");window.location.hostname.includes("makanbola")&&document.body.classList.add("kultBola")}checkAndToggleSearchClass(),checkBola();const originalPushState=history.pushState,originalReplaceState=history.replaceState;function triggerUrlChange(){checkAndToggleSearchClass(),window.dispatchEvent(new Event("urlchange")),checkBola(),window.dispatchEvent(new Event("urlchange"))}let checkAdframe;function watchInterstitialModal(){const e=()=>{const e=document.querySelector("#dfp-popup-modal");document.body&&document.body.classList.toggle("has-interstitial",(e=>{if(!e)return!1;const t=getComputedStyle(e);if("none"===t.display||"hidden"===t.visibility||"0"===t.opacity)return!1;const n=e.getBoundingClientRect();return n.width>0&&n.height>0})(e))};e();new MutationObserver(e).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0})}history.pushState=function(...e){originalPushState.apply(this,e),triggerUrlChange()},history.replaceState=function(...e){originalReplaceState.apply(this,e),triggerUrlChange()},window.addEventListener("popstate",checkAndToggleSearchClass),document.body?watchInterstitialModal():document.addEventListener("DOMContentLoaded",watchInterstitialModal);let scrollPoint=!1;checkAdframe=setInterval((function(){if(document.querySelector("iframe[id*='kultIframe']")){const e=document.querySelector("iframe[id*='kultIframe']").contentWindow.document;if(e.querySelector("iframe")){const t=e.querySelector("iframe");console.log("adframe init"),window.addEventListener("scroll",(function(){const e=window.scrollY||window.pageYOffset;e>200&&!scrollPoint?(t.contentWindow.postMessage({source:"kult",event:"kultEvent",data:{text:"kscrollReveal"}},"*"),scrollPoint=!0):e<200&&scrollPoint&&(t.contentWindow.postMessage({source:"kult",event:"kultEvent",data:{text:"kscrollTop"}},"*"),scrollPoint=!1)})),clearInterval(checkAdframe)}}}),500),document.querySelector(".kultSkin .ads-interstitials")&&document.querySelector(".kultSkin .ads-interstitials").classList.add("modal-backdrop");var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari){document.documentElement.classList.add('is-safari');}\`;`;
const skinnerJs6 = `const adz_js_div = window.document.createElement("script");
adz_js_div.textContent = adz_js;
adz_js_div.id = "kultSkinJs";
const kultAdzJsDiv = window.top.document.getElementById("kultSkinJs");
if (!kultAdzJsDiv){
    window.top.document.body.appendChild(adz_js_div);
}
adDiv.innerHTML = adz_doc;
var iframe = window.top.document.getElementById("kultIframe");
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(scriptMacro);
iframe.contentWindow.document.write(ftTag);
iframe.contentWindow.document.close();
</script>`;

// Resolve the correct format snippet at call time (important for dynamic catfishJs2/skinnerJs2)
function getFormatSnippet(format) {
    switch (format) {
        case 'catfishvideo': return catfishVideo;
        case 'catfish':      return catfishBanner1 + catfishJs2 + catfishBanner3;
        case 'inviewvideo':  return inviewVideo1 + inviewVideoJs2 + inviewVideo3;
        case 'skinner':      return skinnerJs1 + skinnerJs2 + skinnerJs3 + skinnerJs4 + skinnerJs5 + skinnerJs6;
        default:             return 'no valid format found';
    }
}

let isSkinner = false;
let isCatfishBanner = false;
let isInViewVideo = false;

let resultText, skinnerIDText, catfishIDText, inviewVideoIDText, copyBtn, copyGuide;

function handleResult() {
    resultText.focus();
    resultText.disabled = false;
    copyBtn.disabled = false;
    copyGuide.style.display = "block";
}

function injectValues(format, tag) {
    let result = tag;
    result = result.replace(
        /href\s*=\s*([\"\'])(?!\1)/i,
        `href=$1%%${srcClickMarco}%%`
    );
    result = result.replace(
        /src\s*=\s*([\"\'])(?!\1)/i,
        `src=$1%%${imgViewMarco}%%`
    );
    result = result.replace(
        /ftClick\s*=\s*["']{1,2}\s*["']?\s*;/gi,
        `ftClick="%%${ftClickMarco}%%";`
    );
    result = result.replace(
        /ftTag\s*\+=\s*["']>\s*["']?\s*\+\s*ftBuildTag2\s*\+?\s*["']script>["']?\s*;?\s*document\.write\s*\(\s*ftTag\s*\)\s*;?\s*<\/script\s*>/i,
        `ftTag += '>' + ftBuildTag2 + 'script>'${getFormatSnippet(format)}`
    );
    handleResult();
    resultText.value = result;
}

function validate(format, tag) {
    if (!format) { window.alert("Please select a format"); return; }
    if (!tag)    { window.alert("Please insert the creative tag"); return; }
    if (isSkinner      && !skinnerID)      { window.alert("Please fill in the Skinner placement ID"); return; }
    if (isCatfishBanner && !catfishBannerID) { window.alert("Please fill in the Catfish placement ID"); return; }
    if (isInViewVideo   && !inviewVideoID)   { window.alert("Please fill in the In-view Video placement ID"); return; }
    injectValues(format, tag);
}

function fallbackCopy() {
    resultText.select();
    resultText.setSelectionRange(0, resultText.value.length);
    document.execCommand("copy");
    window.alert("Copied!");
}

function copyResult() {
    if (!resultText.value || !resultText.value.trim()) {
        window.alert("Kindly proceed to set up the creative tags!");
        return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(resultText.value)
            .then(() => window.alert("Copied!"))
            .catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    resultText    = document.querySelector("#result");
    skinnerIDText = document.querySelector("#inputSkinnerID");
    catfishIDText = document.querySelector("#inputCatfishBannerID");
    inviewVideoIDText = document.querySelector("#inputInViewBannerID");
    copyBtn       = document.getElementById("copy");
    copyGuide     = document.getElementById("copyGuide");

    copyBtn.addEventListener("click", copyResult);

    document.getElementById("tagForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const format = document.getElementById("formats").value;
        const tag    = document.getElementById("tags").value;

        if (isSkinner) {
            skinnerID  = document.getElementById("skinnerID").value;
            skinnerJs2 = 'var scriptMacro = `<`+\`script>var ftClick = "%%CLICK_URL_ESC%%";var ftClick_' + skinnerID + ' = ftClick;</`+`script>`;';
        }
        if (isCatfishBanner) {
            catfishBannerID = document.getElementById("catfishID").value;
            catfishJs2      = 'var scriptMacro = `<`+\`script>var ftClick = "%%CLICK_URL_ESC%%";var ftClick_' + catfishBannerID + ' = ftClick;</`+`script>`;';
        }
        if (isInViewVideo) {
            inviewVideoID = document.getElementById("inviewVideoID").value;
            inviewVideoJs2 = 'var scriptMacro = `<`+\`script>var ftClick = "%%CLICK_URL_ESC%%";var ftClick_' + inviewVideoID + ' = ftClick;</`+`script>`;';
        }
        validate(format, tag);
    });

    document.getElementById("formats").addEventListener("change", function (e) {
        const selectedV  = e.target.value;
        isSkinner        = selectedV === "skinner";
        isCatfishBanner  = selectedV === "catfish";
        isInViewVideo    = selectedV === "inviewvideo";
        skinnerIDText.style.display  = isSkinner       ? "block" : "none";
        catfishIDText.style.display  = isCatfishBanner ? "block" : "none";
        inviewVideoIDText.style.display  = isInViewVideo ? "block" : "none";
    });
});