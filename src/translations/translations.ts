
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
  //huvudrätt
  lobsterRollName: string;
  lobsterRollDescription: string;
  bruschettaName: string;
  bruschettaDescription: string;
  cevicheName: string;
  cevicheDescription: string;
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
  steakFrites: string;
  steakFritesDescription: string;
  // Desserter
  cremeBrulee: string;
  cremeBruleeDescription: string;
  brownie: string;
  brownieDescription: string;
  etonMess: string;
  etonMessDescription: string;
  iceCream: string;
  iceCreamDescription: string;

  
  
  
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
    heroSubtitle: "Upplev det bästa av västkustens skaldjur i vår mysiga restaurang i hjärtat av Havstensund.",
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
    mondayFriday: "Mån-Fre: 11:00 - 21:00",
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
    menuPageTitle: "Förrätt",
    menuPageSubtitle: "Tillagad med kärlek och de färskaste råvarorna från havet och lokala producenter",
    menuDescription: "Vår meny ändras efter säsong och tillgång, men nedan finner du ett urval av våra mest populära rätter. Alla skaldjur serveras med bröd, citron, aioli och tillbehör.",
    allergiesNote: "Allergier eller specialkost? Informera vår personal så hjälper vi dig med alternativ.",
    //Förrätt
    lobsterRollName: "Norwegian lobsterroll",
    lobsterRollDescription: "Serveras med briochebröd & toppat med färsk dill",
    bruschettaName: "Bruschetta",
    bruschettaDescription: "Rostat bröd med hackad tomat, basilika & vitlök",
    cevicheName: "Ceviche",
    cevicheDescription: "Serveras med egengjord nachos & koriander",
    //till de små
    friedChicken: "Friterad kyckling",
    friedChickenDescription: "Serveras med pommes & majonäs",
    pancakes: "Pannkakor",
    pancakesDescription: "Serveras med grädde & jordgubbssylt",
    // Huvudrätter
  fishAndChips: "Fish & chips",
  fishAndChipsDescription: "Serveras med örtslungade pommes & tartarsås",
  fishSoup: "Fisk & skaldjurs soppa",
  fishSoupDescription: "Serveras med färskt bröd",
  havstenssundBox: "Havstenssundslåda",
  havstenssundBoxDescription: "Färska räkor & kräftor från Havstenssund serveras med färskt bröd & aioli",
  caesarSalad: "Ceasarsallad",
  caesarSaladDescription: "Välj mellan friterad kyckling/räkor/halloumi",
  shrimpSandwich: "Räkmacka",
  shrimpSandwichDescription: "Handskalade räkor på bröd med ägg, majonäs, sallad, tomat & picklad rödlök",
  burger: "Burgare",
  burgerDescription: "180 gram högrev, Väddö cheddar, picklad rödlök, crispsallad, tomat, brioche & tryffelmayo. Serveras med örtslungade pommes",
  steakFrites: "Steak frites",
  steakFritesDescription: "Serveras med örtslungade pommes, tomatsallad och bearnaisesås",
  
  // Desserter
  cremeBrulee: "Crème Brûlee",
  cremeBruleeDescription: "Toppad med färska bär",
  brownie: "Brownie",
  brownieDescription: "Serveras med grädde & färska bär",
  etonMess: "Eton mess",
  etonMessDescription: "Svensk marängsviss med limemarinerade svenska jordgubbar varvat med grädde och maräng",
  iceCream: "Glass",
  iceCreamDescription: "Hallonsorbet/choklad/vanilj/apelsinchoklad",


    
    // Menu Categories
    starters: "Förrätter",
    mains: "Huvudrätter",
    desserts: "Efterrätter",
    drinks: "Till de små",
    
    // About
    aboutUsTitle: "Om oss",
    aboutUsSubtitle: "Lär känna historien bakom Skaldjurscaféet och vår passion för god mat och lokal tradition",
    ourHistoryTitle: "Vår Historia",
    ourHistoryP1: "Skaldjurscaféet grundades 2005 av syskonen Lisa och Erik Lindgren, som båda är uppvuxna i Havstensund och har en djup kärlek till havet och den lokala matkulturen. Med erfarenheter från restaurangbranschen och en passion för färska, lokala råvaror, öppnade de ett litet café som erbjöd enkla men smakrika skaldjursrätter.",
    ourHistoryP2: "Genom åren har Skaldjurscaféet vuxit från ett enkelt café till en älskad restaurang som bevarar den genuina känslan och starka kopplingen till det lokala fiskesamhället. Vi är stolta över att kunna erbjuda en autentisk smakupplevelse av västkustens rikedomar.",
    ourHistoryP3: "Idag drivs verksamheten av Erik tillsammans med hans fru Maria, som med sin kärlek till god mat och högklassig service fortsätter att göra Skaldjurscaféet till en av västkustens gastronomiska pärlor.",
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
    heroSubtitle: "Opplev det beste av vestskystens skalldyr i vår koselige restaurant i hjertet av Havstensund.",
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
    mondayFriday: "Man-Fre: 11:00 - 21:00",
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
    //huvudrätt
    lobsterRollName: "Norsk hummer-roll",
    lobsterRollDescription: "Serveres med briochebrød og toppet med frisk dill",
    bruschettaName: "Bruschetta",
    bruschettaDescription: "Ristet brød med hakket tomat, basilikum og hvitløk",
    cevicheName: "Ceviche",
    cevicheDescription: "Serveres med hjemmelagde nachos og koriander",
    //till de små
    friedChicken: "Fritert kylling",
    friedChickenDescription: "Serveres med pommes frites & majones",
    pancakes: "Pannekaker",
    pancakesDescription: "Serveres med krem & jordbærsyltetøy",
    // Hovedretter
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serveres med urteskylt pommes og tartarsaus",
fishSoup: "Fisk- og skalldyrsuppe",
fishSoupDescription: "Serveres med ferskt brød",
havstenssundBox: "Havstenssund-boks",
havstenssundBoxDescription: "Ferske reker og kreps fra Havstenssund serveres med ferskt brød og aioli",
caesarSalad: "Caesarsalat",
caesarSaladDescription: "Velg mellom fritert kylling/reker/halloumi",
shrimpSandwich: "Rekesandwich",
shrimpSandwichDescription: "Håndpillede reker på brød med egg, majones, salat, tomat og syltet rødløk",
burger: "Hamburger",
burgerDescription: "180 gram høyrygg, Väddö cheddar, syltet rødløk, crispsalat, tomat, brioche og trøffelmajones. Serveres med urteskylt pommes",
steakFrites: "Steak frites",
steakFritesDescription: "Serveres med urteskylt pommes, tomatsalat og béarnaisesaus",

