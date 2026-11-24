import type { Guide } from '../guides';
import data from '../warsaw-nearby.json';
import type { GuideTranslation, Locale } from './types';

const local = {
  en: {
    kind: {museum:'Museum', church:'Active church', outdoor:'Outdoor monument', park:'Public garden', memorial:'Memorial', theatre:'Opera house'},
    context: {
      museum:'The institution manages the exhibition spaces, collections and visitor admission.',
      church:'The church authority sets access for worship and for visitors. The adjoining pavement is public.',
      outdoor:'City services look after the surrounding public space. The separate custodian for conservation of the sculpture is unconfirmed.',
      park:'The municipal greenery authority maintains the public garden, including its paths and planting.',
      memorial:'The city is responsible for the surrounding public square. The ceremonial guard controls access immediately beside the tomb during ceremonies.',
      theatre:'The opera company manages the performance spaces. Theatre Square provides a public view of the façade.',
    },
    city:'City of Warsaw (surrounding public space)',
    entry:(title:string)=>`What should I check before arriving at ${title}?`,
    find:(title:string)=>`What name should I look for on the map for ${title}?`,
    stay:'Central Warsaw is convenient for transit. The Old Town is a good base for combining nearby historic sites on foot.',
  },
  pl: {
    kind: {museum:'Muzeum', church:'Czynny kościół', outdoor:'Pomnik w przestrzeni publicznej', park:'Ogród publiczny', memorial:'Miejsce pamięci', theatre:'Opera'},
    context: {
      museum:'Instytucja odpowiada za sale wystawowe, zbiory i organizację zwiedzania.',
      church:'Gospodarz kościoła ustala zasady udziału w nabożeństwach i zwiedzania. Sąsiedni chodnik jest publiczny.',
      outdoor:'Służby miejskie utrzymują otoczenie. Nie potwierdzono odrębnego opiekuna odpowiedzialnego za konserwację rzeźby.',
      park:'Zarząd Zieleni opiekuje się publicznym ogrodem, jego alejkami i roślinnością.',
      memorial:'Miasto odpowiada za otaczający plac. Podczas uroczystości dostęp bezpośrednio przy grobie reguluje warta honorowa.',
      theatre:'Opera zarządza salami widowiskowymi. Fasada jest widoczna z publicznego placu Teatralnego.',
    },
    city:'Miasto Stołeczne Warszawa (otaczająca przestrzeń publiczna)',
    entry:(title:string)=>`Co sprawdzić przed wizytą w tym miejscu: ${title}?`,
    find:(title:string)=>`Pod jaką nazwą znaleźć miejsce na mapie: ${title}?`,
    stay:'Centrum jest wygodne do przesiadek, a Starówka sprzyja łączeniu zabytków podczas jednego spaceru.',
  },
  zh: {
    kind: {museum:'博物馆或美术馆', church:'仍举行礼拜的教堂', outdoor:'室外纪念雕塑', park:'公共花园', memorial:'纪念地', theatre:'歌剧院'},
    context: {
      museum:'该机构管理展厅、藏品和游客入场。',
      church:'礼拜和参观安排由教堂管理方决定，相邻人行道属于公共空间。',
      outdoor:'周围公共空间由市政部门维护。雕塑本体的修复管理方尚待确认。',
      park:'华沙市绿化管理部门负责这座公共花园的园路和植物养护。',
      memorial:'周围公共广场由华沙市负责。举行仪式时，墓前区域的通行由仪仗卫兵管理。',
      theatre:'歌剧院管理演出空间。剧院外观可从公共剧院广场观看。',
    },
    city:'华沙市（周边公共空间）',
    entry:(title:string)=>`去${title}前应核对哪些入场安排？`,
    find:(title:string)=>`怎样在地图上找到${title}？`,
    stay:'市中心便于换乘，住在老城则可把多个历史地点连成一趟步行路线。',
  },
  ru: {
    kind: {museum:'Музей', church:'Действующий храм', outdoor:'Памятник под открытым небом', park:'Общедоступный сад', memorial:'Мемориал', theatre:'Оперный театр'},
    context: {
      museum:'Учреждение управляет выставочными залами, коллекциями и допуском посетителей.',
      church:'Церковные власти определяют порядок богослужений и посещения. Соседний тротуар общедоступен.',
      outdoor:'Городские службы отвечают за пространство вокруг памятника. Ответственный за реставрацию самой скульптуры не подтверждён.',
      park:'Муниципальная служба озеленения ухаживает за дорожками и растениями общедоступного сада.',
      memorial:'За окружающую площадь отвечает город. Во время церемоний доступ непосредственно к могиле контролирует почётный караул.',
      theatre:'Театр управляет зрительными залами. Фасад виден с общедоступной Театральной площади.',
    },
    city:'Город Варшава (окружающее общественное пространство)',
    entry:(title:string)=>`Что уточнить перед посещением места «${title}»?`,
    find:(title:string)=>`Под каким названием искать на карте место «${title}»?`,
    stay:'Из центра удобно ездить на транспорте, а из Старого города — обходить близлежащие памятники пешком.',
  },
  de: {
    kind: {museum:'Museum', church:'Kirche mit Gottesdiensten', outdoor:'Denkmal im Freien', park:'Öffentlicher Garten', memorial:'Gedenkstätte', theatre:'Opernhaus'},
    context: {
      museum:'Die Einrichtung betreut Ausstellungsräume, Sammlungen und den Besuchereinlass.',
      church:'Die kirchliche Leitung regelt Gottesdienste und Besichtigungen. Der angrenzende Bürgersteig ist öffentlich.',
      outdoor:'Die Stadt betreut den öffentlichen Raum rund um das Denkmal. Wer die Skulptur selbst konservatorisch betreut, ist unbestätigt.',
      park:'Das städtische Grünflächenamt pflegt die Wege und Pflanzen im öffentlichen Garten.',
      memorial:'Die Stadt betreut den umliegenden Platz. Bei Zeremonien regelt die Ehrenwache den unmittelbaren Zugang zum Grab.',
      theatre:'Die Oper verwaltet die Aufführungsräume. Vom öffentlichen Theaterplatz ist die Fassade frei zu sehen.',
    },
    city:'Stadt Warschau (umliegender öffentlicher Raum)',
    entry:(title:string)=>`Was sollte ich vor diesem Besuch prüfen: ${title}?`,
    find:(title:string)=>`Unter welchem Namen finde ich diesen Ort auf der Karte: ${title}?`,
    stay:'Das Zentrum bietet gute Verkehrsverbindungen. Von der Altstadt aus lassen sich mehrere historische Orte zu Fuß verbinden.',
  },
};

