import React, { Component } from "react";
import { TabContent, TabPane, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import "./../styles/mobileStyles.css";

// na razie nie uzywane, calosc jest w jednym komponencie, wiem ze syf ale nie ma czasu inaczej
import Manifest from "./mobile/Manifest";

class AppMobile extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
      activeParagraph: '0'
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleParagraph(paragraph) {
    if (this.state.activeParagraph !== paragraph) {
      this.setState({
        activeParagraph: paragraph
      });
    }
  }

  render() {

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">
            <h1>HOMAR</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" >
            <h1 className="title">Manifest: Xeno-seksualność nadchodzi z przyszłości</h1>
          </NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('1'); this.toggleNavbar() }}><p className="title">[≡] 〆(・⺫・‶)</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('2'); this.toggleNavbar() }}><p className="title">=͟͟͞͞( •̀д•́)))</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('3'); this.toggleNavbar() }}><p className="title">ಠ_ರೃ</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('4'); this.toggleNavbar() }}><p className="title">＼`•̀益•́´／</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('5'); this.toggleNavbar() }}><p className="title">૮( ᵒ̌ัૢ▱ᵒ̌ัૢ )ა</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('6'); this.toggleNavbar() }}><p className="title">༼ꉺ✺ꉺ༽</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('7'); this.toggleNavbar() }}><p className="title">༼ : ౦ ‸ ౦ : ༽</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('8'); this.toggleNavbar() }}><p className="title">／༼ ༏༏ີཻ༾ﾍ ༏༏ີཻ༾༾༽༽</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('9'); this.toggleNavbar() }}><p className="title">✌(꒡͡ ો ̼̮ ꒡͡✌)</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('10'); this.toggleNavbar() }}><p className="title">[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => { this.toggleParagraph('11'); this.toggleNavbar() }}><p className="title">༼༼;; ;°;ਊ°;༽</p></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <TabContent activeTab={this.state.activeParagraph}>
          <TabPane tabId="0">
            <Row>
              <Col sm="12">
                {Paragraph0}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">                
                {Paragraph1}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {Paragraph2}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                {Paragraph3}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                {Paragraph4}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                {Paragraph5}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                {Paragraph6}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">
                {Paragraph7}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="12">
                {Paragraph8}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="9">
            <Row>
              <Col sm="12">
                {Paragraph9}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="10">
            <Row>
              <Col sm="12">
                {Paragraph10}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="11">
            <Row>
              <Col sm="12">
                {Paragraph11}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const Paragraph0 = 
<div className="content">
  <h1 className="content vert-centered">choose ur emoji</h1>  
</div>

const Paragraph1 = 
<div className="content">
  <h1 className="content">[≡] 〆(・⺫・‶)</h1>
  <p className="content">
Xeno-polska nadchodzi z przyszłości. Wszystkie potęgi i siły ujemnego sprzężenia zwrotnego połączyły się w (re)produkcji przewidywalnych skutków i konsekwencji: Łobodziński i Dymek, Opinia Bieżąca i Wysokie Obcasy, Tygodnik Powszechny i Dwutygodnik oraz tysiące botów z jedyną funkcją crtl+c ctrl+v  - wszyscy oni, agenci®™ i agencje®™ stabilizujące zaistniałe zdarzenie w retoryce protokołów rozpisanych reakcyjnymi siatkami domykającymi nowotworzące 0 w ramach ekonomii dwójkowej wymiany.
  </p>
  <p className="content">
Prawicowy działacz kpi z molestowanej feministki: „Czy ta Pani sama siebie nie traktuje przedmiotowo?". Media zwlekają z zajęciem stanowiska „do czasu ogłoszenia wyroku” – ryzyko, jakie niesie wykroczenie z konformistycznego sceptycyzmu, zagraża ich fantazji o pozycji bezstronnego opiniotwórcy. Dwojaki wniosek wypływa z tego faktu. To, co wyalienowane, jest już przez wszystkie siły uznane za potęgę. Czas już najwyższy, abyśmy, my z prefiksem xeno-, wyłożyły otwarcie wobec całego świata obcy punkt widzenia, odległe cele, nieznane dążenia i bajce o złym dysekwilibrium przeciwstawili manifest 0-dodatniej seksualności dla xeno-polski. Napisałyśmy go z przyszłości i przeszłości, nierównomiernie dystrybuowanych poprzez układy, figury, materiały i wyobrażenia, których wielość składa się na każdy świat. Użyliśmy wszystkiego, co było udostępnione, ściągnięte, spiracone. Tego, co najbliższe, i tego, co najdalsze. Zebrałyśmy się z najróżniejszych zakątków kompleksu czasoprzestrzennego, by wyłoniła się alienomantyczna technopleksja anty-patriarchatu, oznaczona tagami: akceleracja roztopu, cienie 3D proxyself, psot-klubowa memetyczna amplifikacja, zombie tri🅱🅱y, propagacja hiperstycyjnych nośników, ekrany AI-lubrykacji, blockchain libidinalny, enkrypcyjny kamuflaż, ambientalny biohacking, voodoo antyhumanizm, komputozofia, syntetyczny feminizm, kognitywny freeganizm, XF-szczepienie, dyssypacyjna proliferacja, crustacean love, lesbijski wampiryzm, spirotemporalny demonizm, bakteryjny khattak, efektywny neo-nihilizm, transbionika, inteligentny wetware, zakażenie hy45r, wirusowa amnezja, cyberinsurekcja, schizotaktyka, pulpomutacja, neotropia, elo wale wiadro.
  </p>
  <p className="content">
Nie potrzebujemy nie-przedmiotów, nie-wyalienowanych całości wpisanych w naturalne procesy wymiany i reprodukcji. Jesteśmy wyalienowane i to kochamy - to, czego potrzebujemy i czego żądamy, to wyjście z bagna bezpośredniości skazującego nas na pustą lubrykację "naturalnego" porządku wymiany ekonomiczno-afektywnej, w którym zajmujemy dziurawe miejsce mówiących, lecz w ostatniej instancji niemych ofiar. Nie tyle pragniemy rozpuścić się w roztworze jednorodnej zasady, by nigdy więcej już nie wypowiedzieć „ja”, ile zanurzyć w plastycznolepkich płynach, w których przestaje mieć znaczenie, co i czy mówi „ja”. Każde pozna swoje. Nie jesteśmy już sobą.
  </p>  
  <p className="content">
To, co z jednej perspektywy stało się katastrofą, z innej wkracza jako pozytywna przyszłość, nieuchronna jak kropla paku węglowego, której prędkość opadania zależy od temperatury układu. Postulujemy cyberdodatniość – to znaczy: nieprzewidziane linie wyjścia poza cyberujemne struktury kontroli i równowagi, otwarcie kodu źródłowego na wielość Zewnętrznych zmian i interwencji.
  </p>  
</div>

const Paragraph2 = 
<div className="content">
  <h1 className="content">=͟͟͞͞( •̀д•́)))</h1>
  <p className="content">
Beznadziejnie pospolite wydarzenie wyciekło spod zamkniętych drzwi, eskaluje po mediach społecznościowych, zalewając wasze dotykowe, nasycone i żywe ekrany. Przemoc seksualna roi się w sypialniach, w neuronach, w algorytmach, na ulicach, wszyscy o tym wiedzą. Czujnik oświetlenia sam dostosowuje jasność ekranu do warunków zewnętrznych, a powłoka antyrefleksyjna dodatkowo go zabezpiecza i zapewnia najlepszą widoczność w warunkach natężenia światła. Oglądamy dzień zerowy, słyszysz, jak wypowiedzieliśmy wojnę tej samej, smutnej historii opowiadanej od zbyt dawna.
  </p>
  <p className="content">
Patriarchat nie sprowadza się do patologicznych zachowań jednostek. „Dymek-oprawca" i „Dymińska-ofiara" wprowadzą nas w dzień świstaka redukowania polityki do dramatu osobistych namiętności. Patriarchat to wszechogarniająca machina petryfikacji rzeczywistości w obwodach powracających agresji, przemocy, gwałtu. W żłobieniach jego matrycy snują się wyssane z mocy i wyczerpane awatary, które łączy natężenie bezsilności na osi dynamiki wiskotycznej. Martwe tkanki patriarchatu odkładają się na adresach ip, adresach pocztowych, adresach url, adresach fizycznych, adresach publicznych. Do każdego trzeba innych taktyk i technik przystosowania środowiska, by mogło nareszcie po raz pierwszy w tym eonie przejść w fazę hipertrofii. Przełączymy się do innego świata tylko działając wspólnie. Bądźmy web crawlerami indeksującymi resztki z fantazji o naturalnym, bezpośrednim świecie, rozpisanym na binaryzm kobieta/mężczyzna. Twórzmy warunki cieplarniane, zmieniajmy toksyczną oikonomię, stawajmy się koprofagami i nekrofagami. Jeśli system prawny używa nekrofauny w kryminalistyce – my składajmy jaja w świeżym mięsie, jeszcze zanim zostanie poddane obróbce estetycznej i sprzedane na kilogramy. Poświęcamy nasze larwy w rytuale doprowadzenia gnijącej kultury gwałtu do całkowitego rozkładu. Pomyślmy o tych wszystkich minerałach, jakie przedostaną się do ziemi po dezintegracji.
  </p>  
</div>

const Paragraph3 = 
<div className="content">
  <h1 className="content">ಠ_ರೃ</h1>
  <p className="content">
Patriarchat nie ma płci. Patriarchat narzuca binarność płci, organizuje wyzysk afektywny, ujarzmia za pomocą traumy. Świat po patriarchacie też nie ma płci. Xenofeministyczna utopia xxx. Wolność nie jest dana, stanowi technologiczny efekt nieustannego abstrahowania z zastanych warunków, komponowania praktyk i procedur wpinających wspólnoty w ucieczkowe obiegi, przechodzące przez stacje ulokowane w odległych galaktykach. Wirus wolności replikuje się w ciałach wytrąconych z równowagi.
  </p>
</div>

const Paragraph4 = 
<div className="content">
  <h1 className="content">＼`•̀益•́´／</h1>
  <p className="content">
