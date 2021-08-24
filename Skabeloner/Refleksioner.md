# Refleksioner  *(EKSEMPEL)*

## Niveau 2 - Opgave 02



## Niveau 2 - Opgave 01

Pga, opgave niveau 1 opgave 3. Fandt jeg ud af at style.cssregl = "f00". Var et inline-style og derfor ville skabe problemer ift. specificity.

Saa jeg begyndte at undersoege om hvorvidt man kunne hive fat i css filen, for at finde reglen>propertien og derved aendre dens attribute. Fandt ud af det var muligt at finde reglerne og specifict hvilken attributer de havde, men kunne ikke aendre dem via javascript.

plan b. var at lave mit eget custom cssstylesheet via javascript og formulere en ny css class, som skulle tilfoeje og fjernes via click event.
Det fungerede rent praktisk, men stoette ind i endnu et specificity problem, pga at den originale css regl er #buttons button. Hvilken gjorde det blev prioriteret hoejere end min class.

plan c. var at lave et nodelist af alle items og konverterede til et array. Derefter en foreach loekke til arrayede, som gav alle knapperne en inline-style baggrundsfarve graa og derefter en eventlistener, som skifter farve til groen. Det virkede og loeste opgaven...


## Niveau 1 - Opgave 03

Den stillede opgave tog lidt mere tid end jeg vil indroemme. Jeg overtaenkte den og gik ud fra at funktionen skulle fjerne elementer og vise det frem igen naar man trykkede paa et andet.
Hvilket var kompliceret for mig at loese. 
Opgaven laerte mig hvordan man kan tage flere elementer via querySelectorAll. Som bliver til en nodelist og den kunne konverteres til et array.
For derefter ved hjaelp af en forEach loekke. Kunne der tilfoejes en eventlistener, ligegyldig hvilken genstand det drejede sig om.
Eventlisteneren, som var et klik event, lavede funktions kald, der gav den style.display='none'; 

Done deal, men sprang de resterende ekstra opgaver over og vender tilbage til dem, hvis der er mere tid.

## Niveau 1 - Opgave 02

Den opgave var rimelig let at loese. Function skulle have 2 parameter. Inden i functionen skulle vi definere regnereglen, som skulle anvendes. Derefter skulle der bruges 2 argumenter og resultatet blev printet ud i dom'en. Hvor resultatet skulle vaere 1.3333.

Ekstra opgaven var at implementer en fejlmeddelse i tilfaelde at b var 0. Det blev loest ved at lave 2 betingelser, betingelserne: 
1. b != 0 - lave udregningen 
2. b === 0 - print "null" ud i dom'en

Det blev testet ved at aendre argumentet b til 0 og derefter andre tal. Functionaliteten fungerer.

## Niveau 1 - Opgave 01

Jeg brugte alt for lang tid paa opgaven. Jeg brugte tre forskellige versioner paa loesningen.

1. Min foerste tanke paa loesning var at lave et array med hex-koderne. For derefter lave et funktionskald, som talte op og opdaterede knappens med style.background = array[i]. 

2. Efter lidt frustration over at for loekken ikke opdaterede korrekt. Taenkte jeg at man kunne bruge classList.toggle("classnavn"). For derved at lave en css class der havde den groenne farve gemt. Af en eller anden aarsag, fungerede det ikke.

3. Jeg gik tilbage til array loesningen, men droppede for loekken og valgte at bruge en simpel if betingelse, som 0-stillede indexet i arrayede naar index var 1. Det fungerede.

Tror konklusionen paa det er KISS og lade vaere med at goere tingene mere kompliceret end de er.