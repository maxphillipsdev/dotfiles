"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3765],{53765:(t,e,o)=>{o.r(e),o.d(e,{EpisodeSponsorNowPlayingBarHatIfPodcastAdIsPlaying:()=>f,default:()=>b});var n=o(59496),s=o(32693),a=o(7209),d=o(78034),i=o(94765);const c=["podcast-preroll","podcast-midroll-1","podcast-midroll-2","podcast-midroll-3","podcast-midroll-4","podcast-midroll-5","podcast-postroll"];function r({eventTypesToSubscribeTo:t,onPodcastAdEvent:e,onError:o}){const n=t.flatMap((t=>c.map((n=>(0,i.oc)(t,e,o,{slot:n})))));return()=>n.forEach((({cancel:t})=>t()))}const l=["started","resumed","ended"];function u({subscribeToPodcastAdEvents:t=r}={}){const[e,o]=(0,n.useState)(),{hidingHat:s,setHidingHat:a}=function(){const[t,e]=(0,n.useState)();return{hidingHat:t,setHidingHat:e}}();return(0,n.useEffect)((()=>{let n=!1;const s=t({eventTypesToSubscribeTo:l,async onPodcastAdEvent(t){const s="started"===(d=t.event_type)||"resumed"===d?d:void 0;var d;const i=Boolean(s&&"cta_card_sai"===t.ad.metadata.product_name),c=Boolean(e&&i&&e.ad.id===t.ad.id)?void 0:new Promise((t=>setTimeout((()=>{n||(o(void 0),a(void 0)),t()}),250)));c&&a(c),i&&(await c,o(t))}});return()=>{n=!0,s()}}),[e,a,t]),{activeAdEvent:e,hidingHat:s}}var p=o(4637);const v=(0,n.lazy)((()=>Promise.all([o.e(1814),o.e(7370),o.e(7260)]).then(o.bind(o,27260))));function f({subscribeToPodcastAdEvents:t,clickEventPosterForEpisodeSponsorNowPlayingBarHat:e}){const o=(0,s.g)(),i=(0,a.Y)((t=>{const e=t?.item??void 0;return(0,d.k6)(e)&&e.isPodcastAd?e:null}),((t,e)=>t?.uri===e?.uri)),{activeAdEvent:c,hidingHat:r}=u({subscribeToPodcastAdEvents:t});return(i||r)&&c?(0,p.jsx)(n.Suspense,{fallback:!0,children:(0,p.jsx)(v,{adEvent:c,ad:i,hidingHat:r,postClickEvent:e?.(c.ad.id,o)})}):null}const b=f}}]);
//# sourceMappingURL=3765.js.map