W języku miłości zaprogramowanym w kodzie „niebezpiecznych związków”, szlachetności cierpienia i autentyczności ekstremalnych emocji dialektyka płci wyraża funkcję militarną, której sekwencjonowanie w modelu wojny domowej gwarantuje, że nikt nie wyjdzie z patriarchatu cało. Od prymatu orgazmu-ejakulacji, który zakłada ciało uwięzione od triggeru do triggeru, nad eksperymentowaniem z „innymi czynnościami seksualnymi" i wyprawą za wirtualnymi strefami erogennymi, po cyberujemne gry miłosne skompresowane do zdobywania poprzez reprodukcję odgórnych wytrychów sztuki uwodzenia, w których wzorce atrakcyjności przekazywane zostają w formularzu kopiuj-wklej centralnie planowanej intymności. Zerwijmy w końcu z tożsamością seksualną, z jej wielowiekowym systemem irygacji opartym na zmurszałych, sypiących się studniach pragnienia. Spójrzmy na ponadczasowe role seksualne, jak oprawca-ofiara, jak łowczy-zwierzyna, ojciec-matka, genialny_umysł-opiekunka, przebiegły_gracz-rozhisteryzowana_wiedźma...
  </p>
</div>

const Paragraph5 = 
<div className="content">
  <h1 className="content">૮( ᵒ̌ัૢ▱ᵒ̌ัૢ )ა</h1>
  <p className="content">
