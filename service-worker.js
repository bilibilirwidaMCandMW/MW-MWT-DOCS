if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let b={};const l=e=>a(e,r),c={module:{uri:r},exports:b,require:l};s[r]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(d(...e),b)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-6lrA39Gf.js",revision:"5155f950606fd9b64a7d0d08556760ad"},{url:"assets/404.html-qozrRcxs.js",revision:"fb25d349e47caa00333c2c62e7f09243"},{url:"assets/apkxa.html-4rPhx4QO.js",revision:"40c29b419419da105524f4b1532504da"},{url:"assets/apkxa.html-PuDKie4B.js",revision:"13b307931ede012e40eac3597a7808b4"},{url:"assets/app-1reLHFzY.js",revision:"498c9fbe602213d143d08a5bc882d099"},{url:"assets/app.html-0Qg12eun.js",revision:"890a57a5a292c19519a37563d5b28da9"},{url:"assets/app.html-udQgO0UP.js",revision:"15fcf30b441645fdb98849d139092ee3"},{url:"assets/assets.html-My3JSDJ7.js",revision:"2c8a6f9bb9595b9dff8621e99d620b30"},{url:"assets/assets.html-RYA0Up6c.js",revision:"6e7bbc0e1783f68d38c3a7ea21eb786a"},{url:"assets/auto-XYC5A0Ix.js",revision:"786b1aef9a90923f3aa3bab127b99c2c"},{url:"assets/BP.html-gNjuUpzV.js",revision:"22322658b1ec5d8aa4d4940307f91d17"},{url:"assets/BP.html-yG-htcvE.js",revision:"b66aa9b953bcd09d00315ad61195ca0b"},{url:"assets/BS.html-DoaTKY0Z.js",revision:"180b92d7b7d38700e08b50bcb14b5851"},{url:"assets/BS.html-rZb5PBby.js",revision:"dd7594dacd2ff349a7e3f5a6d9d3b48d"},{url:"assets/Card-IJVD5Brt.js",revision:"8ffb023659ebc0d5d63268c725f7c7a0"},{url:"assets/Card-sub-n31swKfq.js",revision:"9cf969df960af21314c63e52ab89f6fb"},{url:"assets/cn.html-dqYHhVig.js",revision:"4878c898fb72e2a9d71bd949c678a8bd"},{url:"assets/cn.html-IlsFZCEg.js",revision:"68012b92313a0c9259af0c198296187d"},{url:"assets/ct.html-GatDzdjL.js",revision:"52768156e931ce8d47a16639572f89b0"},{url:"assets/ct.html-wYWfvQUO.js",revision:"af3788111e4d36f4f8738c7b92dc59b4"},{url:"assets/ctto.html-jWDl42oq.js",revision:"9f434d4afec72d805093e00da50c294e"},{url:"assets/ctto.html-qHvey8qA.js",revision:"6b0c27b0300926677718eca58e6a9d05"},{url:"assets/CYCT.html-69FanWOr.js",revision:"85464e25e4cfffedb10e3019b40ff1a7"},{url:"assets/CYCT.html-ZVU5zjCO.js",revision:"5a91f4bdf49d6ae51d333ff892b8ccf5"},{url:"assets/DE.html-9Yp-6dl7.js",revision:"9c0fc012a296188d9ef3efbd82121363"},{url:"assets/DE.html-HOC5WpSZ.js",revision:"a6b686a4eeaa4f40182bb5152b1dceb9"},{url:"assets/EGG.html-ffJNLbCZ.js",revision:"8f166c4dcea9c929f18cdab4149232e4"},{url:"assets/EGG.html-NKrWu50H.js",revision:"71da1a3f0a9c3fd4f894391e0ad2c97f"},{url:"assets/game-info.html-C2IzPKIo.js",revision:"970912bc6e6616062a32587e8fff81e2"},{url:"assets/game-info.html-orYsXmZj.js",revision:"c2d41e38cb9ae3f75644605e28cebaf1"},{url:"assets/Game.html-0Qd1q92D.js",revision:"9fb7d8986a62804b1d22fd756eed63bf"},{url:"assets/Game.html-AJ9Un6qm.js",revision:"a4fa1d0cfe9c4acadb9c40759adb4ad9"},{url:"assets/GO.html-kAk4ecQS.js",revision:"0314ccfb55acb45f3910b9aac01c739e"},{url:"assets/GO.html-XYOU0fVx.js",revision:"de3ec69fb65d8bed56b9d67ccb884bfa"},{url:"assets/Google.html-DZjCFt55.js",revision:"99253346841644add4f543d088d74c50"},{url:"assets/Google.html-qLVpSOZ1.js",revision:"e5c48b15b1d040f497d71809eac0a19b"},{url:"assets/H18.html-HK8Lzioj.js",revision:"74a8f3d3c1058cb3bf0c07263608d1ea"},{url:"assets/H18.html-xKA4-fHJ.js",revision:"9a3e70da1e4566d3884da8e11b4d4ad2"},{url:"assets/index-7IwC0DkA.js",revision:"a0a6a74537488342822dc33151252ce7"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-2XA_iek4.js",revision:"89e711f8a34c9c69057fe7c3108a99ee"},{url:"assets/index.html-6jqTdSAC.js",revision:"c9ec4d79fbb5e5431e36ca1b550ef2e8"},{url:"assets/index.html-cbrIL3Hn.js",revision:"e488a304ae43b394c41bcf6984f3cea8"},{url:"assets/index.html-fmd5iLP_.js",revision:"69ec430be16925ea78567235858517cb"},{url:"assets/index.html-gSu_wmoJ.js",revision:"e131ed565c9828b550b17e9edcd063b6"},{url:"assets/index.html-iKBNJdgr.js",revision:"e488a304ae43b394c41bcf6984f3cea8"},{url:"assets/index.html-nsEtX4D9.js",revision:"0fb04f2890cb0194e346be8e0e5775d8"},{url:"assets/index.html-opNpm6Gv.js",revision:"9a83116ee57ada609fd52f0c128f91a5"},{url:"assets/index.html-rG7-xkie.js",revision:"029290ce7a2826369ab24beb3602d752"},{url:"assets/index.html-wBp1k15C.js",revision:"323c07f1d406cd86ac77a4b88baa9f60"},{url:"assets/index.html-WgHAquog.js",revision:"e488a304ae43b394c41bcf6984f3cea8"},{url:"assets/index.html-ZYqz84Q4.js",revision:"64f4576f5af93e7dbfd280dd0192d4d2"},{url:"assets/info.html-7WQAAnKU.js",revision:"644f3d8026f70abfdc0af7769954a7b4"},{url:"assets/info.html-vu-9ntXY.js",revision:"8841cb5e9e86e570f0e6a6493bceb354"},{url:"assets/J25.html-GDQ5IR6M.js",revision:"4f5faada9406324decdbd1b2f6d4b088"},{url:"assets/J25.html-RkDjUOlK.js",revision:"a22ad5916507923f7e7f2a2ace52c414"},{url:"assets/JD.html-mf9meLdV.js",revision:"07f286a838128bc307d2123992d5d560"},{url:"assets/JD.html-WTa9V8kY.js",revision:"759870ce165d789073ed32ce03dbf11a"},{url:"assets/LJ.html-_41vOf7O.js",revision:"be0ae09bb9ab6634acc1e8bd9878b968"},{url:"assets/LJ.html-vayFa3cL.js",revision:"8031bc84f43c8d2116492dfa287e6955"},{url:"assets/LT.html-Xu2H4Zct.js",revision:"02ce4da084bd1ae8e13e4fbe407abe1c"},{url:"assets/LT.html-YPFVp3i9.js",revision:"170dd81a6be0af6f74059beb448a575d"},{url:"assets/md.html-n-nAZ64w.js",revision:"378783cd7ab30591d0bbe07dfbd7cc5e"},{url:"assets/md.html-nLJndqs4.js",revision:"85dc7421e5660a2101931805d9729593"},{url:"assets/mod.html-GBDcuSsW.js",revision:"a61b8603d474bacc30507fcb588665a3"},{url:"assets/mod.html-QcLV-6zE.js",revision:"3b16bcbf911b0426872e1e3bfad21b63"},{url:"assets/musk.html-394w4rX2.js",revision:"d43591e9aad3bab811058c70ac917407"},{url:"assets/musk.html-qiNVA9wH.js",revision:"3ba59cb6f310f6fd4c472f8e35860ce1"},{url:"assets/mw-history.html-9vzfx_y3.js",revision:"d96a49a5999a5e80312a88104a8133b0"},{url:"assets/mw-history.html-NgTn61B8.js",revision:"9f3749925f979d36fa83db9e449da117"},{url:"assets/MW-Press.html-iCL2W3uB.js",revision:"796f79bdc537a625d70575ac97b892f3"},{url:"assets/MW-Press.html-v-hq1M0I.js",revision:"64b8e6ca027857fcc18ed0b9af4dd836"},{url:"assets/mw-rules.html-tCpEGKa-.js",revision:"4e1444f5aa5fded74e65aa90ee631c46"},{url:"assets/mw-rules.html-wjibtxke.js",revision:"2f0056111a328869c1a01ad8532114d5"},{url:"assets/mw68.html-HDlaf8KY.js",revision:"a7442a6d202a3d866c67abb92942e940"},{url:"assets/mw68.html-W9A4F3tv.js",revision:"b10c9ecfc19357f5bf49fcd1f9100c89"},{url:"assets/mw70.html-8XsYHgz8.js",revision:"80ace5ba62006fb91ef65e0c9d255eb0"},{url:"assets/mw70.html-UqaeAAEm.js",revision:"00b5332d9b6872ddc94e05ec8a4cc194"},{url:"assets/mwpz.html-ceJS7gWJ.js",revision:"78d39f3bf3cdd4290d2c1de3e29a1348"},{url:"assets/mwpz.html-RXkHuE7K.js",revision:"aa5313d790d40470047a2c3abab185bb"},{url:"assets/nature.html-agIY_Zhz.js",revision:"baf2ef42cb9a953edbd9afbb59763f4a"},{url:"assets/nature.html-j991_SLJ.js",revision:"fa6b51afc2aade66f19e4d62be93945f"},{url:"assets/news.html-hF5QDGMH.js",revision:"59b3fcf606ff1a96e9ca63117e28f781"},{url:"assets/news.html-SxBXz6_4.js",revision:"054fbe615d5df8d0a2fcc44c0f422660"},{url:"assets/object.html-MNCha1N3.js",revision:"64094e1024dc9df6896ece647271683e"},{url:"assets/object.html-Oi-Ae612.js",revision:"7c91c6ea3ea11f0f3497f62c3f0e6273"},{url:"assets/pan.html-dHCH3lld.js",revision:"83a51a8f5a6c033873ac51ca6ac342d4"},{url:"assets/pan.html-msXePlbi.js",revision:"5502a10b979b0404796a7f1d8f6b7f6c"},{url:"assets/PC.html-3VvoJUu0.js",revision:"93863ecfbc9b407f1040d3242e03afa6"},{url:"assets/PC.html-5K3fOUqr.js",revision:"995995b23923a8f7e5de11eea10ad8e3"},{url:"assets/people.html-q0bg9o3Q.js",revision:"e107fe09a954332071367f83f3fc3c44"},{url:"assets/people.html-Z3GCdwbR.js",revision:"59764bfd542165ef9544540d729dad14"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/place.html-4lou0BiQ.js",revision:"c994538606144d81a4e5d468ad16f022"},{url:"assets/place.html-Tq22bnxm.js",revision:"f8a3724e46ffc23fe034d61b30f4b7cd"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/QT.html-RvZtS59n.js",revision:"2d02f09adc3b19c1c63f4412b5deec8f"},{url:"assets/QT.html-XCO-Mbga.js",revision:"fa122a4a6303ec4d7e55d356d81a2fb8"},{url:"assets/SC.html-NrKfGRhN.js",revision:"7f0aedf11a0bbbcc6b01ff4fb43ec3d2"},{url:"assets/SC.html-Q_qCApEb.js",revision:"c04b545628593e5983a931460cbe2fc0"},{url:"assets/SD.html-0GdQ0arv.js",revision:"bc4c36b6dde0ba707a67194e9f1be846"},{url:"assets/SD.html-ynvWkbHN.js",revision:"8bd9da4e9baee9b5953da26c7489afe1"},{url:"assets/SearchResult-h1km-QTy.js",revision:"481dea7d70fc3a42adef4dcdd8bc7366"},{url:"assets/sitehelp.html-tzh4evcN.js",revision:"f60aa46281ed02565111ee07a00715e8"},{url:"assets/sitehelp.html-Wm0WlkIQ.js",revision:"b84e50253d0cc62a9a050b25fb8d41ed"},{url:"assets/STAN-Bilibili.html-2R4RW-CH.js",revision:"a5db2be190a44934e4ad80b58eb4bdc7"},{url:"assets/STAN-Bilibili.html-BHJp1NG4.js",revision:"e3e525ac68678c8343b2a78e8bae242e"},{url:"assets/style-s-JEJRuG.css",revision:"159024c94ee97ff3be7c2d9bd7f1cf2f"},{url:"assets/SubmitWork-qEhPd3TS.js",revision:"6b73c9e73ad410685dcd071ba67fdda8"},{url:"assets/symbol.html-fbxiAoKI.js",revision:"0f8a8cae757c7e95b5f94ca4bfe9f5ba"},{url:"assets/symbol.html-MmkluPj9.js",revision:"0bfadd938a472f3bac1b0b6f8b451886"},{url:"assets/sys.html-EAda4Bxu.js",revision:"bee61ea1f837745039108487f9e221ac"},{url:"assets/sys.html-z0843vvt.js",revision:"984d4310824677e2cd19ad6cc37c7493"},{url:"assets/UP.html-Cqjn8XwG.js",revision:"e6f3e85bdf95b6a211def5fcd58fff55"},{url:"assets/UP.html-qPW6iTRt.js",revision:"8fe4e592c955ceb8e8449856a2b9428e"},{url:"assets/WF.html-3rLO0C-t.js",revision:"359c8f71247a984eea263cc9d43494f6"},{url:"assets/WF.html-dFURYaxq.js",revision:"e4321eac902a3164476e0aeba45f7352"},{url:"assets/WorkTable-OdatwEat.js",revision:"9e55c6817f1e258977ba6a14965c504e"},{url:"assets/YJ.html-3_A6TJQS.js",revision:"98a5ddb6792164628cb4f722eac46427"},{url:"assets/YJ.html-yMEuOHFz.js",revision:"069953906b7c5e1e2539f1d67150fe86"},{url:"assets/ZB.html-FPi6akBu.js",revision:"ec2aefe3019c67e098838a63f0975c67"},{url:"assets/ZB.html-sziZ1hcq.js",revision:"c6c593629f849d182d824d0cabd18dc1"},{url:"assets/ZD.html-IdXT5o1i.js",revision:"bf3fb3dd9993e59745c902e2dfc34aee"},{url:"assets/ZD.html-OtOnHlXr.js",revision:"8ef165a02c3f4bd1f3949c80fae5e5e9"},{url:"assets/ZG.html-QMV_9alJ.js",revision:"672ef7c2af2d380fa7995859f6433297"},{url:"assets/ZG.html-QPi2r9I3.js",revision:"bbea920d3bdcf0b3928c2b43cb000889"},{url:"assets/ZH.html-9bSIFDYz.js",revision:"e88c27078da3c72b8e1b02ad8b86cead"},{url:"assets/ZH.html-LdhOznYJ.js",revision:"bd0ab89d9205d038debc2ef64b46cb47"},{url:"assets/ZY.html-sT4Dzy0F.js",revision:"45ba6bf530213bd56dcbae2320db53b7"},{url:"assets/ZY.html-Xqtrdy2S.js",revision:"d8d495da61d1b062d436e5d447f4bcb1"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"op.js",revision:"222a1e6617afcc444a5389b9a29c31c9"},{url:"404.html",revision:"e3e7af787fabcb7b5ec4c93aae753b4c"},{url:"apkxa.html",revision:"dc72cf4e8102c14a1859d54b27da2894"},{url:"app.html",revision:"d217593698b659eb550e21fcf19cb5b3"},{url:"assets.html",revision:"0c20036aa20851e6e34a182395f9a6f4"},{url:"BP.html",revision:"cce397b4050b460129fdeba5cf303897"},{url:"BS.html",revision:"a851b76594a92fdbcac7c8b3ca3e7cae"},{url:"cn.html",revision:"fd7157be0237968e228d2a3711e4a0b1"},{url:"ct.html",revision:"b42a1c213a5315e11590403c3a96676d"},{url:"ctto.html",revision:"7431239608b1f6e7e4c27e2826ddb01d"},{url:"CYCT.html",revision:"6faf4780e36d32839d592992fb01c324"},{url:"DE.html",revision:"5b2afb96f9233d232763cd3fd75c4fc1"},{url:"demo/cook/emoji/index.html",revision:"ed551a5eed2fc51ea0ec8a61eb9a8a68"},{url:"demo/cook/emoji/nature.html",revision:"cd1991e51520c34114ac580b3ddba5c1"},{url:"demo/cook/emoji/object.html",revision:"7dd55c4d976da28dde8b0205c16cf621"},{url:"demo/cook/emoji/people.html",revision:"b68a29e45554c16e69e018975692fbd4"},{url:"demo/cook/emoji/place.html",revision:"252ba2eab329e6d917ce801793495234"},{url:"demo/cook/emoji/symbol.html",revision:"018ba96dfefd7507c90b08cf7a4a1833"},{url:"demo/cook/index.html",revision:"73b664c240318f9ff348958a0dcece2a"},{url:"demo/index.html",revision:"8b25f78711a9737c78999d26d17df774"},{url:"demo/info.html",revision:"847409435773110f2ceebe70b55ed2a4"},{url:"dev/index.html",revision:"2d260650808267399d5ea2dd0a745fbf"},{url:"dev/mwpz.html",revision:"96975034b31de4f341a7972cb4eb2f6e"},{url:"EGG.html",revision:"fa5710d27e7acff0f35bfa312ae34dd3"},{url:"game-info.html",revision:"ae8a75702e59d8a3a3ffd17ae1bdf3b4"},{url:"Game.html",revision:"9116845fcf3398b2aaf060e8e78467cb"},{url:"GO.html",revision:"97bf59517e19e2e78ef37e1e9a6ac182"},{url:"Google.html",revision:"d164fc1bf699c5dfa7880ff1e214242a"},{url:"H18.html",revision:"bcbacd99e01e07004e805b8c470209ad"},{url:"index.html",revision:"d6ccb02297c461795262f41fd76fbb66"},{url:"J25.html",revision:"841bb93e35c743f027305d14bf2fb91a"},{url:"JD.html",revision:"df0f8a2b038f21fb090ac0ce1f6db29e"},{url:"LJ.html",revision:"2c74f1da9ddef75dbb9ac2e09137998e"},{url:"LT.html",revision:"aa80f3f8cc39711aa730741dc046af43"},{url:"md.html",revision:"c911efab256746424b5708f4f266a5f1"},{url:"mod.html",revision:"045f2a6a442403bf9acf6efc707a94db"},{url:"mp.html",revision:"0b1cba9c5094cd2f1fe31169b9ab9542"},{url:"musk.html",revision:"cedee2dde441719476e1c88dde8e94e0"},{url:"mw-history.html",revision:"2d2aae3518c2b1ed42415c50b2847b42"},{url:"MW-Press.html",revision:"81c94c429795378ae33704b1b83d5e02"},{url:"mw-rules.html",revision:"c6ccdda3763f783972d62e69a45f2c8d"},{url:"mw68.html",revision:"f60dfb4f70a7a0aa609b4bc26c51bb35"},{url:"mw70.html",revision:"c3f16a21e325712ec89883f1a5a9cedb"},{url:"mwt/index.html",revision:"7381f58a087cb04802b922431adb40f0"},{url:"news.html",revision:"fb81bfd61bfa9122374ddc2d9bdffdb4"},{url:"pan.html",revision:"b74709227f234bf445bc711f0d1b8107"},{url:"PC.html",revision:"2961700a582bc471988e5fdc5aaf4004"},{url:"QT.html",revision:"1ad903157add0a4e0f6b78d642874b6c"},{url:"SC.html",revision:"8e202ebbc381ec550a33931edce14bbb"},{url:"SD.html",revision:"ab943c1bec6d19a2f1ab31c47fb6e2ed"},{url:"sitehelp.html",revision:"7fb7fc5ae107e2372317ba2786e6ea21"},{url:"STAN-Bilibili.html",revision:"de6c026c09b3d2a21ea15c02d16f6ca6"},{url:"sys.html",revision:"76f0367cb1636fee77f06124bc3ac44e"},{url:"UP.html",revision:"fd572ad21e0142f81b6e99025733ab14"},{url:"WF.html",revision:"aa6c192282c627f297515a4b37dc0ba3"},{url:"YJ.html",revision:"53ead9cbc3fb63b22a33f946ac26cf42"},{url:"ZB.html",revision:"855ac5bb4142532f67a4c8209aa47ff8"},{url:"ZD.html",revision:"9ae5d887ed97b5e7681192763f6e3778"},{url:"ZG.html",revision:"6e7d37d10231de5e6c6fa11876421bc7"},{url:"ZH.html",revision:"ecef640715266624da99d109e3ca015f"},{url:"ZY.html",revision:"6a56aaa9a70d633a678c2a3254ee5d12"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
