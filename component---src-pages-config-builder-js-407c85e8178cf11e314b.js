(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(278),l=a(276),s=(a(18),a(538)),i=a(304),c=a(530),m=a(531),u=a(535),d=a(533),h=a(532),g=a(540),p=a(536),b=a(541),f=a(525);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t,n=e.target,o=n.value,r=n.id;a.setState(((t={})[r]=o,t))},a.handleToggle=function(e,t){var n;a.setState(((n={})[e]=t.target.checked,n))},a.handleCopy=function(){a.setState({copied:!0})},a.handleTemplate=function(e){switch(console.log(e.target.value),e.target.value){case"anarchy":a.setState({version:3,extraLabels:!1,preventDoubles:!1,quorum:1,threshold:.01,mergeDelay:1,delayOverride:!1,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:1,contributorsOnly:!1,collaboratorsOnly:!1,template:"anarchy"});break;case"autocracy":a.setState({version:3,extraLabels:!1,preventDoubles:!0,quorum:1,threshold:.01,mergeDelay:1,delayOverride:!1,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:1,contributorsOnly:!1,collaboratorsOnly:!1,template:"autocracy"});break;default:a.setState({version:3,extraLabels:!1,preventDoubles:!0,quorum:3,threshold:.74,mergeDelay:12,delayOverride:6,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:96,contributorsOnly:!1,collaboratorsOnly:!1,template:"recommended"})}},a.handleDoubles=a.handleToggle.bind(y(a),"preventDoubles"),a.handleLabels=a.handleToggle.bind(y(a),"extraLabels"),a.handleLicense=a.handleToggle.bind(y(a),"licenseLock"),a.handleConsensus=a.handleToggle.bind(y(a),"consensusLock"),a.handleContributors=a.handleToggle.bind(y(a),"contributorsOnly"),a.handleCollaborators=a.handleToggle.bind(y(a),"collaboratorsOnly"),a.state={extraLabels:!1,preventDoubles:!0,quorum:3,threshold:.74,mergeDelay:12,delayOverride:6,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:96,contributorsOnly:!1,collaboratorsOnly:!1,template:"recommended",copied:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e="\n# Uses Version 3 of the GitConsensus configuration format.\nversion: 3\n\n# Add extra labels for the vote counts and age when merging.\n# This can create a lot of extra labels.\nextra_labels: "+this.state.extraLabels+"\n\n# Remove votes from users who vote more than once.\nprevent_doubles: "+this.state.preventDoubles+"\n\npull_requests:\n\n  # Minimum number of votes before a Pull Request will be merged.\n  quorum: "+this.state.quorum+"\n\n  # Required percentage of 'yes' votes (ignoring abstentions) before a\n  # Pull Request will be merged.\n  threshold: "+this.state.threshold+"\n\n  # The number of hours after the Pull Request was opened or commited to\n  # before the Pull Request can be closed\n  merge_delay: "+this.state.mergeDelay+"\n\n  # Number of votes at which the merge_delay gets ignored, assuming no\n  # negative votes.\n  # This is useful for rapidly deploying fixes into production.\n  delay_override: "+this.state.delayOverride+"\n\n  # The number of hours after the Pull Request was opened or commited to\n  # which the Pull Request will be closed if it has not passed.\n  timeout: "+this.state.timeout+"\n\n  # Whether to restrict changes to the license via GitConsensus.\n  license_lock: "+this.state.licenseLock+"\n\n  # Whether to restrict changes to the consensus rules via GitConsensus.\n  consensus_lock: "+this.state.consensusLock+"\n\n  # The number of hours before a Pull Request that changes the consensus\n  # rules can be merged.\n  consensus_delay: "+this.state.consensusDelay+"\n\n  # Whether to restrict votes to only previous contributors or not.\n  # This does not limit who can make a PR.\n  contributors_only: "+this.state.contributorsOnly+"\n\n  # Whether to restrict votes only to preapproved Github collaborators.\n  # This does not limit who can make a PR.\n  collaborators_only: "+this.state.collaboratorsOnly+"\n    ";return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{style:{display:"flex",flexDirection:"column",marginTop:100,marginBottom:30},noValidate:!0,autoComplete:"off"},o.a.createElement(f.a,{align:"center",variant:"h4",style:{marginBottom:30}},"Config Builder"),o.a.createElement(m.a,{component:"fieldset"},o.a.createElement(h.a,{component:"legend"},"Basic Info"),o.a.createElement(d.a,{row:!0,style:{marginBottom:10}},o.a.createElement(b.a,{title:"Add extra labels for the vote counts and age when merging. This can result in a lot of labels.",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.extraLabels,onChange:this.handleLabels,value:"extraLabels",inputProps:{"aria-label":"Extra Labels"}}),label:"Extra Labels"})),o.a.createElement(b.a,{title:"Remove votes from users who vote more than once.",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.preventDoubles,onChange:this.handleDoubles,value:"preventDoubles",inputProps:{"aria-label":"Prevent Doubles"}}),label:"Prevent Doubles"})))),o.a.createElement(m.a,{component:"fieldset"},o.a.createElement(h.a,{component:"legend"},"Pull Requests"),o.a.createElement(d.a,{row:!0,style:{marginBottom:10}},o.a.createElement(b.a,{title:"Minimum number of votes before a Pull Request will be merged",placement:"top"},o.a.createElement(p.a,{id:"quorum",label:"Quorum",className:"",value:this.state.quorum,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Required percentage of 'yes' votes (ignoring abstentions) before a Pull Request will be merged",placement:"top"},o.a.createElement(p.a,{id:"threshold",label:"Threshold",className:"",value:this.state.threshold,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"The number of hours after the Pull Request was opened or commited to before the Pull Request can be closed",placement:"top"},o.a.createElement(p.a,{id:"mergeDelay",label:"Merge Delay",className:"",value:this.state.mergeDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Number of votes at which the merge_delay gets ignored, assuming no negative votes. This is useful for rapidly deploying fixes into production.",placement:"top"},o.a.createElement(p.a,{id:"delayOverride",label:"Delay Override",className:"",value:this.state.delayOverride,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"The number of hours after the Pull Request was opened or commited to which the Pull Request will be closed if it has not passed.",placement:"top"},o.a.createElement(p.a,{id:"timeout",label:"Timeout",className:"",value:this.state.timeout,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"The number of hours before a Pull Request that changes the consensus rules can be merged.",placement:"top"},o.a.createElement(p.a,{id:"consensusDelay",label:"Consensus Delay",className:"",value:this.state.consensusDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}}))),o.a.createElement(d.a,{row:!0},o.a.createElement(b.a,{title:"Whether to restrict changes to the license via GitConsensus.",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.licenseLock,onChange:this.handleLicense,value:"licenseLock",inputProps:{"aria-label":"License Lock"}}),label:"License Lock"})),o.a.createElement(b.a,{title:"Whether to restrict changes to the consensus rules via GitConsensus",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.consensusLock,onChange:this.handleConsensus,value:"consensusLock",inputProps:{"aria-label":"Consensus Lock"}}),label:"Consensus Lock"})),o.a.createElement(b.a,{title:"Whether to restrict votes to only previous contributors or not. This does not limit who can make a PR.",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.contributorsOnly,onChange:this.handleContributors,value:"contributorsOnly",inputProps:{"aria-label":"Contributors Only"}}),label:"Contributors Only"})),o.a.createElement(b.a,{title:"Whether to restrict votes only to preapproved Github collaborators. This does not limit who can make a PR.",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.collaboratorsOnly,onChange:this.handleCollaborators,value:"collaboratorsOnly",inputProps:{"aria-label":"Collaborators Only"}}),label:"Collaborators Only"})))),o.a.createElement(i.CopyToClipboard,{onCopy:this.handleCopy,text:e},o.a.createElement(c.a,{style:{marginTop:30,marginRight:"auto",marginLeft:"auto"},variant:"outlined"},"Copy to Clipboard"))),o.a.createElement(s.a,{customStyle:{padding:0,fontSize:16},language:"yaml"},e))},n}(o.a.Component);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,{title:"Config Builder"}),o.a.createElement(v,null))}},266:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),o=a.n(n),r=a(105),l=a.n(r);a.d(t,"a",function(){return l.a});a(267),a(28).default.enqueue;var s=o.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,l&&r(l),!l&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(s.Consumer,null,function(e){return o.a.createElement(i,{data:t,query:a,render:n||r,staticQueryData:e})})}},267:function(e,t,a){var n;e.exports=(n=a(275))&&n.default||n},272:function(e){e.exports={data:{site:{siteMetadata:{title:"GitConsensus",description:"Automate Open Source Software Management."}}}}},273:function(e){e.exports={data:{file:{childImageSharp:{id:"49e693b9-b31e-5170-a372-5f14dd3a757a",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVQ4y53VTShEURgG4DvujDRDmmzGTyQrNhYypSTJrGmKJFa2CjtLdsoCZSskC4uJmqSYjRplpkSRlGSBlIV/SWS8R++pr2PuXJx6mrnnzPnO33fPWNbPkmc8+yAAfqPNQ78uHbAAB3ANV5CGWWgRv7OdAujRInAGGRcbUOYWVC2pH8ZhDKZhCeKwDTuQhF14gSeodwr6mz3xCPkQg1sIGat0LH6X7Snh8mNmQNWxCuogDG0Q5fL7oJkz0tuiT7uIB6aCNsoR46x8hXd+34NiuOFzWhyCLiHRPqErg/DAyk/44PdzznxLnOwg+1TwEFrZR7UldMBaeHNIjQYGyYhZhDnoBVyKtmO+BN/7pgOqmR5ydjrPqsUs1qHdGFT3PdEB1UndszLKWQeMvUqwfd+YsbQpOyRZGTEC6WQthxVYhWWYh0kYhQHohBrZcYQBe/jszZJzfyqF8MjXLFtAm/vj5aePeellTtpyYL2sbjj9x2RsK8cdOAyLUCnuwlJogl5ujbo4ZmANprg6K1fQLkgxr+7Em2NKiZvG4xZUvaNDTAV1sT4z+BHMGdngemjmX0ABczWoE1cEMn9rfQHbIH7oXoqHfQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png",srcSet:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/7c0ed/logo.png 200w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/647de/logo.png 400w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png 800w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/ba299/logo.png 1200w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},275:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),o=a.n(n),r=a(143);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},276:function(e,t,a){"use strict";var n=a(277),o=a(0),r=a.n(o),l=a(141),s=a(266),i=function(e){var t=e.title,a=e.description,o=e.image,i=e.pathname,m=e.article;return r.a.createElement(s.b,{query:c,render:function(e){var n=e.site.siteMetadata,s=n.defaultTitle,c=n.titleTemplate,u=n.defaultDescription,d=n.siteUrl,h=n.defaultImage,g={title:t||s,description:a||u,image:""+d+(o||h),url:""+d+(i||"/")};return r.a.createElement(l.Helmet,{title:g.title,titleTemplate:c},r.a.createElement("meta",{name:"description",content:g.description}),r.a.createElement("meta",{name:"image",content:g.image}),g.url&&r.a.createElement("meta",{property:"og:url",content:g.url}),!m?null:r.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&r.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&r.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&r.a.createElement("meta",{property:"og:image",content:g.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g.title&&r.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&r.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&r.a.createElement("meta",{name:"twitter:image",content:g.image}))},data:n})};t.a=i;var c="2395431821";i.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},277:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"GitConsensus",titleTemplate:"%s | Automate Open Source Software Management",defaultDescription:"Automate Open Source Software Management.",siteUrl:"https://www.gitconsensus.com",defaultImage:"/gitconsensus_merge_comment.png"}}}}},278:function(e,t,a){"use strict";var n=a(272),o=a(0),r=a.n(o),l=a(166),s=a(260),i=a(528),c=a(525),m=a(187),u=Object(m.a)({palette:{primary:{main:"#80d8ff"},secondary:{main:"#212121"},error:{main:"#d81b60"}}}),d=a(181),h=(a(139),a(273)),g=a(274),p=a.n(g),b=(a(21),a(524)),f=a(266),y=r.a.forwardRef(function(e,t){return r.a.createElement(b.a,Object.assign({underline:"none",component:f.a,ref:t},e))}),v=a(526),E=a(530),w=a(529),C=Object(d.a)(function(e){return{root:{flexGrow:1},link:{display:"inline-flex",alignItems:"center",flexGrow:1},title:{marginLeft:e.spacing(1)},buttonInstall:{marginLeft:e.spacing(1)},avatar:{padding:e.spacing(2.2)}}}),R=function(e){var t=e.siteTitle,a=h.data,n=C();return r.a.createElement("div",{className:n.root},r.a.createElement(v.a,{className:n.appBar,position:"fixed"},r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(w.a,{disableGutters:!0},r.a.createElement(y,{className:n.link,to:"/",color:"secondary"},r.a.createElement(p.a,{className:n.avatar,fluid:a.file.childImageSharp.fluid,alt:"logo"}),r.a.createElement(c.a,{variant:"h6",className:n.title},t)),r.a.createElement(E.a,{component:"button",variant:"outlined",href:"/configBuilder",color:"secondary"},"Config Builder"),r.a.createElement(E.a,{component:"button",variant:"outlined",href:"https://github.com/apps/gitconsensus",color:"secondary",className:n.buttonInstall},"Install On GitHub")))))};R.defaultProps={siteTitle:"",description:""};var A=R,L=Object(d.a)(function(e){return{footer:{paddingTop:e.spacing(2)},main:{paddingBottom:e.spacing(2)}}});t.a=function(e){var t=e.children,a=n.data,o=L();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{theme:u},r.a.createElement(s.a,null),r.a.createElement(A,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description}),r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement("main",{className:o.main},t),r.a.createElement("footer",{className:o.footer},r.a.createElement(c.a,{variant:"body1",gutterBottom:!0},"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://projects.tedivm.com"},"Robert Hafner")),r.a.createElement(c.a,{variant:"body1",gutterBottom:!0},"Homepage built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," by ",r.a.createElement("a",{href:"https://www.alilynne.com"},"AliLynne"),".")))))}}}]);
//# sourceMappingURL=component---src-pages-config-builder-js-407c85e8178cf11e314b.js.map