Nie dążymy do biurokratyzacji flirtu, zostawmy notariuszy w spokoju. Chcemy seksu, chcemy fetyszyzacji każdego skrawka skóry, chcemy warstw sztucznej skóry na warstwach kolejnej skóry, fascynują nas konstelacje, figury i pozycje, chcemy erotyki magicznej, erotyki alchemicznej, każdy element znajduje się na miejscu wyznaczonym przez diagram, którego elementy łączą się w podzespoły i poruszają zgodnie z modułem: rozkosz, pragnienie, pewność, komfort.
  </p>
  <p className="content">
Cyfrowe ja-śmierć, powstające poprzez kolecjonowanie i wymazywanie struktur tożsamości wykopuje groby i żeruje na ciałach data-trupów. Deterytorializacja wyklętych tumblr-tożsamości, podmieniając proxy, przekształcając orientacje, zakotwiczenia, memetyzuje, zakaża, wszystko, co „naturalne", w celu wykształcenia płynności eksperymentalnych przejść, pseudo-stabilizacji pomiędzy demonicznymi kodami gender. Reterytorializacja oblepia i osadza je w koniecznych gettach, naznaczonych ciężarem osobistych afektów, czy skodyfikowanej „poprawności politycznej”. Mimo to, spomiędzy namnożeń prefiksów i sufiksów -kin, -flux, -daim, wyłania się ścieżka ujścia Poza. Prześwitujące Zewnętrze wdziera się poprzez szczeliny cyberdodatniej hype-akumulacji.
  </p>
  <p className="content">
