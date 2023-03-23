"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5623],{5300:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=i(7462),r=(i(7294),i(3905));i(5657);const a={sidebar_position:2},l="Konfiguration",s={unversionedId:"guides/setup",id:"guides/setup",title:"Konfiguration",description:"Einrichtung und Konfiguration",source:"@site/docs/guides/setup.mdx",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/guides/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tipps und FAQ",permalink:"/docs/guides/"},next:{title:"Laden",permalink:"/docs/guides/charging"}},d={},u=[{value:"Einrichtung und Konfiguration",id:"einrichtung-und-konfiguration",level:2},{value:"Syntax-Fehler in der evcc.yaml finden",id:"syntax-fehler-in-der-evccyaml-finden",level:3},{value:"Etwas funktioniert nicht. Was nun?",id:"etwas-funktioniert-nicht-was-nun",level:3},{value:"Wie kann ich ein Logfile zur Fehleranalyse erstellen?",id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen",level:3},{value:"weiterf\xfchrende Hilfe bei der Ger\xe4teerkennung",id:"weiterf\xfchrende-hilfe-bei-der-ger\xe4teerkennung",level:3},{value:"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)",id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber",level:3},{value:"Fehler: <code>connection refused</code>",id:"fehler-connection-refused",level:3},{value:"Fehler: <code>i/o timeout</code>",id:"fehler-io-timeout",level:3},{value:"Fehler: <code>/tmp/evcc: operation not permitted</code> oder/und <code>bind: address already in use</code>",id:"fehler-tmpevcc-operation-not-permitted-oderund-bind-address-already-in-use",level:3},{value:"Telemetry &amp; Community Daten",id:"telemetry--community-daten",level:3},{value:"Ersparnisberechnung",id:"ersparnisberechnung",level:3}],o={toc:u},c="wrapper";function g(e){let{components:n,...i}=e;return(0,r.kt)(c,(0,t.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"konfiguration"},"Konfiguration"),(0,r.kt)("h2",{id:"einrichtung-und-konfiguration"},"Einrichtung und Konfiguration"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In evcc sind sehr viele individuelle Einstellungen m\xf6glich. Die Default-Einstellungen der Parameter beruhen auf Erfahrungswerten und im Allgemeinen sind keine \xc4nderungen notwendig."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Bei Individualisierung, bitte folgendes beachten:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Da sich die Parameter teilweise gegenseitig beeinflussen, wird dringend empfohlen, \xc4nderungen an diesen Einstellungen nur einzeln vorzunehmen und die Auswirkungen zu testen, bevor weitere \xc4nderungen vorgenommen werden.")))),(0,r.kt)("h3",{id:"syntax-fehler-in-der-evccyaml-finden"},"Syntax-Fehler in der evcc.yaml finden"),(0,r.kt)("p",null,"yaml ist sehr syntax-empfindlich. Fehler fallen nicht immer sofort ins Auge."),(0,r.kt)("p",null,"Eine schnelle Hilfe bieten yaml-Tester wie z.B. (",(0,r.kt)("a",{parentName:"p",href:"https://onlineyamltools.com/validate-yaml"},"https://onlineyamltools.com/validate-yaml"),")"),(0,r.kt)("h3",{id:"etwas-funktioniert-nicht-was-nun"},"Etwas funktioniert nicht. Was nun?"),(0,r.kt)("p",null,"Bei evcc gibt es einen ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"Community Support"),". Hier helfen sowohl Entwickler als auch Anwender bei verschiedenen Problemen. Es w\xe4re gut dabei m\xf6glichst genaue Informationen zu folgenden Bereichen mitzuteilen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Welche Ger\xe4te (Fahrzeug, Hausinstallation, Wallbox) werden verwendet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Die Konfigurationsdatei ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml"),","))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"d.h. deren Inhalt (*bitte Benutzernamen, Passw\xf6rter und \xe4hnliches entfernen*)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"egrep -v '^#|^\\s+#' evcc.yaml |grep . |sed -E 's/(password|user|token|url|host|broker).*/\\1: *****/'"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"alternativ kann mit ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc dump --cfg >~/config.txt")," eine anonymisierte Konfigurationsdatei erstellt und unter dem angegebenen Namen im Home-Verzeichnis gespeichert werden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Eine m\xf6glichst genaue Beschreibung was das Problem ist."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Erste Hilfe")),(0,r.kt)("p",null,"Zur Erleichterung wurde eine Erste-Hilfe Funktionalit\xe4t entwickelt. Durch Eingabe von ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc discuss"),' auf der Kommandozeile wird ein neuer Diskussionsbeitrag in der Rubrik "Erste Hilfe" erstellt. Dieser Beitrag beinhaltet automatisch die Fehlermeldung(en) und die anonymisierte Konfigurationsdatei. Erg\xe4nzt werden muss nur noch ein aussagekr\xe4ftiger Titel und eine Problembeschreibung.\nDiese Erste-Hilfe ist jeweils nur f\xfcr die Erst-Erstellung eines Diskussionsbeitrages nutzbar. Sind im Zuge der L\xf6sungsfindung weitere Informationen notwendig, m\xfcssen diese h\xe4ndisch erstellt werden.'),(0,r.kt)("p",null,"Wir versuchen nat\xfcrlich Probleme so gut es geht zu vermeiden, aber das kann aufgrund der Komplexit\xe4t leider nicht immer gelingen."),(0,r.kt)("h3",{id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen"},"Wie kann ich ein Logfile zur Fehleranalyse erstellen?"),(0,r.kt)("p",null,"evcc gibt in seiner Standard Konfiguration nur dann Fehlermeldungen aus, wenn ein Fehler auftritt (siehe auch ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/log#log"},(0,r.kt)("inlineCode",{parentName:"a"},"log"))," Parameter in der ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml"),")."),(0,r.kt)("p",null,"Wenn evcc auf der Konsole ausgef\xfchrt wird, werden die ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," Nachrichten einfach in die normale Ausgabe geleitet."),(0,r.kt)("p",null,"Mittels ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc charger")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc meter")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," k\xf6nnen auf der Kommandozeile die verschiedenen Ger\xe4tetype getestet werden. Dabei kommt der in ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," konfigurierte Log-Parameter (siehe oben) zum Einsatz. Will man davon abweichende Tests durchf\xfchren, kann der Log-Parameter beim Aufruf entsprechend erg\xe4nzt werden."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Beispiel: evcc -l debug meter")),(0,r.kt)("p",null,"Wird evcc als Linux Systemdienst, wie unter ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/manual#autostart"},"Linux Autostart")," beschrieben, ausgef\xfchrt, k\xf6nnen die log-Nachrichten \xfcber folgende Befehle verfolgt, bzw. aufgelistet werden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kontinuierliche Anzeige der evcc log Meldungen",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"sudo journalctl -fau evcc")),(0,r.kt)("li",{parentName:"ul"},"Anzeige der evcc log Meldungen seit dem letzten Start des evcc Services (Abbruch mit Strg-c)",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"sudo journalctl -u evcc -q"),"  "),(0,r.kt)("li",{parentName:"ul"},"Speichern der Log-Ausgabe oben in eine Datei im Home-Verzeichnis",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"sudo journalctl -u evcc -q > ~/evcc.log")),(0,r.kt)("li",{parentName:"ul"},"erg\xe4nzend kann auch noch Start- (",(0,r.kt)("inlineCode",{parentName:"li"},"-S"),") und Endzeitpunkt (",(0,r.kt)("inlineCode",{parentName:"li"},"-U"),") der Log-Ausgabe bestimmt werden",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},'sudo journalctl -u evcc -S "2023-03-21 07:00:00" -U "2023-03-21 08:00:00" -q > ~/evcc.log'))),(0,r.kt)("p",null,"Weiterf\xfchrende Hilfe: ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ubuntuusers.de/systemd/journalctl/"},"wiki.ubuntuusers.de/systemd/journalctl")),(0,r.kt)("p",null,"Im Falle einer Docker Installation kann man \xfcber ",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs")," die Nachrichten anzeigen lassen, siehe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/"},"Docker Dokumentation")),(0,r.kt)("h3",{id:"weiterf\xfchrende-hilfe-bei-der-ger\xe4teerkennung"},"weiterf\xfchrende Hilfe bei der Ger\xe4teerkennung"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"evcc detect"),' ist ein spezielles Kommando, welches eine Art Hardwareerkennung und Netzwerksuche f\xfcr bestimmt Ger\xe4te erm\xf6glicht.\nInsbesondere hilft es manchmal bei der ersten Einsch\xe4tzung von "neuen" SunSpec-kompatiblen Modbus-Ger\xe4ten und bei der Validierung von IP-Konfigurationen.\nEs ist aber mehr ein Entwickler- und Supporttool zu Diagnosezwecken und erkennt auch nur einen nicht n\xe4her definierbaren Ger\xe4tetypenkreis.'),(0,r.kt)("h3",{id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber"},"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)"),(0,r.kt)("p",null,"Es kommt immer wieder vor, dass Fehler in der Konfiguration \xfcbersehen werden und der Service gestartet wird. Dabei wird der Start von evcc abgebrochen, ohne das es daf\xfcr einen Hinweis gibt. Ergebnis ist, dass das UI nicht erreichbar ist."),(0,r.kt)("p",null,"In dem Fall sollte man evcc durch Eingabe von ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc")," auf der Kommandozeile starten. Dort werden dann auch Fehlerhinweise gegeben, die den Start des Service verhindert haben."),(0,r.kt)("p",null,"Mittels der oben genannten Tests kann man diesen Fehlern auf den Grund gehen und beheben. Erst wenn alles fehlerfrei ist, sollte der Service gestartet werden."),(0,r.kt)("h3",{id:"fehler-connection-refused"},"Fehler: ",(0,r.kt)("inlineCode",{parentName:"h3"},"connection refused")),(0,r.kt)("p",null,"Die IP-Verbindung zum betreffenden Ger\xe4t ist prinzipiell vorhanden, jedoch wird der Verbindungsaufbau von diesem Ger\xe4t zum angegebenen Port abgewiesen."),(0,r.kt)("p",null,"Die Gr\xfcnde daf\xfcr k\xf6nnen vielf\xe4ltig sein. Typisch sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der am Ger\xe4t offene Port stimmt nicht mit dem in der evcc-Konfiguration angegebenen Zielport \xfcberein."),(0,r.kt)("li",{parentName:"ul"},"Der externe Zugriff auf das Ger\xe4t ist nicht aktiviert (z.B. bei Solaredge-Wechselrichtern im Auslieferungszustand)."),(0,r.kt)("li",{parentName:"ul"},"Die maximal m\xf6gliche Anzahl an parallelen Verbindungen die das Zielger\xe4t verwalten kann ist ersch\xf6pft. Andere Verbindungen z. B. von Hausautomationen, Scripten oder weiteren Instanzen von evcc m\xfcssen ggf. zun\xe4chst beendet werden bevor eine neue Verbindung m\xf6glich ist. Im ung\xfcnstigsten Fall l\xe4sst das Zielsystem nur eine einzige Verbindung zu."),(0,r.kt)("li",{parentName:"ul"},"Blockade durch eine Firewall")),(0,r.kt)("h3",{id:"fehler-io-timeout"},"Fehler: ",(0,r.kt)("inlineCode",{parentName:"h3"},"i/o timeout")),(0,r.kt)("p",null,"Hier ist eine Verbindung zum Ger\xe4t ggf. vorhanden, jedoch antwortet das Zielsystem nicht innerhalb der vorgesehenen Zeit. Entweder kommt die Anfrage gar nicht beim Zielsystem an, geht auf dem R\xfcckweg verloren oder die Antwort dauert zu lange."),(0,r.kt)("p",null,"Typische Gr\xfcnde sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Langsame oder schlechte Netzwerkverbindung (insbesondere bei Verbindungen \xfcber WiFi oder PowerLAN)"),(0,r.kt)("li",{parentName:"ul"},"Fehlerhafte oder ungeeignete Verkabelung oder (bei RS485) falsche Terminierung"),(0,r.kt)("li",{parentName:"ul"},"Das Zielger\xe4t ist \xfcberlastet oder ausgefallen"),(0,r.kt)("li",{parentName:"ul"},"Bestimmte Funktionen des Ger\xe4ts sind nicht wie von evcc erwartet verf\xfcgbar (z. B. durch veraltete Firmware oder abweichende Konfigurationseinstellungen)"),(0,r.kt)("li",{parentName:"ul"},"Zu kurze Timeout- oder Abfragezykluszeiten seitens evcc")),(0,r.kt)("h3",{id:"fehler-tmpevcc-operation-not-permitted-oderund-bind-address-already-in-use"},"Fehler: ",(0,r.kt)("inlineCode",{parentName:"h3"},"/tmp/evcc: operation not permitted")," oder/und ",(0,r.kt)("inlineCode",{parentName:"h3"},"bind: address already in use")),(0,r.kt)("p",null,"Diese Fehlermeldung erscheint, wenn z B. evcc bereits als Dienst l\xe4uft und evcc zus\xe4tzlich ein weiteres mal auf der Kommandozeile (durch Eingabe ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc"),") gestartet wird, ggf. auch noch mit unterschiedlichen Benutzerberechtigungen. Es darf immer nur eine einzige Instanz von evcc zur gleichen Zeit laufen."),(0,r.kt)("p",null,"Eine Pr\xfcfung, ob mehrere evcc Prozesse laufen, kann unter Linux mit Hilfe von ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," erfolgen."),(0,r.kt)("p",null,"Sollte es Gr\xfcnde geben, evcc auf der Kommandoebene zu starten, sollte vorher der Dienst mit ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl stop evcc")," beendet werden."),(0,r.kt)("h3",{id:"telemetry--community-daten"},"Telemetry & Community Daten"),(0,r.kt)("p",null,"Auf der ",(0,r.kt)("a",{parentName:"p",href:"https://evcc.io/#live"},"evcc Webseite"),' und im "Auswertung Ladeenergie" Dialog der evcc-UI zeigen wir aggregierte Live-Ladedaten der evcc-Installationen an. Wir sammeln diese Daten auf unserer zentralen api.evcc.io Instanz. Die Teilnahme daran ist selbstverst\xe4ndlich freiwillig.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wie kann ich teilnehmen?")),(0,r.kt)("p",null,'Im "Auswertung Ladeenergie" Dialog kannst du unter "Live-Community" deine Daten teilen. Bislang konnte die Funktion auch \xfcber ',(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/telemetry/"},(0,r.kt)("inlineCode",{parentName:"a"},"telemetry: true")),' aktiviert werden. Dieser Weg ist nun allerdings veraltet ("deprecated").'),(0,r.kt)("p",null,"F\xfcr die Teilnahme ist aktuell ein \ud83d\udc9a Sponsor Token erforderlich. Der Hauptgrund daf\xfcr ist die Datenqualit\xe4t hoch zu halten und Fake-Daten zu minimieren."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Was wird aktuell \xfcbertragen?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aktuelle Ladeleistung"),(0,r.kt)("li",{parentName:"ul"},"aktueller Anteil an Sonnenstrom"),(0,r.kt)("li",{parentName:"ul"},"geladene Energiemenge"),(0,r.kt)("li",{parentName:"ul"},"geladener Anteil an Sonnenenergie")),(0,r.kt)("p",null,"M\xf6glicherweise werden wir zuk\xfcnftig noch weitere Daten hinzuf\xfcgen. Dies werden aber auf keinen Fall personenbezogene Daten oder private Installationsdaten (Adresse, Zug\xe4nge) sein. Eure Privatsph\xe4re ist uns wichtig!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Was passiert mit den Daten?")),(0,r.kt)("p",null,"Wir speichern die Energiemengen aggregiert pro evcc-Instanz. Wir bilden keine Nutzerprofile \xfcber Zeit und haben auch kein Interesse daran dies zuk\xfcnftig zu tun."),(0,r.kt)("p",null,"Unser Ziel ist es durch diese Daten mehr neue Nutzer f\xfcr evcc zu begeistern, selbst mehr \xfcber das Nutzungsverhalten von evcc zu erfahren und vor allem das durch evcc nutzbar gemachte Potenzial regenerativer Sonnenenergie zu visualsieren."),(0,r.kt)("p",null,"Die dargestellten aggregierten Gesamtdaten k\xf6nnen auch frei \xfcber ",(0,r.kt)("a",{parentName:"p",href:"https://api.evcc.io/v1/total"},"https://api.evcc.io/v1/total")," abgerufen werden. Wenn ihr also Ideen f\xfcr eigene kreative Visualisierungen habt, baut gerne was und erz\xe4hlt uns davon."),(0,r.kt)("p",null,"Mehr Informationen findest du auch auf unserer ",(0,r.kt)("a",{parentName:"p",href:"https://sponsor.evcc.io/privacy"},"Datenschutzseite"),"."),(0,r.kt)("h3",{id:"ersparnisberechnung"},"Ersparnisberechnung"),(0,r.kt)("p",null,"In der evcc Oberfl\xe4che wird dir unten rechts angezeigt wieviel Prozent deiner geladenen Energie aus eigenem Sonnenstrom stammt (Beispiel: ",(0,r.kt)("strong",{parentName:"p"},"85% Sonnenenergie"),").\nBeim Klick darauf \xf6ffnet sich ein Dialog der mehr Details zur Ladenergie und deinen eingesparten Kosten zeigt.\nDamit diese Werte korrekt sind musst du deinen Energie- und Einspeisepreis in der Konfiguration hinterlegen.\nHier ein Beispiel:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    type: fixed\n    price: 0.08 # [currency]/kWh\n")),(0,r.kt)("p",null,"Mehr Details zur Konfiguration findest du in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/tariffs"},(0,r.kt)("inlineCode",{parentName:"a"},"tariffs")),"."),(0,r.kt)("p",null,"F\xfcr die Berechnung der Einsparungen erfasst evcc grob die Gesamtmenge der geladenen Energie und die verwendeten Energiequellen (Netz, Batterie, PV)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Was ist Sonnenenergie?")),(0,r.kt)("p",null,"Die direkte PV-Nutzung und die vom Batteriesystem bereitgestellte Energie werden bei dieser Berechnung gleich behandelt.\nevcc geht davon aus, dass der Hausspeicher prim\xe4r zur Speicherung von \xfcbersch\xfcssigem, selbstproduzierten Sonnenstrom verwendet wird.\nErf\xfcllt der Speicher auch netzdienliche Leistungen (bspw. Sonnen) oder f\xfchrt eine Kalibrierung mit Netzstrom durch, ist diese Annahme nicht immer korrekt.\nBatterieverluste durch die Umwandlung werden nicht ber\xfccksichtigt."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Berechnung von Ersparnis und effektivem Energiepreis")),(0,r.kt)("p",null,"Der Algorithmus unterscheidet zwischen Netzstrom und selbst erzeugter Sonnenenergie (PV, Batterie).\nDer Kostenvorteil deiner Sonnenenergie ergibt sich aus der Differenz zwischen deinem Netzbezugspreis (z.B. 0,294 EUR/kWh) und deinem Einspeisetarif (z.B. 0,08 EUR/kWh).\nJede geladene kWh selbst produzierter Energie ist in diesem Beispiel 0,214 EUR (0,294 - 0,08 EUR) g\xfcnstiger als der Netzbezug.\nHast du 10 kWh eigene Energie geladen entspricht das einer ",(0,r.kt)("strong",{parentName:"p"},"Ersparnis")," von 2,14 EUR."),(0,r.kt)("p",null,"W\xfcrdest du dein Auto zu 100% mit eigener Sonnenenergie laden entspricht der angezeigte ",(0,r.kt)("strong",{parentName:"p"},"effektive Energiepreis")," deiner, nicht eingenommenen, Einspeiseverg\xfctung (bspw. 0,08 EUR/kWh).\nL\xe4dst du dein Auto zu 50% aus Sonnenenergie und zu 50% aus Netzstrom passt sich der Energiepreis entsprechend an (bspw. 0,187 EUR/kWh)."),(0,r.kt)("p",null,"Wenn du keine Einspeiseverg\xfctung erh\xe4lst, kannst du den Einspeisepreis auf 0 setzen.\nDie Sonnenenergie wird dann als kostenlos gerechnet.\nMusst du deine selbstgenutzte Energie versteuern kannst du den Steuersatz auf deine Einspeiseverg\xfctung aufschlagen um realistischere Zahlen zu bekommen."),(0,r.kt)("p",null,"Uns ist klar, dass diese Einsparung nicht allein evcc zuzuschreiben ist.\nSteckst du dein Auto an einem sonnigen Tag an eine Wallbox wird ein Teil der geladenen Energie auch Sonnenstrom sein.\nevcc hilft dir aber den Anteil der geladenen Sonnenenergie zu maximieren."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Berechnung des Sonnenenergieanteils")),(0,r.kt)("p",null,"Wenn du gleichzeitig Energie aus mehreren Quellen beziehst (z.B. 50% Netz, 50% PV), wird der Algorithmus die Energiequellen gleichm\xe4\xdfig verteilen.\nEr geht davon aus, dass dein Hausverbrauch und deine aktiven Lastpunkte jeweils einen Energiemix von 50/50 verwenden.\nDas Laden des Autos wird in diesem Modell genau so behandelt wie das Verwenden der Waschmaschine."),(0,r.kt)("p",null,"Flexible Preise (Awattar, Tibber) werden f\xfcr die Ermittlung des effektiven Energiepreises ber\xfccksichtigt.\nDer Ersparnisbetrag wird allerdings immer in relation zum aktuell g\xfcltigen Energiepreis ermittelt."))}g.isMDXComponent=!0}}]);