export const newWarsawBySlug = new Map(data.map(place => [`nearby/${place.slug}`, place]));

export const newWarsawGuides: Guide[] = data.map(place => {
  const {title, intro, history, route, photo, observation, access} = place.copy.en;
  return {
    slug: `nearby/${place.slug}`, title, category:'Nearby attractions',
    intro, background:history, route, photo, visit: access, highlights:[observation,photo,route],
    mapQuery: `${place.name}, ${place.address}, Warszawa, Polska`, source: place.source,
  };
});

export function warsawNearbyTranslation(locale: Locale, slug: string): GuideTranslation | undefined {
  const place = newWarsawBySlug.get(slug);
  if (!place) return;
  const {title, intro, history, route, observation, photo, faq, hours, access} = place.copy[locale];
  const t = local[locale];
  const kind = place.kind as keyof typeof t.kind;
  const setting = `${place.address}, Warszawa`;
  const visitLength = locale === 'zh' ? `${place.duration} 分钟` : locale === 'ru' ? `${place.duration} мин` : `${place.duration} min`;
  return {
    title, intro, background:history, story:history, design:observation, route, photo,
    visit:access, highlights:[observation,photo,route], observations:[], steps:[],
    questions:[[faq[0],faq[1]],[t.entry(title),access],[t.find(title),`${place.name} · ${setting}`]],
    manager: place.manager ?? t.city, context:t.context[kind], source:place.visitorSource,
    facts:{kind:t.kind[kind], setting, visitLength, hours, admission:access, arrival:route, access, stay:t.stay, reviews:''},
  };
}