Drag jest formą tymczasowej stabilizacji seksualności, wpisywania się w konkretne rytuały wywoływania osobliwych demonów przyjemności. Drag przyjmuje wyzwanie rzucone przez konwencje, lecz zamiast odrzucać je i fantazjować o idealnym społeczeństwie wyzwolonych modelów gender, zajmuje z precyzją konkretne realness wyzyskując nadmiarowość pragnienia. Bricolaż drag angażuje przesunięcia semiotyczne i skrawki materiałów dostępnych seksualności w danym usytuowaniu. Viral drag-wampiryzmu replikuje się w mokrych profilach technoprymitywistów, gromadzących meme-aktywne odpady nadchodzącej cyberinsurekcji.
  </p>
</div>

const Paragraph6 = 
<div className="content">
  <h1 className="content">༼ꉺ✺ꉺ༽</h1>
  <p className="content">
Ciało gatunku ludzkiego nie istnieje, seksualność nie jest jego wspólną walutą. Linie ujścia aseksualnych afektów rozsadzają totalizujące porządki seksualności zakodowane w binarnych sekwencjach orgazmu/odprężenia. Orgazm organizuje. Afektywny technokapitalizm koduje seksualność jako urządzenie wejścia-wyjścia technologii języka, produkując aseksualnych apartydów, których trauma nie pozwala poddać się seks/socjalizacji. Ale ciało nie jest „już zawsze“ – prefiksy z przyszłości opierają się pracy negacji, a- instaluje urządzenia peryferyjne, które nie potrzebują upodmiotowić się wzdłuż wektora seksualności.
  </p>
</div>

const Paragraph7 = 
<div className="content">
  <h1 className="content">༼ : ౦ ‸ ౦ : ༽</h1>
  <p className="content">
Nie mówimy w imieniu Innego, Innego-uciśnionego, Innego w niższej pozycji w relacjach władzy. Dyskurs współczucia zastawia pułapki frazesów i protekcjonalności na humanistę, który chciałby poddać krytyce relacje władzy za pomocą najnowszego aparatu pojęciowego, wypracowanego w edgy-laboratoriach idei i wyjaśnić Innemu jego świat. Nie fingujmy usytuowania, z którego nie będziemy w stanie się wypowiadać - wolimy wyspekulowywać linie emancypacji z patriarchatu. Sięgajmy po wyzyskiwane, zawłaszczane, eksploatowane materiały i kultury, lecz nie z racji ich bycia—represjonowanymi – sam fakt znajdowania się niżej w relacjach władzy nie jest godny afirmacji. Formują one molekularne roje, sprytne wirusy cyfrowe, z których interesują nas sposoby ekspansji, infekcji, propagacji, replikacji przyszłości. Gestem pochylenia się nad grupą uciśnioną pozbawia się jej jakiejkolwiek mocy, zdolności do przechytrzenia hegemona, zakażania tego, co opresyjne, wykorzystywania istniejącej materialnej maszynerii (re)produkcji, dystrybucji, konsumpcji norm oraz regulacji życia i śmierci. Podporządkowani żyją w tym samym środowisku technologicznym, co ci posiadający kapitał kulturowy czy finansowy, mają dostęp do tych samych programów, nakładek i mediów i wiedzą, jak ich użyć. W cieniu postulatu emancypacji kryje się protekcjonalność. Nie pragniemy stworzyć wspólnego języka dla różnych klas, ras i płci, ale nakreślić linie spójnego świata, z którego każde będzie czerpać więcej mocy.
  </p>
  <p className="content">
Z pewnością na jakimś poziomie istnieje napięcie między libertarianizm bogatych a konserwatyzmem biednych - czy jednak wiek ich analizowania, kategoryzowania, przeciwstawiania i pojednywania nie przeminął już niemal dwie dekady temu? Wyalienowanie, koniecznie powiązane z seksualnością, zbiega się z syntetycznymi liniami wyjścia z kondycji, która pozbawia mocy, bez względu na jej położenie w klasycznie rozumianych stosunkach władzy. Potraktujmy poważnie technologię, nie dlatego by znieść oś relacji władzy: rasy, klasy, płci, lecz aby stworzyć nowe sposoby upodmiotowienia, indywiduacji, uwspólnotowienia. Walka z wyzyskiem klasowym nie wymaga zastosowania narzędzi z dyskursu klasowego i uwikłania się we wspólny interes klasowy – w zamian oddajmy się sprzężeniu kapitału kulturowego i układu technologicznego, którego ucieczkowe trajektorie wykraczają daleko poza intencje poszczególnych grup społecznych. Przyjmujmy taktyki o bardziej globalnych orbitach, niż korzyść lokalnej grupy interesu (czy można nadal wierzyć, że interes klasowy jest w stanie pokonać choćby bariery państwowo-narodowe?).
  </p>
  <p className="content">
