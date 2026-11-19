// Search-demand additions based on the site's November 2026 Search Console export.
// Each language has its own visitor-facing copy; the links remain internal.
type Locale = 'en' | 'pl' | 'zh' | 'ru' | 'de';
type Item = { heading: string; points: [string, string, string]; links: string[] };
type Topic = Partial<Record<Locale, Item>>;

export const searchIntentGuides: Record<string, Topic> = {
  'nearby/royal-castle-warsaw': {
    en: {heading:'Royal Castle Warsaw: choose the museum visit that fits your day',points:[
      'The Royal Castle is a museum and former royal residence on Castle Square. Its history reaches back to the Mazovian dukes and later the Polish monarchs; the present building also tells the story of wartime destruction and painstaking reconstruction.',
      'Before buying a ticket, compare the official museum routes and current exhibitions. The castle offers royal rooms, state and parliamentary spaces, and art collections; not every gallery is necessarily included in every route.',
      'See the façade and Sigismund’s Column together from Plac Zamkowy, then visit the interior if your schedule allows. The square itself is a separate public space, with different access arrangements.'
    ],links:['sigismund-iii-vasa','nearby/castle-square','nearby/st-johns-archcathedral']},
    pl: {heading:'Zamek Królewski w Warszawie: jak zaplanować zwiedzanie muzeum',points:[
      'Zamek Królewski jest muzeum i dawną rezydencją władców przy Placu Zamkowym. Jego dzieje sięgają książąt mazowieckich, a obecna budowla opowiada także historię zniszczeń wojennych i odbudowy.',
      'Przed zakupem biletu porównaj aktualne trasy zwiedzania i wystawy. Do zobaczenia są apartamenty królewskie, sale państwowe i parlamentarne oraz zbiory sztuki; zakres dostępnych sal zależy od wybranej trasy.',
      'Z Placu Zamkowego obejrzyj razem fasadę zamku i Kolumnę Zygmunta, a potem — jeśli czas pozwala — wnętrza. Sam plac jest odrębną przestrzenią publiczną.'
    ],links:['sigismund-iii-vasa','nearby/castle-square','nearby/st-johns-archcathedral']},
    zh: {heading:'华沙皇家城堡：如何安排博物馆参观',points:[
      '皇家城堡位于城堡广场，是昔日王室居所和今日的博物馆。它的历史可追溯至马佐夫舍公爵，今日建筑也见证了二战破坏及精细重建。',
      '购票前比较博物馆公布的路线与展览：皇家居室、国家与议会厅室及艺术收藏不一定全部包含在同一参观线路中。',
      '先从城堡广场一起观察城堡外立面与齐格蒙特圆柱；时间充足再参观内部。广场是另一个公共空间，进入规则与博物馆不同。'
    ],links:['sigismund-iii-vasa','nearby/castle-square','nearby/st-johns-archcathedral']},
    ru: {heading:'Королевский замок в Варшаве: как выбрать музейный маршрут',points:[
      'Королевский замок — музей и бывшая резиденция правителей на Замковой площади. Его история восходит к мазовецким князьям, а нынешнее здание рассказывает также о военном разрушении и восстановлении.',
      'До покупки билета сравните официальные маршруты и выставки. Королевские покои, государственные и парламентские залы и художественные коллекции могут входить в разные программы посещения.',
      'Сначала рассмотрите фасад замка и колонну Сигизмунда с площади, затем при наличии времени посетите интерьеры. Сама площадь — отдельное общественное пространство.'
    ],links:['sigismund-iii-vasa','nearby/castle-square','nearby/st-johns-archcathedral']},
    de: {heading:'Königsschloss Warschau: den passenden Museumsrundgang wählen',points:[
      'Das Königsschloss ist Museum und ehemalige königliche Residenz am Schlossplatz. Seine Geschichte reicht bis zu den masowischen Herzögen zurück; das heutige Gebäude erzählt auch von Kriegszerstörung und Wiederaufbau.',
      'Vergleichen Sie vor dem Ticketkauf die offiziellen Rundgänge und Ausstellungen. Königliche Appartements, Staats- und Parlamentsräume sowie Kunstsammlungen sind je nach Besuchsroute unterschiedlich zugänglich.',
      'Betrachten Sie zuerst die Schlossfassade zusammen mit der Sigismundssäule vom Plac Zamkowy aus und besuchen Sie bei genügend Zeit die Innenräume. Der Platz ist ein eigener öffentlicher Bereich.'
    ],links:['sigismund-iii-vasa','nearby/castle-square','nearby/st-johns-archcathedral']},
  },
  'nearby/old-town-market-square': {
    en: {heading:'Old Town Market Square: mermaid, townhouses and city history',points:[
      'Rynek Starego Miasta is the historic commercial heart of Warsaw’s Old Town, not Castle Square. Its colourful townhouse fronts show the remarkable post-war rebuilding of the city.',
      'Look for the Mermaid statue in the square, then walk its four sides to compare painted façades, architectural details and the changing perspectives at each corner.',
      'The Museum of Warsaw occupies historic buildings here and is a strong indoor companion to the square. Continue toward the Barbican, or return by the cathedral to Sigismund’s Column.'
    ],links:['nearby/warsaw-mermaid-statue','nearby/museum-of-warsaw','nearby/warsaw-barbican']},
    pl: {heading:'Rynek Starego Miasta: Syrenka, kamienice i historia Warszawy',points:[
      'Rynek Starego Miasta to historyczne serce handlowe Starówki, inne miejsce niż Plac Zamkowy. Kolorowe fasady kamienic świadczą o niezwykłej powojennej odbudowie miasta.',
      'Odszukaj pomnik Syrenki, a potem obejdź cztery pierzeje, porównując malowane elewacje, detale architektury i widoki z narożników.',
      'Muzeum Warszawy mieści się w zabytkowych kamienicach przy rynku i dobrze uzupełnia spacer. Dalej możesz pójść do Barbakanu lub wrócić przez katedrę do Kolumny Zygmunta.'
    ],links:['nearby/warsaw-mermaid-statue','nearby/museum-of-warsaw','nearby/warsaw-barbican']},
    zh: {heading:'华沙老城市场广场：美人鱼、彩色排屋与城市历史',points:[
      'Rynek Starego Miasta 是华沙老城传统商业中心，与城堡广场不是同一地点。彩色排屋外立面体现了战后城市重建的成果。',
      '先寻找广场中的华沙美人鱼雕像，再绕四边观察彩绘外墙、建筑细节及不同街角形成的透视。',
      '华沙博物馆位于广场周边的历史建筑中，适合与户外步行结合。下一站可到瓮城，也可经过主教座堂返回齐格蒙特圆柱。'
    ],links:['nearby/warsaw-mermaid-statue','nearby/museum-of-warsaw','nearby/warsaw-barbican']},
    ru: {heading:'Рыночная площадь Старого города: Сирена, дома и история',points:[
      'Rynek Starego Miasta — историческое торговое сердце Старого города, отличное от Замковой площади. Цветные фасады домов отражают масштаб послевоенного восстановления.',
      'Найдите статую Сирены, затем обойдите четыре стороны площади, рассматривая росписи, детали зданий и виды с углов.',
      'Музей Варшавы расположен в исторических домах у площади и дополняет прогулку. Далее можно идти к Барбакану или вернуться через собор к колонне Сигизмунда.'
    ],links:['nearby/warsaw-mermaid-statue','nearby/museum-of-warsaw','nearby/warsaw-barbican']},
    de: {heading:'Altstadtmarkt Warschau: Meerjungfrau, Bürgerhäuser und Geschichte',points:[
      'Der Rynek Starego Miasta ist das historische Handelszentrum der Altstadt und nicht mit dem Schlossplatz zu verwechseln. Die farbigen Bürgerhäuser zeugen vom Wiederaufbau nach dem Krieg.',
      'Suchen Sie die Meerjungfrauenstatue und umrunden Sie dann den Platz, um bemalte Fassaden, Architekturdetails und unterschiedliche Blickwinkel zu vergleichen.',
      'Das Museum von Warschau liegt in historischen Häusern am Platz und ergänzt den Rundgang. Weiter geht es zum Barbakan oder über die Kathedrale zurück zur Sigismundssäule.'
    ],links:['nearby/warsaw-mermaid-statue','nearby/museum-of-warsaw','nearby/warsaw-barbican']},
  },
  'sigismund-iii-vasa': {
    en: {heading:'Sigismund III Vasa: the king behind the Warsaw column',points:[
      'Sigismund III Vasa ruled the Polish–Lithuanian Commonwealth from 1587 to 1632. His Swedish dynasty and the growing importance of the royal court in Warsaw shaped the city’s political history.',
      'Avoid treating the shift from Kraków to Warsaw as a single administrative event: the royal court gradually settled in Warsaw while Kraków retained important ceremonial roles.',
      'The king did not commission his own monument. His son Władysław IV ordered the column, unveiled in 1644. Compare its sword, cross and Latin inscriptions with the royal history presented at the nearby castle.'
    ],links:['history','inscriptions-symbols','nearby/royal-castle-warsaw']},
    pl: {heading:'Zygmunt III Waza: król upamiętniony warszawską kolumną',points:[
      'Zygmunt III Waza panował w Rzeczypospolitej w latach 1587–1632. Jego dynastyczne związki ze Szwecją oraz rosnąca rola dworu w Warszawie wpłynęły na dzieje miasta.',
      'Przenosin z Krakowa do Warszawy nie należy przedstawiać jako pojedynczego aktu administracyjnego: dwór stopniowo osiadł w Warszawie, a Kraków zachował ważne funkcje ceremonialne.',
      'Król nie ufundował własnego pomnika. Kolumnę, odsłoniętą w 1644 roku, zlecił jego syn Władysław IV. Porównaj miecz, krzyż i łacińskie inskrypcje z historią pokazywaną w Zamku Królewskim.'
    ],links:['history','inscriptions-symbols','nearby/royal-castle-warsaw']},
    zh: {heading:'齐格蒙特三世·瓦萨：华沙纪念圆柱上的国王',points:[
      '齐格蒙特三世·瓦萨于 1587—1632 年统治波兰立陶宛联邦。其瑞典王朝背景，以及王廷在华沙影响力的增长，塑造了城市政治历史。',
      '不要把王廷从克拉科夫转向华沙理解为单次行政迁都：王廷逐步在华沙常驻，克拉科夫仍保留重要礼仪职能。',
      '国王并非亲自为自己立柱。纪念圆柱由其子瓦迪斯瓦夫四世下令建造，于 1644 年揭幕；可将雕像的剑、十字架及拉丁铭文与皇家城堡展出的历史相互对照。'
    ],links:['history','inscriptions-symbols','nearby/royal-castle-warsaw']},
    ru: {heading:'Сигизмунд III Ваза: король на варшавской колонне',points:[
      'Сигизмунд III Ваза правил Речью Посполитой в 1587–1632 годах. Его связи со шведской династией и возрастающая роль королевского двора в Варшаве повлияли на историю города.',
      'Переезд из Кракова в Варшаву не был единовременным административным актом: двор обосновывался здесь постепенно, а Краков сохранял важные церемониальные функции.',
      'Король не заказывал себе памятник. Колонну, открытую в 1644 году, возвёл по инициативе его сына Владислава IV. Сравните меч, крест и латинские надписи с экспозицией Королевского замка.'
    ],links:['history','inscriptions-symbols','nearby/royal-castle-warsaw']},
    de: {heading:'Sigismund III. Wasa: der König auf der Warschauer Säule',points:[
      'Sigismund III. Wasa regierte die polnisch-litauische Adelsrepublik von 1587 bis 1632. Seine schwedischen Dynastieverbindungen und die wachsende Rolle des Hofes in Warschau prägten die Stadt.',
      'Der Wechsel von Krakau nach Warschau war kein einzelner Verwaltungsakt: Der Hof ließ sich schrittweise in Warschau nieder, während Krakau wichtige zeremonielle Aufgaben behielt.',
      'Der König ließ sein Denkmal nicht selbst errichten. Sein Sohn Władysław IV. gab die 1644 enthüllte Säule in Auftrag. Vergleichen Sie Schwert, Kreuz und lateinische Inschriften mit der Geschichte im Königsschloss.'
    ],links:['history','inscriptions-symbols','nearby/royal-castle-warsaw']},
  },
  'transport/warsaw-central-station': {
    en: {heading: 'Warszawa Centralna to Warsaw Old Town: make the last connection', points: [
      'Warszawa Centralna is the main central railway station; Castle Square and Sigismund’s Column are in the pedestrian Old Town, not at the railway platforms.',
      'Check your destination as Plac Zamkowy before leaving the station. Compare the live tram, bus and metro connections with the walking distance from the last stop.',
      'If travelling with luggage, consider the uneven Old Town paving and restrictions on vehicle access. “Warszawa Centralna” and “Centrum” are not interchangeable stop names.'
    ], links: ['transport/metro-and-bus','how-to-get-there','nearby/castle-square']},
    pl: {heading: 'Z Warszawy Centralnej na Stare Miasto: ostatni etap', points: [
      'Warszawa Centralna to główny dworzec kolejowy w centrum. Plac Zamkowy i Kolumna Zygmunta znajdują się na pieszym obszarze Starego Miasta, a nie przy peronach.',
      'Przed wyjściem z dworca ustaw cel Plac Zamkowy. Sprawdź aktualne połączenia tramwajowe, autobusowe i metrem oraz dojście od końcowego przystanku.',
      'Z bagażem uwzględnij nierówną nawierzchnię Starego Miasta i ograniczenia wjazdu. Nazwy przystanków „Warszawa Centralna” i „Centrum” nie oznaczają tego samego miejsca.'
    ], links: ['transport/metro-and-bus','how-to-get-there','nearby/castle-square']},
    zh: {heading: '从华沙中央火车站前往老城：最后一段怎么走', points: [
      'Warszawa Centralna 是市中心主要铁路车站；城堡广场与齐格蒙特圆柱位于步行为主的老城区，并不在火车站站台旁。',
      '离站前将目的地设为 Plac Zamkowy（城堡广场），按当天情况比较电车、巴士、地铁及下车后的步行距离。',
      '携带行李要考虑老城石板路与车辆通行限制；“Warszawa Centralna”和“Centrum”并不是同一个站点名称。'
    ], links: ['transport/metro-and-bus','how-to-get-there','nearby/castle-square']},
    ru: {heading: 'От Warszawa Centralna до Старого города: последний участок', points: [
      'Warszawa Centralna — главный центральный железнодорожный вокзал; Замковая площадь и колонна Сигизмунда расположены в пешеходном Старом городе, а не у платформ.',
      'Перед выходом задайте пункт назначения Plac Zamkowy. Сравните актуальные трамвайные, автобусные и маршруты метро и расстояние пешком от остановки.',
      'С багажом учитывайте брусчатку и ограничения движения автомобилей. Названия остановок «Warszawa Centralna» и «Centrum» не взаимозаменяемы.'
    ], links: ['transport/metro-and-bus','how-to-get-there','nearby/castle-square']},
    de: {heading: 'Von Warszawa Centralna in die Altstadt: die letzte Etappe', points: [
      'Warszawa Centralna ist der zentrale Fernbahnhof; Schlossplatz und Sigismundssäule liegen in der Fußgängerzone der Altstadt, nicht direkt an den Bahnsteigen.',
      'Geben Sie vor dem Verlassen des Bahnhofs Plac Zamkowy als Ziel ein. Vergleichen Sie aktuelle Straßenbahn-, Bus- und Metroverbindungen sowie den Fußweg ab der Haltestelle.',
      'Mit Gepäck sind Kopfsteinpflaster und Zufahrtsbeschränkungen zu beachten. „Warszawa Centralna“ und „Centrum“ bezeichnen nicht dieselbe Haltestelle.'
    ], links: ['transport/metro-and-bus','how-to-get-there','nearby/castle-square']},
  },
  'nearby/warsaw-barbican': {
    en: {heading: 'Warsaw Barbican: what to notice on the Old Town walk', points: [
      'The Barbican forms a fortified gateway at the northern edge of Warsaw’s Old Town, linking the Old Town and New Town walking areas.',
      'Walk through the curved brick passage, then turn back to compare its walls, openings and adjoining defensive masonry. The present structure includes extensive post-war reconstruction.',
      'For a natural route from Sigismund’s Column, continue through Świętojańska Street and Old Town Market Square before reaching the Barbican.'
    ], links: ['nearby/old-town-market-square','nearby/st-johns-archcathedral','routes/old-town-walking-tour']},
    pl: {heading: 'Barbakan warszawski: na co zwrócić uwagę podczas spaceru', points: [
      'Barbakan to ufortyfikowana brama na północnym skraju Starego Miasta, łącząca piesze trasy Starego i Nowego Miasta.',
      'Przejdź przez zaokrąglony ceglany trakt i obejrzyj mury, otwory oraz sąsiednie umocnienia. Dzisiejsza budowla została w znacznej części odbudowana po wojnie.',
      'Od Kolumny Zygmunta najwygodniej przejść przez ulicę Świętojańską i Rynek Starego Miasta, a następnie do Barbakanu.'
    ], links: ['nearby/old-town-market-square','nearby/st-johns-archcathedral','routes/old-town-walking-tour']},
    zh: {heading: '华沙瓮城：老城步行途中值得观察什么', points: [
      '华沙瓮城位于老城北缘，是连接老城和新城步行区域的城防入口。',
      '穿过弧形砖砌通道，再回头观察墙体、开口及相连城墙；今日可见的建筑包含大量战后重建部分。',
      '从齐格蒙特圆柱出发，可经 Świętojańska 街、老城市场广场，再步行抵达瓮城。'
    ], links: ['nearby/old-town-market-square','nearby/st-johns-archcathedral','routes/old-town-walking-tour']},
    ru: {heading: 'Варшавский Барбакан: что увидеть во время прогулки', points: [
      'Барбакан — укреплённые ворота на северной границе Старого города, связывающие пешеходные маршруты Старого и Нового города.',
      'Пройдите через изогнутый кирпичный проход и оглянитесь на стены, проёмы и соседние укрепления. Значительная часть сооружения восстановлена после войны.',
      'От колонны Сигизмунда идите по улице Świętojańska через Рыночную площадь Старого города к Барбакану.'
    ], links: ['nearby/old-town-market-square','nearby/st-johns-archcathedral','routes/old-town-walking-tour']},
    de: {heading: 'Warschauer Barbakan: worauf Sie beim Altstadtspaziergang achten sollten', points: [
      'Der Barbakan ist ein befestigtes Tor am Nordrand der Altstadt und verbindet die Fußwege zwischen Alt- und Neustadt.',
      'Gehen Sie durch den gebogenen Backsteindurchgang und betrachten Sie danach Mauern, Öffnungen und angrenzende Befestigungen. Große Teile wurden nach dem Krieg rekonstruiert.',
      'Von der Sigismundssäule führt der Weg über die Świętojańska-Straße und den Altstadtmarkt zum Barbakan.'
    ], links: ['nearby/old-town-market-square','nearby/st-johns-archcathedral','routes/old-town-walking-tour']},
  },
  'routes/warsaw-one-day-itinerary': {
    en: {heading: 'What to see in Warsaw in one day: a realistic Old Town sequence', points: [
      'Start at Castle Square and Sigismund’s Column, then see the Royal Castle exterior and walk past St. John’s Archcathedral to Old Town Market Square.',
      'Continue to the Barbican and city walls. Reserve separate time for the Royal Castle interior or Museum of Warsaw rather than assuming either fits into a quick exterior loop.',
      'After lunch, follow part of Krakowskie Przedmieście along the Royal Route. The official Warsaw tourist itinerary treats the Old Town and Royal Route as separate visit blocks.'
    ], links: ['nearby/royal-castle-warsaw','nearby/warsaw-barbican','routes/royal-route-walk']},
    pl: {heading: 'Co zobaczyć w Warszawie w jeden dzień: plan spaceru', points: [
      'Zacznij na Placu Zamkowym przy Kolumnie Zygmunta, obejrzyj Zamek Królewski z zewnątrz, potem przejdź obok archikatedry św. Jana na Rynek Starego Miasta.',
      'Idź dalej do Barbakanu i murów miejskich. Na wnętrza Zamku Królewskiego lub Muzeum Warszawy zaplanuj osobny czas.',
      'Po obiedzie przejdź odcinek Krakowskiego Przedmieścia wzdłuż Traktu Królewskiego. Miejskie propozycje zwiedzania rozdzielają Stare Miasto i Trakt Królewski na osobne etapy.'
    ], links: ['nearby/royal-castle-warsaw','nearby/warsaw-barbican','routes/royal-route-walk']},
    zh: {heading: '华沙一日游看什么：可实际步行的老城路线', points: [
      '从城堡广场、齐格蒙特圆柱开始，观看皇家城堡外观，经过圣若翰总主教座堂前往老城市场广场。',
      '继续走到瓮城和古城墙。若想参观皇家城堡内部或华沙博物馆，应另留参观时间，不能当作短暂外观步行的一部分。',
      '午餐后沿 Krakowskie Przedmieście 探索皇家大道的一段；华沙官方旅游行程也把老城与皇家大道分为不同游览段落。'
    ], links: ['nearby/royal-castle-warsaw','nearby/warsaw-barbican','routes/royal-route-walk']},
    ru: {heading: 'Что посмотреть в Варшаве за один день: маршрут по Старому городу', points: [
      'Начните с Замковой площади и колонны Сигизмунда, осмотрите Королевский замок снаружи и через собор Святого Иоанна выйдите на Рыночную площадь.',
      'Затем идите к Барбакану и городским стенам. На интерьеры Королевского замка или Музей Варшавы выделите отдельное время.',
      'После обеда пройдите часть улицы Krakowskie Przedmieście по Королевскому тракту. Официальный туристический маршрут выделяет Старый город и Королевский тракт в отдельные этапы.'
    ], links: ['nearby/royal-castle-warsaw','nearby/warsaw-barbican','routes/royal-route-walk']},
    de: {heading: 'Warschau an einem Tag: eine machbare Altstadtroute', points: [
      'Beginnen Sie am Schlossplatz und an der Sigismundssäule, sehen Sie das Königsschloss von außen und gehen Sie an der Johanneskathedrale vorbei zum Altstadtmarkt.',
      'Weiter geht es zum Barbakan und zur Stadtmauer. Planen Sie für die Innenräume des Königsschlosses oder das Museum von Warschau zusätzliche Zeit ein.',
      'Nach dem Mittagessen bietet sich ein Abschnitt der Krakowskie Przedmieście auf dem Königsweg an. Der offizielle Tourismusplan behandelt Altstadt und Königsweg als separate Abschnitte.'
    ], links: ['nearby/royal-castle-warsaw','nearby/warsaw-barbican','routes/royal-route-walk']},
  },
};

export function searchIntentFor(slug: string, locale: string): Item | undefined {
  const topic = searchIntentGuides[slug];
  return topic?.[(locale in (topic ?? {}) ? locale : 'en') as Locale];
}
