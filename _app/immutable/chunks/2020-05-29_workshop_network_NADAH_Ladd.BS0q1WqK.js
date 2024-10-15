import{s as ie,n as _t}from"./scheduler.DaEglZbh.js";import{S as se,i as oe,e as i,s as r,c as s,k as o,f as a,g as n,d as l}from"./index.B_-7WD2a.js";function re(le){let p,Mt="Understanding and Interpreting Your Network",E,d,bt='Slides : <a href="https://jrladd.com/slides/networkbasics" rel="nofollow">https://jrladd.com/slides/networkbasics</a>',F,u,kt='Glossaire : <a href="https://jrladd.com/network-glossary.html" rel="nofollow">https://jrladd.com/network-glossary.html</a>',J,f,gt='Bibliographie : <a href="https://historicalnetworkresearch.org/bibliography" rel="nofollow">https://historicalnetworkresearch.org/bibliography</a>',K,h,yt="Definition",O,v,Pt="In a network, there are entities (nodes) and relationships (edges).",R,w,ct="Node can have attributes (numerical (size) ant categorical(color))",Q,x,jt="Edges can have attributes too (directed or not, weighted, or not, edge type)",V,m,qt="<strong>Path &amp; diameter</strong> : sum of the edges that separate two nodes. Sometimes we have a multiple path between two nodes, with a shorter. Doing an average is interesting.",X,C,At="<strong>Isolates</strong> : node with no edges. They are still in the network.",Z,H,Bt="<strong>Hubs</strong> : nodes with the more edges.",$,T,St="<strong>Bridge</strong> : nodes with less degrees than hubs but still a great betweenness.",tt,L,Dt="Centrality",et,_,It="<strong>Degree</strong> : number of edges for a node.",nt,M,Nt="<strong>Strength</strong> : sum of the weight for a node connected to weighted edges.",lt,b,zt="<strong>Betweenness</strong> : number of shorter path that must pathru a node.",it,k,Ut="Types of network",st,g,Gt="<strong>Unipartite/unimodal network</strong> : the entities are of the same kind.",ot,y,Wt="<strong>Bipartite/bimodal</strong> : the entities (nodes) are of different kind (persons and objets). Particularity : the nodes of a same set cannot be connected to each other (a person with another person can’t be connected)",rt,P,Yt="<strong>Multipartite/K-partite/multimodal</strong> : Like a bimodal with more nodesets. As for bimodal, the nodes of a same set can’t be connected, but they can be connected to all the other nodeset.",at,c,Et="Groups of nodes within network",pt,j,Ft="<strong>Components</strong> : We can have connected components (groups of nodes separated from other groups of nodes.)",dt,q,Jt="<strong>Cliques</strong> : a group of nodes where all the nodes are connected to each other.",ut,A,Kt="<strong>Clustering</strong> : how the node’s neighbourghs are connected to each others.",ft,B,Ot="<strong>Community</strong> : a group a nodes sometimes we started identifying from a cliques, or a path. There is no algorithm for community detection.",ht,S,Rt="<strong>Dense network</strong> : hard to identify cliques, because each node have a lot of edges.",vt,D,Qt="Types of visualisation",wt,I,Vt="Adjacency matrix, Adjacency list, node-link diagram",xt,N,Xt="Other important concepts",mt,z,Zt="<strong>Triadic closure</strong> : if A is friend of B and C, we can think that B and C are friends too.",Ct,U,$t="<strong>Assortative mixing/homophily</strong> : nodes with similare attributes tend to be connected. Homophily is a tendency not a law.",Ht,G,te="<strong>Preferential attachement</strong>",Tt,W,ee="<strong>Weak ties</strong> : in a weighted network, identifying a weak tie allow to identify two connected components linked by this weak tie.",Lt,Y,ne="<strong>Small world network</strong> : have low average short path length, low clustering coefficients, degree distrubtion follows power law (a few large hubs) (it allows the short path link to exist), low diameter (usually around “six degrees” (=&gt; six degrees of Francis Beacon)).";return{c(){p=i("h1"),p.textContent=Mt,E=r(),d=i("p"),d.innerHTML=bt,F=r(),u=i("p"),u.innerHTML=kt,J=r(),f=i("p"),f.innerHTML=gt,K=r(),h=i("h2"),h.textContent=yt,O=r(),v=i("p"),v.textContent=Pt,R=r(),w=i("p"),w.textContent=ct,Q=r(),x=i("p"),x.textContent=jt,V=r(),m=i("p"),m.innerHTML=qt,X=r(),C=i("p"),C.innerHTML=At,Z=r(),H=i("p"),H.innerHTML=Bt,$=r(),T=i("p"),T.innerHTML=St,tt=r(),L=i("h2"),L.textContent=Dt,et=r(),_=i("p"),_.innerHTML=It,nt=r(),M=i("p"),M.innerHTML=Nt,lt=r(),b=i("p"),b.innerHTML=zt,it=r(),k=i("h2"),k.textContent=Ut,st=r(),g=i("p"),g.innerHTML=Gt,ot=r(),y=i("p"),y.innerHTML=Wt,rt=r(),P=i("p"),P.innerHTML=Yt,at=r(),c=i("h2"),c.textContent=Et,pt=r(),j=i("p"),j.innerHTML=Ft,dt=r(),q=i("p"),q.innerHTML=Jt,ut=r(),A=i("p"),A.innerHTML=Kt,ft=r(),B=i("p"),B.innerHTML=Ot,ht=r(),S=i("p"),S.innerHTML=Rt,vt=r(),D=i("h2"),D.textContent=Qt,wt=r(),I=i("p"),I.textContent=Vt,xt=r(),N=i("h2"),N.textContent=Xt,mt=r(),z=i("p"),z.innerHTML=Zt,Ct=r(),U=i("p"),U.innerHTML=$t,Ht=r(),G=i("p"),G.innerHTML=te,Tt=r(),W=i("p"),W.innerHTML=ee,Lt=r(),Y=i("p"),Y.innerHTML=ne},l(t){p=s(t,"H1",{"data-svelte-h":!0}),o(p)!=="svelte-gbwls3"&&(p.textContent=Mt),E=a(t),d=s(t,"P",{"data-svelte-h":!0}),o(d)!=="svelte-14vgj4d"&&(d.innerHTML=bt),F=a(t),u=s(t,"P",{"data-svelte-h":!0}),o(u)!=="svelte-k97m9g"&&(u.innerHTML=kt),J=a(t),f=s(t,"P",{"data-svelte-h":!0}),o(f)!=="svelte-wt5aru"&&(f.innerHTML=gt),K=a(t),h=s(t,"H2",{"data-svelte-h":!0}),o(h)!=="svelte-uhe5tn"&&(h.textContent=yt),O=a(t),v=s(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-11lbn6o"&&(v.textContent=Pt),R=a(t),w=s(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-1tth88l"&&(w.textContent=ct),Q=a(t),x=s(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-1r5awfk"&&(x.textContent=jt),V=a(t),m=s(t,"P",{"data-svelte-h":!0}),o(m)!=="svelte-1o3uqy7"&&(m.innerHTML=qt),X=a(t),C=s(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-udu8bu"&&(C.innerHTML=At),Z=a(t),H=s(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-1oh7kr6"&&(H.innerHTML=Bt),$=a(t),T=s(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1j9eu4i"&&(T.innerHTML=St),tt=a(t),L=s(t,"H2",{"data-svelte-h":!0}),o(L)!=="svelte-1ddq8mp"&&(L.textContent=Dt),et=a(t),_=s(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-jt3rsp"&&(_.innerHTML=It),nt=a(t),M=s(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1g7tgea"&&(M.innerHTML=Nt),lt=a(t),b=s(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-186yl7d"&&(b.innerHTML=zt),it=a(t),k=s(t,"H2",{"data-svelte-h":!0}),o(k)!=="svelte-ewb0kq"&&(k.textContent=Ut),st=a(t),g=s(t,"P",{"data-svelte-h":!0}),o(g)!=="svelte-1cj8nss"&&(g.innerHTML=Gt),ot=a(t),y=s(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-wxx1bz"&&(y.innerHTML=Wt),rt=a(t),P=s(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1w7kd2o"&&(P.innerHTML=Yt),at=a(t),c=s(t,"H2",{"data-svelte-h":!0}),o(c)!=="svelte-jvywqb"&&(c.textContent=Et),pt=a(t),j=s(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-r1ub7m"&&(j.innerHTML=Ft),dt=a(t),q=s(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-g9bpia"&&(q.innerHTML=Jt),ut=a(t),A=s(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-h0kl9"&&(A.innerHTML=Kt),ft=a(t),B=s(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-16wgvc8"&&(B.innerHTML=Ot),ht=a(t),S=s(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1kdbrks"&&(S.innerHTML=Rt),vt=a(t),D=s(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-vlk4a5"&&(D.textContent=Qt),wt=a(t),I=s(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-bkr6wt"&&(I.textContent=Vt),xt=a(t),N=s(t,"H2",{"data-svelte-h":!0}),o(N)!=="svelte-1n1fqq3"&&(N.textContent=Xt),mt=a(t),z=s(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1vu5fhx"&&(z.innerHTML=Zt),Ct=a(t),U=s(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1rosdts"&&(U.innerHTML=$t),Ht=a(t),G=s(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-bmba08"&&(G.innerHTML=te),Tt=a(t),W=s(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-1kvz6ob"&&(W.innerHTML=ee),Lt=a(t),Y=s(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1404w7f"&&(Y.innerHTML=ne)},m(t,e){n(t,p,e),n(t,E,e),n(t,d,e),n(t,F,e),n(t,u,e),n(t,J,e),n(t,f,e),n(t,K,e),n(t,h,e),n(t,O,e),n(t,v,e),n(t,R,e),n(t,w,e),n(t,Q,e),n(t,x,e),n(t,V,e),n(t,m,e),n(t,X,e),n(t,C,e),n(t,Z,e),n(t,H,e),n(t,$,e),n(t,T,e),n(t,tt,e),n(t,L,e),n(t,et,e),n(t,_,e),n(t,nt,e),n(t,M,e),n(t,lt,e),n(t,b,e),n(t,it,e),n(t,k,e),n(t,st,e),n(t,g,e),n(t,ot,e),n(t,y,e),n(t,rt,e),n(t,P,e),n(t,at,e),n(t,c,e),n(t,pt,e),n(t,j,e),n(t,dt,e),n(t,q,e),n(t,ut,e),n(t,A,e),n(t,ft,e),n(t,B,e),n(t,ht,e),n(t,S,e),n(t,vt,e),n(t,D,e),n(t,wt,e),n(t,I,e),n(t,xt,e),n(t,N,e),n(t,mt,e),n(t,z,e),n(t,Ct,e),n(t,U,e),n(t,Ht,e),n(t,G,e),n(t,Tt,e),n(t,W,e),n(t,Lt,e),n(t,Y,e)},p:_t,i:_t,o:_t,d(t){t&&(l(p),l(E),l(d),l(F),l(u),l(J),l(f),l(K),l(h),l(O),l(v),l(R),l(w),l(Q),l(x),l(V),l(m),l(X),l(C),l(Z),l(H),l($),l(T),l(tt),l(L),l(et),l(_),l(nt),l(M),l(lt),l(b),l(it),l(k),l(st),l(g),l(ot),l(y),l(rt),l(P),l(at),l(c),l(pt),l(j),l(dt),l(q),l(ut),l(A),l(ft),l(B),l(ht),l(S),l(vt),l(D),l(wt),l(I),l(xt),l(N),l(mt),l(z),l(Ct),l(U),l(Ht),l(G),l(Tt),l(W),l(Lt),l(Y))}}}const de={title:"Understanding and Interpreting Your Network",date:"2020-05-29",speaker:"John R. Ladd",category:"workshop",keywords:""};class ue extends se{constructor(p){super(),oe(this,p,null,re,ie,{})}}export{ue as default,de as metadata};