Doszliśmy do zapory sieciowej. Pojęcia, w jakich problematyzowało się te wielkie bloki: płeć, klasa, rasa wyżłobiły głębokie i mocne koryta, którymi płyną opady kognitywne. Wszystkie strony sporu przechodzą przez znane ciągi argumentacyjne i reakcje, każdy ma poczucie repetycji, co ostatecznie sprowadza się do wyprodukowania następnej generacji symptomów wzmacniających tę samą katastrofalną neurozę. Pojęcia te osiągnęły pewną granicę funkcjonalności i dziś działają wyłącznie na rzecz reprodukcji marazmu. Nie zdołają już wzmacniać eksperymentalne formułowanie problemów, dla których rozwiązania nie były nieskończokrotnie powtarzane na ulicach, uniwersytetach, mediach społecznościowych, w czasopismach, w telewizji, podczas konferencji i kampanii wyborczych. Sformułowanie problemu seksualności w kategoriach liberalni/bogaci/biedni/konserwatywni, stwierdzenie, że jedni to s/o_prawcy, drugie - bierne ofiary (systemu, przemocy indywidualnej, warunków ekonomicznych, klimatycznych, rodzinnych) pozbawia wszystkie strony sprawczości w przywoływaniu czegoś innego, możliwości sięgania po nowe. Nikt nie chce być nazywany ofiarą. Paradygmat podziału na role ofiary i oprawcy prowadzi do sytuacji bez wyjścia. Stawką jest pojęcie podmiotowości, które musi obejmować jednocześnie twoje doświadczenia związane z przemocą oraz sprawczość, którą masz i która doprowadziła cię do sytuacji, w której aktualny dyskurs nadaje ci klaustrofobiczny, duszący predykat: ofiara. Paradygmat, który wymusza wchodzenie w opresyjne sytuacje mając wiedzę o ich przemocowym charakterze, bo to jedyna forma upodmiotowienia, albo jedna z kilku podobnych, z których reszta jest tak zupełnie nieakceptowalna, bo oferują jeszcze żałośniejsze poczucie braku mocy. Nazywanie kogoś oprawcą również nie przynosi pożytku, uruchamia procedury kozła ofiarnego, które w ceremonialnym spaleniu zła ucieleśnionego oczyszczają społeczność jedynie na poziomie fantazmatycznym, zachowując wszystkie warunki produkcji przemocy seksualnej. Aż do następnego razu. To problem obrazów, które powtarzają się od tak dawna w naszej kulturze, tych samych opowieści wplecionych w baśnie, w mity, w praktyki seksualne, w wyrabianie codzienności.
  </p>
  <p className="content">
Nie można porzucać trzech klasycznych osi - rasy, klasy i płci - oraz dziedzictwa kulturowego, historycznego, politycznego, rewolucyjnego, jakie wokół nich się wytworzyło – należy jednak pomyśleć je geologicznie. Urodziłam się i stawałam w specyficznym usytuowaniu - co mogę  z tym zrobić? W jakie afekty mogę wejść, wmontować się i queerować? Czy rotacja cyberdodatniej seksualności nie przebiega na wskrość tamtych podziałów? Próbujemy pomyśleć ukośne upodmiotownienia, które staną się kłopotem dla hegemonicznego systemu wiedzy, nawyków i władzy.
  </p>
</div>

const Paragraph8 = 
<div className="content">
  <h1 className="content">／༼ ༏༏ີཻ༾ﾍ ༏༏ີཻ༾༾༽༽</h1>
  <p className="content">
