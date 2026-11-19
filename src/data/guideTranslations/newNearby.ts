import type {GuideTranslation, Locale} from './types';

type Copy = {
  title:string; intro:string; background:string; highlights:[string,string,string]; visit:string; route:string; photo:string;
  story:string; design:string; observations:string[]; steps:string[]; questions:[string,string][];
  manager:string; context:string; kind:string; setting:string; hours:string; admission:string; arrival:string; access:string; stay:string; reviews:string;
};
const make = (c:Copy, duration:string, source:string):GuideTranslation => ({
  title:c.title,intro:c.intro,background:c.background,highlights:c.highlights,visit:c.visit,route:c.route,photo:c.photo,
  story:c.story,design:c.design,observations:c.observations,steps:c.steps,questions:c.questions,
  manager:c.manager,context:c.context,source,
  facts:{kind:c.kind,setting:c.setting,visitLength:duration,hours:c.hours,admission:c.admission,arrival:c.arrival,access:c.access,stay:c.stay,reviews:c.reviews},
});
const bellSource='https://warsawquest.go2warsaw.pl/en/dzwon-na-kanonii/';
const viewSource='https://go2warsaw.pl/en/vantage-points/';

const plBell = make({
  title:'Dzwon na Kanonii – dzwon życzeń',intro:'Odkryj zabytkowy dzwon na kameralnym placu Kanonia za archikatedrą św. Jana.',
  background:'Brązowy dzwon stojący na poziomie ulicy wyróżnia się dekoracją odlewniczą i napisami. Kanonia była związana z duchowieństwem katedralnym; dziś stanowi spokojny zakątek Starego Miasta.',
  highlights:['Ozdobne reliefy i napisy na dzwonie','Zabudowa dawnej Kanonii','Krótki spacer od katedry i Placu Zamkowego'],
  visit:'Zatrzymaj się na 10–15 minut i zostaw swobodne przejście mieszkańcom.',route:'Kolumna Zygmunta → ulica Świętojańska → archikatedra → Kanonia → Rynek Starego Miasta.',
  photo:'Fotografuj dzwon po skosie, z zabytkowymi fasadami w tle.',story:'Kanonii nadano rolę zaplecza duchowieństwa katedralnego. Dzwon stał się miejscem lokalnej tradycji wypowiadania życzeń.',
  design:'Z bliska zobaczysz odlane pasy ornamentów i litery na korpusie, a wokół kamienice i bruk niewielkiego dziedzińca.',
  observations:['Przyjrzyj się zdobieniom bez uszkadzania powierzchni.','Porównaj proporcje dziedzińca i otwartego Placu Zamkowego.','Zwróć uwagę na przejścia prowadzące za katedrę.'],
  steps:['Zacznij na Placu Zamkowym.','Przejdź ulicą Świętojańską.','Skręć za katedrę na Kanonię.','Dalej idź ku Rynkowi Starego Miasta.'],
  questions:[['Gdzie stoi dzwon?','Na placu Kanonia za archikatedrą, nie na Placu Zamkowym.'],['Czy trzeba kupić bilet?','Nie jest to osobna płatna atrakcja; przestrzegaj zasad ochrony zabytku.']],
  manager:'Miasto Stołeczne Warszawa — przestrzeń publiczna i służby konserwatorskie',context:'Dziedziniec Kanonia jest ogólnodostępną przestrzenią miejską; opieka nad zabytkowym dzwonem podlega odrębnym zasadom konserwatorskim.',
  kind:'Zabytkowy dzwon na placu',setting:'Kanonia, za archikatedrą św. Jana, Warszawa',hours:'Plac jest dostępny jako przestrzeń zewnętrzna; mogą wystąpić ograniczenia czasowe.',
  admission:'Nie ma osobnego biletu na oglądanie dzwonu.',arrival:'Dojdź pieszo za archikatedrę z ulicy Świętojańskiej.',access:'Bruk i wąskie przejścia wymagają uwagi; nie blokuj wejść do budynków.',
  stay:'Nocleg na Starym Mieście ułatwia spacer, a centrum daje więcej połączeń transportowych.',reviews:'Warto przyjść dla kameralnej atmosfery, detali odlewu i sąsiedztwa katedry.'
},'10–15 minut',bellSource);

