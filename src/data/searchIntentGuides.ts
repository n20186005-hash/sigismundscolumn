// Search-demand additions based on the site's November 2026 Search Console export.
// Each language has its own visitor-facing copy; the links remain internal.
type Locale = 'en' | 'pl' | 'zh' | 'ru' | 'de';
type Item = { heading: string; points: [string, string, string]; links: string[] };
type Topic = Partial<Record<Locale, Item>>;

export const searchIntentGuides: Record<string, Topic> = {
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