// Desserter
cremeBrulee: "Crème Brûlée",
cremeBruleeDescription: "Toppet med ferske bær",
brownie: "Brownie",
brownieDescription: "Serveres med krem og ferske bær",
etonMess: "Eton mess",
etonMessDescription: "Svensk marengs med limemarinerte svenske jordbær, lagt lagvis med krem og marengs",
iceCream: "Iskrem",
iceCreamDescription: "Hindbærsorbet/sjokolade/vanilje/appelsinsjokolade",


    
    // Menu Categories
    starters: "Forretter",
    mains: "Hovedretter",
    desserts: "Desserter",
    drinks: "For de små",
    
    // About
    aboutUsTitle: "Om oss",
    aboutUsSubtitle: "Bli kjent med historien bak Skalldyrkafeen og vår lidenskap for god mat og lokal tradisjon",
    ourHistoryTitle: "Vår Historie",
    ourHistoryP1: "Skalldyrkafeen ble grunnlagt i 2005 av søsknene Lisa og Erik Lindgren, som begge er oppvokst i Havstensund og har en dyp kjærlighet til havet og den lokale matkulturen. Med erfaring fra restaurantbransjen og en lidenskap for ferske, lokale råvarer, åpnet de en liten kafé som tilbød enkle men smakfulle skalldyrretter.",
    ourHistoryP2: "Gjennom årene har Skalldyrkafeen vokst fra en enkel kafé til en populær restaurant som bevarer den genuine følelsen og den sterke koblingen til det lokale fiskersamfunnet. Vi er stolte av å kunne tilby en autentisk smaksopplevelse av vestkystens rikdommer.",
    ourHistoryP3: "I dag drives virksomheten av Erik sammen med hans kone Maria, som med sin kjærlighet til god mat og høykvalitetsservice fortsetter å gjøre Skalldyrkafeen til en av vestkystens gastronomiske perler.",
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
    heroSubtitle: "Oplev det bedste af vestskystens skaldyr i vores hyggelige restaurant i hjertet af Havstensund.",
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
    mondayFriday: "Man-Fre: 11:00 - 21:00",
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
    lobsterRollName: "Norsk hummer-roll",
    lobsterRollDescription: "Serveres med briochebrød og toppet med frisk dild",
    bruschettaName: "Bruschetta",
    bruschettaDescription: "Ristet brød med hakket tomat, basilikum og hvidløg",
    cevicheName: "Ceviche",
    cevicheDescription: "Serveres med hjemmelavede nachos og koriander",
    //till de små
    friedChicken: "Friteret kylling",
    friedChickenDescription: "Serveres med pommes frites & mayonnaise",
    pancakes: "Pandekager",
    pancakesDescription: "Serveres med flødeskum & jordbærsyltetøj",
    // Hovedretter
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serveres med urtesvøbte pommes og tartarsauce",
fishSoup: "Fisk- og skaldyrsuppe",
fishSoupDescription: "Serveres med frisk brød",
havstenssundBox: "Havstenssund-boks",
havstenssundBoxDescription: "Friske rejer og krebs fra Havstenssund serveres med frisk brød og aioli",
caesarSalad: "Caesarsalat",
caesarSaladDescription: "Vælg mellem friturestegt kylling/rejer/halloumi",
shrimpSandwich: "Rejesandwich",
shrimpSandwichDescription: "Håndpillede rejer på brød med æg, mayonnaise, salat, tomat og syltet rødløg",
burger: "Burger",
burgerDescription: "180 gram højre, Väddö cheddar, syltet rødløg, crispsalat, tomat, brioche og trøffelmajones. Serveres med urtesvøbte pommes",
steakFrites: "Steak frites",
steakFritesDescription: "Serveres med urtesvøbte pommes, tomatsalat og béarnaisesauce",