const plView = make({
  title:'Gnojna Góra – punkt widokowy',intro:'Zobacz Wisłę i prawobrzeżną Warszawę z tarasu na skarpie Starego Miasta.',
  background:'Gnojna Góra była dawniej związana z użytkowym zapleczem miasta. Dziś taras przy ulicy Brzozowej stanowi publiczny punkt obserwacyjny nad doliną Wisły.',
  highlights:['Panorama Wisły i Pragi','Taras oraz balustrada na skarpie','Kontrast wąskich ulic i otwartej doliny rzeki'],
  visit:'Zarezerwuj 10–20 minut i zachowaj ostrożność przy balustradzie.',route:'Rynek Starego Miasta → ulica Brzozowa → Gnojna Góra → Kanonia → Plac Zamkowy.',
  photo:'Fotografuj szeroki krajobraz rzeki, wykorzystując linię balustrady jako pierwszy plan.',story:'Miejsce o dawnym mało reprezentacyjnym zastosowaniu przekształciło się w punkt widokowy na Wisłę.',
  design:'Taras wynika z ukształtowania skarpy; zakrzywiona balustrada podkreśla otwartą panoramę.',
  observations:['Rozpoznaj Wisłę i zabudowę Pragi.','Spójrz na dachy Starego Miasta od strony skarpy.','Porównaj panoramę z zamkniętą przestrzenią rynku.'],
  steps:['Wyjdź z Rynku Starego Miasta w kierunku Brzozowej.','Znajdź publiczny taras na skarpie.','Obejrzyj panoramę zza balustrady.','Wróć przez Kanonię w stronę zamku.'],
  questions:[['Czy to wieża św. Anny?','Nie, Gnojna Góra jest otwartym tarasem widokowym.'],['Czy jest płatny wstęp?','Zwykłe oglądanie publicznego tarasu nie wymaga osobnego biletu.']],
  manager:'Miasto Stołeczne Warszawa — publiczny punkt widokowy',context:'Taras i dojścia są częścią przestrzeni publicznej na skarpie Starego Miasta; utrzymanie oraz ewentualne zamknięcia należą do właściwych służb miejskich.',
  kind:'Otwarty taras widokowy',setting:'Gnojna Góra, okolice ulicy Brzozowej, Warszawa',hours:'Przestrzeń plenerowa jest zwykle dostępna; wydarzenia lub prace mogą ograniczać wejście.',
  admission:'Na publiczny punkt widokowy zwykle nie ma osobnego biletu.',arrival:'Podejdź od Rynku Starego Miasta w kierunku ulicy Brzozowej.',access:'Uważaj na spadki terenu, śliską nawierzchnię i odsłonięty taras.',
  stay:'Stare Miasto i Śródmieście zapewniają wygodny dostęp pieszy.',reviews:'Największym atutem są widoki na rzekę i spokojny przystanek na trasie.'
},'10–20 minut',viewSource);

type ShortCopy = {title:string; intro:string; history:string; design:string; highlights:[string,string,string]; observations:string[]; steps:string[]; route:string; visit:string; photo:string; manager:string; context:string; kind:string; setting:string; hours:string; admission:string; access:string; stay:string; reviews:string; questions:[string,string][]};
const compact = (c:ShortCopy,source:string):GuideTranslation => ({
  title:c.title,intro:c.intro,background:c.history,highlights:c.highlights,visit:c.visit,route:c.route,photo:c.photo,
  story:c.history,design:c.design,observations:c.observations,steps:c.steps,questions:c.questions,
  manager:c.manager,context:c.context,source,
  facts:{kind:c.kind,setting:c.setting,visitLength:c.visit,hours:c.hours,admission:c.admission,arrival:c.route,access:c.access,stay:c.stay,reviews:c.reviews}
});

