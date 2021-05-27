# Premiers exercices en JavaScript  
-------------------
### Exercice 0  
Modifier le fichier `index.HTML` et mettre `<script src='/script/script.js'></script>`  
##### Consigne:  
Pour ce projet, nous allons reprendre des exercices basiques de programmation que tu as déjà effectués pendant tes premières semaines chez THP. Ce sera l'occasion pour toi de voir le progrès que tu as réalisé et le chemin parcouru car ta problématique ne sera plus de résoudre le problème (tu l'as déja fait) mais de passer d'un langage à un autre. Qui dit nouveau langage dit "Hello world"  
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 1   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_1.js'></script>`  
##### Consigne:  
Customise le script script_1.js qui te demandera ton prénom avec un prompt. Tu stockeras cette entrée dans une variable et tu afficheras : "Bonjour, prénom !" dans la console.  
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 2   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_2.js'></script>`  
##### Consigne:  
Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur. Petit exemple rapide : factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1. 
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 3   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_3.js'></script>`  
##### Consigne:  
Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé script_3.js   
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 4   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_4.js'></script>`  
##### Consigne:  
Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.  
Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.  
Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :  
* Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
* Sors une array qui contient le prénom et le nom des entrepreneurs ;
* Quel âge aurait chaque inventeur aujourd'hui ?
* Trie les entrepreneurs par ordre alphabétique du nom de famille.   
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 5   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_5.js'></script>`  
##### Consigne:  
C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.   
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.  
-------------------
### Exercice 6   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_6.js'></script>`  
##### Consigne:  
Tu as lu le titre ? Allez, tu as 1h... ok on rigole 😁.  
L'un des premiers codes dont tu as entendu parler est probablement le code génétique qui permet de traduire de l'ARN (c'est une copie de notre ADN) en protéines (qui constituent notre corps). Pourquoi ne pas faire un exercice là-dessus ?  

D'abord quelques explications (on va pas te faire un cours de bio complet). Pour simplifier, l'ARN (comme l'ADN) est une suite de molécules appelées nucléotides et qu'on peut représenter par 4 lettres : A - U - G - C (pour l'ADN, remplacer U par T). Donc un morceau d'ARN peut se représenter sous la forme d'une suite de lettres : "UUACGCAGUAGA".  

Notre corps est ensuite capable de lire cet ARN en le découpant par groupes de 3 lettres (appelés "codons"). Dans notre exemple ça donnerait : "UUA-CGC-AGU-AGA". Ensuite chaque codon peut être transformé en un "acide aminé" qui est juste un "morceau de protéine". Mais quelle est la règle qui dit que tel codon doit être remplacé par tel acide aminé ? C'est le fameux code génétique dont voici un extrait ci-dessous :  

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine  
CCU ou CCC ou CCA ou CCG => Proline  
UUA ou UUG => Leucine  
UUU ou UUC => Phénylalanine  
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine  
UAU ou UAC => Tyrosine  

Notre exemple d'ARN "UUA-CGC-AGU-AGA" donnerait donc la protéine suivante : "Leucine-Arginine-Sérine-Arginine"  

Le code génétique complet permet de transformer les 64 codons possibles en 20 acides aminés. On va se contenter, sur cet exercice, de prendre juste les 6 acides aminés ci-dessus avec leurs codons correspondants.  

Je veux que tu codes un script script_6.js en JS qui puisse transformer un ARN présenté sous forme de string "UUACGCAGUAGA" en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"  

Afin de comparer ton travail avec les autres moussaillons, voici 2 ARN à traduire en protéines :  

`CCGUCGUUGCGCUACAGC`  
`CCUCGCCGGUACUUCUCG`    
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.   
------------------- 
### Exercice 7   
Modifier le fichier `index.HTML` et mettre `<script src='/script/script_7.js'></script>`  
##### Consigne:  
Maintenant on va implémenter une sorte de chat-bot dont on entend (bizarrement) très peu parler en ce moment : le bot adolescent. Après tout, il n'y a aucune raison que les bots ne passent pas, eux aussi, par cette phase ingrate de la vie.  

Tu vas coder un script script_7.js qui va fonctionner de la façon suivante : pour s'adresser au bot, un fenêtre de prompt va s'ouvrir. L'utilisateur pourra y saisir sa phrase et le bot répondra via une impression en console.  

Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :  

* Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
* Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
* Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
* Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
* Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;  
Ouvrir le fichier `index.html` sur ton navigateur préféré et observe la console.    
  