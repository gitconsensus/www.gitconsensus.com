(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{267:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(287),r=a(285),s=a(553),c=a(550),i=a(559),u=a(555),m=a(543),d=a(304),h=a.n(d),g=a(558),p=a(548),y=function(e){var t=e.config,a="\n# Which version of the consensus rules to use\nversion: 3\n\n# Add extra labels for the vote counts and age when merging\nextra_labels: "+t.extra_labels+"\n\n# Don't count any vote from a user who votes for multiple options\nprevent_doubles: "+t.prevent_doubles+"\n\npull_requests:\n\n  # At least three people should sign off on any pull request.\n  quorum: "+t.quorum+'\n\n  # Required percentage of "yes" votes (ignoring abstentions). It\'s a good idea to give "no" votes more power.\n  threshold: '+t.threshold+"\n\n  # Number of hours after last action (commit or opening the pull request) before issue can be merged\n  merge_delay: "+t.merge_delay+"\n\n  # Number of votes at which the merge_delay gets ignored, assuming no negative votes.\n  delay_override: "+t.delay_override+"\n\n  # Close pull requests that don't pass after seven days without any activity (new commits).\n  timeout: "+t.timeout+"\n\n  # Do not allow changes to the license.\n  license_lock: "+t.license_lock+"\n\n  # Allow the consensus rules (this file) to be changed.\n  consensus_lock: "+t.consensus_lock+"\n\n  # Wait for at least four days before merging any new consensus rules.\n  consensus_delay: "+t.consensus_delay+"\n\n  # Allow anyone to vote on this project, even if they've never contributed.\n  contributors_only: "+t.contributors_only+"\n\n  # Don't put any restrictions on who can vote.\n  collaborators_only: "+t.collaborators_only+"\n    ";return o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement(h.a,{text:a},o.a.createElement(p.a,{style:{marginRight:"auto",marginLeft:"auto"},variant:"outlined"},"Copy to Clipboard")),o.a.createElement(g.a,{customStyle:{padding:20,fontSize:16},language:"yaml"},a))},b=(a(10),a(549)),f=a(551),v=a(554),E=a(556),_=a(561);function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t,n=e.target,o=n.value,l=n.id;a.setState(((t={})[l]=o,t))},a.handleToggle=function(e,t){var n;a.setState(((n={})[e]=t.target.checked,n))},a.handleCopy=function(){a.setState({copied:!0})},a.handleDoubles=a.handleToggle.bind(w(a),"preventDoubles"),a.handleLabels=a.handleToggle.bind(w(a),"extraLabels"),a.handleLicense=a.handleToggle.bind(w(a),"licenseLock"),a.handleConsensus=a.handleToggle.bind(w(a),"consensusLock"),a.handleContributors=a.handleToggle.bind(w(a),"contributorsOnly"),a.handleCollaborators=a.handleToggle.bind(w(a),"collaboratorsOnly"),a.state={extraLabels:!1,preventDoubles:!0,quorum:3,threshold:.74,mergeDelay:12,delayOverride:6,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:96,contributorsOnly:!1,collaboratorsOnly:!1,template:"recommended",copied:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e="\n# Which version of the consensus rules to use\nversion: 3\n\n# Add extra labels for the vote counts and age when merging\nextra_labels: "+this.state.extraLabels+"\n\n# Don't count any vote from a user who votes for multiple options\nprevent_doubles: "+this.state.preventDoubles+"\n\npull_requests:\n\n  # At least three people should sign off on any pull request.\n  quorum: "+this.state.quorum+'\n\n  # Required percentage of "yes" votes (ignoring abstentions). It\'s a good idea to give "no" votes more power.\n  threshold: '+this.state.threshold+"\n\n  # Number of hours after last action (commit or opening the pull request) before issue can be merged\n  merge_delay: "+this.state.mergeDelay+"\n\n  # Number of votes at which the merge_delay gets ignored, assuming no negative votes.\n  delay_override: "+this.state.delayOverride+"\n\n  # Close pull requests that don't pass after seven days without any activity (new commits).\n  timeout: "+this.state.timeout+"\n\n  # Do not allow changes to the license.\n  license_lock: "+this.state.licenseLock+"\n\n  # Allow the consensus rules (this file) to be changed.\n  consensus_lock: "+this.state.consensusLock+"\n\n  # Wait for at least four days before merging any new consensus rules.\n  consensus_delay: "+this.state.consensusDelay+"\n\n  # Allow anyone to vote on this project, even if they've never contributed.\n  contributors_only: "+this.state.contributorsOnly+"\n\n  # Don't put any restrictions on who can vote.\n  collaborators_only: "+this.state.collaboratorsOnly+"\n    ";return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{style:{display:"flex",flexDirection:"column",marginTop:100,marginBottom:30},noValidate:!0,autoComplete:"off"},o.a.createElement(b.a,{component:"fieldset"},o.a.createElement(c.a,{component:"legend"},"Basic Info"),o.a.createElement(f.a,{row:!0,style:{marginBottom:10}},o.a.createElement(_.a,{title:"Add extra labels for the vote counts and age when merging",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.extraLabels,onChange:this.handleLabels,value:"extraLabels",inputProps:{"aria-label":"Extra Labels"}}),label:"Extra Labels"})),o.a.createElement(_.a,{title:"Don't count any vote from a user who votes for multiple options",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.preventDoubles,onChange:this.handleDoubles,value:"preventDoubles",inputProps:{"aria-label":"Prevent Doubles"}}),label:"Prevent Doubles"})))),o.a.createElement(b.a,{component:"fieldset"},o.a.createElement(c.a,{component:"legend"},"Pull Requests"),o.a.createElement(f.a,{row:!0,style:{marginBottom:10}},o.a.createElement(_.a,{title:"Minimum number of voters",placement:"top"},o.a.createElement(E.a,{id:"quorum",label:"Quorum",className:"",value:this.state.quorum,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(_.a,{title:"Required percentage of 'yes' votes (ignoring abstentions)",placement:"top"},o.a.createElement(E.a,{id:"threshold",label:"Threshold",className:"",value:this.state.threshold,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(_.a,{title:"Number of hours after last action (commit or opening the pull request) before issue can be merged",placement:"top"},o.a.createElement(E.a,{id:"mergeDelay",label:"Merge Delay",className:"",value:this.state.mergeDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(_.a,{title:"Number of votes at which the merge_delay gets ignored, assuming no negative votes.",placement:"top"},o.a.createElement(E.a,{id:"delayOverride",label:"Delay Override",className:"",value:this.state.delayOverride,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(_.a,{title:"Close pull requests that don't pass after seven days without any activity (new commits).",placement:"top"},o.a.createElement(E.a,{id:"timeout",label:"Timeout",className:"",value:this.state.timeout,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(_.a,{title:"Time to wait (in hours) before merging any new consensus rules.",placement:"top"},o.a.createElement(E.a,{id:"consensusDelay",label:"Consensus Delay",className:"",value:this.state.consensusDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}}))),o.a.createElement(f.a,{row:!0},o.a.createElement(_.a,{title:"Allow changes to the license",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.licenseLock,onChange:this.handleLicense,value:"licenseLock",inputProps:{"aria-label":"License Lock"}}),label:"License Lock"})),o.a.createElement(_.a,{title:"Allow the consensus rules (this file) to be changed",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.consensusLock,onChange:this.handleConsensus,value:"consensusLock",inputProps:{"aria-label":"Consensus Lock"}}),label:"Consensus Lock"})),o.a.createElement(_.a,{title:"Allow anyone to vote on this project, even if they've never contributed",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.contributorsOnly,onChange:this.handleContributors,value:"contributorsOnly",inputProps:{"aria-label":"Contributors Only"}}),label:"Contributors Only"})),o.a.createElement(_.a,{title:"Put restrictions on who can vote",placement:"top"},o.a.createElement(s.a,{control:o.a.createElement(v.a,{checked:this.state.collaboratorsOnly,onChange:this.handleCollaborators,value:"collaboratorsOnly",inputProps:{"aria-label":"Collaborators Only"}}),label:"Collaborators Only"})))),o.a.createElement(d.CopyToClipboard,{onCopy:this.handleCopy,text:e},o.a.createElement(p.a,{style:{marginTop:30,marginRight:"auto",marginLeft:"auto"},variant:"outlined"},"Copy to Clipboard"))),o.a.createElement(g.a,{customStyle:{padding:20,fontSize:16},language:"yaml"},e))},n}(o.a.Component),A=function(e){var t=e.govs,a=Object(n.useState)("default"),l=a[0],r=a[1];return o.a.createElement("div",null,o.a.createElement("form",{style:{marginBottom:40}},o.a.createElement(m.a,{align:"center",variant:"h4",style:{marginTop:130,marginBottom:40}},"Config Builder"),o.a.createElement(c.a,{component:"legend",style:{marginBottom:20}},"Government Type"),o.a.createElement(u.a,{row:!0,name:"government",value:"govType",onChange:function(e){console.log(e.target.value),r(e.target.value)}},o.a.createElement(s.a,{value:"default",control:o.a.createElement(i.a,null),label:"Recommended",checked:"default"===l}),o.a.createElement(s.a,{value:"anarchy",control:o.a.createElement(i.a,null),label:"Anarchy",checked:"anarchy"===l}),o.a.createElement(s.a,{value:"autocracy",control:o.a.createElement(i.a,null),label:"Autocracy",checked:"autocracy"===l}),o.a.createElement(s.a,{value:"consensus",control:o.a.createElement(i.a,null),label:"Consensus",checked:"consensus"===l}),o.a.createElement(s.a,{value:"democracy",control:o.a.createElement(i.a,null),label:"Democracy",checked:"democracy"===l}),o.a.createElement(s.a,{value:"meritocracy",control:o.a.createElement(i.a,null),label:"Meritocracy",checked:"meritocracy"===l}),o.a.createElement(s.a,{value:"oligarchy",control:o.a.createElement(i.a,null),label:"Oligarchy",checked:"oligarchy"===l}),o.a.createElement(s.a,{value:"chooseOwn",control:o.a.createElement(i.a,null),label:"Choose Your Own Adventure",checked:"chooseOwn"===l}))),function(){switch(l){case"anarchy":return o.a.createElement(y,{config:t.anarchy});case"autocracy":return o.a.createElement(y,{config:t.autocracy});case"consensus":return o.a.createElement(y,{config:t.consensus});case"democracy":return o.a.createElement(y,{config:t.democracy});case"meritocracy":return o.a.createElement(y,{config:t.meritocracy});case"oligarchy":return o.a.createElement(y,{config:t.oligarchy});case"chooseOwn":return o.a.createElement(C,null);default:return o.a.createElement(y,{config:t.default})}}())},k=a(517);t.default=function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,{title:"Config Builder"}),o.a.createElement(A,{govs:k}))}},277:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),o=a.n(n),l=a(106),r=a.n(l);a.d(t,"a",function(){return r.a});a(278),a(27).default.enqueue;var s=o.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,r=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,r&&l(r),!r&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return o.a.createElement(s.Consumer,null,function(e){return o.a.createElement(c,{data:t,query:a,render:n||l,staticQueryData:e})})}},278:function(e,t,a){var n;e.exports=(n=a(284))&&n.default||n},281:function(e){e.exports={data:{site:{siteMetadata:{title:"GitConsensus",description:"Automate Open Source Software Management."}}}}},282:function(e){e.exports={data:{file:{childImageSharp:{id:"41b8c7fe-8063-5fce-be64-64d0ad7a097e",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVQ4y53VTShEURgG4DvujDRDmmzGTyQrNhYypSTJrGmKJFa2CjtLdsoCZSskC4uJmqSYjRplpkSRlGSBlIV/SWS8R++pr2PuXJx6mrnnzPnO33fPWNbPkmc8+yAAfqPNQ78uHbAAB3ANV5CGWWgRv7OdAujRInAGGRcbUOYWVC2pH8ZhDKZhCeKwDTuQhF14gSeodwr6mz3xCPkQg1sIGat0LH6X7Snh8mNmQNWxCuogDG0Q5fL7oJkz0tuiT7uIB6aCNsoR46x8hXd+34NiuOFzWhyCLiHRPqErg/DAyk/44PdzznxLnOwg+1TwEFrZR7UldMBaeHNIjQYGyYhZhDnoBVyKtmO+BN/7pgOqmR5ydjrPqsUs1qHdGFT3PdEB1UndszLKWQeMvUqwfd+YsbQpOyRZGTEC6WQthxVYhWWYh0kYhQHohBrZcYQBe/jszZJzfyqF8MjXLFtAm/vj5aePeellTtpyYL2sbjj9x2RsK8cdOAyLUCnuwlJogl5ujbo4ZmANprg6K1fQLkgxr+7Em2NKiZvG4xZUvaNDTAV1sT4z+BHMGdngemjmX0ABczWoE1cEMn9rfQHbIH7oXoqHfQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png",srcSet:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/7c0ed/logo.png 200w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/647de/logo.png 400w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png 800w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/ba299/logo.png 1200w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},284:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),o=a.n(n),l=a(144);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},285:function(e,t,a){"use strict";var n=a(286),o=a(0),l=a.n(o),r=a(142),s=a(277),c=function(e){var t=e.title,a=e.description,o=e.image,c=e.pathname,u=e.article;return l.a.createElement(s.b,{query:i,render:function(e){var n=e.site.siteMetadata,s=n.defaultTitle,i=n.titleTemplate,m=n.defaultDescription,d=n.siteUrl,h=n.defaultImage,g={title:t||s,description:a||m,image:""+d+(o||h),url:""+d+(c||"/")};return l.a.createElement(r.Helmet,{title:g.title,titleTemplate:i},l.a.createElement("meta",{name:"description",content:g.description}),l.a.createElement("meta",{name:"image",content:g.image}),g.url&&l.a.createElement("meta",{property:"og:url",content:g.url}),!u?null:l.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&l.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&l.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&l.a.createElement("meta",{property:"og:image",content:g.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g.title&&l.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&l.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&l.a.createElement("meta",{name:"twitter:image",content:g.image}))},data:n})};t.a=c;var i="2395431821";c.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},286:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"GitConsensus",titleTemplate:"%s | Automate Open Source Software Management",defaultDescription:"Automate Open Source Software Management.",siteUrl:"https://www.gitconsensus.com",defaultImage:"/gitconsensus_merge_comment.png"}}}}},287:function(e,t,a){"use strict";var n=a(281),o=a(0),l=a.n(o),r=a(171),s=a(270),c=a(546),i=a(543),u=a(190),m=Object(u.a)({palette:{primary:{main:"#80d8ff"},secondary:{main:"#212121"},error:{main:"#d81b60"}}}),d=a(184),h=(a(140),a(282)),g=a(283),p=a.n(g),y=(a(21),a(542)),b=a(277),f=l.a.forwardRef(function(e,t){return l.a.createElement(y.a,Object.assign({underline:"none",component:b.a,ref:t},e))}),v=a(544),E=a(548),_=a(547),w=Object(d.a)(function(e){return{root:{flexGrow:1},link:{display:"inline-flex",alignItems:"center",flexGrow:1},title:{marginLeft:e.spacing(1)},buttonInstall:{marginLeft:e.spacing(1)},avatar:{padding:e.spacing(2.2)}}}),C=function(e){var t=e.siteTitle,a=h.data,n=w();return l.a.createElement("div",{className:n.root},l.a.createElement(v.a,{className:n.appBar,position:"fixed"},l.a.createElement(c.a,{maxWidth:"md"},l.a.createElement(_.a,{disableGutters:!0},l.a.createElement(f,{className:n.link,to:"/",color:"secondary"},l.a.createElement(p.a,{className:n.avatar,fluid:a.file.childImageSharp.fluid,alt:"logo"}),l.a.createElement(i.a,{variant:"h6",className:n.title},t)),l.a.createElement(E.a,{component:"button",variant:"outlined",href:"/configBuilder",color:"secondary"},"Config Builder"),l.a.createElement(E.a,{component:"button",variant:"outlined",href:"https://github.com/apps/gitconsensus",color:"secondary",className:n.buttonInstall},"Install On GitHub")))))};C.defaultProps={siteTitle:"",description:""};var A=C,k=Object(d.a)(function(e){return{footer:{paddingTop:e.spacing(2)},main:{paddingBottom:e.spacing(2)}}});t.a=function(e){var t=e.children,a=n.data,o=k();return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{theme:m},l.a.createElement(s.a,null),l.a.createElement(A,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description}),l.a.createElement(c.a,{maxWidth:"md"},l.a.createElement("main",{className:o.main},t),l.a.createElement("footer",{className:o.footer},l.a.createElement(i.a,{variant:"body1",gutterBottom:!0},"© ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"https://projects.tedivm.com"},"Robert Hafner")),l.a.createElement(i.a,{variant:"body1",gutterBottom:!0},"Homepage built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," by ",l.a.createElement("a",{href:"https://www.alilynne.com"},"AliLynne"),".")))))}},517:function(e){e.exports={default:{prevent_doubles:!0,extra_labels:!1,quorum:3,threshold:.74,merge_delay:12,delay_override:6,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:96,contributors_only:!1,collaborators_only:!1},democracy:{prevent_doubles:!0,extra_labels:!1,quorum:3,threshold:.51,merge_delay:12,delay_override:6,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:96,contributors_only:!1,collaborators_only:!1},anarchy:{prevent_doubles:!1,extra_labels:!1,quorum:1,threshold:.01,merge_delay:1,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:1,contributors_only:!1,collaborators_only:!1},autocracy:{prevent_doubles:!0,extra_labels:!1,quorum:1,threshold:1,merge_delay:0,timeout:168,license_lock:!0,consensus_lock:!0,consensus_delay:0,contributors_only:!1,collaborators_only:!1},consensus:{prevent_doubles:!0,extra_labels:!1,quorum:3,threshold:1,merge_delay:12,delay_override:6,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:96,contributors_only:!1,collaborators_only:!1},meritocracy:{prevent_doubles:!0,extra_labels:!1,quorum:3,threshold:.74,merge_delay:12,delay_override:6,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:96,contributors_only:!0,collaborators_only:!1},oligarchy:{prevent_doubles:!0,extra_labels:!1,quorum:3,threshold:.74,merge_delay:12,delay_override:6,timeout:168,license_lock:!0,consensus_lock:!1,consensus_delay:96,contributors_only:!1,collaborators_only:!0}}}}]);
//# sourceMappingURL=component---src-pages-config-builder-js-5fa469c1179c5183ebb9.js.map