const zhBell=compact({
  title:'卡诺尼亚许愿钟',intro:'在圣若翰总主教座堂后方的 Kanonia 小广场寻找历史铜钟。',
  history:'Kanonia 曾与主教座堂神职人员的生活联系密切。铜钟如今放置在庭院地面，成为老城祈愿习俗与铸钟工艺的一个小型观察点，并非需要购票的展馆。',
  design:'从近处观察钟身浮雕、铭文和装饰带；钟体与周围石板路及老城住宅立面构成独特的街景。',
  highlights:['铜钟的浮雕与铭文','Kanonia 庭院的历史建筑','从主教座堂延伸的短步行路线'],
  observations:['细看钟身各个方向的浮雕，不要攀爬或敲击。','留意钟体与古老住宅立面的比例关系。','观察庭院通往主教座堂后方的狭窄街巷。'],
  steps:['从城堡广场的齐格蒙特圆柱出发。','沿 Świętojańska 街前往圣若翰总主教座堂。','绕至主教座堂后方 Kanonia 庭院寻找铜钟。','经过附近巷道继续前往老城市场广场。'],
  route:'齐格蒙特圆柱 → Świętojańska 街 → 主教座堂 → Kanonia → 老城市场广场。',visit:'建议停留 10–15 分钟，保持居民通道畅通。',photo:'从斜侧面拍摄铜钟，让后方的历史建筑一同入镜。',
  manager:'华沙市公共空间及文物维护相关部门',context:'Kanonia 为公共庭院，市政部门负责周边公共空间；历史铜钟的维护遵循文物保护要求。',
  kind:'露天历史铜钟',setting:'波兰华沙 Kanonia，圣若翰总主教座堂后方',hours:'露天公共空间通常可步行到访，临时维护时可能限制进入。',admission:'从公共空间观看通常无须单独购票。',access:'石板路可能不平，勿阻塞住宅入口。',stay:'住在老城可步行抵达；市中心交通选择更丰富。',reviews:'适合喜欢城市细节、历史铸造与安静小巷的游客。',questions:[['许愿钟在哪里？','在主教座堂后方的 Kanonia，不在城堡广场。'],['需要门票吗？','露天观看通常无须门票，遵守现场文物维护要求。']]
},bellSource);
const zhView=compact({
  title:'Gnojna Góra 老城观景台',intro:'从华沙老城河岸高地眺望维斯瓦河与对岸布拉格区。',
  history:'Gnojna Góra 的名称与旧时城市边缘的废弃物堆放用途有关，如今这片高地成为公共观景空间，展现华沙老城从封闭街巷到开阔河谷的景观转换。',
  design:'弧形护栏顺应高地边缘，开阔的河谷、对岸街区和老城屋顶共同构成观景重点。',
  highlights:['维斯瓦河及对岸景观','高地弧形观景护栏','老城屋顶与河谷地形'],route:'老城市场广场 → Brzozowa 街 → Gnojna Góra → Kanonia → 城堡广场。',
  observations:['从栏杆后方辨认维斯瓦河及对岸城区。','回望老城高地与建筑屋顶，观察坡地高差。','比较晴天和傍晚光线下的河谷轮廓。'],
  steps:['从老城市场广场沿步道走向 Brzozowa 街。','找到面向维斯瓦河的公共观景平台。','在护栏后方停留，观察河流、对岸与坡地。','回程可经 Kanonia 与主教座堂返回城堡广场。'],
  visit:'建议停留 10–20 分钟；雨雪或强风时留意护栏和坡道。',photo:'用广角拍摄河谷，将观景护栏作为前景引导线。',
  manager:'华沙市公共观景空间维护部门',context:'观景台与步道属于老城河岸高地公共空间，维护和临时通行安排由相关市政部门负责。',
  kind:'露天河景观景台',setting:'波兰华沙老城 Brzozowa 街附近 Gnojna Góra',hours:'露天公共空间通常可到访，但维护或活动可能影响通行。',admission:'公共观景平台通常不另收费。',access:'斜坡和石板路在湿滑天气需要谨慎。',stay:'老城或华沙市中心均适合安排短途步行。',reviews:'这里适合观察维斯瓦河与老城地形，而非参观室内展览。',questions:[['这里是圣安妮教堂观景塔吗？','不是；Gnojna Góra 是独立的露天平台。'],['能看到什么？','可眺望维斯瓦河、对岸街区和老城高地。']]
},viewSource);