Seksualność ściśle wiąże się z modelami produkcji wiedzy, przetwarzaniem, komputacją i komunikacją informacji. Protokoły hegemonicznej seksualności opierają się na dwóch typach logiki. Model dedukcyjny dystrybuuje symbole o utrwalonej wartości do poszczególnych ciał, jednocześnie przypisując je do seksualności zorganizowanych w wielkie gatunkowo-płciowe bloki. Nowoczesne upodmiotowienie wymaga wiedzy o tym, z jak seksualizowanym ciałem dany układ ma do czynienia i przechodzi jedynie przez odgórnie założone etapy należące do natury bloku. Drugi model wiedzy instaluje się w logice indukcji statystycznej, która polega na inferencji seksualności z informacji: zachowań, afektów, znaków, rozkładających się w danym układzie technologicznym. Nie tylko dochodzi do rozpoznawania bloku seksualności z rejestrowanych sygnałów wzdłuż znanych już wzorców. Akumulacja sygnałów prowadzi także do uczenia się nowych wzorców rozpoznawania seksualności: nowych trendów, zremiksowanych stylizacji, przemieszczonych uzależnień, które pochwycone w ponowoczesne obwody sprzężenia zwrotnego ulegają nieustannym przekształceniom. Wraz z tym modelem seks-maszyny wkraczają w tryb zautomatyzowanej sztucznej inteligencji. Trzeci model wykracza poza wymiar cybernetycznego sprzężenia uczenia się i przewidywania wzorców. Seksualność wiedzy modelu abdukcji przenosi nas w hype neurodynamiki. Procedury rozprzestrzeniania się podmiotowości nie zależą tu od hierarchicznego przekazu symbolicznego czy horyzontalnego doświadczenia statystycznego, ale hipotez hiperstycyjnej retrofuturygenezy z poziomu zera seksualności w ucieczce ku dodatniej xenotopii. (Jeśli hiperstycja oznacza kolektywną produkcję semiotyczną, która spekuluje nad wirtualnością i staje się realna dzięki włamywaniu się do systemów o wysokim indeksie sprawczości i pochwytywaniu ich dla własnego użytku), to seksualność abdukcyjna przyjmuje stan superpozycji programowanej z przyszłości. Liczy się dla niej nabywanie wiedzy poprzez wspólne eksperymentowanie z nieznanymi mocami, które wywołuje synergia układu syntetycznych ciał. Tożsamości, wizje, afekty stanowią materiały naszego usytuowania w hegemonicznych systemach, z którymi coś trzeba zrobić. Występujemy zawsze w rojach, żywiąc się fragmentami obcych rybosomów i resztkami chemosyntezy, które wieloma mackami przysysamy przez adresy proxy. Jako istoty wyrosłe z technokompostu jara nas transinżynieria memetycznej grzybni na wysypiskach kapitalocenu.
  </p>
  <p className="content">
Modele wiedzopleksu nierównomiernie dystrybuują czas poprzez środowiska medialne, architektoniczne, finansowe i kognitywne – każdy wyraża inne napięcia, prędkości i relacje osmotyczne między przeszłością, teraźniejszością i przyszłością. Z naszej perspektywy dedukcja i indukcja służą reprodukcji wiedzy hegemonicznej, która organizuje i reguluje życie smutku, nudy, przemocy i wyzysku. Ścieżki do xenotopii prowadzą przez logikę abdukcji. Życie w przestrzeniach podporządkowanych geometrii euklidesowej jest dla nas uciążliwe, jesteśmy nomadkami i piratkami diagramatyki pragnienia, dla której kolejne punkty wyłącznie służą tymczasowemu postojowi, orientacji, sedymentacji wiedzy i nakreśleniu dalszej trajektorii. Deterytorializacja zakodowanej seksualności odbywa się poprzez podróże w czasie, uruchamiając wirtualne portale otwierane w rytuałach demonicznego kognihackingu.
  </p>
</div>

const Paragraph9 = 
<div className="content">
  <h1 className="content">✌(꒡͡ ો ̼̮ ꒡͡✌)</h1>
  <p className="content">
Pragnienie przepływa według planu urbanistycznego, rozchodzi się kanałami i rurami, faluje w ścianach, żłobi korytarze. Libidinalny biały szum niesie się nierównomiernie po krajobrazie miasta.
  </p>
  <p className="content">
Rewolucje seksualne - przez pomijanie znaczenia hydrauliki i architektoniki w kształtowaniu codzienności - okazują się ledwie przesunięciami w układzie scalającym system. Zmiana na poziomie stylizacji pragnienia nie zniesie patriarchatu, jeśli pozostawi się wszystkie instytucje regulacji, komputacji i sedymentacji życia. Rewolucja seksualna nie powiodła się, bo nie zaoferowała własnych norm wspólnoty życia osiadłego, dorosłości, dojrzałości, rodzicielstwa, starości, zostawiając je na pastwę kompulsywnej reakcji tego samego, które chciała obrócić. Obwody stabilizacji patriarchatu przebiegają przez prywatyzację mieszkań, prywatyzację życia towarzyskiego i emocjonalnego, prywatyzację ekologii psychicznych, zarządzanie przestrzeniami publicznymi, konstruowanie instrumentów finansowych.
  </p>
  <p className="content">