// Desserter
cremeBrulee: "Crème Brûlée",
cremeBruleeDescription: "Toppet med friske bær",
brownie: "Brownie",
brownieDescription: "Serveres med flødeskum og friske bær",
etonMess: "Eton mess",
etonMessDescription: "Svensk marengs med limemarinerede svenske jordbær, lagdelt med flødeskum og marengs",
iceCream: "Is",
iceCreamDescription: "Hindbærsorbet/chokolade/vanilje/appelsinchokolade",




    
    // Menu Categories
    starters: "Forretter",
    mains: "Hovedretter",
    desserts: "Desserter",
    drinks: "Til de små",
    
    // About
    aboutUsTitle: "Om os",
    aboutUsSubtitle: "Lær historien bag Skaldyrscaféen at kende og vores passion for god mad og lokal tradition",
    ourHistoryTitle: "Vores Historie",
    ourHistoryP1: "Skaldyrscaféen blev grundlagt i 2005 af søskendeparret Lisa og Erik Lindgren, som begge er vokset op i Havstensund og har en dyb kærlighed til havet og den lokale madkultur. Med erfaringer fra restaurationsbranchen og en passion for friske, lokale råvarer, åbnede de en lille café, der tilbød enkle men smagfulde skaldyrsretter.",
    ourHistoryP2: "Gennem årene er Skaldyrscaféen vokset fra en simpel café til en elsket restaurant, der bevarer den autentiske følelse og stærke tilknytning til det lokale fiskersamfund. Vi er stolte over at kunne tilbyde en autentisk smagsoplevelse af vestkystens rigdomme.",
    ourHistoryP3: "I dag drives virksomheden af Erik sammen med hans kone Maria, som med deres kærlighed til god mad og førsteklasses service fortsætter med at gøre Skaldyrscaféen til en af vestkystens gastronomiske perler.",
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
    heroSubtitle: "Experience the best of the West Coast's seafood in our cozy restaurant in the heart of Havstensund.",
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
    mondayFriday: "Mon-Fri: 11:00 - 21:00",
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
    lobsterRollName: "Norwegian Lobster Roll",
    lobsterRollDescription: "Served with brioche bread & topped with fresh dill",
    bruschettaName: "Bruschetta",
    bruschettaDescription: "Toasted bread with chopped tomatoes, basil & garlic",
    cevicheName: "Ceviche",
    cevicheDescription: "Served with homemade nachos & coriander",
    //till de små
    friedChicken: "Fried Chicken",
    friedChickenDescription: "Served with fries & mayonnaise",
    pancakes: "Pancakes",
    pancakesDescription: "Served with whipped cream & strawberry jam",
    // Mains
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Served with herbed fries & tartar sauce",
fishSoup: "Fish & seafood soup",
fishSoupDescription: "Served with fresh bread",
havstenssundBox: "Havstenssund Box",
havstenssundBoxDescription: "Fresh shrimp & crayfish from Havstenssund served with fresh bread & aioli",
caesarSalad: "Caesar Salad",
caesarSaladDescription: "Choose between fried chicken/shrimp/halloumi",
shrimpSandwich: "Shrimp Sandwich",
shrimpSandwichDescription: "Hand-peeled shrimp on bread with egg, mayonnaise, lettuce, tomato & pickled red onion",
burger: "Burger",
burgerDescription: "180 grams of high beef, Väddö cheddar, pickled red onion, crisp lettuce, tomato, brioche & truffle mayo. Served with herbed fries",
steakFrites: "Steak frites",
steakFritesDescription: "Served with herbed fries, tomato salad and béarnaise sauce",

