DYWedding.Gallery=CLASS({preset:()=>{return DIV},params:()=>{return{style:{onDisplayResize:(t,e)=>{return t>800?{width:"auto"}:{width:t}},backgroundColor:"#fff",color:"#000"}}},init:(t,e)=>{e.append(DIV({c:[DYWedding.Slider({slides:RUN(()=>{let t=[];return REPEAT(4,e=>{t.push(DYWedding.Slide({style:{backgroundImage:DYWedding.R("photo/"+(e+1)+".jpg"),backgroundPosition:"center",backgroundSize:"cover",onDisplayResize:(t,e)=>{return{height:e-30}}},contentStyle:{position:"relative",width:"100%",height:"100%"}}))}),t})})]}))}}),DYWedding.Game=CLASS({preset:()=>{return DIV},params:()=>{return{style:{onDisplayResize:(t,e)=>{return t>800?{width:"auto"}:{width:t}},backgroundColor:"#fff",color:"#000"}}},init:(t,e)=>{e.append(DIV({c:[H3({c:"게임하기"})]}))}}),DYWedding.Home=CLASS({preset:()=>{return DIV},params:()=>{return{style:{onDisplayResize:(t,e)=>{return t>800?{width:"auto",height:"auto"}:{width:t,height:e}},backgroundImage:DYWedding.R("photo/main.jpg"),backgroundSize:"cover",backgroundPosition:"center center"}}},init:(t,e)=>{e.append(P({style:{padding:"15px 20px",fontFamily:"Philosopher",color:"#000",fontSize:30,background:"rgba(255, 255, 255, 0.8)"},c:[SPAN({c:"DASOM\nYOUNGJAE\nWEDDING\n"}),SPAN({style:{fontSize:16},c:"2020 0404"})]}))}}),DYWedding.Invitation=CLASS({preset:()=>{return DIV},params:()=>{return{style:{onDisplayResize:(t,e)=>{return t>800?{width:"auto"}:{width:t}},backgroundColor:"#fff",color:"#000",padding:"80px 0"}}},init:(t,e)=>{e.append(DIV({style:{fontSize:16,textAlign:"center"},c:[P({style:{lineHeight:"2em"},c:"다솜과 영재가 함께하는 여덟번째 봄,\n사랑을 약속합니다."}),P({style:{marginTop:50,lineHeight:"2em"},c:[SPAN({c:"황인효 · 정정미"}),SPAN({style:{fontSize:14},c:"의 차녀"}),SPAN({style:{marginLeft:10},c:"황다솜"}),A({style:{marginLeft:10},href:"tel:01033909459",c:FontAwesome.GetIcon("phone")})]}),P({style:{lineHeight:"2em"},c:[SPAN({c:"심성우 · 노연옥"}),SPAN({style:{fontSize:14},c:"의 장남"}),SPAN({style:{marginLeft:10},c:"심영재"}),A({style:{marginLeft:10},href:"tel:01098622026",c:FontAwesome.GetIcon("phone")})]}),P({style:{marginTop:50,lineHeight:"2em"},c:[SPAN({c:"2020년 4월 4일 토요일 오후 1시\n홀리데이 인 광주 3층 컨벤션홀"})]})]}))}}),DYWedding.MAIN=METHOD({run:()=>{TABLE({style:{minHeight:"100%"},c:TR({c:TD({style:{onDisplayResize:(t,e)=>{return t>800?{padding:"30px 0"}:{padding:0}}},c:DIV({style:{margin:"auto",onDisplayResize:(t,e)=>{return t>800?{width:538,height:814,backgroundImage:DYWedding.R("iphone.png")}:{width:"auto",height:"auto",backgroundImage:"none"}}},c:DIV({style:{onDisplayResize:(t,e)=>{return t>800?{paddingTop:22,paddingLeft:100}:{paddingTop:0,paddingLeft:0}}},c:DIV({style:{onDisplayResize:(t,e)=>{return t>800?{width:342,height:741,"-webkit-mask-image":'url("'+DYWedding.R("iphone-mask.png")+'")',overflowY:"scroll"}:{width:"auto",height:"auto","-webkit-mask-image":"none"}}},c:[DYWedding.Home(),DYWedding.Invitation(),DYWedding.Gallery(),DYWedding.Map(),DYWedding.Game()]})})})})})}).appendTo(BODY),Kakao.init("e676de846520395b3f998af409d62351")}}),DYWedding.Map=CLASS({preset:()=>{return DIV},params:()=>{return{style:{onDisplayResize:(t,e)=>{return t>800?{width:"auto"}:{width:t}},backgroundColor:"#fff",color:"#000",padding:"80px 0"}}},init:(t,e)=>{let n;e.append(DIV({c:[H2({style:{textAlign:"center",fontSize:30},c:"오시는 길"}),DIV({style:{marginTop:20,textAlign:"center",fontSize:16},c:[P({style:{lineHeight:"2em"},c:"홀리데이 인 광주 3층 컨벤션홀"}),P({style:{lineHeight:"2em"},c:"광주광역시 서구 상무누리로 55"}),P({style:{lineHeight:"2em"},c:["전화번호 ",A({href:"tel:0626107000",c:"062-610-7000"})]})]}),n=DIV({style:{margin:"auto",marginTop:20,width:"100%",height:250}}),DIV({c:[A({style:{float:"left",fontSize:20},c:"카카오 네비",on:{tap:()=>{Kakao.Navi.start({name:"홀리데이 인 광주",x:126.8381013,y:35.1477065,coordType:"wgs84"})}}}),A({style:{float:"right",fontSize:20},href:"https://map.naver.com/v5/search/%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4%EC%9D%B8%EA%B4%91%EC%A3%BC/place/19560475?c=14119514.1500732,4183961.0868027,18,0,0,0,dh",target:"_blank",c:"지도 보기"}),CLEAR_BOTH()]}),DIV({style:{marginTop:50,padding:"0 30px"},c:[H3({style:{fontSize:20},c:"지하철"}),P({c:"김대중컨벤션역(마륵역) 4번 출구 하차 후 도보 5분 거리"})]}),DIV({style:{marginTop:30,padding:"0 30px"},c:[H3({style:{fontSize:20},c:"버스"}),P({c:"김대중컨벤션센터 하차: 38, 64, 1000"}),P({c:"마륵역 하차: 19, 20, 38, 62, 69, 73, 160, 270"}),P({c:"5.18자유공원 하차: 1, 518"})]}),DIV({style:{marginTop:30,padding:"0 30px"},c:[H3({style:{fontSize:20},c:"주차안내"}),P({c:"김대중컨벤션센터 제1야외주차장 이용"}),P({c:"홀리데이 인 광주호텔 지하주차장 이용"})]})]})),e.on("show",()=>{let t=new kakao.maps.Map(n.getEl(),{center:new kakao.maps.LatLng(35.1477065,126.8381013),level:3});new kakao.maps.Marker({position:new kakao.maps.LatLng(35.1477065,126.8381013)}).setMap(t)})}}),DYWedding.Slide=CLASS({preset:()=>{return UUI.PANEL}}),DYWedding.Slider=CLASS({preset:()=>{return NODE},init:(t,e,n)=>{let o,i,r,l,c,a,d=n.slides,s=n.contentStyle,g=n.isNotUsingDots,u=void 0===n.dotColor?"rgba(128, 128, 128, 0.3)":n.dotColor,f=void 0===n.dotHighlightColor?"#000":n.dotHighlightColor,p=[],h=0,y=DIV({c:[DIV({style:{position:"relative"},c:[o=DIV({style:{overflowX:"hidden"},c:l=DIV({c:RUN(()=>{let t=[];return EACH(d,e=>{t.push(e)}),t.push(CLEAR_BOTH()),t})})}),i=DIV({style:{position:"absolute",left:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%",color:"#fff"},c:FontAwesome.GetIcon("chevron-left")}),on:{tap:()=>{m(h-1)}}}),r=DIV({style:{position:"absolute",right:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%",color:"#fff"},c:FontAwesome.GetIcon("chevron-right")}),on:{tap:()=>{m(h+1)}}})]}),g===!0?"":UUI.V_CENTER({style:{height:20},c:DIV({style:{width:12*d.length,margin:"auto"},c:RUN(()=>{let t=[];return REPEAT(d.length,e=>{let n;t.push(n=UUI.PANEL({style:{flt:"left",padding:"0 2px"},contentStyle:{backgroundColor:0===e?f:u,width:8,height:8,borderRadius:4,cursor:"pointer"},on:{tap:()=>{m(e)}}})),p.push(n)}),t.push(CLEAR_BOTH()),t})})})]});t.setWrapperDom(y),t.setContentDom(l);let D=EVENT("resize",()=>{c=e.getWidth(),e.addContentStyle({width:c*d.length}),EACH(d,t=>{t.addStyle({flt:"left",width:c})})});e.on("show",()=>{D.fire()}),e.on("remove",()=>{D.remove(),D=void 0}),i.hide(),1===d.length&&r.hide();let m=e.scrollTo=(t=>{d.length>1&&(t<=0?i.hide():i.show(),t>=d.length-1?r.hide():r.show(),t>=0&&t<d.length&&(g!==!0&&p[h].addContentStyle({backgroundColor:u}),void 0!==a&&(a.remove(),a=void 0),h<t?(h=t,a=INTERVAL(()=>{return o.getEl().scrollLeft>=h*c?(o.getEl().scrollLeft=h*c,!1):void(o.getEl().scrollLeft+=c/50)})):h>t&&(h=t,a=INTERVAL(()=>{return o.getEl().scrollLeft<=h*c?(o.getEl().scrollLeft=h*c,!1):void(o.getEl().scrollLeft-=c/50)})),g!==!0&&p[h].addContentStyle({backgroundColor:f}),EVENT.fireAll({node:e,name:"scroll"})))});e.on("touchstart",t=>{let n,i,r=o.getEl().scrollLeft,l=t.getLeft();e.on("touchmove",n=(t=>{t.stopBubbling(),o.getEl().scrollLeft=r+l-t.getLeft()})),e.on("touchend",i=(t=>{o.getEl().scrollLeft;l-t.getLeft()<0?m(h-1):l-t.getLeft()>0&&m(h+1),t.stopBubbling(),e.off("touchmove",n),e.off("touchend",i),e.off("mouseout",i)})),e.on("mouseout",i),t.stopBubbling()});let S=e.addContentStyle=(t=>{l.addStyle(t)});void 0!==s&&S(s);e.getPage=(()=>{return h})}});