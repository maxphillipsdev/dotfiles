"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1821],{37010:(e,a,s)=>{s.d(a,{p:()=>u,q:()=>l.q});var t=s(59496),n=s(77646),i=s(66629),o=s(11726),r=s(68001),l=s(61719),c=s(4637);const d=t.memo((function({uri:e,size:a=l.q.md,className:s,onClick:d,showUpsell:u}){const[E,m]=(0,i.Z)(e),I=(0,n.I0)(),S=(0,r.o)(),h=(0,t.useCallback)((()=>{S({targetUri:e,intent:E?"remove-from-library":"add-to-library",type:"click"}),m(!E),I(E?(0,o.SS)():(0,o.kK)())}),[S,e,E,m,I]);return(0,c.jsx)(l.o,{className:s,isFollowing:E,onFollow:h,onClick:d,uri:e,size:a,showUpsell:u})})),u=t.memo((function(e){return(0,c.jsx)(d,{...e})}))},21821:(e,a,s)=>{s.d(a,{X:()=>Ze});s(10817);var t=s(59496),n=s(84875),i=s.n(n),o=s(86695),r=s(95530),l=s(22997),c=s(88778),d=s(65242),u=s(11116),E=s(25007),m=s(14265);var I=s(69142),S=s(45953),h=s(13626),x=s(20858),_=s(89842),p=s(92910),Z=s(933),g=s(82374),j=s(37010),y=s(50116),N=s(81366),v=s(45208),f=s(77958),k=s(38013);const C="pvGZ831aNzHTQMZ8CA_u";var b=s(4637);const D=(0,t.memo)((function({onClick:e=(()=>{}),size:a,className:s,uri:n,sharingInfo:o,interactionData:r}){const{onCopyLink:l}=(0,k.y)({sharingInfo:o,uri:n,interactionData:r}),c=(0,t.useCallback)((()=>{l(),e()}),[e,l]);return(0,b.jsx)(f.E,{ariaLabel:E.ag.get("mwp.list.item.share"),size:a,onClick:c,className:i()(C,s),icon:v.M,condensed:!0})}));var P=s(43181),L=s(8755),M=s(73414),w=s(80131),R=s(60924),A=s(31269),T=s(77003);const U="XvNAiCvnj8kWsiN_AcJK",z="FynKcUDwVWYYbDJvu90x",B={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},O=t.memo((function({episodeUri:e,showUri:a,sharingInfo:s,canDownload:n,requestId:o,onMarkAsPlayed:r,onMoreButtonClick:l,name:c,fullyPlayed:d,index:u}){const m=(0,A._)(e),{spec:I,logger:S}=(0,T.fU)(g.createDesktopEpisodeBlockEventFactory,{data:{uri:e,reason:o||"",position:u}}),h=(0,t.useMemo)((()=>(0,b.jsx)(j.p,{uri:e,size:j.q.sm,className:i()({[U]:(0,R.y)(m)}),onClick:(a,s)=>{s===w.mc.ADD?S.logInteraction(I.downloadButtonFactory().hitDownload({itemToDownload:e})):w.mc.REMOVE&&S.logInteraction(I.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:e}))}})),[e,m,I,S]),x=(0,t.useMemo)((()=>(0,b.jsx)(D,{uri:e,sharingInfo:s,interactionData:B,onClick:()=>{S.logInteraction(I.copyLinkFactory().hitShare({entityToBeShared:e,shareId:s?.shareId||""}))}})),[e,s,I,S]),_=(0,t.useMemo)((()=>(0,b.jsx)(N.w,{uri:e,size:L.qE.sm,className:z,onClick:a=>{a?S.logInteraction(I.saveToLibraryButtonFactory().hitLike({itemToBeLiked:e})):S.logInteraction(I.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:e}))}})),[e,I,S]),p=(0,t.useMemo)((()=>(0,b.jsx)(M.yj,{menu:(0,b.jsx)(P.k,{uri:e,showUri:a,isPlayed:d,onMarkAsPlayed:r}),children:(0,b.jsx)(y.z,{size:y.q.sm,label:E.ag.get("more.label.context",c),onClick:l})})),[e,d,c,r,l,a]);return(0,b.jsxs)(b.Fragment,{children:[x,n&&h,_,p]})}));var F=s(95159),q=s(87155),G=s(83600),V=s(33428),Y=s(93646);const Q="rFwxt8s8DYY8p1O7tYZW",W="sA2HogGQNi8R_zpCWei5",H="H92pPTuqDR5DcoTtjcb3",$=({cardHeaderText:e,buttonText:a,buttonTarget:s,className:n})=>{const o=(0,G.W6)(V.vp),r=(0,t.useCallback)((e=>{e.stopPropagation()}),[]),l=(0,u.EC)(s).toURLPath(!0);return o?(0,b.jsxs)("div",{className:i()(Q,n),onClick:r,children:[(0,b.jsxs)("div",{className:W,children:[(0,b.jsx)(F.W,{className:H,iconSize:16,semanticColor:"textBase"}),(0,b.jsx)(c.D,{as:"span",variant:"balladBold",semanticColor:"textBase",children:e})]}),(0,b.jsx)(q.D,{buttonSize:"sm",colorSet:"invertedLight",component:Y.Z,href:l,children:a})]}):null},J="TT1tIewS2iI8Uz8kLuQB",X="Mn93NeoqnZzVnPIP83_9",K="bG5fSAAS6rRL8xxU5iyG",ee="g5gZaZVzR0tGT4pK6iEU",ae="DbMYFmOEEz9PH1h1zK9n",se="HLixBI5DbVZNC6lrUbAB",te="y9kEPjDek0J80YRf8JJw",ne="YhOAZFuFU1oI_YQSof4z",ie="DKIjGP8CcZyjr2O2HNST",oe="A7qeQBIk3sqr7bYadWA8",re="_IJaGA3ZdVU0NiTxbGsI",le="ij5_Bi2LfqgWwHzQBXJS",ce="o_TP9z7A8LQvMXujJC7N",de="LbePDApGej12_NyRphHu",ue="hFCGY5gjCjN10WzV2VQ4",Ee="gk0rZwqBxJjSeiWV5lgV",me="te8hrsPnSvx9SUkzV0ME",Ie="V0pEigrddg3VxP_sTdAJ",Se="acjrpluRnLumVxPt2QG9",he="upo8sAflD1byxWObSkgn",xe="DyuLxip2Kl8P7H8fW62u",_e="vak8N953oXaq9F7jZDsD",pe="WBxE9PQe96PpkE9RuTo5",Ze=t.memo(t.forwardRef((function({uri:e,name:a,showName:s,showUri:n,size:g,description:j,durationMs:y,images:N,badges:v,fullyPlayed:f,releaseDate:k,resumePositionMs:C,isCurrentlyPlaying:D,isPlaying:P,onContextMenu:L,onTouchStart:M,onTouchEnd:w,handlePlaybackClick:R,handleDragStart:A,handleClick:T,position:U,index:z,isPlayable:B,isPaywalled:F,isUserSubscribed:q,episodeSharingInfo:G,playButtonWrapper:V=null,highlightText:Y=(e=>e),onMarkAsPlayed:Q,contentInformation:W,requestId:H,onMoreButtonClick:Ze,status:ge,variant:je="default"},ye){const Ne=(0,o.k6)(),ve=D&&P,fe=(0,u.EC)(e).toURLPath(!0),ke=(0,u.EC)(n)?.toURLPath(!0),Ce=function({episodeUri:e}){const[a,s]=(0,t.useState)([]),n=(0,m.G)();return(0,t.useEffect)((()=>{let a=!0;return async function(){const t=await n.getArtists(e);a&&s(t)}(),()=>{a=!1}}),[e,n]),a}({episodeUri:e}),be=(0,x.G3)(e,k,C,f),De=(0,t.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ne.push(fe),T&&T(e)}),[fe,Ne,T]),Pe=(0,t.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),ke&&Ne.push(ke)}),[ke,Ne]),Le=F&&!q,Me=(0,t.useCallback)((e=>{e.stopPropagation(),Le||R(e)}),[R,Le]),we=Le||B,Re=E.ag.get("tracklist.a11y.play",a,s),Ae=E.ag.get("tracklist.a11y.pause",a,s),Te=(0,b.jsx)(I.f,{size:"sm",version:"next-best-episode"===je?I.u.primary:I.u.secondary,onClick:Me,isPlaying:ve,disabled:!we,locked:Le,ariaPlayLabel:Re,ariaPauseLabel:Ae}),Ue=V?V(Te):Te;return(0,b.jsxs)("div",{ref:ye,className:i()(J,{[X]:D,[Ee]:g===_.Uo.MEDIUM,[me]:g===_.Uo.LARGE,[re]:g===_.Uo.XSMALL,[pe]:"next-best-episode"===je}),"data-testid":`episode-${z}`,draggable:!!A,onDragStart:A,onClick:De,onContextMenu:L,onTouchStart:M,onTouchEnd:w,children:[ge&&(0,b.jsx)(c.D,{className:Se,paddingBottom:l.hM$,children:ge}),W&&(0,b.jsx)($,{className:_e,cardHeaderText:W.cardHeaderText,buttonText:W.buttonText,buttonTarget:W.buttonTarget}),"default"===je&&(0,b.jsx)("div",{className:le,children:(0,b.jsx)(S.O,{className:ce,type:p.p.EPISODE,size:(e=>{switch(e){case _.Uo.LARGE:return h.m$.SIZE_112;case _.Uo.MEDIUM:return h.m$.SIZE_64;default:return h.m$.SIZE_48}})(g),title:a,shape:S.K.ROUNDED_CORNERS,images:N})}),(0,b.jsxs)("div",{className:Ie,children:[(0,b.jsxs)("div",{className:se,children:[(0,b.jsx)(r.rU,{className:ee,to:fe,onClick:De,children:(0,b.jsxs)(c.D,{as:"div",variant:"balladBold",className:K,"data-testid":"episodeTitle",children:[be&&(0,b.jsx)(x.Rd,{}),Y(a)]})}),Ce.length>0&&(0,b.jsxs)("div",{className:ne,children:[(0,b.jsx)(d.U,{iconSize:16,className:oe}),(0,b.jsx)(c.D,{as:"p",variant:"mesto",className:ie,children:Y(Ce.join(E.ag.getSeparator()))})]})]}),s&&ke&&(0,b.jsx)(r.rU,{className:ee,to:ke,onClick:Pe,children:(0,b.jsx)(c.D,{as:"div",variant:"mestoBold",className:K,children:Y(s)})})]}),(0,b.jsx)("div",{className:he,children:(0,b.jsx)(c.D,{as:"p",variant:"mesto",className:de,children:Y(j??"")})}),(0,b.jsxs)("div",{className:te,children:[(0,b.jsx)("div",{className:ue,children:v}),(0,b.jsx)(Z.E,{isPlaying:ve,fullyPlayed:f,durationMs:y,releaseDate:k,resumePositionMs:C,position:D?U:void 0})]}),(0,b.jsx)("div",{onClick:e=>{e.stopPropagation()},className:ae,children:(0,b.jsx)(O,{episodeUri:e,showUri:n??"",sharingInfo:G,canDownload:!F||F&&q,requestId:H,index:z,name:a,fullyPlayed:f,onMarkAsPlayed:Q,onMoreButtonClick:Ze})}),(0,b.jsx)("div",{className:xe,children:Ue})]})})))},45953:(e,a,s)=>{s.d(a,{O:()=>j,K:()=>g});var t=s(59496),n=s(84875),i=s.n(n),o=s(90538),r=s(13626);const l="g3kBhX1E4EYEC2NFhhxG",c="O5_0cReFdHe81E0xFAD1",d="H71KtIrytVayf_dFofu7",u="SBpny8HrUTBzSjk7Vtk1",E="CxurIfvXVb_TqGF4q8Yf",m="OadpZJiOaGfX6Qp4j6n5",I="iJp40IxKg6emF6KYJ414",S="vreceNX3ABcxyddeS83B",h="Ozitxbqs1vcOukDz3GDw",x="AeEoI6ueagbJtaHl2cRd";var _=s(99155),p=s(4637);const Z=({title:e,type:a,className:s})=>(0,p.jsx)("div",{"aria-label":e,className:i()(h,s),children:(0,p.jsx)(_.t,{type:a,className:x})});let g;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(g||(g={}));const j=(0,t.memo)((function({loadingMode:e="lazy",type:a,title:s,images:t=[],shape:n=g.SQUARE,size:h=r.m$.SIZE_56,className:x,onContextMenu:_=(()=>{}),onTouchStart:j=(()=>{}),onTouchEnd:y=(()=>{})}){const N=function(e=[]){const a=e.filter((e=>Boolean(e.width))),s=a.filter((e=>e.url&&e.width&&e.width>=r.eM[r.m$.SIZE_56])).sort(((e,a)=>e.width-a.width));return s.length?s:a}(t),v=N.length>0?N[0].url:"",f=N.map((({url:e,width:a})=>`${e} ${a/2}w, ${e} ${a}w`)).join(", "),k=()=>({[l]:r.pj.includes(h),[c]:r.wL.includes(h),[d]:r.VZ.includes(h),[u]:r.B_.includes(h)});return(0,p.jsx)("div",{className:i()(S,x),onContextMenu:_,onTouchStart:j,onTouchEnd:y,style:{width:`${r.eM[h]}px`,height:`${r.eM[h]}px`},children:(0,p.jsx)(o.E,{loading:e,src:v,alt:s,ariaHidden:!0,className:i()(I,{[m]:n===g.CIRCLE,[E]:n===g.SQUARE,...k()}),srcSet:f||void 0,testid:"entity-image",children:(0,p.jsx)(Z,{title:s,type:a,className:i()({[m]:n===g.CIRCLE,[E]:n===g.SQUARE,...k()})})})})}))},13626:(e,a,s)=>{let t;s.d(a,{B_:()=>l,VZ:()=>r,eM:()=>n,m$:()=>t,pj:()=>i,wL:()=>o}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(t||(t={}));const n={[t.SIZE_48]:48,[t.SIZE_56]:56,[t.SIZE_64]:64,[t.SIZE_72]:72,[t.SIZE_80]:80,[t.SIZE_96]:96,[t.SIZE_104]:104,[t.SIZE_112]:112,[t.SIZE_120]:120,[t.SIZE_128]:128,[t.SIZE_136]:136,[t.SIZE_144]:144,[t.SIZE_152]:152,[t.SIZE_160]:160,[t.SIZE_168]:168,[t.SIZE_176]:176,[t.SIZE_184]:184,[t.SIZE_200]:200,[t.SIZE_232]:232},i=[t.SIZE_48,t.SIZE_56,t.SIZE_64],o=[t.SIZE_72,t.SIZE_80,t.SIZE_96,t.SIZE_104,t.SIZE_112,t.SIZE_120,t.SIZE_128],r=[t.SIZE_136,t.SIZE_144,t.SIZE_152,t.SIZE_160,t.SIZE_168,t.SIZE_176],l=[t.SIZE_184,t.SIZE_200,t.SIZE_232]},60924:(e,a,s)=>{s.d(a,{y:()=>n});var t=s(80131);function n(e){return[t.Om.YES,t.Om.DOWNLOADING,t.Om.WAITING].includes(e)}},933:(e,a,s)=>{s.d(a,{E:()=>f,$:()=>v});var t=s(41299),n=s(59496);const i="wIA_5Ypq0rltNPeZQpM4",o="Swi6YtNEFCCVz8l4y75v",r="pklLPOhfigdytL9bPoth",l="sb24Y8kdMZInJ8aI8dXT";s(19036);var c=s(4637);class d extends n.PureComponent{static defaultProps={current:0,max:1};render(){const{ariaValueText:e,max:a,current:s}=this.props,t=a&&s?100*Math.min(1,s/a):0,n={transform:`translateX(-${100-t}%)`},d=e||`${Math.round(t)}%`;return(0,c.jsxs)("div",{className:i,role:"progressbar",tabIndex:0,"aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":a,"aria-valuetext":d,children:[(0,c.jsx)("div",{className:o}),(0,c.jsx)("div",{className:r,children:(0,c.jsx)("div",{"data-testid":"progressBarFg",className:l,style:n})})]})}}const u=d,E="qfYkuLpETFW3axnfMntO",m="jOd7lbjiyc_kvRJaAbeL",I="_q93agegdE655O5zPz6l",S="z7Yl7CIT1AB0y91f_moh",h="iLIlkUcfIq56KncGtX7u",x="nV50yZ6BR_TIuWP3l7b1",_="qLjIx_SzBEpDRA_q7kxQ";var p=s(88778),Z=s(8550),g=s(25007),j=s(84875),y=s.n(j),N=s(66178);let v;!function(e){e[e.LARGE=0]="LARGE",e[e.SMALL=1]="SMALL"}(v||(v={}));const f=e=>{const{resumePositionMs:a=0,releaseDate:s,isPlaying:n,fullyPlayed:i,durationMs:o,size:r=v.SMALL,position:l=a}=e;return(0,c.jsxs)("div",{className:y()(E,{[m]:r===v.LARGE}),children:[s?(0,c.jsx)(p.D,{as:"p",variant:"mesto",className:I,children:(0,t.rL)((0,t.RX)(s))}):null,(()=>{if(i&&!n)return(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)(p.D,{as:"p",variant:"mesto",className:S,children:g.ag.get("episode.played")}),(0,c.jsx)(Z.N,{iconSize:16,className:_,"aria-hidden":"true"})]});if(l>0||n){const e=Math.ceil(Math.max(o-l,0));return(0,c.jsx)("div",{className:h,children:(0,c.jsx)(p.D,{as:"p",variant:"mesto",className:S,children:(0,c.jsx)(N.ng,{durationMs:e})})})}return(0,c.jsx)(p.D,{as:"p",variant:"mesto",className:I,children:(0,c.jsx)(N.nL,{durationMs:o})})})(),!i&&l>0||n?(0,c.jsx)("div",{className:x,children:(0,c.jsx)(u,{current:l,max:o,isEnabled:!1})}):null]})}}}]);
//# sourceMappingURL=1821.js.map