// Desserts
cremeBrulee: "Crème Brûlée",
cremeBruleeDescription: "Topped with fresh berries",
brownie: "Brownie",
brownieDescription: "Served with cream & fresh berries",
etonMess: "Eton Mess",
etonMessDescription: "Swedish meringue with lime-marinated Swedish strawberries layered with cream and meringue",
iceCream: "Ice Cream",
iceCreamDescription: "Raspberry sorbet/chocolate/vanilla/orange chocolate",



    
    // Menu Categories
    starters: "Starters",
    mains: "Main Courses",
    desserts: "Desserts",
    drinks: "For the little ones",
    
    // About
    aboutUsTitle: "About Us",
    aboutUsSubtitle: "Get to know the history behind Skaldjurscaféet and our passion for good food and local tradition",
    ourHistoryTitle: "Our History",
    ourHistoryP1: "Skaldjurscaféet was founded in 2005 by siblings Lisa and Erik Lindgren, both raised in Havstensund with a deep love for the sea and local food culture. With experience from the restaurant industry and a passion for fresh, local produce, they opened a small café offering simple but flavorful seafood dishes.",
    ourHistoryP2: "Over the years, Skaldjurscaféet has grown from a simple café to a beloved restaurant that preserves the genuine feeling and strong connection to the local fishing community. We are proud to offer an authentic taste experience of the West Coast's riches.",
    ourHistoryP3: "Today, the business is run by Erik together with his wife Maria, who with their love for good food and high-quality service continue to make Skaldjurscaféet one of the West Coast's gastronomic gems.",
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
    heroSubtitle: "Erleben Sie die besten Meeresfrüchte der Westküste in unserem gemütlichen Restaurant im Herzen von Havstensund.",
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
    mondayFriday: "Mo-Fr: 11:00 - 21:00",
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
    lobsterRollName: "Norwegischer Hummer-Roll",
    lobsterRollDescription: "Serviert mit Briochebrot und frischem Dill",
    bruschettaName: "Bruschetta",
    bruschettaDescription: "Geröstetes Brot mit gehackten Tomaten, Basilikum und Knoblauch",
    cevicheName: "Ceviche",
    cevicheDescription: "Serviert mit hausgemachten Nachos und Koriander",
    //
    friedChicken: "Frittierte Hähnchen",
    friedChickenDescription: "Serviert mit Pommes frites & Mayonnaise",
    pancakes: "Pfannkuchen",
    pancakesDescription: "Serviert mit Schlagsahne & Erdbeermarmelade",
    // Hauptgerichte
