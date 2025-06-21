
import { LanguageCode } from "../contexts/LanguageContext";

// Type definitions for our translations
export type TranslationKeys = {
  // Navbar
  home: string;
  menu: string;
  about: string;
  contact: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  viewMenu: string;
  findUs: string;
  
  // Featured Dishes
  featuredTitle: string;
  featuredSubtitle: string;
  viewFullMenu: string;
  
  // About Preview
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  readMore: string;
  
  // Contact Info
  findUsTitle: string;
  findUsParagraph: string;
  address: string;
  contactSection: string;
  phone: string;
  openingHours: string;
  mondayFriday: string;
  saturdaySunday: string;
  showOnMap: string;
  
  // Contact Form
  sendMessage: string;
  contactFormInfo: string;
  name: string;
  email: string;
  messageLabel: string;
  submitButton: string;
  sending: string;
  messageSent: string;
  messageSentDescription: string;
  
  // Menu
  menuPage: string;
  menuPageTitle: string;
  menuPageSubtitle: string;
  menuDescription: string;
  allergiesNote: string;
  //Förätt
  SkagenRollName: string;
  SkagenRollDescription: string;
  CharkChipsName: string;
  CharkChipsDescription: string;
  RöktaRäkorName: string;
  RöktaRäkorDescription: string;
  CapreseName: string;
  CapreseDescription: string;
  //För de små
  friedChicken: string;
  friedChickenDescription: string;
  pancakes: string;
  pancakesDescription: string;
  // Huvudrätter
  fishAndChips: string;
  fishAndChipsDescription: string;
  fishSoup: string;
  fishSoupDescription: string;
  havstenssundBox: string;
  havstenssundBoxDescription: string;
  caesarSalad: string;
  caesarSaladDescription: string;
  shrimpSandwich: string;
  shrimpSandwichDescription: string;
  burger: string;
  burgerDescription: string;
  TodaysCatch: string;
  TodaysCatchDescription: string;
  // Desserter
  Pavlova: string;
  PavlovaDescription: string;
  brownie: string;
  brownieDescription: string;
  Gelato: string;
  GelatoDescription: string;
  
  
  
  
  // Menu Categories
  starters: string;
  mains: string;
  desserts: string;
  drinks: string;
  
  // About
  aboutUsTitle: string;
  aboutUsSubtitle: string;
  ourHistoryTitle: string;
  ourHistoryP1: string;
  ourHistoryP2: string;
  ourHistoryP3: string;
  ourPhilosophyTitle: string;
  sustainabilityTitle: string;
  sustainabilityText: string;
  localProduceTitle: string;
  localProduceText: string;
  qualityTitle: string;
  qualityText: string;
  ourTeamTitle: string;
  founder: string;
  manager: string;
  chef: string;
  founderText: string;
  managerText: string;
  chefText: string;
  
  // Footer
  footerTagline: string;
  contactTitle: string;
  allRightsReserved: string;

};