const ruBell=compact({title:'Колокол желаний на Канонии',intro:'Найдите исторический бронзовый колокол во дворе Канонии за собором Святого Иоанна.',history:'Канония исторически связана с духовенством собора. Колокол установлен на земле и стал частью местного обычая загадывать желания во время прогулки по Старому городу.',design:'Осмотрите рельефы, надписи и декоративные пояса литого колокола на фоне старых домов и брусчатки.',highlights:['Бронзовый орнамент и надписи','Камерный исторический двор','Переход от собора к Рыночной площади'],observations:['Изучите разные стороны колокола, не повреждая поверхность.','Сравните размеры колокола с фасадами двора.','Обратите внимание на узкие проходы за собором.'],steps:['Начните у колонны Сигизмунда.','Идите по улице Świętojańska к собору.','Сверните во двор Канонии к колоколу.','Продолжите путь к Рыночной площади.'],route:'Колонна Сигизмунда → Świętojańska → собор → Канония → Рыночная площадь.',visit:'Отведите 10–15 минут и не загораживайте проход.',photo:'Снимайте колокол под углом вместе с фасадами двора.',manager:'Город Варшава — городское пространство и охрана наследия',context:'Общественный двор находится в ведении муниципальных служб, а охрана исторического колокола регулируется требованиями сохранения памятников.',kind:'Исторический колокол под открытым небом',setting:'Канония, позади собора Святого Иоанна, Варшава',hours:'Открытый двор обычно доступен; возможны временные ограничения.',admission:'Отдельный билет для осмотра не требуется.',access:'Осторожно на брусчатке и у жилых входов.',stay:'Старый город удобен для пешего маршрута; центр — для транспорта.',reviews:'Небольшая остановка ради деталей литья и атмосферы двора.',questions:[['Где находится колокол?','На Канонии за собором, не на Замковой площади.'],['Нужен ли билет?','Нет, для осмотра с открытого двора билет обычно не нужен.']]},bellSource);
const ruView=compact({title:'Смотровая площадка Гнойна Гура',intro:'Полюбуйтесь Вислой и правобережной Варшавой со склона Старого города.',history:'Название Гнойна Гура напоминает о прежнем хозяйственном использовании городской окраины. Сегодня открытая терраса служит обзорной точкой над долиной Вислы.',design:'Изогнутые перила подчёркивают край склона; за ними открываются река, Прага и крыши Старого города.',highlights:['Панорама Вислы и Праги','Терраса на городском склоне','Контраст старых улиц и речной долины'],observations:['Найдите линию Вислы и кварталы Праги.','Осмотрите переход от городских крыш к крутому склону.','Сравните ближнюю террасу с открытой панорамой.'],steps:['От Рыночной площади направляйтесь к Brzozowa.','Найдите общественную террасу на склоне.','Оставаясь за перилами, рассмотрите берег и реку.','Вернитесь через Канонию к Замковой площади.'],route:'Рыночная площадь → Brzozowa → Гнойна Гура → Канония → Замковая площадь.',visit:'Отведите 10–20 минут; в непогоду соблюдайте осторожность.',photo:'Используйте широкий кадр с перилами на переднем плане.',manager:'Город Варшава — общественная смотровая площадка',context:'Терраса и подходы являются муниципальным общественным пространством; обслуживание и ограничения доступа относятся к городским службам.',kind:'Открытая смотровая терраса',setting:'Гнойна Гура у улицы Brzozowa, Старый город Варшавы',hours:'Открытая площадка обычно доступна, возможны ограничения при работах.',admission:'Отдельный билет обычно не нужен.',access:'Осторожно на склонах и мокрой брусчатке.',stay:'Удобно остановиться в Старом городе или центре.',reviews:'Посетители приходят ради панорамы реки и исторического рельефа.',questions:[['Это башня Святой Анны?','Нет, это отдельная открытая площадка.'],['Что видно с площадки?','Вислу, другой берег и городские крыши.']]},viewSource);

