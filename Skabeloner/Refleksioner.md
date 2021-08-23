# Refleksioner  *(EKSEMPEL)*

## Niveau 2 - Opgave 02

Den var lidt svær, fordi der var flere produkter, som hver især havde en plus- og minusknap til antallet.

Jeg valgte at starte med at fokusere på ét af produkterne og fik også knapperne til at ændre på antallet uden problemer.

Jeg pushede denne version til GitHub og gik i gang med at kode funktionaliten til de andre produkters knapper, men det gik desværre ikke så godt. Jeg nåede ikke at finde en løsning.

## Niveau 2 - Opgave 01

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