// Define translations for each language
const translations: Record<LanguageCode, TranslationKeys> = {
  // Swedish translations
  se: {
    // Navbar
    home: "Hem",
    menu: "Meny",
    about: "Om oss",
    contact: "Kontakt",
    
    // Hero
    heroTitle: "Välkommen till Skaldjurscaféet",
    heroSubtitle: "Upplev det bästa av västkustens skaldjur i vår mysiga restaurang i hjärtat av Havstenssund.",
    viewMenu: "Se vår meny",
    findUs: "Hitta hit",
    
    // Featured Dishes
    featuredTitle: "Våra Specialiteter",
    featuredSubtitle: "Vi serverar färska skaldjur från västkusten, fångade med respekt för havet och tillagade med passion för god mat.",
    viewFullMenu: "Se hela menyn",
    
    // About Preview
    aboutTitle: "Om Skaldjurscaféet",
    aboutParagraph1: "Sedan 2005 har vi serverat det bästa från havet i vår restaurang i Havstensund. Med havet som närmsta granne och ett personligt engagemang för kvalitet har vi blivit en älskad destination för både lokalbefolkningen och turister.",
    aboutParagraph2: "Våra skaldjur kommer direkt från lokala fiskare och tillagas med omsorg för att bevara de naturliga smakerna. Här kan du njuta av en genuin smak av västkusten i en avslappnad och vacker miljö.",
    readMore: "Läs mer om oss",
    
    // Contact Info
    findUsTitle: "Hitta till oss",
    findUsParagraph: "Vi ser fram emot att få välkomna dig till vårt cafe i den idylliska fiskehamnen i Havstensund.",
    address: "Adress",
    contactSection: "Kontakt",
    phone: "Ring för bokning eller frågor",
    openingHours: "Öppettider",
    mondayFriday: "Öppet alla dagar: 12–sent",
    saturdaySunday: "Lör-Sön: 12:00 - 22:00",
    showOnMap: "Visa på karta",
    
    // Contact Form
    sendMessage: "Skicka ett meddelande",
    contactFormInfo: "Har du frågor, vill göra en bokning eller ge oss feedback? Fyll i formuläret nedan så återkommer vi så snart som möjligt.",
    name: "Namn",
    email: "E-post",
    messageLabel: "Meddelande",
    submitButton: "Skicka meddelande",
    sending: "Skickar...",
    messageSent: "Meddelande skickat!",
    messageSentDescription: "Vi kommer att kontakta dig så snart som möjligt.",
    
    // Menu 
    menuPage: "Vår meny",
    menuPageTitle: "Förrätter",
    menuPageSubtitle: "Tillagad med kärlek och de färskaste råvarorna från havet och lokala producenter",
    menuDescription: "Vår meny ändras efter säsong och tillgång, men nedan finner du ett urval av våra mest populära rätter. Alla skaldjur serveras med bröd, citron, aioli och tillbehör.",
    allergiesNote: "Allergier eller specialkost? Informera vår personal så hjälper vi dig med alternativ.",
    //Förrätt
    SkagenRollName: "Skagen roll",
    SkagenRollDescription: "Serveras med briochebröd & toppas med färsk dill",
    CharkChipsName: "CharkChips",
    CharkChipsDescription: "Chips toppat med västerbottenostkräm, lufftorkad skinka & krasse",
    RöktaRäkorName: "Rökta räkor",
    RöktaRäkorDescription: "Egenrökta räkor serveras med färskt bröd och aioli",
    CapreseName: "Caprese",
    CapreseDescription: "Tomat varvat med mozarella toppat med balsamico & basilika",
    //till de små
    friedChicken: "Chicken nuggets",
    friedChickenDescription: "Serveras med pommes & majonäs",
    pancakes: "Pannkakor",
    pancakesDescription: "Serveras med grädde & jordgubbssylt",
    // Huvudrätter
  fishAndChips: "Fish & chips",
  fishAndChipsDescription: "Serveras med örtslungade pommes & remouladsås",
  fishSoup: "Fisk & skaldjurs soppa",
  fishSoupDescription: "Serveras med färskt bröd",
  havstenssundBox: "Havstenssundslåda",
  havstenssundBoxDescription: "Färska kräftor från Havstenssund serveras med färskt bröd & aioli",
  caesarSalad: "Ceasarsallad",
  caesarSaladDescription: "Välj mellan kyckling/räkor/halloumi",
  shrimpSandwich: "Räkmacka",
  shrimpSandwichDescription: "Handskalade räkor på bröd med ägg, majonäs, sallad, tomat & picklad rödlök",
  burger: "Burgare",
  burgerDescription: "150g svenskt högrev, Väddö cheddar, bacon, crisp-sallad, picklad silverlök, tomat & brioche",
  TodaysCatch: "Dagens fångst",
  TodaysCatchDescription: "Serveras med färskpotatis, champagnesås & fänkålssallad, toppas med dill och citron",
  
  // Desserter
  Pavlova: "Pavlova",
  PavlovaDescription: "Italiensk maräng toppad med grädde & färska bär",
  brownie: "Brownie",
  brownieDescription: "Serveras med grädde & färska bär",
  Gelato: "Gelato",
  GelatoDescription: "Fråga personalen för smak",

    
    // Menu Categories
    starters: "Förrätter",
    mains: "Huvudrätter",
    desserts: "Efterrätter",
    drinks: "Till de små",
    
    // About
    aboutUsTitle: "Om oss",
    aboutUsSubtitle: "Lär känna historien bakom Skaldjurscaféet och vår passion för god mat och lokal tradition",
    ourHistoryTitle: "Vår Historia",
    ourHistoryP1: "Mitt i det idylliska kustsamhället Havstenssund, bara ett stenkast från både Grebbestad och Fjällbacka i Tanums kommun, ligger Skaldjurscaféet, en charmig och familjär restaurang med rötter i havets skafferi. Med det genuina och mysiga konceptet som länge präglat Skaldjurscaféet, har man genom ett starkt fokus på kvalitet, hållbarhet och smak blivit en knytpunkt för såväl lokalbor som turister.",
    ourHistoryP2: "Oavsett om du är på jakt efter en välsmakande lunch, en middag i 	solnedgången, en genuin skaldjursupplevelse eller något alternativ från hagen, vi har något för alla smaker.",
    ourHistoryP3: "Välkommen till Skaldjurscaféet , en liten restaurang med stor smak, i hjärtat av Bohuslän.",
    ourPhilosophyTitle: "Vår Filosofi",
    sustainabilityTitle: "Hållbarhet",
    sustainabilityText: "Vi arbetar bara med lokala fiskare som använder hållbara fiskemetoder och respekterar havet och dess resurser.",
    localProduceTitle: "Närproducerat",
    localProduceText: "Våra råvaror kommer från lokala producenter och fisket sker i närliggande vatten för att garantera färskhet och kvalitet.",
    qualityTitle: "Kvalitet",
    qualityText: "Vi kompromissar aldrig med kvaliteten och strävar alltid efter att servera de absolut fräschaste och godaste rätterna.",
    ourTeamTitle: "Vårt Team",
    founder: "Grundare & Köksmästare",
    manager: "Restaurangchef",
    chef: "Kock",
    founderText: "Med över 25 års erfarenhet av matlagning har Erik en unik känsla för de lokala råvarorna och västkustens smaker.",
    managerText: "Maria skapar den varma och välkomnande atmosfären i restaurangen och ser till att varje gäst känner sig som hemma.",
    chefText: "Thomas kreativa matlagningsstil och passion för skaldjur tillför nya spännande dimensioner till våra klassiska rätter.",
    
    // Footer
    footerTagline: "Upplev det bästa av västkustens skaldjur i vår mysiga restaurang i hjärtat av Havstensund.",
    contactTitle: "Kontakt",
    allRightsReserved: "Alla rättigheter förbehållna.",
  },
  
  // Norwegian translations
  no: {
    // Navbar
    home: "Hjem",
    menu: "Meny",
    about: "Om oss",
    contact: "Kontakt",
    
    // Hero
    heroTitle: "Velkommen til Skalldyrkafeen",
    heroSubtitle: "Opplev det beste av vestskystens skalldyr i vår koselige restaurant i hjertet av Havstenssund.",
    viewMenu: "Se vår meny",
    findUs: "Finn veien",
    
    // Featured Dishes
    featuredTitle: "Våre Spesialiteter",
    featuredSubtitle: "Vi serverer ferske skalldyr fra vestkysten, fanget med respekt for havet og tilberedt med lidenskap for god mat.",
    viewFullMenu: "Se hele menyen",
    
    // About Preview
    aboutTitle: "Om Skalldyrkafeen",
    aboutParagraph1: "Siden 2005 har vi servert det beste fra havet i vår restaurant i Havstensund. Med havet som nærmeste nabo og et personlig engasjement for kvalitet har vi blitt et populært reisemål for både lokalbefolkningen og turister.",
    aboutParagraph2: "Våre skalldyr kommer direkte fra lokale fiskere og tilberedes med omhu for å bevare de naturlige smakene. Her kan du nyte en genuin smak av vestkysten i et avslappet og vakkert miljø.",
    readMore: "Les mer om oss",
    
    // Contact Info
    findUsTitle: "Finn veien til oss",
    findUsParagraph: "Vi ser frem til å ønske deg velkommen til vår kafé i den idylliske fiskehavnen i Havstensund.",
    address: "Adresse",
    contactSection: "Kontakt",
    phone: "Ring for bestilling eller spørsmål",
    openingHours: "Åpningstider",
    mondayFriday: "Åpent alle dager: 12–sent",
    saturdaySunday: "Lør-Søn: 12:00 - 22:00",
    showOnMap: "Vis på kart",
    
    // Contact Form
    sendMessage: "Send en melding",
    contactFormInfo: "Har du spørsmål, vil gjøre en bestilling eller gi oss tilbakemelding? Fyll ut skjemaet nedenfor, så tar vi kontakt så snart som mulig.",
    name: "Navn",
    email: "E-post",
    messageLabel: "Melding",
    submitButton: "Send melding",
    sending: "Sender...",
    messageSent: "Melding sendt!",
    messageSentDescription: "Vi vil kontakte deg så snart som mulig.",
    
    // Menu
    menuPage: "Vår meny",
    menuPageTitle: "Forrett",
    menuPageSubtitle: "Tilberedt med kjærlighet og de ferskeste råvarene fra havet og lokale produsenter",
    menuDescription: "Vår meny endres med sesong og tilgjengelighet, men nedenfor finner du et utvalg av våre mest populære retter. Alle skalldyr serveres med brød, sitron, aioli og tilbehør.",
    allergiesNote: "Allergier eller spesialkost? Informer vårt personale, så hjelper vi deg med alternativer.",
    //Förätt
    SkagenRollName: "Skagen roll",
    SkagenRollDescription: "Serveres med briochebrød og toppes med frisk dill",
    CharkChipsName: "CharkChips",
    CharkChipsDescription: "Chips toppet med krem av ost fra svenske Västerbotten, spekeskinke og karse",
    RöktaRäkorName: "Røkte reker",
    RöktaRäkorDescription: "Egenrøkte reker serveres med ferskt brød og aioli",
    CapreseName: "Caprese",
    CapreseDescription: "Tomat lagvis med mozzarella, toppet med balsamico og basilikum",
    //till de små
    friedChicken: "Chicken nuggets",
    friedChickenDescription: "Serveres med pommes frites & majones",
    pancakes: "Pannekaker",
    pancakesDescription: "Serveres med krem & jordbærsyltetøy",
    // Hovedretter
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serveres med urtemarinerte pommes frites og remulade",
fishSoup: "Fisk- og skalldyrsuppe",
fishSoupDescription: "Serveres med ferskt brød",
havstenssundBox: "Havstenssund-boks",
havstenssundBoxDescription: "Ferske kreps fra Havstenssund serveres med ferskt brød og aioli",
caesarSalad: "Caesarsalat",
caesarSaladDescription: "Velg mellom kylling/reker/halloumi",
shrimpSandwich: "Rekesandwich",
shrimpSandwichDescription: "Håndpillede reker på brød med egg, majones, salat, tomat og syltet rødløk",
burger: "Hamburger",
burgerDescription: "150 g svensk høyrygg, Väddö cheddar, bacon, sprø salat, syltet sølvløk, tomat og brioche",
TodaysCatch: "Dagens fangst",
TodaysCatchDescription: "Serveres med nypoteter, champagnesaus og fennikelsalat, toppet med dill og sitron",

// Desserter
Pavlova: "Pavlova",
PavlovaDescription: "Italiensk marengs toppet med krem og friske bær",
brownie: "Brownie",
brownieDescription: "Serveres med krem og ferske bær",
Gelato: "Gelato",
GelatoDescription: "Spør personalet om smak",

    
    // Menu Categories
    starters: "Forretter",
    mains: "Hovedretter",
    desserts: "Desserter",
    drinks: "For de små",
    
    // About
    aboutUsTitle: "Om oss",
    aboutUsSubtitle: "Bli kjent med historien bak Skalldyrkafeen og vår lidenskap for god mat og lokal tradisjon",
    ourHistoryTitle: "Vår Historie",
    ourHistoryP1: "Midt i det idylliske kystsamfunnet Havstenssund, bare et steinkast fra både Grebbestad og Fjällbacka i Tanums kommune, ligger Skaldjurskafeen, en sjarmerende og familiedrevet restaurant med røtter i havets spiskammer. Med det genuine og koselige konseptet som lenge har preget Skaldjurskafeen, har man gjennom et sterkt fokus på kvalitet, bærekraft og smak blitt et knutepunkt for både lokalbefolkning og turister.",
    ourHistoryP2: "Enten du er på jakt etter en smakfull lunsj, en middag i solnedgangen, en genuin skalldyrsopplevelse eller et alternativ fra land, har vi noe for enhver smak.",
    ourHistoryP3: "Velkommen til Skaldjurskafeen, en liten restaurant med stor smak, i hjertet av Bohuslän.",
    ourPhilosophyTitle: "Vår Filosofi",
    sustainabilityTitle: "Bærekraft",
    sustainabilityText: "Vi jobber bare med lokale fiskere som bruker bærekraftige fiskemetoder og respekterer havet og dets ressurser.",
    localProduceTitle: "Lokalprodusert",
    localProduceText: "Våre råvarer kommer fra lokale produsenter, og fisket skjer i nærliggende farvann for å garantere ferskhet og kvalitet.",
    qualityTitle: "Kvalitet",
    qualityText: "Vi inngår aldri kompromisser med kvaliteten og streber alltid etter å servere de absolutt ferskeste og mest velsmakende rettene.",
    ourTeamTitle: "Vårt Team",
    founder: "Grunnlegger & Kjøkkensjef",
    manager: "Restaurantsjef",
    chef: "Kokk",
    founderText: "Med over 25 års erfaring med matlaging har Erik en unik følelse for de lokale råvarene og vestkystens smaker.",
    managerText: "Maria skaper den varme og velkomne atmosfæren i restauranten og sørger for at hver gjest føler seg som hjemme.",
    chefText: "Thomas' kreative matlagingsstil og lidenskap for skalldyr tilfører nye spennende dimensjoner til våre klassiske retter.",
    
    // Footer
    footerTagline: "Opplev det beste av vestkystens skalldyr i vår koselige restaurant i hjertet av Havstensund.",
    contactTitle: "Kontakt",
    allRightsReserved: "Alle rettigheter reservert.",
  },
  
  // Danish translations
  dk: {
    // Navbar
    home: "Hjem",
    menu: "Menu",
    about: "Om os",
    contact: "Kontakt",
    
    // Hero
    heroTitle: "Velkommen til Skaldyrscaféen",
    heroSubtitle: "Oplev det bedste af vestskystens skaldyr i vores hyggelige restaurant i hjertet af Havstenssund.",
    viewMenu: "Se vores menu",
    findUs: "Find vej",
    
    // Featured Dishes
    featuredTitle: "Vores Specialiteter",
    featuredSubtitle: "Vi serverer friske skaldyr fra vestkysten, fanget med respekt for havet og tilberedt med passion for god mad.",
    viewFullMenu: "Se hele menuen",
    
    // About Preview
    aboutTitle: "Om Skaldyrscaféen",
    aboutParagraph1: "Siden 2005 har vi serveret det bedste fra havet i vores restaurant i Havstensund. Med havet som nærmeste nabo og et personligt engagement for kvalitet er vi blevet en elsket destination for både lokalbefolkningen og turister.",
    aboutParagraph2: "Vores skaldyr kommer direkte fra lokale fiskere og tilberedes med omhu for at bevare de naturlige smage. Her kan du nyde en autentisk smag af vestkysten i et afslappet og smukt miljø.",
    readMore: "Læs mere om os",
    
    // Contact Info
    findUsTitle: "Find vej til os",
    findUsParagraph: "Vi ser frem til at byde dig velkommen i vores café i den idylliske fiskerhavn i Havstensund.",
    address: "Adresse",
    contactSection: "Kontakt",
    phone: "Ring for reservation eller spørgsmål",
    openingHours: "Åbningstider",
    mondayFriday: "Åbent alle dage: 12–sent",
    saturdaySunday: "Lør-Søn: 12:00 - 22:00",
    showOnMap: "Vis på kort",
    
    // Contact Form
    sendMessage: "Send en besked",
    contactFormInfo: "Har du spørgsmål, vil lave en reservation eller give os feedback? Udfyld formularen nedenfor, så vender vi tilbage til dig hurtigst muligt.",
    name: "Navn",
    email: "E-mail",
    messageLabel: "Besked",
    submitButton: "Send besked",
    sending: "Sender...",
    messageSent: "Besked sendt!",
    messageSentDescription: "Vi vil kontakte dig så hurtigt som muligt.",
    
    // Menu
    menuPage: "Vores menu",
    menuPageTitle: "Forret",
    menuPageSubtitle: "Tilberedt med kærlighed og de friskeste råvarer fra havet og lokale producenter",
    menuDescription: "Vores menu ændres efter sæson og tilgængelighed, men nedenfor finder du et udvalg af vores mest populære retter. Alle skaldyr serveres med brød, citron, aioli og tilbehør.",
    allergiesNote: "Allergier eller specialkost? Informer vores personale, så hjælper vi dig med alternativer.",
    //huvudrätt
    SkagenRollName: "Skagen roll",
    SkagenRollDescription: "Serveres med briochebrød og toppes med frisk dild",
    CharkChipsName: "CharkChips",
    CharkChipsDescription: "Chips toppet med creme af ost fra svenske Västerbotten, lufttørret skinke og karse",
    RöktaRäkorName: "Røgede rejer",
    RöktaRäkorDescription: "Egenrøgede rejer serveres med frisk brød og aioli",
    CapreseName: "Caprese",
    CapreseDescription: "Tomat lagt lagvis med mozzarella, toppet med balsamico og basilikum",
    //till de små
    friedChicken: "Chicken nuggets",
    friedChickenDescription: "Serveres med pommes frites & mayonnaise",
    pancakes: "Pandekager",
    pancakesDescription: "Serveres med flødeskum & jordbærsyltetøj",
    // Hovedretter
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serveres med urtede pommes frites og remoulade",
fishSoup: "Fisk- og skaldyrsuppe",
fishSoupDescription: "Serveres med frisk brød",
havstenssundBox: "Havstenssund-boks",
havstenssundBoxDescription: "Friske krebs fra Havstenssund serveres med frisk brød og aioli",
caesarSalad: "Caesarsalat",
caesarSaladDescription: "Vælg mellem kylling/rejer/halloumi",
shrimpSandwich: "Rejesandwich",
shrimpSandwichDescription: "Håndpillede rejer på brød med æg, mayonnaise, salat, tomat og syltet rødløg",
burger: "Burger",
burgerDescription: "150 g svensk højreb, Väddö cheddar, bacon, sprød salat, syltet perleløg, tomat og brioche",
TodaysCatch: "Dagens fangst",
TodaysCatchDescription: "Serveres med nye kartofler, champagnesauce og fennikelsalat, toppet med dild og citron",

// Desserter
Pavlova: "Pavlova",
PavlovaDescription: "Italiensk marengs toppet med flødeskum og friske bær",
brownie: "Brownie",
brownieDescription: "Serveres med flødeskum og friske bær",
Gelato: "Gelato",
GelatoDescription: "Spørg personalet om smag",



    
    // Menu Categories
    starters: "Forretter",
    mains: "Hovedretter",
    desserts: "Desserter",
    drinks: "Til de små",
    
    // About
    aboutUsTitle: "Om os",
    aboutUsSubtitle: "Lær historien bag Skaldyrscaféen at kende og vores passion for god mad og lokal tradition",
    ourHistoryTitle: "Vores Historie",
    ourHistoryP1: "Midt i det idylliske kystsamfund Havstenssund, kun et stenkast fra både Grebbestad og Fjällbacka i Tanums kommune, ligger Skaldyrscaféen, en charmerende og familiær restaurant med rødder i havets spisekammer. Med det ægte og hyggelige koncept, som længe har præget Skaldyrscaféen, er det blevet et samlingspunkt for både lokale og turister gennem et stærkt fokus på kvalitet, bæredygtighed og smag.",
    ourHistoryP2: "Uanset om du er på jagt efter en velsmagende frokost, en middag i solnedgangen, en ægte skaldyrsoplevelse eller et alternativ fra land, har vi noget for enhver smag.",
    ourHistoryP3: "Velkommen til Skaldyrscaféen, en lille restaurant med stor smag, i hjertet af Bohuslän.",
    ourPhilosophyTitle: "Vores Filosofi",
    sustainabilityTitle: "Bæredygtighed",
    sustainabilityText: "Vi arbejder kun sammen med lokale fiskere, der anvender bæredygtige fiskemetoder og respekterer havet og dets ressourcer.",
    localProduceTitle: "Lokalt produceret",
    localProduceText: "Vores råvarer kommer fra lokale producenter, og fiskeriet foregår i nærliggende farvande for at garantere friskhed og kvalitet.",
    qualityTitle: "Kvalitet",
    qualityText: "Vi går aldrig på kompromis med kvaliteten og stræber altid efter at servere de absolut friskeste og mest velsmagende retter.",
    ourTeamTitle: "Vores Team",
    founder: "Grundlægger & Køkkenchef",
    manager: "Restaurantchef",
    chef: "Kok",
    founderText: "Med over 25 års erfaring med madlavning har Erik en unik fornemmelse for de lokale råvarer og vestkystens smage.",
    managerText: "Maria skaber den varme og imødekommende atmosfære i restauranten og sikrer, at hver gæst føler sig hjemme.",
    chefText: "Thomas' kreative madlavningsstil og passion for skaldyr tilføjer nye spændende dimensioner til vores klassiske retter.",
    
    // Footer
    footerTagline: "Oplev det bedste af vestkystens skaldyr i vores hyggelige restaurant i hjertet af Havstensund.",
    contactTitle: "Kontakt",
    allRightsReserved: "Alle rettigheder forbeholdes.",
  },
  
  // English translations
  en: {
    // Navbar
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
    
    // Hero
    heroTitle: "Welcome to Skaldjurscaféet",
    heroSubtitle: "Experience the best of the West Coast's seafood in our cozy restaurant in the heart of Havstenssund.",
    viewMenu: "View Our Menu",
    findUs: "Find Us",
    
    // Featured Dishes
    featuredTitle: "Our Specialties",
    featuredSubtitle: "We serve fresh seafood from the West Coast, caught with respect for the ocean and prepared with passion for good food.",
    viewFullMenu: "View Full Menu",
    
    // About Preview
    aboutTitle: "About Skaldjurscaféet",
    aboutParagraph1: "Since 2005, we have served the best from the sea in our restaurant in Havstensund. With the ocean as our closest neighbor and a personal dedication to quality, we have become a beloved destination for both locals and tourists.",
    aboutParagraph2: "Our seafood comes directly from local fishermen and is prepared with care to preserve the natural flavors. Here you can enjoy a genuine taste of the West Coast in a relaxed and beautiful setting.",
    readMore: "Read More About Us",
    
    // Contact Info
    findUsTitle: "Find Us",
    findUsParagraph: "We look forward to welcoming you to our café in the idyllic fishing port of Havstensund.",
    address: "Address",
    contactSection: "Contact",
    phone: "Call for bookings or questions",
    openingHours: "Opening Hours",
    mondayFriday: "Open every day: 12–late",
    saturdaySunday: "Sat-Sun: 12:00 - 22:00",
    showOnMap: "Show on map",
    
    // Contact Form
    sendMessage: "Send a Message",
    contactFormInfo: "Have questions, want to make a booking, or give us feedback? Fill out the form below and we'll get back to you as soon as possible.",
    name: "Name",
    email: "Email",
    messageLabel: "Message",
    submitButton: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent!",
    messageSentDescription: "We will contact you as soon as possible.",
    
    // Menu
    menuPage: "Our menu",
    menuPageTitle: "Starter",
    menuPageSubtitle: "Prepared with love and the freshest ingredients from the sea and local producers",
    menuDescription: "Our menu changes with the seasons and availability, but below you'll find a selection of our most popular dishes. All seafood is served with bread, lemon, aioli, and accompaniments.",
    allergiesNote: "Allergies or dietary requirements? Inform our staff and we'll help you with alternatives.",
    //varmrätt
    SkagenRollName: "Skagen roll",
    SkagenRollDescription: "Served with brioche bread and topped with fresh dill",
    CharkChipsName: "CharkChips",
    CharkChipsDescription: "Chips topped with cream of cheese from Västerbotten, Sweden, air-dried ham & garden cress",
    RöktaRäkorName: "Smoked prawns",
    RöktaRäkorDescription: "House-smoked prawns served with fresh bread and aioli",
    CapreseName: "Caprese",
    CapreseDescription: "Tomato layered with mozzarella, topped with balsamic and basil",
    //till de små
    friedChicken: "Chicken nuggets",
    friedChickenDescription: "Served with fries & mayonnaise",
    pancakes: "Pancakes",
    pancakesDescription: "Served with whipped cream & strawberry jam",
    // Mains
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Served with herb-seasoned fries and remoulade sauce",
fishSoup: "Fish & seafood soup",
fishSoupDescription: "Served with fresh bread",
havstenssundBox: "Havstenssund Box",
havstenssundBoxDescription: "Fresh crayfish from Havstenssund served with fresh bread & aioli",
caesarSalad: "Caesar Salad",
caesarSaladDescription: "Choose between chicken/shrimp/halloumi",
shrimpSandwich: "Shrimp Sandwich",
shrimpSandwichDescription: "Hand-peeled shrimp on bread with egg, mayonnaise, lettuce, tomato & pickled red onion",
burger: "Burger",
burgerDescription: "150g Swedish chuck beef, Väddö cheddar, bacon, crisp lettuce, pickled silver onion, tomato & brioche",
TodaysCatch: "Catch of the Day",
TodaysCatchDescription: "Served with new potatoes, champagne sauce and fennel salad, topped with dill and lemon",

// Desserts
Pavlova: "Pavlova",
PavlovaDescription: "Italian meringue topped with whipped cream and fresh berries",
brownie: "Brownie",
brownieDescription: "Served with cream & fresh berries",
Gelato: "Gelato",
GelatoDescription: "Ask the staff for flavor",



    
    // Menu Categories
    starters: "Starters",
    mains: "Main Courses",
    desserts: "Desserts",
    drinks: "For the little ones",
    
    // About
    aboutUsTitle: "About Us",
    aboutUsSubtitle: "Get to know the history behind Skaldjurscaféet and our passion for good food and local tradition",
    ourHistoryTitle: "Our History",
    ourHistoryP1: "In the heart of the idyllic coastal village of Havstenssund, just a stone’s throw from both Grebbestad and Fjällbacka in Tanum Municipality, you’ll find Skaldjurscaféet, a charming and family-run restaurant with its roots in the sea’s pantry. With the genuine and cozy concept that has long characterized Skaldjurscaféet, the restaurant has become a hub for both locals and tourists through a strong focus on quality, sustainability, and taste.",
    ourHistoryP2: "Whether you’re looking for a tasty lunch, a sunset dinner, an authentic seafood experience, or a land-based alternative, we have something for every taste.",
    ourHistoryP3: "Welcome to Skaldjurscaféet, a small restaurant with a big flavor, in the heart of Bohuslän.",
    ourPhilosophyTitle: "Our Philosophy",
    sustainabilityTitle: "Sustainability",
    sustainabilityText: "We work only with local fishermen who use sustainable fishing methods and respect the sea and its resources.",
    localProduceTitle: "Locally Produced",
    localProduceText: "Our ingredients come from local producers, and fishing takes place in nearby waters to guarantee freshness and quality.",
    qualityTitle: "Quality",
    qualityText: "We never compromise on quality and always strive to serve the absolute freshest and most delicious dishes.",
    ourTeamTitle: "Our Team",
    founder: "Founder & Head Chef",
    manager: "Restaurant Manager",
    chef: "Chef",
    founderText: "With over 25 years of cooking experience, Erik has a unique feel for local ingredients and West Coast flavors.",
    managerText: "Maria creates the warm and welcoming atmosphere in the restaurant and ensures that each guest feels at home.",
    chefText: "Thomas's creative cooking style and passion for seafood add exciting new dimensions to our classic dishes.",
    
    // Footer
    footerTagline: "Experience the best of the West Coast's seafood in our cozy restaurant in the heart of Havstensund.",
    contactTitle: "Contact",
    allRightsReserved: "All rights reserved.",
  },
  
  // German translations
  de: {
    // Navbar
    home: "Startseite",
    menu: "Speisekarte",
    about: "Über uns",
    contact: "Kontakt",
    
    // Hero
    heroTitle: "Willkommen im Skaldjurscaféet",
    heroSubtitle: "Erleben Sie die besten Meeresfrüchte der Westküste in unserem gemütlichen Restaurant im Herzen von Havstenssund.",
    viewMenu: "Unsere Speisekarte",
    findUs: "Anfahrt",
    
    // Featured Dishes
    featuredTitle: "Unsere Spezialitäten",
    featuredSubtitle: "Wir servieren frische Meeresfrüchte von der Westküste, gefangen mit Respekt vor dem Meer und zubereitet mit Leidenschaft für gutes Essen.",
    viewFullMenu: "Vollständige Speisekarte",
    
    // About Preview
    aboutTitle: "Über Skaldjurscaféet",
    aboutParagraph1: "Seit 2005 servieren wir das Beste aus dem Meer in unserem Restaurant in Havstensund. Mit dem Meer als nächsten Nachbarn und einem persönlichen Engagement für Qualität sind wir zu einem beliebten Ziel für Einheimische und Touristen geworden.",
    aboutParagraph2: "Unsere Meeresfrüchte kommen direkt von lokalen Fischern und werden sorgfältig zubereitet, um die natürlichen Aromen zu bewahren. Hier können Sie einen authentischen Geschmack der Westküste in einer entspannten und schönen Umgebung genießen.",
    readMore: "Mehr über uns",
    
    // Contact Info
    findUsTitle: "So finden Sie uns",
    findUsParagraph: "Wir freuen uns darauf, Sie in unserem Café im idyllischen Fischereihafen von Havstensund begrüßen zu dürfen.",
    address: "Adresse",
    contactSection: "Kontakt",
    phone: "Rufen Sie an für Reservierungen oder Fragen",
    openingHours: "Öffnungszeiten",
    mondayFriday: "Täglich geöffnet: 12–spät",
    saturdaySunday: "Sa-So: 12:00 - 22:00",
    showOnMap: "Auf Karte zeigen",
    
    // Contact Form
    sendMessage: "Nachricht senden",
    contactFormInfo: "Haben Sie Fragen, möchten Sie reservieren oder uns Feedback geben? Füllen Sie das untenstehende Formular aus, und wir werden uns so bald wie möglich bei Ihnen melden.",
    name: "Name",
    email: "E-Mail",
    messageLabel: "Nachricht",
    submitButton: "Nachricht senden",
    sending: "Wird gesendet...",
    messageSent: "Nachricht gesendet!",
    messageSentDescription: "Wir werden Sie so bald wie möglich kontaktieren.",
    
    // Menu
    menuPage: "Unsere Speisekarte",
    menuPageTitle: "Vorspeise",
    menuPageSubtitle: "Zubereitet mit Liebe und den frischesten Zutaten aus dem Meer und von lokalen Produzenten",
    menuDescription: "Unsere Speisekarte ändert sich je nach Saison und Verfügbarkeit, aber unten finden Sie eine Auswahl unserer beliebtesten Gerichte. Alle Meeresfrüchte werden mit Brot, Zitrone, Aioli und Beilagen serviert.",
    allergiesNote: "Allergien oder Diätanforderungen? Informieren Sie unser Personal, und wir helfen Ihnen mit Alternativen.",
    //varmrätt
    SkagenRollName: "Skagen roll",
    SkagenRollDescription: "Serviert mit Briochebrot und garniert mit frischem Dill",
    CharkChipsName: "CharkChips",
    CharkChipsDescription: "Chips mit Creme aus Käse aus Västerbotten, Schweden, luftgetrocknetem Schinken und Kresse",
    RöktaRäkorName: "Geräucherte Garnelen",
    RöktaRäkorDescription: "Hausgeräucherte Garnelen, serviert mit frischem Brot und Aioli",
    CapreseName: "Caprese",
    CapreseDescription: "Tomaten, geschichtet mit Mozzarella, garniert mit Balsamico und Basilikum",
    //
    friedChicken: "Chicken nuggets",
    friedChickenDescription: "Serviert mit Pommes frites & Mayonnaise",
    pancakes: "Pfannkuchen",
    pancakesDescription: "Serviert mit Schlagsahne & Erdbeermarmelade",
    // Hauptgerichte
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serviert mit Kräuter-Pommes und Remouladensauce",
fishSoup: "Fisch- und Meeresfrüchtesuppe",
fishSoupDescription: "Serviert mit frischem Brot",
havstenssundBox: "Havstenssund Box",
havstenssundBoxDescription: "Frische Krebse aus Havstenssund, serviert mit frischem Brot & Aioli",
caesarSalad: "Caesar Salad",
caesarSaladDescription: "Wählen Sie zwischen Hühnchen/Garnelen/Halloumi",
shrimpSandwich: "Shrimpsandwich",
shrimpSandwichDescription: "Handgeschälte Garnelen auf Brot mit Ei, Mayonnaise, Salat, Tomaten und eingelegten roten Zwiebeln",
burger: "Burger",
burgerDescription: "150 g schwedisches Rindernacken, Väddö-Cheddar, Bacon, knackiger Salat, eingelegte Silberzwiebeln, Tomate & Brioche",
TodaysCatch: "Fang des Tages",
TodaysCatchDescription: "Serviert mit jungen Kartoffeln, Champagnersauce und Fenchelsalat, garniert mit Dill und Zitrone",

// Desserts
Pavlova: "Pavlova",
PavlovaDescription: "Italienische Baiser, garniert mit Sahne und frischen Beeren",
brownie: "Brownie",
brownieDescription: "Serviert mit Sahne und frischen Beeren",
Gelato: "Gelato",
GelatoDescription: "Fragen Sie das Personal nach der Geschmacksrichtung",



    
    // Menu Categories
    starters: "Vorspeisen",
    mains: "Hauptgerichte",
    desserts: "Desserts",
    drinks: "Für die Kleinen",
    
    // About
    aboutUsTitle: "Über uns",
    aboutUsSubtitle: "Lernen Sie die Geschichte hinter Skaldjurscaféet und unsere Leidenschaft für gutes Essen und lokale Tradition kennen",
    ourHistoryTitle: "Unsere Geschichte",
    ourHistoryP1: "Mitten im idyllischen Küstendorf Havstenssund, nur einen Steinwurf von Grebbestad und Fjällbacka in der Gemeinde Tanum entfernt, liegt das Skaldjurscaféet, ein charmantes und familiäres Restaurant mit Wurzeln in der Vorratskammer des Meeres. Mit dem echten und gemütlichen Konzept, das das Skaldjurscaféet seit langem prägt, ist es durch einen starken Fokus auf Qualität, Nachhaltigkeit und Geschmack zu einem Treffpunkt für Einheimische und Touristen geworden.",
    ourHistoryP2: "Egal, ob Sie auf der Suche nach einem köstlichen Mittagessen, einem Abendessen bei Sonnenuntergang, einem authentischen Meeresfrüchteerlebnis oder einer Alternative vom Land sind – bei uns ist für jeden Geschmack etwas dabei.",
    ourHistoryP3: "Willkommen im Skaldjurscaféet, einem kleinen Restaurant mit großem Geschmack im Herzen von Bohuslän.",
    ourPhilosophyTitle: "Unsere Philosophie",
    sustainabilityTitle: "Nachhaltigkeit",
    sustainabilityText: "Wir arbeiten nur mit lokalen Fischern zusammen, die nachhaltige Fischereimethoden anwenden und das Meer und seine Ressourcen respektieren.",
    localProduceTitle: "Lokal produziert",
    localProduceText: "Unsere Zutaten stammen von lokalen Produzenten, und der Fischfang findet in nahe gelegenen Gewässern statt, um Frische und Qualität zu garantieren.",
    qualityTitle: "Qualität",
    qualityText: "Wir machen keine Kompromisse bei der Qualität und bemühen uns stets, die absolut frischesten und köstlichsten Gerichte zu servieren.",
    ourTeamTitle: "Unser Team",
    founder: "Gründer & Küchenchef",
    manager: "Restaurantleiterin",
    chef: "Koch",
    founderText: "Mit über 25 Jahren Kocherfahrung hat Erik ein einzigartiges Gespür für lokale Zutaten und die Aromen der Westküste.",
    managerText: "Maria schafft die warme und einladende Atmosphäre im Restaurant und sorgt dafür, dass sich jeder Gast wie zu Hause fühlt.",
    chefText: "Thomas' kreativer Kochstil und seine Leidenschaft für Meeresfrüchte bringen aufregende neue Dimensionen in unsere klassischen Gerichte.",
    
    // Footer
    footerTagline: "Erleben Sie die besten Meeresfrüchte der Westküste in unserem gemütlichen Restaurant im Herzen von Havstensund.",
    contactTitle: "Kontakt",
    allRightsReserved: "Alle Rechte vorbehalten.",
  }
};

// Function to get translations for the current language
export const getTranslations = (language: LanguageCode): TranslationKeys => {
  return translations[language];
};
