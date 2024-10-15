import{s as St,n as lt}from"./scheduler.DaEglZbh.js";import{S as It,i as At,e,s as o,H as et,c as p,k as l,f as d,a as pt,l as ot,d as a,m as dt,g as s}from"./index.B_-7WD2a.js";function zt(Et){let c,ct="📝 Les fondamentaux HTML",P,u,ut="Éléments et structure de base",D,i,it='<dt><code>&lt;!DOCTYPE html&gt;</code></dt><dd>Le doctype HTML5, doit être placé en préambule.</dd><dt><code>&lt;html&gt;</code></dt><dd>Élément racine d&#39;une page html. Cette balise contient tout le code html et est placée à la suite directe du préambule.</dd><dt><code>@lang</code></dt><dd>Langue principale de la page web (<a href="https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags">liste des codes langues</a>).</dd><dt><code>&lt;head&gt;</code></dt><dd>Rassemble les métadonnées du document, incluant son titre, des scripts, des feuilles de style ou des liens vers des scripts et des feuilles de style.</dd><dt><code>&lt;title&gt;</code></dt><dd>Titre de la page web (affiché dans la barre du navigateur ou dans l&#39;onglet de la page). <code>&lt;title&gt;</code> ne peut contenir que du texte.</dd><dt><code>&lt;meta/&gt;</code></dt><dd>Métadonnées.</dd><dt><code>@charset</code></dt><dd>Attribut spécifiant l&#39;encodage utilisépour la page. On utilise généralement UTF-8.</dd><dt><code>&lt;body&gt;</code></dt><dd>Corps de la page web. L&#39;élément <code>&lt;body/&gt;</code> contient le contenu du document html.</dd>',R,k,j,Pt=`<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Ma première page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`,S,r,kt="Formattage du texte",I,g,rt="<dt><code>&lt;h1/&gt; à &lt;h6/&gt;</code></dt><dd>Éléments de titre.</dd><dt><code>&lt;p&gt;</code></dt><dd>Paragraphe.</dd><dt><code>&lt;ul&gt;</code></dt><dd>Liste non ordonnée.</dd><dt><code>&lt;ol&gt;</code></dt><dd>Liste ordonnée.</dd><dt><code>&lt;li&gt;</code></dt><dd>Item de liste.</dd><dt><code>&lt;dl&gt;</code></dt><dd>Liste de description.</dd><dt><code>&lt;dt&gt;</code></dt><dd>Terme à décrire.</dd><dt><code>&lt;dd&gt;</code></dt><dd>Définition d&#39;un terme.</dd><dt><code>&lt;strong&gt;</code></dt><dd>Élément de haute importance. Affiché par défaut en gras.</dd><dt><code>&lt;em&gt;</code></dt><dd>Emphase (mise en valeur). Affiché par défaut en italique.</dd><dt><code>&lt;cite&gt;</code></dt><dd>Élément de citation, contenant le titre d&#39;une œuvre.</dd><dt><code>&lt;q&gt;</code></dt><dd>Élément de citation en incise.</dd><dt><code>&lt;blockquote&gt;</code></dt><dd>Élément de bloc de citation.</dd><dt><code>&lt;sub&gt;</code></dt><dd>Indice.</dd><dt><code>&lt;sup&gt;</code></dt><dd>Exposant.</dd><dt><code>&lt;small&gt;</code></dt><dd>Petits caractères.</dd><dt><code>&lt;pre&gt;</code></dt><dd>Texte préformaté (les espaces sont conservés).</dd><dt><code>&lt;code&gt;</code></dt><dd>Élément de code en ligne.</dd><dt><code>&lt;u&gt;</code></dt><dd>Soulignement.</dd><dt><code>&lt;i&gt;</code></dt><dd>Italique.</dd><dt><code>&lt;b&gt;</code></dt><dd>Gras.</dd>",A,m,gt="Les liens",z,h,mt="<dt><code>&lt;a&gt;</code></dt><dd>Un lien hypertexte.</dd><dt><code>@href</code></dt><dd>Contient une URL absolue ou relative.</dd><dt><code>@href=&quot;mailto:adressMail&quot;</code></dt><dd>Un lien hypertexte vers une adresse mail.</dd><dt><code>@href=&quot;tel:+33123456789&quot;</code></dt><dd>Un lien vers un numéro de téléphone.</dd><dt><code>@target</code></dt><dd>Contexte d&#39;affichage de l&#39;URL. Valeurs <code>&quot;_blank&quot;</code> (nouvel onglet) | <code>&quot;_self&quot;</code> (onglet actuel, par défaut).</dd>",F,v,ht="Les sections",N,f,vt="<dt><code>&lt;header&gt;</code></dt><dd>En-tête de la page web. Elle peut contenir un titre et/ou la navigation par exemple.</dd><dt><code>&lt;footer&gt;</code></dt><dd>Pied de page.</dd><dt><code>&lt;nav&gt;</code></dt><dd>Navigation.</dd><dt><code>&lt;article&gt;</code></dt><dd>Contenu autonome.</dd><dt><code>&lt;section&gt;</code></dt><dd>Regroupe des contenus liés.</dd><dt><code>&lt;aside&gt;</code></dt><dd>Aparté.</dd>",O,x,ft="Balises et attributs génériques",B,q,xt="<dt><code>&lt;div&gt;</code></dt><dd>Conteneur générique de type <em>bloc</em>.</dd><dt><code>&lt;span&gt;</code></dt><dd>Conteneur générique de type <em>inline</em>.</dd><dt><code>@id</code></dt><dd>Un identifiant unique.</dd><dt><code>@class</code></dt><dd>Une liste de classes associées à l&#39;élément courant pour être manipulé avec CSS et/ou Javascript.</dd><dt><code>@contenteditable=&quot;true&quot;</code></dt><dd>Contenu éditable.</dd><dt><code>@dir</code></dt><dd>Direction du texte. <code>dir=&quot;ltr&quot;</code> (gauche à droite) | <code>dir=&quot;rtl&quot;</code> (droite à gauche)</dd>",G,b,qt="Formulaires",J,C,bt="<dt><code>&lt;form&gt;</code></dt><dd>Un formulaire.</dd><dt><code>&lt;fieldset&gt;</code></dt><dd>Un groupe de champs dans un formulaire.</dd><dt><code>&lt;legend&gt;</code></dt><dd>Une description pour un groupe de champs.</dd><dt><code>&lt;input&gt;</code></dt><dd>Un champ de formulaire.</dd><dt><code>&lt;input type=&quot;text&quot;&gt;</code></dt><dd>Un champ texte.</dd><dt><code>&lt;input type=&quot;checkbox&quot;&gt;</code></dt><dd>Un champ case à cocher.</dd><dt><code>&lt;input type=&quot;radio&quot;&gt;</code></dt><dd>Un champ bouton radio.</dd><dt><code>&lt;input type=&quot;submit&quot;&gt;</code></dt><dd>Un bouton de soumission.</dd><dt><code>&lt;input type=&quot;email&quot;&gt;</code></dt><dd>Un champ texte pour un adresse mail.</dd><dt><code>&lt;input type=&quot;url&quot;&gt;</code></dt><dd>Un champ texte pour une url.</dd><dt><code>&lt;input type=&quot;number&quot;&gt;</code></dt><dd>Un champ texte pour un nombre.</dd><dt><code>&lt;textarea&gt;</code></dt><dd>Une boite de texte.</dd><dt><code>&lt;label&gt;</code></dt><dd>Le nom d&#39;un champ de formulaire.</dd><dt><code>&lt;select&gt;</code></dt><dd>Une liste d&#39;option.</dd><dt><code>&lt;option&gt;</code></dt><dd>Une option (choix) dans une liste de formulaire.</dd><dt><code>&lt;optgroup&gt;</code></dt><dd>Un groupe d&#39;options (choix) dans un liste de formulaire.</dd>",Y,_,Ct="Les médias",V,L,_t="<dt><code>&lt;img/&gt;</code></dt><dd>Image.</dd><dt><code>@src</code></dt><dd>Url d&#39;un média. Peut être utilisé avec les balises <code>&lt;img/&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;source&gt;</code>.</dd><dt><code>@alt</code></dt><dd>Description de l&#39;image.</dd><dt><code>@width</code></dt><dd>La largeur d&#39;une image (<code>&lt;img/&gt;</code>) ou d&#39;une vidéo (<code>&lt;video&gt;</code>).</dd><dt><code>&lt;audio&gt;</code></dt><dd>Contenu sonore. S&#39;utilise avec un attribut <code>@src</code> ou avec un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd><dt><code>&lt;video&gt;</code></dt><dd>Contenu vidéo. S&#39;utilise avec un attribut <code>@src</code> ou avec un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd><dt><code>@control=&quot;true&quot;</code></dt><dd>Utiliser les contrôles du navigateur pour les contenus audio et vidéo.</dd><dt><code>&lt;source/&gt;</code></dt><dd>Contenu média pour les balises <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;picture&gt;</code> (en remplacement de l&#39;attribut <code>@src</code>).</dd><dt><code>@type</code></dt><dd>Le type MIME de la ressource.</dd><dt><code>@media</code></dt><dd>Contenu média pour les balises <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> et <code>&lt;picture&gt;</code> (en remplacement de l&#39;attribut <code>@src</code>).</dd><dt><code>&lt;figure&gt;</code></dt><dd>Un contenu autonome. Généralement une image, une figure, un graphe, un diagramme, ou un fragment de code.</dd><dt><code>&lt;figcaption&gt;</code></dt><dd>Une légende pour un élément <code>&lt;figure&gt;</code>.</dd>",X,H,K,Dt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/audio/piste01.mp3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>piste01.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>piste01.ogg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
	  Audio HTML5 non pris en charge.
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>piste01.mp3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Télécharger l'audio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>.
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span></code>`,Q,U,Lt="Médias adaptatifs",W,y,Ht="<dt><code>&lt;picture&gt;</code></dt><dd>Image responsive. S&#39;utilise conjointement avec un sous-élément <code>&lt;img/&gt;</code> et un ou plusieurs sous-éléments <code>&lt;source&gt;</code>.</dd><dt><code>@srcset</code></dt><dd>Une liste d&#39;images sous la forme de chaînes de caractères séparées par une virgule. Chaque chaîne est composée d&#39;une URL et, séparé par un espace, soit d&#39;un indicateur de largeur suivi directement de &#39;w&#39;, soit d&#39;un indicateur de densité de pixel suivi directement de &#39;x&#39;. Pour les balises <code>&lt;img&gt;</code> et <code>&lt;source&gt;</code> (en remplacement de l&#39;attribut <code>@src</code>).</dd><dt><code>@sizes</code></dt><dd>Une liste de conditions sous la forme de chaînes de caractères séparées par une virgule afin de définir quelle image afficher. Chaque chaîne est composée d&#39;une condition (media) et, séparé par un espace, la largeur de l&#39;image si la condition est vraie. Pour les balises <code>&lt;img&gt;</code> et <code>&lt;source&gt;</code>.</dd><dt><code>@media</code></dt><dd>Une condition pour un média.</dd>",Z,T,$,Rt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- Un @média par source, si @srcset ne contient pas de liste --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bassedet.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 500px)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hautedef.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 1024px)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token comment">&lt;!-- Un img pour le chargement par défaut --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hautedef.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paysage<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- ou --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bassedef.jpg 495w, hautedef.jpg 1024w<span class="token punctuation">"</span></span>
		 <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 500px) 495px, 1024px<span class="token punctuation">"</span></span>
		 <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hautedef.jpg<span class="token punctuation">"</span></span>
		 <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paysage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- @sizes si @srcset  contient une liste  et un @src pour  le traitement par défaut. --></span></code>`,tt,M,Ut="Tableau",at,w,yt="<dt><code>&lt;table&gt;</code></dt><dd>Un tableau.</dd><dt><code>&lt;thead&gt;</code></dt><dd>En-tête d&#39;un tableau.</dd><dt><code>&lt;tbody&gt;</code></dt><dd>Corps d&#39;un tableau.</dd><dt><code>&lt;tfoot&gt;</code></dt><dd>Pied d&#39;un tableau.</dd><dt><code>&lt;th&gt;</code></dt><dd>En-tête d&#39;une ligne ou d&#39;une colonne.</dd><dt><code>&lt;tr&gt;</code></dt><dd>Ligne d&#39;un tableau.</dd><dt><code>&lt;th&gt;</code></dt><dd>Cellule d&#39;en-tête d&#39;une ligne ou d&#39;une colonne.</dd><dt><code>&lt;td&gt;</code></dt><dd>Une cellule.</dd><dt><code>@colspan</code></dt><dd>Nombre de colonnes sur lesquelles s&#39;étend la cellule.</dd><dt><code>@rowspan</code></dt><dd>Nombre de lignes sur lesquelles s&#39;étend la cellule.</dd>",nt,E,st,jt=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Achat boulangerie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Prix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Baguette<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">rowspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1€<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Croissant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Pain de campagne<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>2€<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tfoot</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>total<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>4€<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tfoot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></code>`;return{c(){c=e("h1"),c.textContent=ct,P=o(),u=e("h2"),u.textContent=ut,D=o(),i=e("dl"),i.innerHTML=it,R=o(),k=e("pre"),j=new et(!1),S=o(),r=e("h2"),r.textContent=kt,I=o(),g=e("dl"),g.innerHTML=rt,A=o(),m=e("h2"),m.textContent=gt,z=o(),h=e("dl"),h.innerHTML=mt,F=o(),v=e("h2"),v.textContent=ht,N=o(),f=e("dl"),f.innerHTML=vt,O=o(),x=e("h2"),x.textContent=ft,B=o(),q=e("dl"),q.innerHTML=xt,G=o(),b=e("h2"),b.textContent=qt,J=o(),C=e("dl"),C.innerHTML=bt,Y=o(),_=e("h2"),_.textContent=Ct,V=o(),L=e("dl"),L.innerHTML=_t,X=o(),H=e("pre"),K=new et(!1),Q=o(),U=e("h2"),U.textContent=Lt,W=o(),y=e("dl"),y.innerHTML=Ht,Z=o(),T=e("pre"),$=new et(!1),tt=o(),M=e("h2"),M.textContent=Ut,at=o(),w=e("dl"),w.innerHTML=yt,nt=o(),E=e("pre"),st=new et(!1),this.h()},l(t){c=p(t,"H1",{"data-svelte-h":!0}),l(c)!=="svelte-1aov2mp"&&(c.textContent=ct),P=d(t),u=p(t,"H2",{"data-svelte-h":!0}),l(u)!=="svelte-1691ylr"&&(u.textContent=ut),D=d(t),i=p(t,"DL",{"data-svelte-h":!0}),l(i)!=="svelte-1qdsjw9"&&(i.innerHTML=it),R=d(t),k=p(t,"PRE",{class:!0});var n=pt(k);j=ot(n,!1),n.forEach(a),S=d(t),r=p(t,"H2",{"data-svelte-h":!0}),l(r)!=="svelte-gsy6wd"&&(r.textContent=kt),I=d(t),g=p(t,"DL",{"data-svelte-h":!0}),l(g)!=="svelte-v8rnq9"&&(g.innerHTML=rt),A=d(t),m=p(t,"H2",{"data-svelte-h":!0}),l(m)!=="svelte-v0v8h9"&&(m.textContent=gt),z=d(t),h=p(t,"DL",{"data-svelte-h":!0}),l(h)!=="svelte-17i9wo7"&&(h.innerHTML=mt),F=d(t),v=p(t,"H2",{"data-svelte-h":!0}),l(v)!=="svelte-n2c4k6"&&(v.textContent=ht),N=d(t),f=p(t,"DL",{"data-svelte-h":!0}),l(f)!=="svelte-1qntdbr"&&(f.innerHTML=vt),O=d(t),x=p(t,"H2",{"data-svelte-h":!0}),l(x)!=="svelte-19m0sni"&&(x.textContent=ft),B=d(t),q=p(t,"DL",{"data-svelte-h":!0}),l(q)!=="svelte-p15bl6"&&(q.innerHTML=xt),G=d(t),b=p(t,"H2",{"data-svelte-h":!0}),l(b)!=="svelte-s1973l"&&(b.textContent=qt),J=d(t),C=p(t,"DL",{"data-svelte-h":!0}),l(C)!=="svelte-146g2tp"&&(C.innerHTML=bt),Y=d(t),_=p(t,"H2",{"data-svelte-h":!0}),l(_)!=="svelte-v00z1v"&&(_.textContent=Ct),V=d(t),L=p(t,"DL",{"data-svelte-h":!0}),l(L)!=="svelte-x8hi8d"&&(L.innerHTML=_t),X=d(t),H=p(t,"PRE",{class:!0});var Tt=pt(H);K=ot(Tt,!1),Tt.forEach(a),Q=d(t),U=p(t,"H2",{"data-svelte-h":!0}),l(U)!=="svelte-xe94qe"&&(U.textContent=Lt),W=d(t),y=p(t,"DL",{"data-svelte-h":!0}),l(y)!=="svelte-cahb6k"&&(y.innerHTML=Ht),Z=d(t),T=p(t,"PRE",{class:!0});var Mt=pt(T);$=ot(Mt,!1),Mt.forEach(a),tt=d(t),M=p(t,"H2",{"data-svelte-h":!0}),l(M)!=="svelte-1884nic"&&(M.textContent=Ut),at=d(t),w=p(t,"DL",{"data-svelte-h":!0}),l(w)!=="svelte-k0x5k2"&&(w.innerHTML=yt),nt=d(t),E=p(t,"PRE",{class:!0});var wt=pt(E);st=ot(wt,!1),wt.forEach(a),this.h()},h(){j.a=null,dt(k,"class","language-html"),K.a=null,dt(H,"class","language-html"),$.a=null,dt(T,"class","language-html"),st.a=null,dt(E,"class","language-html")},m(t,n){s(t,c,n),s(t,P,n),s(t,u,n),s(t,D,n),s(t,i,n),s(t,R,n),s(t,k,n),j.m(Pt,k),s(t,S,n),s(t,r,n),s(t,I,n),s(t,g,n),s(t,A,n),s(t,m,n),s(t,z,n),s(t,h,n),s(t,F,n),s(t,v,n),s(t,N,n),s(t,f,n),s(t,O,n),s(t,x,n),s(t,B,n),s(t,q,n),s(t,G,n),s(t,b,n),s(t,J,n),s(t,C,n),s(t,Y,n),s(t,_,n),s(t,V,n),s(t,L,n),s(t,X,n),s(t,H,n),K.m(Dt,H),s(t,Q,n),s(t,U,n),s(t,W,n),s(t,y,n),s(t,Z,n),s(t,T,n),$.m(Rt,T),s(t,tt,n),s(t,M,n),s(t,at,n),s(t,w,n),s(t,nt,n),s(t,E,n),st.m(jt,E)},p:lt,i:lt,o:lt,d(t){t&&(a(c),a(P),a(u),a(D),a(i),a(R),a(k),a(S),a(r),a(I),a(g),a(A),a(m),a(z),a(h),a(F),a(v),a(N),a(f),a(O),a(x),a(B),a(q),a(G),a(b),a(J),a(C),a(Y),a(_),a(V),a(L),a(X),a(H),a(Q),a(U),a(W),a(y),a(Z),a(T),a(tt),a(M),a(at),a(w),a(nt),a(E))}}}const Ot={title:"XHTML - Cheatsheet",date:"2024-03-20",author:"Josselin Morvan",category:"html",keywords:"cheatsheet ; html ; xhtml"};class Bt extends It{constructor(c){super(),At(this,c,null,zt,St,{})}}export{Bt as default,Ot as metadata};
