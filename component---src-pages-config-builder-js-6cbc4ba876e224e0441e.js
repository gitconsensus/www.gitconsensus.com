(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{267:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(287),l=a(285),s=(a(10),a(550)),i=a(314),c=a(542),m=a(543),u=a(547),d=a(545),h=a(544),g=a(552),p=a(548),b=a(553),f=a(537);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t,n=e.target,o=n.value,r=n.id;a.setState(((t={})[r]=o,t))},a.handleToggle=function(e,t){var n;a.setState(((n={})[e]=t.target.checked,n))},a.handleCopy=function(){a.setState({copied:!0})},a.handleTemplate=function(e){switch(console.log(e.target.value),e.target.value){case"anarchy":a.setState({version:3,extraLabels:!1,preventDoubles:!1,quorum:1,threshold:.01,mergeDelay:1,delayOverride:!1,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:1,contributorsOnly:!1,collaboratorsOnly:!1,template:"anarchy"});break;case"autocracy":a.setState({version:3,extraLabels:!1,preventDoubles:!0,quorum:1,threshold:.01,mergeDelay:1,delayOverride:!1,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:1,contributorsOnly:!1,collaboratorsOnly:!1,template:"autocracy"});break;default:a.setState({version:3,extraLabels:!1,preventDoubles:!0,quorum:3,threshold:.74,mergeDelay:12,delayOverride:6,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:96,contributorsOnly:!1,collaboratorsOnly:!1,template:"recommended"})}},a.handleDoubles=a.handleToggle.bind(y(a),"preventDoubles"),a.handleLabels=a.handleToggle.bind(y(a),"extraLabels"),a.handleLicense=a.handleToggle.bind(y(a),"licenseLock"),a.handleConsensus=a.handleToggle.bind(y(a),"consensusLock"),a.handleContributors=a.handleToggle.bind(y(a),"contributorsOnly"),a.handleCollaborators=a.handleToggle.bind(y(a),"collaboratorsOnly"),a.state={extraLabels:!1,preventDoubles:!0,quorum:3,threshold:.74,mergeDelay:12,delayOverride:6,timeout:168,licenseLock:!0,consensusLock:!1,consensusDelay:96,contributorsOnly:!1,collaboratorsOnly:!1,template:"recommended",copied:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e="\n    # Which version of the consensus rules to use\n    version: 3\n\n    # Add extra labels for the vote counts and age when merging\n    extra_labels: "+this.state.extraLabels+"\n\n    # Don't count any vote from a user who votes for multiple options\n    prevent_doubles: "+this.state.preventDoubles+"\n\n    pull_requests:\n\n      # At least three people should sign off on any pull request.\n      quorum: "+this.state.quorum+'\n\n      # Required percentage of "yes" votes (ignoring abstentions). It\'s a good idea to give "no" votes more power.\n      threshold: '+this.state.threshold+"\n\n      # Number of hours after last action (commit or opening the pull request) before issue can be merged\n      merge_delay: "+this.state.mergeDelay+"\n\n      # Number of votes at which the merge_delay gets ignored, assuming no negative votes.\n      delay_override: "+this.state.delayOverride+"\n\n      # Close pull requests that don't pass after seven days without any activity (new commits).\n      timeout: "+this.state.timeout+"\n\n      # Do not allow changes to the license.\n      license_lock: "+this.state.licenseLock+"\n\n      # Allow the consensus rules (this file) to be changed.\n      consensus_lock: "+this.state.consensusLock+"\n\n      # Wait for at least four days before merging any new consensus rules.\n      consensus_delay: "+this.state.consensusDelay+"\n\n      # Allow anyone to vote on this project, even if they've never contributed.\n      contributors_only: "+this.state.contributorsOnly+"\n\n      # Don't put any restrictions on who can vote.\n      collaborators_only: "+this.state.collaboratorsOnly+"\n    ";return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{style:{display:"flex",flexDirection:"column",marginTop:100,marginBottom:30},noValidate:!0,autoComplete:"off"},o.a.createElement(f.a,{align:"center",variant:"h4",style:{marginBottom:30}},"Config Builder"),o.a.createElement(m.a,{component:"fieldset"},o.a.createElement(h.a,{component:"legend"},"Basic Info"),o.a.createElement(d.a,{row:!0,style:{marginBottom:10}},o.a.createElement(b.a,{title:"Add extra labels for the vote counts and age when merging",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.extraLabels,onChange:this.handleLabels,value:"extraLabels",inputProps:{"aria-label":"Extra Labels"}}),label:"Extra Labels"})),o.a.createElement(b.a,{title:"Don't count any vote from a user who votes for multiple options",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.preventDoubles,onChange:this.handleDoubles,value:"preventDoubles",inputProps:{"aria-label":"Prevent Doubles"}}),label:"Prevent Doubles"})))),o.a.createElement(m.a,{component:"fieldset"},o.a.createElement(h.a,{component:"legend"},"Pull Requests"),o.a.createElement(d.a,{row:!0,style:{marginBottom:10}},o.a.createElement(b.a,{title:"Minimum number of voters",placement:"top"},o.a.createElement(p.a,{id:"quorum",label:"Quorum",className:"",value:this.state.quorum,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Required percentage of 'yes' votes (ignoring abstentions)",placement:"top"},o.a.createElement(p.a,{id:"threshold",label:"Threshold",className:"",value:this.state.threshold,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Number of hours after last action (commit or opening the pull request) before issue can be merged",placement:"top"},o.a.createElement(p.a,{id:"mergeDelay",label:"Merge Delay",className:"",value:this.state.mergeDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Number of votes at which the merge_delay gets ignored, assuming no negative votes.",placement:"top"},o.a.createElement(p.a,{id:"delayOverride",label:"Delay Override",className:"",value:this.state.delayOverride,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Close pull requests that don't pass after seven days without any activity (new commits).",placement:"top"},o.a.createElement(p.a,{id:"timeout",label:"Timeout",className:"",value:this.state.timeout,onChange:this.handleChange,margin:"normal",style:{marginRight:10}})),o.a.createElement(b.a,{title:"Time to wait (in hours) before merging any new consensus rules.",placement:"top"},o.a.createElement(p.a,{id:"consensusDelay",label:"Consensus Delay",className:"",value:this.state.consensusDelay,onChange:this.handleChange,margin:"normal",style:{marginRight:10}}))),o.a.createElement(d.a,{row:!0},o.a.createElement(b.a,{title:"Allow changes to the license",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.licenseLock,onChange:this.handleLicense,value:"licenseLock",inputProps:{"aria-label":"License Lock"}}),label:"License Lock"})),o.a.createElement(b.a,{title:"Allow the consensus rules (this file) to be changed",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.consensusLock,onChange:this.handleConsensus,value:"consensusLock",inputProps:{"aria-label":"Consensus Lock"}}),label:"Consensus Lock"})),o.a.createElement(b.a,{title:"Allow anyone to vote on this project, even if they've never contributed",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.contributorsOnly,onChange:this.handleContributors,value:"contributorsOnly",inputProps:{"aria-label":"Contributors Only"}}),label:"Contributors Only"})),o.a.createElement(b.a,{title:"Put restrictions on who can vote",placement:"top"},o.a.createElement(u.a,{control:o.a.createElement(g.a,{checked:this.state.collaboratorsOnly,onChange:this.handleCollaborators,value:"collaboratorsOnly",inputProps:{"aria-label":"Collaborators Only"}}),label:"Collaborators Only"})))),o.a.createElement(i.CopyToClipboard,{onCopy:this.handleCopy,text:e},o.a.createElement(c.a,{style:{marginTop:30,marginRight:"auto",marginLeft:"auto"},variant:"outlined"},"Copy to Clipboard"))),o.a.createElement(s.a,{customStyle:{padding:0,fontSize:16},language:"yaml"},e))},n}(o.a.Component);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,{title:"Config Builder"}),o.a.createElement(v,null))}},276:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),o=a.n(n),r=a(106),l=a.n(r);a.d(t,"a",function(){return l.a});a(277),a(27).default.enqueue;var s=o.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,l&&r(l),!l&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return o.a.createElement(s.Consumer,null,function(e){return o.a.createElement(i,{data:t,query:a,render:n||r,staticQueryData:e})})}},277:function(e,t,a){var n;e.exports=(n=a(284))&&n.default||n},282:function(e){e.exports={data:{site:{siteMetadata:{title:"GitConsensus",description:"Automate Open Source Software Management."}}}}},283:function(e){e.exports={data:{file:{childImageSharp:{id:"41b8c7fe-8063-5fce-be64-64d0ad7a097e",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvUlEQVQ4y53VTShEURgG4DvujDRDmmzGTyQrNhYypSTJrGmKJFa2CjtLdsoCZSskC4uJmqSYjRplpkSRlGSBlIV/SWS8R++pr2PuXJx6mrnnzPnO33fPWNbPkmc8+yAAfqPNQ78uHbAAB3ANV5CGWWgRv7OdAujRInAGGRcbUOYWVC2pH8ZhDKZhCeKwDTuQhF14gSeodwr6mz3xCPkQg1sIGat0LH6X7Snh8mNmQNWxCuogDG0Q5fL7oJkz0tuiT7uIB6aCNsoR46x8hXd+34NiuOFzWhyCLiHRPqErg/DAyk/44PdzznxLnOwg+1TwEFrZR7UldMBaeHNIjQYGyYhZhDnoBVyKtmO+BN/7pgOqmR5ydjrPqsUs1qHdGFT3PdEB1UndszLKWQeMvUqwfd+YsbQpOyRZGTEC6WQthxVYhWWYh0kYhQHohBrZcYQBe/jszZJzfyqF8MjXLFtAm/vj5aePeellTtpyYL2sbjj9x2RsK8cdOAyLUCnuwlJogl5ujbo4ZmANprg6K1fQLkgxr+7Em2NKiZvG4xZUvaNDTAV1sT4z+BHMGdngemjmX0ABczWoE1cEMn9rfQHbIH7oXoqHfQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png",srcSet:"/static/541c168ba3f7b5c6d3417f37d8fa0c5c/7c0ed/logo.png 200w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/647de/logo.png 400w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/af144/logo.png 800w,\n/static/541c168ba3f7b5c6d3417f37d8fa0c5c/ba299/logo.png 1200w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},284:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),o=a.n(n),r=a(144);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},285:function(e,t,a){"use strict";var n=a(286),o=a(0),r=a.n(o),l=a(142),s=a(276),i=function(e){var t=e.title,a=e.description,o=e.image,i=e.pathname,m=e.article;return r.a.createElement(s.b,{query:c,render:function(e){var n=e.site.siteMetadata,s=n.defaultTitle,c=n.titleTemplate,u=n.defaultDescription,d=n.siteUrl,h=n.defaultImage,g={title:t||s,description:a||u,image:""+d+(o||h),url:""+d+(i||"/")};return r.a.createElement(l.Helmet,{title:g.title,titleTemplate:c},r.a.createElement("meta",{name:"description",content:g.description}),r.a.createElement("meta",{name:"image",content:g.image}),g.url&&r.a.createElement("meta",{property:"og:url",content:g.url}),!m?null:r.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&r.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&r.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&r.a.createElement("meta",{property:"og:image",content:g.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g.title&&r.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&r.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&r.a.createElement("meta",{name:"twitter:image",content:g.image}))},data:n})};t.a=i;var c="2395431821";i.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},286:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"GitConsensus",titleTemplate:"%s | Automate Open Source Software Management",defaultDescription:"Automate Open Source Software Management.",siteUrl:"https://www.gitconsensus.com",defaultImage:"/gitconsensus_merge_comment.png"}}}}},287:function(e,t,a){"use strict";var n=a(282),o=a(0),r=a.n(o),l=a(171),s=a(270),i=a(540),c=a(537),m=a(190),u=Object(m.a)({palette:{primary:{main:"#80d8ff"},secondary:{main:"#212121"},error:{main:"#d81b60"}}}),d=a(184),h=(a(140),a(283)),g=a(288),p=a.n(g),b=(a(21),a(536)),f=a(276),y=r.a.forwardRef(function(e,t){return r.a.createElement(b.a,Object.assign({underline:"none",component:f.a,ref:t},e))}),v=a(538),E=a(542),w=a(541),C=Object(d.a)(function(e){return{root:{flexGrow:1},link:{display:"inline-flex",alignItems:"center",flexGrow:1},title:{marginLeft:e.spacing(1)},buttonInstall:{marginLeft:e.spacing(1)},avatar:{padding:e.spacing(2.2)}}}),A=function(e){var t=e.siteTitle,a=h.data,n=C();return r.a.createElement("div",{className:n.root},r.a.createElement(v.a,{className:n.appBar,position:"fixed"},r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(w.a,{disableGutters:!0},r.a.createElement(y,{className:n.link,to:"/",color:"secondary"},r.a.createElement(p.a,{className:n.avatar,fluid:a.file.childImageSharp.fluid,alt:"logo"}),r.a.createElement(c.a,{variant:"h6",className:n.title},t)),r.a.createElement(E.a,{component:"button",variant:"outlined",href:"/configBuilder",color:"secondary"},"Config Builder"),r.a.createElement(E.a,{component:"button",variant:"outlined",href:"https://github.com/apps/gitconsensus",color:"secondary",className:n.buttonInstall},"Install On GitHub")))))};A.defaultProps={siteTitle:"",description:""};var L=A,D=Object(d.a)(function(e){return{footer:{paddingTop:e.spacing(2)},main:{paddingBottom:e.spacing(2)}}});t.a=function(e){var t=e.children,a=n.data,o=D();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{theme:u},r.a.createElement(s.a,null),r.a.createElement(L,{siteTitle:a.site.siteMetadata.title,description:a.site.siteMetadata.description}),r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement("main",{className:o.main},t),r.a.createElement("footer",{className:o.footer},r.a.createElement(c.a,{variant:"body1",gutterBottom:!0},"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://projects.tedivm.com"},"Robert Hafner")),r.a.createElement(c.a,{variant:"body1",gutterBottom:!0},"Homepage built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," by ",r.a.createElement("a",{href:"https://www.alilynne.com"},"AliLynne"),".")))))}}}]);
//# sourceMappingURL=component---src-pages-config-builder-js-6cbc4ba876e224e0441e.js.map