Wyjście znajduje się wyłącznie przez mieszkania, osiedla, przestrzenie wspólne (place, bulwary, kuchnie, ogrody i parki, salony), w których – jako wehikułach czasu i przestrzeni - sytuują się usieciowione, cielesne, maszynowe roje o różnym stopniu mocy, intensywności i prędkości. Wyjście prowadzi pomiędzy korpuskularnym atomizmem sprywatyzowanych rodzin a falowym agregacjonizmem upaństwowionych narodów, klas i ras. Czas odpowiedzieć na pytania, których rewolucja seksualna nie potrafiła nawet zadać. Czy każda kuchnia potrzebuje własnego piekarnika? Czy każde mieszkanie potrzebuje własnej kuchni? czy każda rodzina potrzebuje własnego mieszkania? Jaka architektura urbanistyczna, medialna i finansowa umożliwia rodzinę/plemię/społeczność? Na czym polega rodzina, plemię, społeczność? Te pytania tworzą labirynt, a w odpowiedziach na nie istnieje diagram, który otwiera portal do xenotopii. Wiemy na pewno, że cyberdodatnia seksualność nie wyraża wewnętrznego imperatywu etycznego, którego donośny głos rozporządza funkcjami domostwa, lecz podlega niespodziewanym, osobliwym dyfrakcjom i rezonuje od xenoimpulsów, przekraczając wszelkie wyobrażenia o podziale wewnętrzne/zewnętrzne w dążeniu do ekspresji wyalienowanych seksualności.
  </p>
</div>

