# Refleksioner  *(EKSEMPEL)*

## Niveau 2 - Opgave 02

Den var lidt svær, fordi der var flere produkter, som hver især havde en plus- og minusknap til antallet.

Jeg valgte at starte med at fokusere på ét af produkterne og fik også knapperne til at ændre på antallet uden problemer.

Jeg pushede denne version til GitHub og gik i gang med at kode funktionaliten til de andre produkters knapper, men det gik desværre ikke så godt. Jeg nåede ikke at finde en løsning.

## Niveau 2 - Opgave 01

Da jeg blev hurtigt færdig med opgave N1_01, valgte jeg at starte på denne opgave. Den var straks mere tricky, fordi der er flere knapper og jeg må ikke hardcode antallet af knapper i Javascript. Jeg tror det har noget med Arrays og løkker at gøre, men jeg er ikke sikker på, hvordan koden skal se ud.

Jeg fik kun én af knapperne til at skifte farve, når jeg trykkede. Jeg skal helt klart have trænet det her med, at arbejde med flere elementer af samme type, som hver især har et event.

## Niveau 1 - Opgave 01

Jeg brugte alt for lang tid paa opgaven. Jeg brugte tre forskellige versioner paa loesningen.

1. Min foerste tanke paa loesning var at lave et array med hex-koderne. For derefter lave et funktionskald, som talte op og opdaterede knappens med style.background = array[i]. 

2. Efter lidt frustration over at for loekken ikke opdaterede korrekt. Taenkte jeg at man kunne bruge classList.toggle("classnavn"). For derved at lave en css class der havde den groenne farve gemt. Af en eller anden aarsag, fungerede det ikke.

3. Jeg gik tilbage til array loesningen, men droppede for loekken og valgte at bruge en simpel if betingelse, som 0-stillede indexet i arrayede naar index var 1. Det fungerede.

Tror konklusionen paa det er KISS og lade vaere med at goere tingene mere kompliceret end de er.