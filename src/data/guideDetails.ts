// Individually researched editorial additions: these are deliberately not shared
// generic descriptions. Operational details should be checked with venue operators.
export type GuideDetail = {
  story: string;
  design: string;
  observations: string[];
  steps: string[];
  questions: [string,string][];
};
export const guideDetails: Record<string,GuideDetail> = {
  'history': {
    story:'The column was unveiled in November 1644 at the initiative of Władysław IV, who used the monument to honour his father, Sigismund III Vasa. The decision to place a ruler high above a busy public square helped establish a new language for secular monuments in early modern Europe. Its later destruction and reconstruction also make it a visible record of Warsaw’s twentieth-century history.',
    design:'Look at the monument as a sequence of parts: the elevated figure, its capital, the long shaft, the inscription-bearing pedestal and the square around it. The monument was intended to be read from a distance and then examined more closely. Compare the present shaft with the surviving historic fragments near the Royal Castle rather than assuming every visible stone dates to 1644.',
    observations:['Read the inscription panels as a seventeenth-century claim about dynastic prestige.','Compare the statue’s silhouette with the castle façade to understand how the memorial commands the square.','Find the surviving older column elements near the castle wall, which tell a different story from the reconstructed monument.'],
    steps:['Begin at the southern approach to Castle Square and observe the full silhouette.','Walk toward the pedestal to inspect inscriptions and sculptural details.','Continue toward the castle wall to look for the surviving older elements.','Finish at the Royal Castle or Museum of Warsaw to place the monument in context.'],
    questions:[['Why was it erected?','Władysław IV commissioned it as a memorial to his father, Sigismund III Vasa, and as a public expression of royal power.'],['Is the entire column original?','No. Wartime damage and subsequent reconstruction mean the monument includes later fabric; historic shaft fragments survive separately.']]
  },
  'sigismund-iii-vasa': {
    story:'Sigismund III Vasa was elected king of the Polish–Lithuanian Commonwealth in 1587 and ruled until 1632. His Swedish dynastic connections, political ambitions and religious commitments shaped a turbulent reign. His court’s move to Warsaw was a long-term change in where power was exercised, not an instantaneous transfer of every institution from Kraków.',
    design:'In the statue, the king is presented as a commanding figure rather than an intimate portrait. The cross and sword belong to a visual vocabulary of royal authority, military strength and religion. The elevated position encourages the viewer to see the ruler as part of the skyline.',
    observations:['Compare the king’s pose with the formal royal rooms of the nearby castle.','Note how the memorial’s dynastic narrative differs from a modern historical biography.','Consider why later generations chose to restore this figure after the Second World War.'],
    steps:['Study the statue from the open square.','Look for the inscriptions naming the monarch.','Visit the Royal Castle’s historical exhibitions if open.','Compare the monument’s message with museum descriptions of Warsaw’s political growth.'],
    questions:[['Did Sigismund III officially move the capital in 1596?','The royal court and seat of power shifted to Warsaw, while Kraków retained important official and ceremonial roles.'],['Who commissioned his column?','His son and successor Władysław IV commissioned the memorial.']]
  },
  'architecture': {
    story:'The column is a seventeenth-century monument designed to project a royal image into a public urban setting. Its survival as a Warsaw landmark is also an architectural story of damaged material, replacement elements and careful reassembly after the war.',
    design:'The tall vertical shaft creates a strong axis between the stone pedestal and the king’s bronze figure. Inscription plaques give information at pedestrian scale while the silhouette works at city scale. The monument’s apparent proportions change depending on whether it is seen close up, against the Royal Castle or across the entire square.',
    observations:['Study the transitions between pedestal, shaft, capital and statue.','Inspect the placement and framing of inscription plaques.','Observe how surrounding rooftops and the castle influence the perceived height.'],
    steps:['Start with a wide view from the Royal Route entrance.','Approach the base and move around its different faces.','Step back toward the castle to compare the silhouette.','Look for older column fragments displayed near the castle.'],
    questions:[['What makes this column architecturally distinctive?','Its early modern use of a freestanding column to elevate a secular ruler was unusually ambitious.'],['Where are the original fragments?','Historic shaft elements can be seen near the Royal Castle; confirm the display location on site.']]
  },
  'war-damage-restoration': {
    story:'Warsaw’s centre suffered catastrophic damage during the Second World War, and Sigismund’s Column was among the monuments brought down. The king’s figure returned to Castle Square in 1949. Later reconstruction of the surrounding urban fabric means today’s scene combines restored historic forms with post-war decisions about memory.',
    design:'This is an opportunity to distinguish restoration from preservation. Material fragments, archival photographs and rebuilt elements each supply different evidence. The older shafts near the castle are particularly tangible reminders that a recognisable landmark can contain several historical layers.',
    observations:['Look for repaired or replaced materials without treating every visual change as wartime damage.','Use archival photographs to compare the 1945 square with its current form.','Consider why rebuilding the column became symbolically important even before the Royal Castle was fully restored.'],
    steps:['Start at the reconstructed monument.','Locate historic shaft fragments by the Royal Castle wall.','Compare a reliable wartime photograph with the same viewing direction.','Continue to Museum of Warsaw for the broader reconstruction story.'],
    questions:[['When did the statue return?','The statue was restored to Castle Square in 1949.'],['Did the entire square survive the war intact?','No. The Old Town and castle precinct experienced severe destruction and extensive post-war reconstruction.']]
  },
  'inscriptions-symbols': {
    story:'The column’s texts express a courtly view of Sigismund III Vasa, celebrating dynastic titles and military-political achievements. They are most valuable when read as historical statements about how rulers wished to be remembered, not as impartial summaries of a reign.',
    design:'Inscription panels are set into the monument’s lower structure so they can be read by people on the square. Above them, the ruler’s sword and cross connect words to a visual story about authority. The distance between inscription and statue is itself part of the composition.',
    observations:['Photograph each readable panel separately for later transcription.','Compare the symbolic weapons with the monument’s written claims.','Remember that early modern Latin and modern translations can differ in tone and interpretation.'],
    steps:['Walk around the pedestal to identify each inscription face.','Read or photograph legible passages without climbing the monument.','Step back to relate those texts to the figure above.','Consult a museum transcription or specialist source after your visit.'],
    questions:[['Are the inscriptions neutral historical accounts?','No. They are commemorative and dynastic statements from the period.'],['Can visitors touch or climb the monument?','Treat it as protected heritage and follow any on-site barriers or instructions.']]
  },
  'visiting-guide': {
    story:'Castle Square remains an everyday public space as well as a historic destination. The column is encountered in the open air, often as the first unmistakable landmark when approaching the Old Town along Krakowskie Przedmieście.',
    design:'The monument works especially well as an orientation point: nearby are the Royal Castle, St. Anne’s Church and the streets leading toward the cathedral and Market Square. These are separate attractions with different admission arrangements.',
    observations:['Choose a viewpoint that shows the whole memorial rather than only its base.','Look for the entrance to the Old Town streets behind the castle precinct.','Notice how pedestrian movement changes the character of the square across the day.'],
    steps:['Arrive from Krakowskie Przedmieście.','Spend time studying the column and castle façades.','Turn toward St. John’s Archcathedral.','Continue to the Market Square and Barbican if time allows.'],
    questions:[['Do I need a ticket to view the column?','The monument stands outdoors on Castle Square. Tickets may be required for nearby museums and castle interiors, not for viewing the column from the square.'],['How long should I spend here?','A focused outdoor stop can take 10–20 minutes; a wider Old Town route takes much longer.']]
  },
  'best-photo-spots': {
    story:'The column’s height and the changing edges of Castle Square create several distinct photographic compositions within a short walk. The most recognisable images keep either the Royal Castle or Old Town roofline in view.',
    design:'A close camera position exaggerates the height of the shaft and may distort surrounding buildings. From farther back, the statue, capital and pedestal can fit in a single frame while retaining more architectural context.',
    observations:['Try the south-western approach for a broad establishing frame.','Use a diagonal view for separation between the statue and rooftops.','Watch the position of the sun, as the shaft can become a silhouette against bright sky.'],
    steps:['Make a wide image from the south of Castle Square.','Move around the pedestal for inscription details.','Use a longer focal length for the king’s statue.','Return during blue hour if you want evening illumination.'],
    questions:[['When is the square least crowded?','Weekday mornings are often calmer, though events and visitor patterns vary.'],['Is a drone necessary?','No. Strong ground-level viewpoints are readily available; aerial photography has separate rules.']]
  },
  'how-to-get-there': {
    story:'Castle Square sits at the boundary between the Old Town and the Royal Route. Its pedestrian setting makes the final portion of most city journeys a short walk, whatever mode of transport you use earlier.',
    design:'Rather than navigating to a museum entrance, aim for Plac Zamkowy itself. The column rises above the square, while St. Anne’s Church identifies the southern approach and the Royal Castle anchors the eastern side.',
    observations:['Identify pedestrian access before travelling by car.','Check current route diversions and stop names with Warsaw public transport.','Allow extra time for cobblestones and crowded sightseeing streets.'],
    steps:['Choose a transit connection toward central Old Town.','Walk toward the southern end of Castle Square.','Use the column as the visible meeting point.','Continue on foot toward your next attraction.'],
    questions:[['Can a taxi stop directly at the column?','Do not assume vehicle access to the pedestrian square; arrange a lawful nearby drop-off.'],['Which exact stop should I use?','It depends on your starting point and the live network. Check Warsaw’s official journey planner.']]
  },
  'nearby/castle-square': {
    story:'Castle Square grew around the royal centre and became a symbolic stage for Warsaw’s public life. Its current façades and open space must be understood alongside the massive destruction of the historic centre during the Second World War and the subsequent reconstruction.',
    design:'The Royal Castle forms one edge, St. Anne’s Church marks the southern approach and Sigismund’s Column supplies a vertical focal point. The meeting of broad square and narrow Old Town streets is one of the most striking spatial contrasts in Warsaw.',
    observations:['Stand by the Royal Route entrance and identify all three major landmarks.','Watch the shift in scale as you enter Świętojańska Street.','Compare the castle wall and surviving fragments with the reconstructed square.'],
    steps:['Enter from Krakowskie Przedmieście.','Circle Sigismund’s Column for a full view.','Observe the Royal Castle exterior.','Walk into the Old Town toward the cathedral.'],
    questions:[['Is Castle Square the same as Old Town Market Square?','No. They are distinct public squares connected by Old Town streets.'],['Is the square free to visit?','The open public square is accessible without a museum ticket; separate attractions may charge admission.']]
  },
  'nearby/royal-castle-warsaw': {
    story:'The castle developed from the residence of Mazovian dukes into a seat of Polish rulers. Sigismund III Vasa expanded its royal role, and the building later became central to parliamentary and state history. Much of the castle was destroyed during the Second World War and rebuilt through a major public effort.',
    design:'The long façade facing Castle Square provides the monument’s most important architectural backdrop. Inside, reconstructed royal interiors and collections help explain the political culture that produced the column outside.',
    observations:['Compare the castle’s tower and roofline with the column’s vertical axis.','Look for the difference between exterior reconstruction and displayed historic collections.','Use the museum interpretation to distinguish the phases of royal residence and republican state use.'],
    steps:['Start outside at Sigismund’s Column.','Take a broad photo of the castle façade.','Enter with a valid museum ticket and follow the current gallery route.','Return outside and continue toward the cathedral.'],
    questions:[['Is entry free?','The exterior and square can be viewed freely; museum ticket rules and any free-entry periods are set by the Royal Castle.'],['How can I check current opening hours?','Use the Royal Castle’s official visitor pages before travelling.']]
  },
  'nearby/st-annes-church': {
    story:'St. Anne’s Church is a long-established landmark at the beginning of Warsaw’s Royal Route. Its position beside Castle Square makes it an excellent first stop for visitors moving between the Old Town and the southern historic avenue.',
    design:'The church’s façade presents a more formal architectural face to Krakowskie Przedmieście. The nearby bell-tower viewpoint provides a different way of appreciating the column, square, castle and city skyline.',
    observations:['Compare the church façade with the castle’s older monumental massing.','From the tower, look for the arrangement of streets radiating from the square.','Remember that church interiors remain places of worship, not simply attractions.'],
    steps:['Approach from the column across the southern side of the square.','View the church façade from the opposite pavement.','Check whether the tower is operating for visitors.','Continue south along the Royal Route.'],
    questions:[['Can I climb the tower?','Tower visitor access is subject to its current posted schedule and conditions.'],['Can I visit during a service?','Respect religious activity and any restrictions on sightseeing or photography.']]
  },
  'nearby/old-town-market-square': {
    story:'Warsaw’s Old Town Market Square retains the memory of the city’s medieval mercantile centre. The picturesque façades seen today represent an extraordinary post-war reconstruction informed by historic images and architectural research.',
    design:'The square is enclosed by rows of decorated townhouses of varied colour and height. Its geometry makes corner viewpoints especially effective for comparing individual fronts with the overall urban composition.',
    observations:['Find the mermaid monument and consider its civic meaning.','Look at painted or sculpted façade details rather than treating the houses as one uniform backdrop.','Identify the Museum of Warsaw buildings along the square.'],
    steps:['Approach from St. John’s Archcathedral.','Walk a full circuit of the square.','Visit the mermaid sculpture.','Continue to the Barbican through Nowomiejska Street.'],
    questions:[['How is it different from Castle Square?','The Market Square is the old commercial heart; Castle Square is focused on the royal precinct.'],['Are the coloured buildings original?','Many were reconstructed after severe wartime destruction, drawing on historic evidence.']]
  },
  'nearby/warsaw-mermaid-statue': {
    story:'The Syrenka, or Warsaw Mermaid, is the city’s civic emblem. The Old Town Market Square sculpture is one expression of a symbol also found on the city’s coat of arms and in several other Warsaw locations.',
    design:'The figure traditionally combines human and fish forms with defensive attributes. Its sculptural scale works at pedestrian height, unlike the elevated monarch on Sigismund’s Column.',
    observations:['Notice the shield and sword associated with the city’s protective symbolism.','Compare the mermaid’s small scale with the buildings around her.','Do not confuse this version with the much larger Vistula riverbank monument.'],
    steps:['Enter Old Town Market Square.','Find the statue near the centre.','View it from different sides with surrounding houses in the background.','Continue into the Museum of Warsaw or toward the Barbican.'],
    questions:[['Is this Warsaw’s only mermaid statue?','No. The city has other mermaid depictions, including a prominent riverside monument.'],['Is the statue near Sigismund’s Column?','Yes, they are connected by a walk through Old Town streets but stand in different squares.']]
  },
  'nearby/warsaw-barbican': {
    story:'The Barbican reflects the defensive history of Warsaw’s Old Town, positioned where older walls marked the transition toward the New Town. Its rebuilt brickwork is part of the city’s larger post-war restoration story.',
    design:'Curved red-brick walls and openings create a strong contrast with the ornate townhouses of the Market Square. The passageway also frames views of the narrow streets on either side.',
    observations:['Look at the relationship between the outer curved structure and neighbouring defensive walls.','Use the arched openings to frame views down the pedestrian route.','Notice where reconstructed brick surfaces meet different phases of the urban fabric.'],
    steps:['Walk north from Market Square along Nowomiejska.','Approach the Barbican from the Old Town side.','Pass through the defensive gateway.','Look back toward the Old Town before continuing into the New Town.'],
    questions:[['Is the Barbican completely medieval fabric?','Its current appearance includes substantial twentieth-century reconstruction.'],['Can I walk through it?','The public pedestrian route normally passes through this area; follow temporary barriers when present.']]
  },
  'nearby/st-johns-archcathedral': {
    story:'St. John’s Archcathedral has been central to Warsaw’s religious and political ceremonies for centuries. It suffered extensive wartime destruction, and its restored form reflects historical study as well as post-war design choices.',
    design:'The soaring brick façade and narrow street approach create a distinctly different atmosphere from the open Castle Square. Within the cathedral, ecclesiastical furnishings and memorials add layers of national memory.',
    observations:['Observe how the narrow street heightens the façade’s vertical impression.','Look for memorial elements that connect religion with Polish public history.','Respect the distinction between visitor areas and spaces reserved for worship.'],
    steps:['Leave the Royal Castle area through Świętojańska Street.','Pause outside for the full façade.','Enter only when visitor access allows.','Continue to Kanonia Square behind the cathedral.'],
    questions:[['Is the cathedral next to Castle Square?','It is a short walk through the adjacent Old Town street network.'],['Are photographs allowed inside?','Follow the cathedral’s current rules and any restrictions during services.']]
  },
  'nearby/kanonia-square': {
    story:'Kanonia Square is a small courtyard tucked behind the cathedral. Its secluded urban scale reveals a quieter side of Warsaw’s Old Town that can be missed on a route focused only on the major open squares.',
    design:'The surrounding townhouses create a compact enclosure; their varied surfaces and openings invite slow observation. This intimate space contrasts with the long sightlines of Castle Square.',
    observations:['Notice the way the houses define the courtyard rather than a grand monument.','Look for details at doorways, windows and the central public space.','Respect nearby residents and avoid blocking entrances.'],
    steps:['Leave the cathedral by the nearby passage toward Kanonia.','Pause in the courtyard to observe its edges.','Take a quiet photograph without obstructing others.','Return to the Old Town routes toward Market Square.'],
    questions:[['Is Kanonia Square a separate destination?','Yes, it is a small historic public space behind the cathedral.'],['How long should I allow?','A brief stop fits comfortably into a cathedral-to-market-square walk.']]
  },
  'nearby/museum-of-warsaw': {
    story:'The Museum of Warsaw interprets the city through objects, visual material and stories of everyday life. It is particularly valuable after seeing the rebuilt Old Town, because the museum can explain what survives, what was lost and how the historic district was restored.',
    design:'The museum occupies historic townhouses on the Market Square, so the building is itself part of the visit. Galleries can connect small objects to large urban changes, including the history of Sigismund’s Column.',
    observations:['Compare objects associated with Warsaw before and after the war.','Study how the townhouse interiors differ from the open square.','Look for archive photographs that contextualise the streets you walked through.'],
    steps:['Walk from the column to Market Square.','Identify the museum entrance and current exhibitions.','Visit collections at a pace suited to your interests.','Return outside to compare the square with what you learned.'],
    questions:[['Does the museum cover the column?','Its collections and interpretation include Warsaw’s monuments and historic memory, including material related to Sigismund’s Column.'],['Should I book tickets?','Check the museum’s official site for current admission and timed programmes.']]
  },
  'nearby/krasinski-palace': {
    story:'Krasiński Palace extends a Warsaw visit beyond the royal precinct into the world of aristocratic residences and national cultural institutions. Its history is associated with the powerful Krasiński family and the evolution of the city’s ceremonial architecture.',
    design:'The palace presents a symmetrical baroque composition with strong central emphasis and sculptural ornament. The garden setting allows a more open view of the building than many tightly enclosed Old Town streets.',
    observations:['Study the palace’s central façade and sculptural decoration.','Compare the formal palace frontage with the surrounding garden.','Differentiate freely accessible exterior space from any controlled interior access.'],
    steps:['Continue from the Barbican toward the palace district.','Approach from a frontal garden-side viewpoint.','Walk around accessible public paths.','Return toward the Old Town or continue on a longer city-centre walk.'],
    questions:[['Can visitors enter every part of the palace?','No general assumption should be made; check the current operator’s access arrangements.'],['Why include it on an Old Town route?','It adds a contrasting example of Warsaw’s aristocratic and baroque architecture.']]
  },
  'nearby/presidential-palace': {
    story:'The Presidential Palace is an important landmark of Poland’s modern state on Krakowskie Przedmieście. Its location along the historic Royal Route places present-day civic institutions beside churches, palaces and older royal landmarks.',
    design:'The restrained formal frontage and forecourt are best viewed from the public street. The architectural experience differs markedly from the animated, enclosed spaces of Old Town Market Square.',
    observations:['Observe the relationship between the façade, forecourt and street.','Look at how the building participates in the Royal Route streetscape.','Respect security measures and avoid entering restricted areas.'],
    steps:['Start at St. Anne’s Church near Castle Square.','Walk south along Krakowskie Przedmieście.','View the palace exterior from a lawful public viewpoint.','Continue to the Mickiewicz monument or nearby cultural institutions.'],
    questions:[['Can I freely tour the interiors?','Do not assume public interior access; any official visits require specific arrangements.'],['Is it the Royal Castle?','No. The Presidential Palace is a different building farther along the Royal Route.']]
  },
  'nearby/adam-mickiewicz-monument': {
    story:'Adam Mickiewicz was one of the major figures of Polish Romantic literature. His monument on the Royal Route invites visitors to consider Warsaw not only through monarchs and political institutions but also through writers and national culture.',
    design:'The sculptural portrait and pedestal create a formal memorial aligned with the avenue. Unlike Sigismund’s Column, this monument belongs to a later culture of literary public commemoration.',
    observations:['Study the poet’s pose and surrounding decorative elements.','Notice how the memorial sits within the rhythm of the Royal Route.','Compare literary and dynastic commemoration on the same walk.'],
    steps:['Begin at Castle Square.','Proceed toward St. Anne’s Church.','Walk south to the Mickiewicz memorial.','Continue toward the Presidential Palace and adjoining historic buildings.'],
    questions:[['Why is Mickiewicz important?','He is a central poet of Polish Romanticism and a major cultural figure.'],['Is this the same monument as Sigismund’s Column?','No. They commemorate different people and periods along the broader historic walking route.']]
  },
  'nearby/magdalena-abakanowicz-footbridge': {
    story:'Opened in 2024, the pedestrian-and-cycle crossing links the central Vistula boulevards with Praga on the eastern bank. It was named after the influential Polish sculptor Magdalena Abakanowicz. The roughly 452-metre bridge is part of Warsaw’s effort to reconnect everyday life with its riverfront.',
    design:'The crossing is intentionally not a straight, uniform strip: turns and widened areas shape the experience of walking over the river. Railings, a textured deck and viewpoints allow people to notice both the water and the city skyline.',
    observations:['Watch how the bridge changes width at viewing areas.','Compare central Warsaw’s dense skyline with the Praga riverbank.','Observe cyclists and pedestrians sharing the crossing responsibly.'],
    steps:['Approach from the Vistula boulevards on the city-centre bank.','Pause at an appropriate wider viewing point.','Cross toward Praga without blocking cycle movement.','Continue along the opposite riverbank or return by the same bridge.'],
    questions:[['Is the bridge for cars?','No. It is intended for pedestrians and cyclists.'],['How long is it?','Warsaw’s city information gives a length of approximately 452 metres.'],['Who was Magdalena Abakanowicz?','A major Polish sculptor whose name was given to the crossing after it opened.']]
  },
  'nearby/multimedia-fountain-vistula-boulevards': {
    story:'The Google Maps listing “Fontanna multimedialna na bulwarach” marks a fountain location on the central Vistula waterfront close to the newer pedestrian bridge. It is distinct from the established Multimedia Fountain Park at Podzamcze farther north; their show programmes and installations must not be treated as interchangeable.',
    design:'The riverside setting is the main spatial feature: open promenades, the river, bridges and city views provide context for the mapped fountain point. Exact equipment and water operation should be checked on site rather than inferred from the name alone.',
    observations:['Use the dedicated Maps pin to locate this fountain rather than the Podzamcze park.','Look toward the nearby pedestrian bridge for an extended waterfront view.','Check on-site signs for seasonal operation and any restrictions around water features.'],
    steps:['Walk along the central Vistula promenade.','Navigate to the exact fountain pin supplied for this guide.','Spend time observing the surrounding riverfront.','Continue toward the Magdalena Abakanowicz footbridge.'],
    questions:[['Is this the famous Multimedia Fountain Park?','No. The supplied map pin is farther south on the central boulevards; Podzamcze’s Multimedia Fountain Park is a separate attraction.'],['Are evening shows guaranteed?','No. This particular location has no independently verified show schedule in this guide.'],['Can I combine it with the bridge?','Yes. Both supplied map pins lie in the central riverfront area.']]
  },
  'routes/old-town-walking-tour': {
    story:'A walking route from Castle Square through the cathedral, Market Square and Barbican reveals how medieval street planning, royal symbolism and post-war reconstruction meet in one compact district.',
    design:'The route alternates open spaces with narrow lanes. The dramatic change from Castle Square to Świętojańska Street is as important as individual landmarks. Cobblestones and busy pedestrian segments can affect pace.',
    observations:['Notice the large-scale royal setting at the start.','Observe the cathedral façade closely within its narrow street.','Compare the Market Square’s townhouse fronts with the Barbican’s defensive brickwork.'],
    steps:['Start at Sigismund’s Column and Royal Castle exterior.','Walk via St. John’s Archcathedral and Kanonia.','Explore Market Square and the mermaid.','Finish at the Barbican and decide whether to continue into New Town.'],
    questions:[['How long does the route take?','Plan roughly one to two hours for an exterior-focused walk, excluding long museum visits.'],['Is it suitable for strollers?','Many paths are walkable, but uneven paving and crowds may require a slower pace.']]
  },
  'routes/royal-route-walk': {
    story:'Warsaw’s Royal Route joins historic palaces, churches and civic landmarks. A shorter walk beginning at Sigismund’s Column lets visitors compare the older royal precinct with institutions and monuments along Krakowskie Przedmieście.',
    design:'The geometry shifts from an enclosed square into a grand avenue. Church façades, palace entrances and freestanding commemorative sculpture form a sequence of changing viewpoints.',
    observations:['Look back north toward the column after leaving Castle Square.','Compare St. Anne’s Church with the more formal palace fronts.','Consider how modern civic use changes historic buildings.'],
    steps:['Begin at Castle Square and identify St. Anne’s Church.','Walk down Krakowskie Przedmieście.','Stop at the Mickiewicz monument.','View the Presidential Palace from public space.'],
    questions:[['Does this cover the entire Royal Route?','No. This is a manageable central segment; the full historic route extends much farther.'],['Can I enter the Presidential Palace on this walk?','Treat it as an exterior landmark unless official visitor access has been arranged.']]
  },
  'routes/warsaw-one-day-itinerary': {
    story:'A one-day visit works best when it combines outdoor orientation, one substantial indoor attraction and a flexible walk. Castle Square is a natural starting point because the monument, castle and Old Town streets are immediately legible.',
    design:'The itinerary avoids repeated backtracking by moving from the royal precinct through Old Town and then toward the Royal Route. Museum choices can be swapped depending on weather and opening hours.',
    observations:['Begin with public-space landmarks before crowds build.','Use one museum to add substance to the exterior sights.','Reserve a meal break rather than filling every hour with stops.'],
    steps:['Morning: column, Royal Castle exterior and cathedral.','Late morning: Market Square, mermaid and Barbican.','Midday: lunch and either Royal Castle or Museum of Warsaw.','Afternoon: Royal Route walk, with optional Vistula riverfront time.'],
    questions:[['Can I see everything in one day?','No. This route prioritises a coherent introduction to central Warsaw rather than exhaustive coverage.'],['Which indoor stop should I choose?','Choose the Royal Castle for royal history or Museum of Warsaw for broader city history.']]
  },
  'transport/warsaw-central-station': {
    story:'Warszawa Centralna is a major national railway hub in the modern city centre, whereas Castle Square lies in the historic pedestrian-oriented district. The final approach therefore usually involves public transport and walking.',
    design:'Station platforms, underpasses and exits are part of a modern transport interchange. By contrast, the approach into Old Town becomes progressively more pedestrian-focused and historic in character.',
    observations:['Identify the station exit serving your onward city route.','Check stop names and connections using live Warsaw transport information.','Allow for stairs, lifts and uneven paving if travelling with luggage.'],
    steps:['Arrive at Warszawa Centralna and locate the city transport connection.','Choose a current route toward the Old Town area.','Alight at a practical stop outside the historic pedestrian streets.','Walk to Castle Square and identify Sigismund’s Column.'],
    questions:[['Can I walk the entire way?','A city-centre walk is possible for many travellers but may be inconvenient with luggage or limited mobility.'],['Is there a train platform beside the column?','No. The final approach to the monument is on foot.']]
  },
  'transport/chopin-airport': {
    story:'Warsaw Chopin Airport is the main air gateway close to the city, but the old royal precinct is not an airport transport terminal. A good arrival plan separates the airport-to-city journey from the final approach to pedestrian Castle Square.',
    design:'The transition from transport infrastructure to historic streets is an important practical consideration. Travellers should choose routes based on time, luggage and accessibility rather than assuming the quickest map line is always comfortable.',
    observations:['Review live rail, bus or taxi options before departing the airport.','Consider where a car can legally drop you near the Old Town.','Check service disruptions during major city events.'],
    steps:['After arrivals, consult the airport and Warsaw transit guidance.','Travel toward central Warsaw by your chosen mode.','Transfer or walk toward Castle Square.','Use the dedicated monument map pin for the last section.'],
    questions:[['Can I take a direct airport train to the column?','No. The monument is in a pedestrian square; expect an onward connection or walk.'],['Should I rely on a fixed bus number?','No. Check the current official journey planner because services can change.']]
  },
  'transport/metro-and-bus': {
    story:'Warsaw’s metro, buses and trams provide several ways to reach the Old Town area. The best stop is dependent on the starting point; a good guide teaches how to make the final pedestrian connection rather than inventing one universal route.',
    design:'The historic area’s pedestrian streets and irregular layout differ from a modern transit interchange. The monument is readily recognisable from Castle Square once visitors enter the precinct.',
    observations:['Confirm ticket validity and any validation requirements.','Watch for temporary diversions around events.','Choose accessible exits where step-free travel is needed.'],
    steps:['Enter the starting location in the official journey planner.','Select a stop within a comfortable walk of Plac Zamkowy.','Follow pedestrian signs or map directions toward Castle Square.','Continue on foot through Old Town.'],
    questions:[['Does the metro stop underneath Castle Square?','No. Visitors use a nearby transit connection and walk.'],['How do I know a route is current?','Consult Warszawski Transport Publiczny notices and live planning information.']]
  },
  'transport/parking-near-castle-square': {
    story:'A car may be useful for arriving in central Warsaw, but Castle Square itself belongs to a historic district with pedestrian areas and managed access. Parking planning should therefore begin with lawful facilities away from the monument.',
    design:'The old street network was not designed for unrestricted modern vehicle circulation. Narrow streets, delivery zones and changing event arrangements make curbside assumptions particularly unreliable.',
    observations:['Check controlled parking-zone signs and payment requirements.','Do not confuse a map route with legal vehicle access.','Account for walking distance from the parking location to the square.'],
    steps:['Review current city parking restrictions.','Choose a lawful parking facility or public-transport alternative.','Complete the final section on foot.','Use the column as the meeting point for your group.'],
    questions:[['Can I park directly beside the column?','Do not plan on parking in Castle Square; check legal spaces outside pedestrian areas.'],['Is a taxi drop-off guaranteed?','No. Traffic restrictions and event controls can affect nearby access.']]
  },
  'food/restaurants-near-castle-square': {
    story:'Dining near Castle Square is most useful when integrated into a walking route. The busiest frontages can be convenient, while a side street or Market Square may offer a different atmosphere, menu and price range.',
    design:'Restaurants occupy historic townhouses and public-square edges, sometimes with outdoor seating. The setting adds charm but does not itself establish food quality or accessibility.',
    observations:['Read displayed menus and prices before choosing.','Compare the ease of returning to the planned walking route.','Check indoor seating if wind, rain or cold make terraces uncomfortable.'],
    steps:['Visit the column and Royal Castle exterior.','Walk toward Świętojańska Street or Market Square.','Compare current menus and choose a suitable venue.','Resume the Old Town circuit afterward.'],
    questions:[['Are restaurants directly on Castle Square the best value?','Not necessarily. Compare menu prices, service and recent reviews rather than selecting purely by location.'],['Can I find vegetarian dishes?','Options vary by venue; check current menus and preparation details.']]
  },
  'food/polish-food-old-town': {
    story:'An Old Town meal offers a chance to explore Polish cuisine while visiting historical landmarks. Pierogi, soups and seasonal dishes come in many regional and modern interpretations, and menus may change throughout the year.',
    design:'Traditional-looking interiors and historic façades are part of the dining experience, but food descriptions, ingredients and service practices matter more than decoration.',
    observations:['Compare pierogi fillings and preparation styles.','Read soup descriptions and seasonal specials.','Ask about allergens and dietary preferences rather than relying on translated dish names alone.'],
    steps:['Explore Castle Square before lunch.','Browse menus in the streets toward Market Square.','Choose a dish suited to the season and your preferences.','Continue the Barbican route after your meal.'],
    questions:[['What is a common first dish to try?','Pierogi are widely known, with fillings ranging from savoury to sweet; menus differ by restaurant.'],['Are all traditional dishes meat-based?','No. There are vegetable, cheese and other options, but ingredients should be checked.']]
  },
  'food/cafes-near-sigismunds-column': {
    story:'A café break is a practical way to divide a walking day in Warsaw’s Old Town. The area around Castle Square and Market Square has varied indoor and seasonal outdoor seating options.',
    design:'Historic streets offer attractive views from windows and terraces, but entrances and stairways in older buildings can vary in accessibility. A quieter side street may suit conversation better than a square-front table.',
    observations:['Check whether outdoor seating is operating in the current season.','Look for an easy return to your next attraction.','Confirm the menu, payment methods and any accessibility needs.'],
    steps:['Start with the monument and castle exterior.','Continue toward the Market Square.','Pause at a suitable café after checking its current hours.','Resume the museum or Barbican portion of your walk.'],
    questions:[['Is there a café inside the column?','No. The column is an outdoor monument; cafés are separate nearby businesses.'],['Should I reserve a café table?','It depends on the venue, season and group size; check directly.']]
  },
  'travel/family-friendly-old-town': {
    story:'Children often engage more readily with a short sequence of clear landmarks than a lengthy historical lecture. Warsaw’s mermaid, the towering column and the Barbican offer visibly different stories within a manageable walk.',
    design:'Cobbles, kerbs and crowded narrow streets matter for strollers. Open public squares provide room to regroup, while museum and café stops offer a change of pace.',
    observations:['Turn the mermaid and column into a simple landmark-finding activity.','Watch uneven paving around narrow streets.','Use indoor stops when weather or energy levels change.'],
    steps:['Begin at the column with a short story of the king.','Walk to the cathedral and find the Market Square mermaid.','Take a snack or rest break.','Finish at the Barbican, shortening the route if needed.'],
    questions:[['Can I use a stroller?','Generally possible on public walking routes, but uneven surfaces and crowds require care.'],['Which landmarks might appeal to children?','The mermaid, castle exterior and Barbican provide distinctive visual experiences.']]
  },
  'travel/warsaw-old-town-rainy-day': {
    story:'Rain does not remove the value of Warsaw’s Old Town, but it changes the balance between outdoor landmarks and indoor collections. The Royal Castle and Museum of Warsaw can turn a wet day into a history-focused visit.',
    design:'Cobbled streets and open squares can become slippery. Historic buildings offer indoor refuge but may require admission and have their own opening hours.',
    observations:['Use a short outdoor stop for the column rather than lingering in heavy rain.','Compare the Royal Castle and museum exhibitions before buying tickets.','Notice reflections from wet façades only from safe pedestrian positions.'],
    steps:['Visit Sigismund’s Column briefly.','Choose the Royal Castle or Museum of Warsaw as an indoor anchor.','Take lunch or a warm café break.','Return to Market Square if weather improves.'],
    questions:[['Is the column indoors?','No. It stands in the open square.'],['Which museum works best in the rain?','Both the Royal Castle and Museum of Warsaw are options; check their current programmes and opening hours.']]
  },
  'travel/warsaw-old-town-winter': {
    story:'Winter visits have shorter daylight and can bring frost, snow or wet paving. The Old Town’s historic forms remain rewarding, but the best itinerary alternates brief outdoor views with cafés and indoor attractions.',
    design:'The column and façades look different under low winter light. Seasonal lighting and public events change annually and should be checked against the current calendar.',
    observations:['Plan around local sunset time.','Wear shoes suited to icy or wet stone surfaces.','Do not assume seasonal decorations or events occur in the same form every year.'],
    steps:['Arrive at Castle Square in remaining daylight.','Walk toward Market Square with a short photo stop.','Take an indoor break.','Return for evening lights only if conditions are comfortable.'],
    questions:[['Is the column closed in winter?','It is an outdoor monument, though surrounding public access can be affected by maintenance or events.'],['Are Christmas markets always open?','Seasonal activities and locations vary by year; consult current city event information.']]
  },
  'photography/castle-square-night-photography': {
    story:'After sunset, Castle Square’s monument and façades become layered subjects rather than a single evenly lit scene. A short twilight-to-darkness sequence lets photographers compare changing sky colour and artificial light.',
    design:'The column’s narrow silhouette can be separated against blue-hour sky, while the broad Royal Castle façade gives visual weight to a wider composition. Bright lamps may cause glare or overexposure.',
    observations:['Use the blue-hour sky behind the top of the column.','Keep enough surrounding architecture to locate the scene.','Avoid placing equipment in pedestrian circulation routes.'],
    steps:['Arrive before sunset to select a composition.','Take an environmental frame during blue hour.','Repeat the shot after the square lights become prominent.','Finish with a detail photograph of the monument or castle façade.'],
    questions:[['Do I need a tripod?','No. A stable handheld approach can work, though a tripod may help in low light where permitted.'],['Is drone photography automatically allowed?','No. Drone use is subject to applicable airspace and local restrictions.']]
  },
  'travel/hotels-near-warsaw-old-town': {
    story:'Accommodation near Warsaw’s Old Town is a trade-off between historic atmosphere and transport convenience. The Old Town suits visitors who want early and late walks, while the wider city centre may be easier for rail connections and luggage.',
    design:'Historic buildings can have stairways, compact rooms and limited vehicle access. Hotel photographs should be checked against the exact property rather than assuming all rooms have views of a landmark.',
    observations:['Check the actual address and walking route to Castle Square.','Review lift access if carrying luggage.','Compare late check-in arrangements and connections to Warszawa Centralna.'],
    steps:['Choose your principal arrival and departure transport.','Compare Old Town, Royal Route and central-station areas.','Check each property’s current policies and accessibility.','Plan the column as a walking stop once luggage is stored.'],
    questions:[['Is it necessary to sleep directly on Castle Square?','No. Many central neighbourhoods offer practical access by walking or transit.'],['Which area is best for early trains?','Accommodation near reliable rail connections may be more convenient than the pedestrian Old Town.']]
  },
};
