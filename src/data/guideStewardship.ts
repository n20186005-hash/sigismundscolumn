type Stewardship = { manager: string; context: string; source?: string };

const city = 'The City of Warsaw is responsible for the public urban setting, with maintenance and access handled by the relevant municipal services. Individual monuments, buildings and event installations may have separate custodians.';
const oldTown = 'This public space forms part of Warsaw’s historic Old Town. Public-space upkeep falls within the city’s municipal responsibilities, while individual buildings and monuments have their own owners or custodians.';

const places: Record<string, Stewardship> = {
  'nearby/castle-square': {manager:'City of Warsaw — public space',context:oldTown},
  'nearby/royal-castle-warsaw': {manager:'Royal Castle in Warsaw – Museum',context:'The Royal Castle operates as a museum and looks after its historic interiors and collections. Its visitor regulations also cover the museum-managed castle grounds; the surrounding Castle Square is a separate public space.',source:'https://www.zamek-krolewski.pl/en/'},
  'nearby/st-annes-church': {manager:'St. Anne’s Church religious community',context:'The church is an active place of worship, so the religious community determines access during services and church activities. The neighbouring public street and square are separate municipal spaces.'},
  'nearby/old-town-market-square': {manager:'City of Warsaw — public square',context:oldTown},
  'nearby/warsaw-mermaid-statue': {manager:'City of Warsaw — public monument setting',context:'The Old Town mermaid is part of Warsaw’s civic heritage in the public Market Square. The city oversees the surrounding public space, while monument conservation follows the applicable heritage-protection arrangements.'},
  'nearby/warsaw-barbican': {manager:'Warsaw municipal public-space and heritage services',context:'The Barbican is part of Warsaw’s historic fortifications. Municipal services handle the surrounding public routes, while conservation work is subject to the historic-monument protection framework.'},
  'nearby/st-johns-archcathedral': {manager:'St. John’s Archcathedral church authorities',context:'This is a functioning Roman Catholic cathedral. Its church authorities organise worship and visitor access, while the adjacent Old Town street remains a public route.'},
  'nearby/kanonia-square': {manager:'City of Warsaw — public square',context:oldTown},
  'nearby/museum-of-warsaw': {manager:'Museum of Warsaw',context:'The Museum of Warsaw is a municipal cultural institution. It is responsible for its collections, exhibitions and visitor arrangements in the historic Market Square buildings.',source:'https://muzeumwarszawy.pl/en/'},
  'nearby/krasinski-palace': {manager:'National Library of Poland',context:'The historic Krasiński Palace is associated with the National Library of Poland and its cultural collections. The neighbouring Krasiński Garden is a distinct public green space with separate city maintenance arrangements.',source:'https://www.bn.org.pl/en/'},
  'nearby/presidential-palace': {manager:'Chancellery of the President of the Republic of Poland',context:'The Presidential Palace serves the Polish presidency. Official activities, security and any authorised access are governed by the presidential administration rather than by ordinary museum visiting rules.',source:'https://www.president.pl/'},
  'nearby/adam-mickiewicz-monument': {manager:'City of Warsaw — public monument setting',context:'The monument stands along Warsaw’s public Royal Route. Municipal services care for the surrounding streetscape, with any conservation of the monument subject to heritage requirements.'},
  'nearby/magdalena-abakanowicz-footbridge': {manager:'City of Warsaw — public pedestrian and cycling infrastructure',context:'This bridge is a Warsaw public crossing connecting the Vistula boulevards and Praga. Its use, upkeep and any temporary restrictions are handled through the city’s relevant infrastructure services; the adjoining riverside areas have their own maintenance arrangements.',source:'https://warszawa19115.pl/en/-/most-pieszo-rowerowy'},
  'nearby/multimedia-fountain-vistula-boulevards': {manager:'Warsaw municipal riverfront services',context:'The fountain pin lies within the public Vistula boulevards area. Warsaw’s Municipal Greenery Authority (Zarząd Zieleni) looks after many Vistula riverside areas; responsibility for this particular fountain’s equipment or programme is not established here. Check posted notices for operation and access.',source:'https://zzw.waw.pl/en/our-activities/the-vistula-district/the-vistula-boulevards/'},
};

export function guideStewardship(slug: string, title: string): Stewardship {
  const place = places[slug];
  if (place) return place;
  if (slug.startsWith('routes/') || slug.startsWith('transport/')) return {
    manager:'City of Warsaw and the relevant transport or venue operators',
    context:`${title} is a visitor itinerary or practical guide rather than a separately operated attraction. Warsaw's municipal services oversee public streets and squares; railway, airport, transit and ticketed stops on the route remain under their respective operators.`,
  };
  if (slug.startsWith('food/') || slug.startsWith('travel/') || slug.startsWith('photography/')) return {
    manager:'City of Warsaw for public areas; individual businesses for their premises',
    context:`${title} covers experiences across multiple locations, not one managed venue. Public paths and squares are city spaces, while restaurants, cafés, hotels and museums set their own operating and access policies.`,
  };
  return {manager:'City of Warsaw — public monument setting',context:`This guide focuses on Sigismund’s Column in Castle Square. ${city}`};
}