fishAndChips: "Fish & chips",
fishAndChipsDescription: "Serviert mit Kräuterpommes und Tartarsauce",
fishSoup: "Fisch- und Meeresfrüchtesuppe",
fishSoupDescription: "Serviert mit frischem Brot",
havstenssundBox: "Havstenssund Box",
havstenssundBoxDescription: "Frische Garnelen & Krebse aus Havstenssund, serviert mit frischem Brot & Aioli",
caesarSalad: "Caesar Salad",
caesarSaladDescription: "Wählen Sie zwischen frittiertem Hühnchen/Garnelen/Halloumi",
shrimpSandwich: "Shrimpsandwich",
shrimpSandwichDescription: "Handgeschälte Garnelen auf Brot mit Ei, Mayonnaise, Salat, Tomaten und eingelegten roten Zwiebeln",
burger: "Burger",
burgerDescription: "180 Gramm Rinderhack, Väddö Cheddar, eingelegte rote Zwiebeln, Crisp-Lettuce, Tomaten, Brioche und Trüffelmayonnaise. Serviert mit Kräuterpommes",
steakFrites: "Steak frites",
steakFritesDescription: "Serviert mit Kräuterpommes, Tomatensalat und Bärlauchsoße",

// Desserts
cremeBrulee: "Crème Brûlée",
cremeBruleeDescription: "Mit frischen Beeren garniert",
brownie: "Brownie",
brownieDescription: "Serviert mit Sahne und frischen Beeren",
etonMess: "Eton Mess",
etonMessDescription: "Schwedisches Baiser mit in Limette marinierten schwedischen Erdbeeren, geschichtet mit Sahne und Baiser",
iceCream: "Eiscreme",
iceCreamDescription: "Himbeersorbet/Schokolade/Vanille/Orangen-Schokolade",



    
    // Menu Categories
    starters: "Vorspeisen",
    mains: "Hauptgerichte",
    desserts: "Desserts",
    drinks: "Für die Kleinen",
    
    // About
    aboutUsTitle: "Über uns",
    aboutUsSubtitle: "Lernen Sie die Geschichte hinter Skaldjurscaféet und unsere Leidenschaft für gutes Essen und lokale Tradition kennen",
    ourHistoryTitle: "Unsere Geschichte",
    ourHistoryP1: "Skaldjurscaféet wurde 2005 von den Geschwistern Lisa und Erik Lindgren gegründet, die beide in Havstensund aufgewachsen sind und eine tiefe Liebe zum Meer und zur lokalen Esskultur haben. Mit Erfahrung aus der Restaurantbranche und einer Leidenschaft für frische, lokale Produkte eröffneten sie ein kleines Café, das einfache, aber geschmackvolle Meeresfrüchtegerichte anbot.",
    ourHistoryP2: "Im Laufe der Jahre ist Skaldjurscaféet von einem einfachen Café zu einem beliebten Restaurant gewachsen, das das authentische Gefühl und die starke Verbindung zur lokalen Fischereigemeinschaft bewahrt. Wir sind stolz darauf, ein authentisches Geschmackserlebnis der Reichtümer der Westküste bieten zu können.",
    ourHistoryP3: "Heute wird das Unternehmen von Erik zusammen mit seiner Frau Maria geführt, die mit ihrer Liebe zu gutem Essen und hochwertigem Service Skaldjurscaféet weiterhin zu einem der gastronomischen Juwelen der Westküste machen.",
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