const deBell=compact({title:'Wunschglocke auf dem Kanonia-Platz',intro:'Entdecken Sie die historische Bronzeglocke hinter der Johanneskathedrale.',history:'Kanonia war mit der Geistlichkeit der Kathedrale verbunden. Die Glocke steht heute im Innenhof auf Bodenhöhe und gehört zur lokalen Tradition des Wünschens beim Altstadtspaziergang.',design:'Gussreliefs, Inschriften und Schmuckbänder lassen sich zwischen den historischen Hausfassaden aus nächster Nähe betrachten.',highlights:['Bronzereliefs und Inschriften','Kleiner historischer Hof','Kurzer Weg von der Kathedrale'],observations:['Betrachten Sie die Ornamente, ohne die Oberfläche zu beschädigen.','Vergleichen Sie Glocke und umgebende Bürgerhäuser.','Achten Sie auf die Durchgänge hinter der Kathedrale.'],steps:['Starten Sie an der Sigismundssäule.','Folgen Sie der Świętojańska-Straße zur Kathedrale.','Gehen Sie in den Hof von Kanonia zur Glocke.','Setzen Sie den Weg zum Altstadtmarkt fort.'],route:'Sigismundssäule → Świętojańska → Kathedrale → Kanonia → Altstadtmarkt.',visit:'Planen Sie 10–15 Minuten ein und halten Sie Zugänge frei.',photo:'Fotografieren Sie die Glocke diagonal mit den Fassaden im Hintergrund.',manager:'Stadt Warschau — öffentlicher Raum und Denkmalpflege',context:'Der Hof ist öffentlich zugänglich und wird kommunal betreut; für die historische Glocke gelten besondere Denkmalschutzanforderungen.',kind:'Historische Bronzeglocke im Freien',setting:'Kanonia hinter der Johanneskathedrale, Warschau',hours:'Der Außenbereich ist meist zugänglich; zeitweilige Sperrungen sind möglich.',admission:'Für den Blick auf die Glocke ist normalerweise keine Eintrittskarte nötig.',access:'Auf Kopfsteinpflaster achten und Hauseingänge freihalten.',stay:'Die Altstadt ist zu Fuß praktisch, das Zentrum für weitere Verbindungen.',reviews:'Ein ruhiger Halt mit reizvollen Details der Glockengießkunst.',questions:[['Wo steht die Glocke?','Auf Kanonia hinter der Kathedrale, nicht auf dem Schlossplatz.'],['Brauche ich ein Ticket?','Für den öffentlichen Außenbereich normalerweise nicht.']]},bellSource);
const deView=compact({title:'Aussichtspunkt Gnojna Góra',intro:'Blicken Sie von der Altstadthöhe über die Weichsel und nach Praga.',history:'Der Name Gnojna Góra erinnert an die frühere Nutzung des Stadtrands. Heute bietet die öffentliche Terrasse einen weiten Blick über das Weichseltal.',design:'Die geschwungene Brüstung folgt dem Hang und rahmt Fluss, gegenüberliegendes Ufer und Altstadtdächer.',highlights:['Weichselpanorama und Praga','Terrasse auf der Böschung','Kontrast zwischen Altstadt und Flusslandschaft'],observations:['Suchen Sie die Weichsel und die Stadtviertel von Praga.','Betrachten Sie die Dachlandschaft am Rand der Altstadt.','Vergleichen Sie die nahe Brüstung mit dem weiten Tal.'],steps:['Gehen Sie vom Altstadtmarkt zur Brzozowa-Straße.','Suchen Sie die öffentliche Terrasse am Hang.','Bleiben Sie hinter der Brüstung und betrachten Sie das Panorama.','Kehren Sie über Kanonia zum Schlossplatz zurück.'],route:'Altstadtmarkt → Brzozowa → Gnojna Góra → Kanonia → Schlossplatz.',visit:'Rechnen Sie mit 10–20 Minuten und beachten Sie Wetter und Geländer.',photo:'Wählen Sie eine Weitwinkelaufnahme mit der Brüstung im Vordergrund.',manager:'Stadt Warschau — öffentliche Aussichtsterrasse',context:'Terrasse und Zugänge sind Teil des städtischen öffentlichen Raums; Wartung und zeitweilige Einschränkungen werden kommunal geregelt.',kind:'Offene Aussichtsterrasse',setting:'Gnojna Góra nahe Brzozowa, Warschauer Altstadt',hours:'Der Außenbereich ist meist zugänglich; Bauarbeiten können ihn einschränken.',admission:'Normalerweise kein gesonderter Eintritt.',access:'Vorsicht bei nassem Pflaster und an der Hangkante.',stay:'Altstadt und Stadtzentrum sind bequeme Ausgangspunkte.',reviews:'Besonders reizvoll sind Flussblick und die Topografie der Altstadt.',questions:[['Ist das der Turm von St. Anna?','Nein, Gnojna Góra ist eine eigene Freiluftterrasse.'],['Was kann ich sehen?','Die Weichsel, Praga und die Dächer am Altstadtrand.']]},viewSource);

const localized: Partial<Record<Locale, Record<string,GuideTranslation>>> = {
  pl:{'nearby/kanonia-wishing-bell':plBell,'nearby/gnojna-gora-viewpoint':plView},
  zh:{'nearby/kanonia-wishing-bell':zhBell,'nearby/gnojna-gora-viewpoint':zhView},
  ru:{'nearby/kanonia-wishing-bell':ruBell,'nearby/gnojna-gora-viewpoint':ruView},
  de:{'nearby/kanonia-wishing-bell':deBell,'nearby/gnojna-gora-viewpoint':deView},
};
export function newNearbyTranslation(locale:Locale,slug:string):GuideTranslation|undefined {return localized[locale]?.[slug];}
