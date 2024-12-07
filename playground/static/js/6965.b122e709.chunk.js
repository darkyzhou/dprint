"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[6965],{6965:function(e,n,t){t.r(n),t.d(n,{setupMode:function(){return Dn},setupMode1:function(){return Fn}});var r=t(136),i=t(9388),o=t(5671),a=t(3144),s=t(7762),u=t(6599),c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,f=Object.prototype.hasOwnProperty,l={};c(l,"__esModule",{value:!0}),function(e,n,t){if(n&&"object"===typeof n||"function"===typeof n){var r,i=(0,s.Z)(g(n));try{var o=function(){var i=r.value;f.call(e,i)||"default"===i||c(e,i,{get:function(){return n[i]},enumerable:!(t=d(n,i))||t.enumerable})};for(i.s();!(r=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}}}(l,u);var h,v,p,m,w,y,_,k,b,E,x,C,I,A,R,S,P,T,F,D,L,j,M,O,N,Z,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,ee,ne,te,re,ie,oe,ae,se,ue,ce=function(){function e(n){var t=this;(0,o.Z)(this,e),this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return(0,a.Z)(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}},{key:"_checkIfIdle",value:function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())}},{key:"_getClient",value:function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,n=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this._getClient().then((function(n){e=n})).then((function(e){if(n._worker)return n._worker.withSyncedResources(r)})).then((function(n){return e}))}}]),e}();(v=h||(h={})).MIN_VALUE=-2147483648,v.MAX_VALUE=2147483647,(m=p||(p={})).MIN_VALUE=0,m.MAX_VALUE=2147483647,(y=w||(w={})).create=function(e,n){return e===Number.MAX_VALUE&&(e=p.MAX_VALUE),n===Number.MAX_VALUE&&(n=p.MAX_VALUE),{line:e,character:n}},y.is=function(e){var n=e;return dn.objectLiteral(n)&&dn.uinteger(n.line)&&dn.uinteger(n.character)},(k=_||(_={})).create=function(e,n,t,r){if(dn.uinteger(e)&&dn.uinteger(n)&&dn.uinteger(t)&&dn.uinteger(r))return{start:w.create(e,n),end:w.create(t,r)};if(w.is(e)&&w.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")},k.is=function(e){var n=e;return dn.objectLiteral(n)&&w.is(n.start)&&w.is(n.end)},(E=b||(b={})).create=function(e,n){return{uri:e,range:n}},E.is=function(e){var n=e;return dn.defined(n)&&_.is(n.range)&&(dn.string(n.uri)||dn.undefined(n.uri))},(C=x||(x={})).create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},C.is=function(e){var n=e;return dn.defined(n)&&_.is(n.targetRange)&&dn.string(n.targetUri)&&(_.is(n.targetSelectionRange)||dn.undefined(n.targetSelectionRange))&&(_.is(n.originSelectionRange)||dn.undefined(n.originSelectionRange))},(A=I||(I={})).create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},A.is=function(e){var n=e;return dn.numberRange(n.red,0,1)&&dn.numberRange(n.green,0,1)&&dn.numberRange(n.blue,0,1)&&dn.numberRange(n.alpha,0,1)},(S=R||(R={})).create=function(e,n){return{range:e,color:n}},S.is=function(e){var n=e;return _.is(n.range)&&I.is(n.color)},(T=P||(P={})).create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},T.is=function(e){var n=e;return dn.string(n.label)&&(dn.undefined(n.textEdit)||B.is(n))&&(dn.undefined(n.additionalTextEdits)||dn.typedArray(n.additionalTextEdits,B.is))},(D=F||(F={})).Comment="comment",D.Imports="imports",D.Region="region",(j=L||(L={})).create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return dn.defined(t)&&(o.startCharacter=t),dn.defined(r)&&(o.endCharacter=r),dn.defined(i)&&(o.kind=i),o},j.is=function(e){var n=e;return dn.uinteger(n.startLine)&&dn.uinteger(n.startLine)&&(dn.undefined(n.startCharacter)||dn.uinteger(n.startCharacter))&&(dn.undefined(n.endCharacter)||dn.uinteger(n.endCharacter))&&(dn.undefined(n.kind)||dn.string(n.kind))},(O=M||(M={})).create=function(e,n){return{location:e,message:n}},O.is=function(e){var n=e;return dn.defined(n)&&b.is(n.location)&&dn.string(n.message)},(Z=N||(N={})).Error=1,Z.Warning=2,Z.Information=3,Z.Hint=4,(W=U||(U={})).Unnecessary=1,W.Deprecated=2,(V||(V={})).is=function(e){var n=e;return void 0!==n&&null!==n&&dn.string(n.href)},(K=H||(H={})).create=function(e,n,t,r,i,o){var a={range:e,message:n};return dn.defined(t)&&(a.severity=t),dn.defined(r)&&(a.code=r),dn.defined(i)&&(a.source=i),dn.defined(o)&&(a.relatedInformation=o),a},K.is=function(e){var n,t=e;return dn.defined(t)&&_.is(t.range)&&dn.string(t.message)&&(dn.number(t.severity)||dn.undefined(t.severity))&&(dn.integer(t.code)||dn.string(t.code)||dn.undefined(t.code))&&(dn.undefined(t.codeDescription)||dn.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(dn.string(t.source)||dn.undefined(t.source))&&(dn.undefined(t.relatedInformation)||dn.typedArray(t.relatedInformation,M.is))},(X=z||(z={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return dn.defined(t)&&t.length>0&&(i.arguments=t),i},X.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.title)&&dn.string(n.command)},($=B||(B={})).replace=function(e,n){return{range:e,newText:n}},$.insert=function(e,n){return{range:{start:e,end:e},newText:n}},$.del=function(e){return{range:e,newText:""}},$.is=function(e){var n=e;return dn.objectLiteral(n)&&dn.string(n.newText)&&_.is(n.range)},(Q=q||(q={})).create=function(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r},Q.is=function(e){var n=e;return void 0!==n&&dn.objectLiteral(n)&&dn.string(n.label)&&(dn.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(dn.string(n.description)||void 0===n.description)},(G||(G={})).is=function(e){return"string"===typeof e},(Y=J||(J={})).replace=function(e,n,t){return{range:e,newText:n,annotationId:t}},Y.insert=function(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}},Y.del=function(e,n){return{range:e,newText:"",annotationId:n}},Y.is=function(e){var n=e;return B.is(n)&&(q.is(n.annotationId)||G.is(n.annotationId))},(ne=ee||(ee={})).create=function(e,n){return{textDocument:e,edits:n}},ne.is=function(e){var n=e;return dn.defined(n)&&he.is(n.textDocument)&&Array.isArray(n.edits)},(re=te||(te={})).create=function(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},re.is=function(e){var n=e;return n&&"create"===n.kind&&dn.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||dn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||dn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(oe=ie||(ie={})).create=function(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i},oe.is=function(e){var n=e;return n&&"rename"===n.kind&&dn.string(n.oldUri)&&dn.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||dn.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||dn.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(se=ae||(ae={})).create=function(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r},se.is=function(e){var n=e;return n&&"delete"===n.kind&&dn.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||dn.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||dn.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||G.is(n.annotationId))},(ue||(ue={})).is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return dn.string(e.kind)?te.is(e)||ie.is(e)||ae.is(e):ee.is(e)})))};var de,ge,fe,le,he,ve,pe,me,we,ye,_e,ke,be,Ee,xe,Ce,Ie,Ae,Re,Se,Pe,Te,Fe,De,Le,je,Me,Oe,Ne,Ze,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,en,nn,tn,rn,on,an,sn,un=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=B.insert(e,n):G.is(t)?(i=t,r=J.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=J.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=B.replace(e,n):G.is(t)?(i=t,r=J.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=J.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=B.del(e):G.is(n)?(r=n,t=J.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=J.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),cn=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(G.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new cn(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(ee.is(e)){var t=new un(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new un(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(he.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new un(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new un(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new cn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(q.is(n)||G.is(n)?r=n:t=n,void 0===r?i=te.create(e,t):(o=G.is(r)?r:this._changeAnnotations.manage(r),i=te.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(q.is(t)||G.is(t)?i=t:r=t,void 0===i?o=ie.create(e,n,r):(a=G.is(i)?i:this._changeAnnotations.manage(i),o=ie.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(q.is(n)||G.is(n)?r=n:t=n,void 0===r?i=ae.create(e,t):(o=G.is(r)?r:this._changeAnnotations.manage(r),i=ae.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(ge=de||(de={})).create=function(e){return{uri:e}},ge.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)},(le=fe||(fe={})).create=function(e,n){return{uri:e,version:n}},le.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&dn.integer(n.version)},(ve=he||(he={})).create=function(e,n){return{uri:e,version:n}},ve.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&(null===n.version||dn.integer(n.version))},(me=pe||(pe={})).create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},me.is=function(e){var n=e;return dn.defined(n)&&dn.string(n.uri)&&dn.string(n.languageId)&&dn.integer(n.version)&&dn.string(n.text)},(ye=we||(we={})).PlainText="plaintext",ye.Markdown="markdown",function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(we||(we={})),(_e||(_e={})).is=function(e){var n=e;return dn.objectLiteral(e)&&we.is(n.kind)&&dn.string(n.value)},(be=ke||(ke={})).Text=1,be.Method=2,be.Function=3,be.Constructor=4,be.Field=5,be.Variable=6,be.Class=7,be.Interface=8,be.Module=9,be.Property=10,be.Unit=11,be.Value=12,be.Enum=13,be.Keyword=14,be.Snippet=15,be.Color=16,be.File=17,be.Reference=18,be.Folder=19,be.EnumMember=20,be.Constant=21,be.Struct=22,be.Event=23,be.Operator=24,be.TypeParameter=25,(xe=Ee||(Ee={})).PlainText=1,xe.Snippet=2,(Ce||(Ce={})).Deprecated=1,(Ae=Ie||(Ie={})).create=function(e,n,t){return{newText:e,insert:n,replace:t}},Ae.is=function(e){var n=e;return n&&dn.string(n.newText)&&_.is(n.insert)&&_.is(n.replace)},(Se=Re||(Re={})).asIs=1,Se.adjustIndentation=2,(Pe||(Pe={})).create=function(e){return{label:e}},(Te||(Te={})).create=function(e,n){return{items:e||[],isIncomplete:!!n}},(De=Fe||(Fe={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},De.is=function(e){var n=e;return dn.string(n)||dn.objectLiteral(n)&&dn.string(n.language)&&dn.string(n.value)},(Le||(Le={})).is=function(e){var n=e;return!!n&&dn.objectLiteral(n)&&(_e.is(n.contents)||Fe.is(n.contents)||dn.typedArray(n.contents,Fe.is))&&(void 0===e.range||_.is(e.range))},(je||(je={})).create=function(e,n){return n?{label:e,documentation:n}:{label:e}},(Me||(Me={})).create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return dn.defined(n)&&(i.documentation=n),dn.defined(t)?i.parameters=t:i.parameters=[],i},(Ne=Oe||(Oe={})).Text=1,Ne.Read=2,Ne.Write=3,(Ze||(Ze={})).create=function(e,n){var t={range:e};return dn.number(n)&&(t.kind=n),t},(We=Ue||(Ue={})).File=1,We.Module=2,We.Namespace=3,We.Package=4,We.Class=5,We.Method=6,We.Property=7,We.Field=8,We.Constructor=9,We.Enum=10,We.Interface=11,We.Function=12,We.Variable=13,We.Constant=14,We.String=15,We.Number=16,We.Boolean=17,We.Array=18,We.Object=19,We.Key=20,We.Null=21,We.EnumMember=22,We.Struct=23,We.Event=24,We.Operator=25,We.TypeParameter=26,(Ve||(Ve={})).Deprecated=1,(He||(He={})).create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o},(ze=Ke||(Ke={})).create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},ze.is=function(e){var n=e;return n&&dn.string(n.name)&&dn.number(n.kind)&&_.is(n.range)&&_.is(n.selectionRange)&&(void 0===n.detail||dn.string(n.detail))&&(void 0===n.deprecated||dn.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))},(Be=Xe||(Xe={})).Empty="",Be.QuickFix="quickfix",Be.Refactor="refactor",Be.RefactorExtract="refactor.extract",Be.RefactorInline="refactor.inline",Be.RefactorRewrite="refactor.rewrite",Be.Source="source",Be.SourceOrganizeImports="source.organizeImports",Be.SourceFixAll="source.fixAll",(qe=$e||($e={})).create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},qe.is=function(e){var n=e;return dn.defined(n)&&dn.typedArray(n.diagnostics,H.is)&&(void 0===n.only||dn.typedArray(n.only,dn.string))},(Ge=Qe||(Qe={})).create=function(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):z.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r},Ge.is=function(e){var n=e;return n&&dn.string(n.title)&&(void 0===n.diagnostics||dn.typedArray(n.diagnostics,H.is))&&(void 0===n.kind||dn.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||z.is(n.command))&&(void 0===n.isPreferred||dn.boolean(n.isPreferred))&&(void 0===n.edit||ue.is(n.edit))},(Ye=Je||(Je={})).create=function(e,n){var t={range:e};return dn.defined(n)&&(t.data=n),t},Ye.is=function(e){var n=e;return dn.defined(n)&&_.is(n.range)&&(dn.undefined(n.command)||z.is(n.command))},(nn=en||(en={})).create=function(e,n){return{tabSize:e,insertSpaces:n}},nn.is=function(e){var n=e;return dn.defined(n)&&dn.uinteger(n.tabSize)&&dn.boolean(n.insertSpaces)},(rn=tn||(tn={})).create=function(e,n,t){return{range:e,target:n,data:t}},rn.is=function(e){var n=e;return dn.defined(n)&&_.is(n.range)&&(dn.undefined(n.target)||dn.string(n.target))},(an=on||(on={})).create=function(e,n){return{range:e,parent:n}},an.is=function(e){var n=e;return void 0!==n&&_.is(n.range)&&(void 0===n.parent||an.is(n.parent))},function(e){function n(e,t){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);n(i,t),n(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,n,t,r){return new gn(e,n,t,r)},e.is=function(e){var n=e;return!!(dn.defined(n)&&dn.string(n.uri)&&(dn.undefined(n.languageId)||dn.string(n.languageId))&&dn.uinteger(n.lineCount)&&dn.func(n.getText)&&dn.func(n.positionAt)&&dn.func(n.offsetAt))},e.applyEdits=function(e,t){for(var r=e.getText(),i=n(t,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(sn||(sn={}));var dn,gn=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return w.create(0,e);for(;t<r;){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var o=t-1;return w.create(o,e-n[o])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.numberRange=function(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r},e.integer=function(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(dn||(dn={}));var fn=function(){function e(n,t){(0,o.Z)(this,e),this._worker=n,this._triggerCharacters=t}return(0,a.Z)(e,[{key:"triggerCharacters",get:function(){return this._triggerCharacters}},{key:"provideCompletionItems",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),ln(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new l.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n,t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:vn(e.kind)};return e.textEdit&&("undefined"!==typeof(t=e.textEdit).insert&&"undefined"!==typeof t.replace?r.range={insert:hn(e.textEdit.insert),replace:hn(e.textEdit.replace)}:r.range=hn(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(pn)),e.insertTextFormat===Ee.Snippet&&(r.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))}}]),e}();function ln(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function hn(e){if(e)return new l.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function vn(e){var n=l.languages.CompletionItemKind;switch(e){case ke.Text:return n.Text;case ke.Method:return n.Method;case ke.Function:return n.Function;case ke.Constructor:return n.Constructor;case ke.Field:return n.Field;case ke.Variable:return n.Variable;case ke.Class:return n.Class;case ke.Interface:return n.Interface;case ke.Module:return n.Module;case ke.Property:return n.Property;case ke.Unit:return n.Unit;case ke.Value:return n.Value;case ke.Enum:return n.Enum;case ke.Keyword:return n.Keyword;case ke.Snippet:return n.Snippet;case ke.Color:return n.Color;case ke.File:return n.File;case ke.Reference:return n.Reference}return n.Property}function pn(e){if(e)return{range:hn(e.range),text:e.newText}}var mn=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideHover",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),ln(n))})).then((function(e){if(e)return{range:hn(e.range),contents:yn(e.contents)}}))}}]),e}();function wn(e){return"string"===typeof e?{value:e}:(n=e)&&"object"===typeof n&&"string"===typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function yn(e){if(e)return Array.isArray(e)?e.map(wn):[wn(e)]}var _n=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideDocumentHighlights",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),ln(n))})).then((function(e){if(e)return e.map((function(e){return{range:hn(e.range),kind:kn(e.kind)}}))}))}}]),e}();function kn(e){switch(e){case Oe.Read:return l.languages.DocumentHighlightKind.Read;case Oe.Write:return l.languages.DocumentHighlightKind.Write;case Oe.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}var bn=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideRenameEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),ln(n),t)})).then((function(e){return function(e){if(!e||!e.changes)return;var n=[];for(var t in e.changes){var r,i=l.Uri.parse(t),o=(0,s.Z)(e.changes[t]);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.push({resource:i,edit:{range:hn(a.range),text:a.newText}})}}catch(u){o.e(u)}finally{o.f()}}return{edits:n}}(e)}))}}]),e}();var En=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideDocumentSymbols",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:xn(e.kind),range:hn(e.location.range),selectionRange:hn(e.location.range),tags:[]}}))}))}}]),e}();function xn(e){var n=l.languages.SymbolKind;switch(e){case Ue.File:return n.Array;case Ue.Module:return n.Module;case Ue.Namespace:return n.Namespace;case Ue.Package:return n.Package;case Ue.Class:return n.Class;case Ue.Method:return n.Method;case Ue.Property:return n.Property;case Ue.Field:return n.Field;case Ue.Constructor:return n.Constructor;case Ue.Enum:return n.Enum;case Ue.Interface:return n.Interface;case Ue.Function:return n.Function;case Ue.Variable:return n.Variable;case Ue.Constant:return n.Constant;case Ue.String:return n.String;case Ue.Number:return n.Number;case Ue.Boolean:return n.Boolean;case Ue.Array:return n.Array}return n.Function}var Cn=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideLinks",value:function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentLinks(t.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:hn(e.range),url:e.target}}))}}))}}]),e}(),In=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideDocumentFormattingEdits",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,Rn(n)).then((function(e){if(e&&0!==e.length)return e.map(pn)}))}))}}]),e}(),An=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideDocumentRangeFormattingEdits",value:function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(n),Rn(t)).then((function(e){if(e&&0!==e.length)return e.map(pn)}))}))}}]),e}();function Rn(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Sn=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideFoldingRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=function(e){switch(e){case F.Comment:return l.languages.FoldingRangeKind.Comment;case F.Imports:return l.languages.FoldingRangeKind.Imports;case F.Region:return l.languages.FoldingRangeKind.Region}return}(e.kind)),n}))}))}}]),e}();var Pn=function(){function e(n){(0,o.Z)(this,e),this._worker=n}return(0,a.Z)(e,[{key:"provideSelectionRanges",value:function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(ln))})).then((function(e){if(e)return e.map((function(e){for(var n=[];e;)n.push({range:hn(e.range)}),e=e.parent;return n}))}))}}]),e}(),Tn=function(e){(0,r.Z)(t,e);var n=(0,i.Z)(t);function t(e){return(0,o.Z)(this,t),n.call(this,e,[".",":","<",'"',"=","/"])}return(0,a.Z)(t)}(fn);function Fn(e){var n=new ce(e),t=function(){return n.getLanguageServiceWorker.apply(n,arguments)},r=e.languageId;l.languages.registerCompletionItemProvider(r,new Tn(t)),l.languages.registerHoverProvider(r,new mn(t)),l.languages.registerDocumentHighlightProvider(r,new _n(t)),l.languages.registerLinkProvider(r,new Cn(t)),l.languages.registerFoldingRangeProvider(r,new Sn(t)),l.languages.registerDocumentSymbolProvider(r,new En(t)),l.languages.registerSelectionRangeProvider(r,new Pn(t)),l.languages.registerRenameProvider(r,new bn(t)),"html"===r&&(l.languages.registerDocumentFormattingEditProvider(r,new In(t)),l.languages.registerDocumentRangeFormattingEditProvider(r,new An(t)))}function Dn(e){var n=[],t=[],r=new ce(e);n.push(r);var i=function(){return r.getLanguageServiceWorker.apply(r,arguments)};return function(){var n=e.languageId,r=e.modeConfiguration;jn(t),r.completionItems&&t.push(l.languages.registerCompletionItemProvider(n,new Tn(i))),r.hovers&&t.push(l.languages.registerHoverProvider(n,new mn(i))),r.documentHighlights&&t.push(l.languages.registerDocumentHighlightProvider(n,new _n(i))),r.links&&t.push(l.languages.registerLinkProvider(n,new Cn(i))),r.documentSymbols&&t.push(l.languages.registerDocumentSymbolProvider(n,new En(i))),r.rename&&t.push(l.languages.registerRenameProvider(n,new bn(i))),r.foldingRanges&&t.push(l.languages.registerFoldingRangeProvider(n,new Sn(i))),r.selectionRanges&&t.push(l.languages.registerSelectionRangeProvider(n,new Pn(i))),r.documentFormattingEdits&&t.push(l.languages.registerDocumentFormattingEditProvider(n,new In(i))),r.documentRangeFormattingEdits&&t.push(l.languages.registerDocumentRangeFormattingEditProvider(n,new An(i)))}(),n.push(Ln(t)),Ln(n)}function Ln(e){return{dispose:function(){return jn(e)}}}function jn(e){for(;e.length;)e.pop().dispose()}}}]);
//# sourceMappingURL=6965.b122e709.chunk.js.map