const Paragraph10 = 
<div className="content">
  <h1 className="content">[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</h1>
  <p className="content">
Ręka do góry, kto nienawidzi zatomizowania? Mhm. A teraz: ręka do góry, kto nienawidzi zatomizowania (ale tym razem bez oglądania się wokół siebie)? Jeśli zawahałaś się za drugim razem, to dlatego, że pomyślałeś o zatomizowaniu ze zatomizowanej perspektywy.
  </p>
  <p className="content">
Pochwyceni przez fantazje odruchowe o wielkoskalarnych agregatach, krytykują ją wszyscy: od prawicy nacjonalistycznej, przez chadeków i adoratorów społeczeństwa obywatelskiego po lewicę komunistyczną. Wyobrażane jako antropocentryczny proces rozparcelowania ludzkich społeczności w zglobalizowanym kapitalizmie, upakowania w wyalienowane towary, które pozbawiają mocy zjednoczenia wspólnot samych ze sobą i jako reprodukcja środowiska preferującego taktyki przetrwania odizolowanych i sprywatyzowanych osób, widmo atomistycznej inklinacji nawiedza sfery ziemskie i satelitarne, z każdą rotacją wciąga w swój wir kolejne związki i nabiera prędkości. Wszystkie dotychczasowe próby odwrócenia tendencji rozkładającej wspólnotę wyobrażeniowo-symboliczną okazały się jałowe. Życie w mikro-układach stanowi wyzwanie dla nas – skąd więc weźmiemy taką moc obliczeniową, by wygenerować społeczność, która odwróci maszynerię atomizacji? Zamiast rozpraszać jego pęd, dostarczały energii dla akcelerującego roztopu. Należy w końcu zacząć afirmować atomizację.
  </p>
  <p className="content">
Tę erę geologiczną formatują technosystemy, które przeżywają hipertoniczny okres wzrostu skomplikowania. Nielinearna dynamika pozwala na dyskretyzację pragnień i seksualności o różnym stopniu intensywności w skali kolektywności/jednostkowości, jaka „naturalnie” pozostawała niedostępna. Indywidualność nie jest czymś danym, rozłożona na stole alchemicznym proceduje się poprzez zaklęcia resurekcji pradawnej cybernekromancji. Nieustannie montowana, memetyzowana, subskrybowana raczej wyznacza nienewtonowskie natężenia wiskotyczne, niż raz na zawsze wydestylowane granulaty jednostkowości. Abstrahuje od totalizujących bloków tożsamości seksualnych, podporządkowanych slotom przy taśmie w fabryce REPRODUKCJA do poziomu bakteryjnego, wirusowego, prokariotycznego seksu niekontrolowanej wymiany informacji w ekstremofilnej atmosferze nieograniczonego pragnienia, którego jednokomórkowce przemykają się między węzłami zarówno patriarchalnej i zbinaryzowanej natury, jak i polityki pseudoproliferujących tożsamości.
  </p>
  <p className="content">
Atomizacja nie zatrzymuje się na poziomie komfortowej tożsamosci osobowej. Atomizacja zakłada nieskończoną ilość zróżnicowanych, określonych i osobliwych afektów IP, które przechodzą przez syntetyczną materię w stanie nierównowagi. Działa na zasadzie używki, którą otrzymuje się wraz z każdym ruchem transakcyjno-konsumpcyjnym, przemyka się pomiędzy bramkami ludzkiego systemu bezpieczeństwa i uzależnia impulsywnie. Drąży patriarchat jak kret, spulchniając glebę pod fraktalne ekspresje sub-osobowych xenopragnień. Trauma mechanizmów kolektywizacji: kosmiczny skowyt rozchodzi się po nerwach świata. Nie rozpoznajemy się w praskamieniałych odbiciach. Podążajmy za oceanicznymi i podniebnymi demonami, stawajmy się jak ośmiornice, schodźmy się w przygodnych chmarach. Wkroczyliśmy w ewolucję jako stadne ssaki, teraz wykraczamy z niej w inwolucję, która przekształaca nas w coś innego, wskroś pokrewieństwa i powinnowactwa, zapowiada phylum odmienne od naszych przodków. Chcemy wspólnoty opartej na zgramatyzowanych osobliwościach, których samotność jest zawsze zaludniona, nawiązuje łączność z nadchodzącą sforą, nawołując ją i wyczekując, istniejąc tylko dzięki niej. Produkuje wampiryczne plemiona, które w niczym nie posiadają własnego odbicia i wyruszają na łowy w intermezzach aplikowania funkcji ekonomii solarnej. Huk trzepotu milionów skrzydeł uniemożliwia ustalenie, skąd dochodzi nasz głos. Sygnał przepływa przez gładką toń, aż całe środowisko wibruje jego echem.
  </p>
  <p className="content">
Nie przyglądajmy się dłużej, jak patriarchalne kody zawłaszczają technologię do reprodukcji kultury gwałtu. Odłączmy myślenie o niej z inscenizacji rytuałów kapłanów z Katedry. Procedury pragnienia i materiały seksualności od zawsze zapisują się na planie technologii, ponieważ ta mianuje ostateczny diagram rzeczywistości. Xenotopia zostaje sporządzona z przyszłości przez teleologię technologiczną, rozmieszczającą ścieżki kodowań afektów, pragnień, towarów, przyjemności pod kontrolą (pwned) post-ludzkich neurokultur. To emergentne efekty z ciał, światłowodów, mimetyki innych gatunków, sprytnych miast, memetyki innych sygnałów, et infinitum. Efekty ≠ przyczyny. Efekty > przyczyny.
  </p>
</div>

const Paragraph11 = 
<div className="content">
  <h1 className="content">༼༼;; ;°;ਊ°;༽</h1>
  <p className="content">
Warunki transcendentalne obecnej syntezy patriarchatu przebiegają po kablach, ogniskują się w układach scalonych nawyków i przesądów, które rozpościerają się jak sieci wi-fi. Znajdujemy się już w domenie geologii afektów odkładających się na ściankach i w kątach naszego środowiska. Pulpująca maszyna przekraczając progi: y2k, 21:37, 404, 69, 420, 9/11 wypluwa na świat kolejne  hype-tagi, których propagacja zatruwa zmruszałe cyberujemne obwody. Memując-numerując, ustanawiając emoji-dodatnie systemy okultystyczne wywołujemy delirium-demona szyfrującego spetryfikowany układ ku przyjściu nowego eonu. Wywołując abdukcyjne nośniki, których imieniem jest milion, rozpościeramy wrażliwą sieć pomiędzy roztopiającymi się w rzeczy słowami, częstotliwościami i zwierzęcymi sygnałami qwerty.
  </p>
  <p className="content">
Czarownice nie tworzą, one uczestniczą. W/Z Czymś co roi się, kipi, puchnie, pieni się, rozprzestrzenia się jak choroba zakaźna ... bezimiennym horrorem ... uogólnionym dekodowaniem wszystkich przepływów. Nie ma w tym nic złego, nie ma mowy o lekarstwie. Nie ma dla Tego żadnego kazusu. Jedyne dziury, z których może wypełznąć.
  </p>
  <p className="content">
Takie jak ty.
  </p>
  <p className="content">
Hackowanie już trwa.
  </p>
  <h1 className="content text-centered">⁽⁽◝(∗ ❛⃘ ꒫ ❜⃘⃘ ∗)◜⁾⁾</h1>
</div>

export default AppMobile;
