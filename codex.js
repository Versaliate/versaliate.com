(() => {
  const L = (de, en, fr, es, pt) => ({ de, en, fr, es, "pt-BR": pt });

  const ui = {
    title: L("Codex", "Codex", "Codex", "Códice", "Códice"),
    subtitle: L("Wissen aus den aktuell spielbaren Epochen.", "Knowledge from the currently playable eras.", "Connaissances des ères actuellement jouables.", "Conocimiento de las eras actualmente jugables.", "Conhecimento das eras atualmente jogáveis."),
    close: L("Schließen", "Close", "Fermer", "Cerrar", "Fechar"),
    searchLabel: L("Einträge durchsuchen", "Search entries", "Rechercher des entrées", "Buscar entradas", "Pesquisar entradas"),
    searchPlaceholder: L("Codex durchsuchen …", "Search the Codex…", "Rechercher dans le Codex…", "Buscar en el Códice…", "Pesquisar no Códice…"),
    toggleHint: L("Codex öffnen oder schließen", "Open or close Codex", "Ouvrir ou fermer le Codex", "Abrir o cerrar el Códice", "Abrir ou fechar o Códice"),
    escapeHint: L("Schließen", "Close", "Fermer", "Cerrar", "Fechar"),
    noResults: L("Keine passenden Einträge gefunden.", "No matching entries found.", "Aucune entrée correspondante.", "No se encontraron entradas.", "Nenhuma entrada encontrada."),
    oneEntry: L("1 Eintrag", "1 entry", "1 entrée", "1 entrada", "1 entrada"),
    entries: L("{count} Einträge", "{count} entries", "{count} entrées", "{count} entradas", "{count} entradas"),
    era: L("Epoche", "Era", "Ère", "Era", "Era"),
    scale: L("Einheitenskala", "Unit scale", "Échelle d’unités", "Escala de unidades", "Escala de unidades"),
    equivalent: L("Entspricht", "Equivalent", "Équivalent", "Equivalente", "Equivalente")
  };

  const categoryLabels = {
    all: L("Alle", "All", "Tout", "Todo", "Tudo"),
    Creatures: L("Kreaturen", "Creatures", "Créatures", "Criaturas", "Criaturas"),
    Flora: L("Flora", "Flora", "Flore", "Flora", "Flora"),
    Resources: L("Ressourcen", "Resources", "Ressources", "Recursos", "Recursos"),
    Materials: L("Materialien", "Materials", "Matériaux", "Materiales", "Materiais"),
    ToolsAndItems: L("Werkzeuge & Gegenstände", "Tools & items", "Outils et objets", "Herramientas y objetos", "Ferramentas e itens"),
    StructuresAndStations: L("Bauten & Stationen", "Structures & stations", "Structures et stations", "Estructuras y estaciones", "Estruturas e estações"),
    SurvivalAndWorld: L("Überleben & Welt", "Survival & world", "Survie et monde", "Supervivencia y mundo", "Sobrevivência e mundo")
  };

  const entries = [
    {
      id: "material-units", category: "Materials", era: 2, icon: "assets/codex/material-station.png",
      title: L("Materialeinheiten", "Material units", "Unités de matériau", "Unidades de material", "Unidades de material"),
      summary: L("V, Vo, Ven, Vado und Versi bilden die einheitliche Volumenskala von Versalox.", "V, Vo, Ven, Vado and Versi form Versalox's unified volume scale.", "V, Vo, Ven, Vado et Versi constituent l’échelle de volume unifiée de Versalox.", "V, Vo, Ven, Vado y Versi forman la escala de volumen unificada de Versalox.", "V, Vo, Ven, Vado e Versi formam a escala de volume unificada de Versalox."),
      paragraphs: [
        L("Jede Stufe ist exakt fünfmal so groß wie die vorherige. Dadurch lassen sich Materialmengen ohne Verlust zwischen handlichen Portionen und großen Vorräten umrechnen.", "Every step is exactly five times larger than the previous one. Material quantities can therefore be converted losslessly between small portions and large stores.", "Chaque niveau est exactement cinq fois plus grand que le précédent. Les quantités peuvent ainsi être converties sans perte.", "Cada nivel es exactamente cinco veces mayor que el anterior. Así, las cantidades pueden convertirse sin pérdidas.", "Cada nível é exatamente cinco vezes maior que o anterior. Assim, as quantidades podem ser convertidas sem perdas."),
        L("Eine Versi entspricht 0,125 m³. Eine einzelne V-Einheit fasst damit 0,2 Liter.", "One Versi equals 0.125 m³. A single V unit therefore holds 0.2 litres.", "Une Versi équivaut à 0,125 m³. Une unité V contient donc 0,2 litre.", "Una Versi equivale a 0,125 m³. Una unidad V contiene 0,2 litros.", "Uma Versi equivale a 0,125 m³. Uma unidade V contém 0,2 litros.")
      ],
      unitTable: true,
      facts: [
        L("1 Versi = 5 Vado = 25 Ven = 125 Vo = 625 V", "1 Versi = 5 Vado = 25 Ven = 125 Vo = 625 V", "1 Versi = 5 Vado = 25 Ven = 125 Vo = 625 V", "1 Versi = 5 Vado = 25 Ven = 125 Vo = 625 V", "1 Versi = 5 Vado = 25 Ven = 125 Vo = 625 V"),
        L("Das Materialinventar fasst 100 Versi.", "The material inventory holds 100 Versi.", "L’inventaire de matériaux contient 100 Versi.", "El inventario de materiales contiene 100 Versi.", "O inventário de materiais comporta 100 Versi.")
      ]
    },
    {
      id: "material-station", category: "StructuresAndStations", era: 2, icon: "assets/codex/material-station.png",
      title: L("Materialstation", "Material Station", "Station de matériaux", "Estación de materiales", "Estação de materiais"),
      summary: L("Eine Station zum verlustfreien Portionieren und Bündeln von Erde, gebranntem Lehm und Stampflehm.", "A station for losslessly splitting and combining Dirt, Fired Clay and Packed Clay.", "Une station pour diviser et regrouper sans perte la terre, l’argile cuite et l’argile compactée.", "Una estación para dividir y combinar sin pérdidas tierra, arcilla cocida y arcilla compactada.", "Uma estação para dividir e combinar sem perdas terra, argila cozida e argila compactada."),
      paragraphs: [L("Sie übersetzt dieselbe Gesamtmenge zwischen V, Vo, Ven, Vado und Versi. Für bestimmte Bauvorhaben werden weiterhin konkrete Portionen benötigt – damit bleibt die Station ein wichtiger Teil der Produktionskette.", "It translates the same total amount between V, Vo, Ven, Vado and Versi. Some construction tasks still require specific portions, keeping the station relevant to production.", "Elle convertit la même quantité totale entre V, Vo, Ven, Vado et Versi. Certaines constructions exigent toujours des portions précises.", "Convierte la misma cantidad total entre V, Vo, Ven, Vado y Versi. Algunas construcciones aún exigen porciones concretas.", "Ela converte a mesma quantidade total entre V, Vo, Ven, Vado e Versi. Algumas construções ainda exigem porções específicas.")]
    },
    {
      id: "packed-clay", category: "Materials", era: 2, icon: "assets/codex/packed-clay.png",
      title: L("Stampflehm", "Packed Clay", "Argile compactée", "Arcilla compactada", "Argila compactada"),
      summary: L("Ein formbarer Baustoff der zweiten Epoche, hergestellt aus trockenem Lehm, Erde, Wasser und Pflanzenfasern.", "A mouldable Era 2 building material made from Dry Clay, Dirt, Water and Plant Fiber.", "Un matériau de construction de l’Ère 2 composé d’argile sèche, de terre, d’eau et de fibres végétales.", "Un material de construcción de la Era 2 hecho con arcilla seca, tierra, agua y fibra vegetal.", "Um material de construção da Era 2 feito de argila seca, terra, água e fibra vegetal."),
      paragraphs: [L("Mischverhältnis: 3 Ven trockener Lehm + 1 Ven Erde + 1 Ven Wasser + 2 Pflanzenfasern ergeben 1 Vado Stampflehm.", "Mix: 3 Ven Dry Clay + 1 Ven Dirt + 1 Ven Water + 2 Plant Fiber produces 1 Vado Packed Clay.", "Mélange : 3 Ven d’argile sèche + 1 Ven de terre + 1 Ven d’eau + 2 fibres végétales donnent 1 Vado d’argile compactée.", "Mezcla: 3 Ven de arcilla seca + 1 Ven de tierra + 1 Ven de agua + 2 fibras vegetales producen 1 Vado de arcilla compactada.", "Mistura: 3 Ven de argila seca + 1 Ven de terra + 1 Ven de água + 2 fibras vegetais produzem 1 Vado de argila compactada.")]
    },
    {
      id: "clay-cycle", category: "Resources", era: 2, icon: "assets/codex/wet-clay.png",
      title: L("Lehmkreislauf", "Clay cycle", "Cycle de l’argile", "Ciclo de la arcilla", "Ciclo da argila"),
      summary: L("Nasser Lehm wird getrocknet, weiterverarbeitet und schließlich zum dauerhaften Baustoff.", "Wet Clay is dried, processed and ultimately turned into a durable building material.", "L’argile humide est séchée, transformée puis convertie en matériau durable.", "La arcilla húmeda se seca, se procesa y se convierte en un material duradero.", "A argila úmida é seca, processada e transformada em material durável."),
      paragraphs: [L("Der Kreislauf verbindet Sammeln, Trocknen, Brennen und Materialumwandlung. Die Materialstation übernimmt dabei das präzise Portionieren der fertigen Mengen.", "The cycle connects gathering, drying, firing and material conversion. The Material Station handles precise portioning of the finished quantities.", "Le cycle relie collecte, séchage, cuisson et conversion. La station de matériaux assure le dosage précis.", "El ciclo conecta recolección, secado, cocción y conversión. La estación de materiales permite dividir las cantidades con precisión.", "O ciclo conecta coleta, secagem, queima e conversão. A estação de materiais permite porcionar as quantidades com precisão.")]
    },
    {
      id: "water-logistics", category: "SurvivalAndWorld", era: 2, icon: "assets/codex/water-vessel.png",
      title: L("Wasserlogistik", "Water logistics", "Logistique de l’eau", "Logística del agua", "Logística da água"),
      summary: L("Gefäße der zweiten Epoche machen Wasser zu einer planbaren Ressource für Reise, Anbau und Produktion.", "Era 2 vessels turn water into a manageable resource for travel, cultivation and production.", "Les récipients de l’Ère 2 font de l’eau une ressource gérable pour le voyage, la culture et la production.", "Los recipientes de la Era 2 convierten el agua en un recurso gestionable para viaje, cultivo y producción.", "Os recipientes da Era 2 tornam a água um recurso gerenciável para viagem, cultivo e produção."),
      facts: [
        L("Lehmeimer: 1 Versi", "Clay Bucket: 1 Versi", "Seau d’argile : 1 Versi", "Cubo de arcilla: 1 Versi", "Balde de argila: 1 Versi"),
        L("Gießkanne: 1 Ven", "Watering Can: 1 Ven", "Arrosoir : 1 Ven", "Regadera: 1 Ven", "Regador: 1 Ven"),
        L("Lehm-Wassergefäß: 50 Versi = 6.250 Liter", "Clay Water Vessel: 50 Versi = 6,250 litres", "Récipient d’eau en argile : 50 Versi = 6 250 litres", "Recipiente de agua de arcilla: 50 Versi = 6250 litros", "Recipiente de água de argila: 50 Versi = 6.250 litros")
      ]
    },
    {
      id: "settlement-marker", category: "StructuresAndStations", era: 2, icon: "assets/codex/settlement-marker.png",
      title: L("Siedlungsmarker", "Settlement Marker", "Marqueur de colonie", "Marcador de asentamiento", "Marcador de assentamento"),
      summary: L("Der Mittelpunkt einer frühen Siedlung mit einem Radius von 16 Metern.", "The centre of an early settlement with a 16-metre radius.", "Le centre d’une première colonie avec un rayon de 16 mètres.", "El centro de un asentamiento inicial con un radio de 16 metros.", "O centro de um assentamento inicial com raio de 16 metros."),
      paragraphs: [L("Innerhalb seines Bereichs wird der Fortschritt einer zehnteiligen Siedlungs-Checkliste verfolgt. Er macht aus einzelnen Bauten erstmals einen zusammenhängenden Ort.", "Within its area, a ten-part settlement checklist tracks progress. It turns individual structures into a coherent place for the first time.", "Dans sa zone, une liste de dix éléments suit la progression de la colonie et relie les bâtiments en un lieu cohérent.", "Dentro de su zona, una lista de diez elementos registra el progreso y une los edificios en un lugar coherente.", "Dentro da área, uma lista de dez elementos acompanha o progresso e une as construções em um local coerente.")]
    },
    {
      id: "stone-hatchet", category: "ToolsAndItems", era: 2, icon: "assets/codex/stone-hatchet.png",
      title: L("Steinbeil", "Stone Hatchet", "Hachette de pierre", "Hacha de piedra", "Machadinha de pedra"),
      summary: L("Ein frühes Werkzeug zum Bearbeiten junger Velora-Bäume und zum Erschließen von Bauholz.", "An early tool for working Young Velora Trees and unlocking construction timber.", "Un outil ancien pour travailler les jeunes arbres Velora et obtenir du bois de construction.", "Una herramienta temprana para talar árboles Velora jóvenes y conseguir madera de construcción.", "Uma ferramenta inicial para trabalhar árvores Velora jovens e obter madeira de construção."),
      paragraphs: [L("Rüste das Steinbeil aus und bearbeite den Stamm mit der primären Aktion. Der gefällte Baum liefert Stämme und kann zusätzlich einen Setzling hinterlassen.", "Equip the Stone Hatchet and work the trunk with the primary action. The felled tree yields Logs and may also leave a Sapling.", "Équipez la hachette et frappez le tronc avec l’action principale. L’arbre fournit des rondins et parfois un jeune plant.", "Equipa el hacha y trabaja el tronco con la acción principal. El árbol proporciona troncos y a veces un retoño.", "Equipe a machadinha e trabalhe o tronco com a ação principal. A árvore fornece toras e pode deixar uma muda.")]
    },
    {
      id: "primordial-plants", category: "Flora", era: 2, icon: "assets/codex/primordial-plant.png",
      title: L("Urpflanzen", "Primordial plants", "Plantes primordiales", "Plantas primordiales", "Plantas primordiais"),
      summary: L("Eine Pflanzenfamilie, deren Samenformen gezielt kultiviert und zu unterschiedlichen Knollen entwickelt werden können.", "A plant family whose seed forms can be cultivated into different specialised tubers.", "Une famille végétale dont les graines peuvent être cultivées en différents tubercules spécialisés.", "Una familia vegetal cuyas semillas pueden cultivarse en distintos tubérculos especializados.", "Uma família vegetal cujas sementes podem ser cultivadas em diferentes tubérculos especializados."),
      paragraphs: [L("Mit dem Keimsammler entstehen fünf Samenformen: Primordial-, Clatonin-, Erd-, Faser- und Steinsamen. Anbau und Extraktion eröffnen eine neue, erneuerbare Ressourcenkette.", "The Germ Collector creates five seed forms: Primordial, Clatonin, Earth, Fiber and Stone. Cultivation and extraction open a renewable resource chain.", "Le collecteur de germes crée cinq graines : Primordiale, Clatonin, Terre, Fibre et Pierre. Culture et extraction forment une chaîne renouvelable.", "El recolector de gérmenes crea cinco semillas: Primordial, Clatonin, Tierra, Fibra y Piedra. El cultivo y la extracción forman una cadena renovable.", "O coletor de germes cria cinco sementes: Primordial, Clatonin, Terra, Fibra e Pedra. Cultivo e extração formam uma cadeia renovável.")]
    },
    {
      id: "young-velora", category: "Flora", era: 2, icon: "assets/codex/young-velora.png",
      title: L("Junger Velora-Baum", "Young Velora Tree", "Jeune arbre Velora", "Árbol Velora joven", "Árvore Velora jovem"),
      summary: L("Ein junger Velora-Baum der offenen Landschaft und eine frühe Quelle für Bauholz.", "A young Velora tree of the open landscape and an early source of construction timber.", "Un jeune Velora des paysages ouverts et une première source de bois de construction.", "Un Velora joven de los paisajes abiertos y una fuente temprana de madera.", "Uma jovem Velora das paisagens abertas e uma fonte inicial de madeira."),
      paragraphs: [L("Rüste das Steinbeil aus und bearbeite den Stamm mit der primären Aktion, um ihn zu fällen. Er liefert einen Stamm und möglicherweise einen Setzling.", "Equip the Stone Hatchet and work the trunk with the primary action to fell it. It yields a Log and possibly a Sapling.", "Équipez la hachette de pierre et travaillez le tronc avec l’action principale. Il donne un rondin et parfois un jeune plant.", "Equipa el hacha de piedra y trabaja el tronco con la acción principal. Da un tronco y quizá un retoño.", "Equipe a machadinha de pedra e trabalhe o tronco com a ação principal. Ela fornece uma tora e talvez uma muda.")]
    },
    {
      id: "hopustree", category: "Creatures", era: 1, icon: "assets/codex/hopustree.png",
      title: L("Hopustree", "Hopustree", "Hopustree", "Hopustree", "Hopustree"),
      summary: L("Eine kleine, scheue Kreatur der offenen Landschaft.", "A small, shy creature of the open landscape.", "Une petite créature timide des paysages ouverts.", "Una pequeña criatura tímida de los paisajes abiertos.", "Uma pequena criatura tímida das paisagens abertas."),
      paragraphs: [L("Sie flieht vor Gefahr und lässt sich mit Beeren zähmen.", "It flees from danger and can be tamed with berries.", "Elle fuit le danger et peut être apprivoisée avec des baies.", "Huye del peligro y puede domesticarse con bayas.", "Foge do perigo e pode ser domesticada com frutas silvestres.")]
    },
    {
      id: "wizzlet", category: "Creatures", era: 1, icon: "assets/codex/wizzlet.png",
      title: L("Wizzlet", "Wizzlet", "Wizzlet", "Wizzlet", "Wizzlet"),
      summary: L("Eine flinke und aufmerksame Kreatur, die sich in kurzen Sprints bewegt.", "A nimble and alert creature that moves in short sprints.", "Une créature agile et attentive qui se déplace par sprints courts.", "Una criatura ágil y alerta que se mueve en carreras cortas.", "Uma criatura ágil e alerta que se move em corridas curtas."),
      paragraphs: [L("Wizzlets lassen sich mit rohem Fleisch zähmen.", "Wizzlets can be tamed with raw meat.", "Les Wizzlets peuvent être apprivoisés avec de la viande crue.", "Los Wizzlets pueden domesticarse con carne cruda.", "Wizzlets podem ser domesticados com carne crua.")]
    },
    {
      id: "murrak", category: "Creatures", era: 1, icon: "assets/codex/murrak.png",
      title: L("Murrak", "Murrak", "Murrak", "Murrak", "Murrak"),
      summary: L("Ein robustes Tier, das Nahrung und Haut liefert.", "A sturdy animal that provides food and hide.", "Un animal robuste qui fournit nourriture et peau.", "Un animal robusto que proporciona alimento y piel.", "Um animal robusto que fornece alimento e couro."),
      paragraphs: [L("Es versucht zunächst zu fliehen, wehrt sich aber, wenn es weiter bedrängt wird.", "It initially tries to flee, but fights back when pressed.", "Il tente d’abord de fuir, mais riposte s’il est acculé.", "Primero intenta huir, pero se defiende si es acosado.", "Primeiro tenta fugir, mas reage se for pressionado.")]
    },
    {
      id: "rauk", category: "Creatures", era: 1, icon: "assets/codex/rauk.png",
      title: L("Rauk", "Rauk", "Rauk", "Rauk", "Rauk"),
      summary: L("Ein aggressiver Jäger und eine frühe Gefahr der Wildnis.", "An aggressive hunter and an early wilderness threat.", "Un chasseur agressif et une menace précoce de la nature.", "Un cazador agresivo y una amenaza temprana de la naturaleza.", "Um caçador agressivo e uma ameaça inicial da natureza."),
      paragraphs: [L("Er greift Spieler in seiner Nähe an und verfolgt sie über eine kurze Distanz.", "It attacks nearby players and pursues them for a short distance.", "Il attaque les joueurs proches et les poursuit sur une courte distance.", "Ataca a jugadores cercanos y los persigue durante una corta distancia.", "Ataca jogadores próximos e os persegue por uma curta distância.")]
    },
    {
      id: "era-one", category: "SurvivalAndWorld", era: 1, icon: "assets/codex/campfire.png",
      title: L("Epoche 1 · Überleben", "Era 1 · Survival", "Ère 1 · Survie", "Era 1 · Supervivencia", "Era 1 · Sobrevivência"),
      summary: L("Die erste spielbare Epoche führt durch die Grundlagen von Orientierung, Versorgung und Überleben.", "The first playable era introduces the fundamentals of navigation, sustenance and survival.", "La première ère jouable présente les bases de l’orientation, de l’approvisionnement et de la survie.", "La primera era jugable presenta los fundamentos de orientación, abastecimiento y supervivencia.", "A primeira era jogável apresenta os fundamentos de orientação, sustento e sobrevivência."),
      facts: [L("37 Hauptquests", "37 main quests", "37 quêtes principales", "37 misiones principales", "37 missões principais"), L("30 Nebenquests", "30 side quests", "30 quêtes secondaires", "30 misiones secundarias", "30 missões secundárias")]
    },
    {
      id: "era-two", category: "SurvivalAndWorld", era: 2, icon: "assets/codex/settlement-marker.png",
      title: L("Epoche 2 · Sesshaftigkeit", "Era 2 · Settlement", "Ère 2 · Sédentarisation", "Era 2 · Asentamiento", "Era 2 · Assentamento"),
      summary: L("Die zweite Epoche erweitert das Überleben um Materialwirtschaft, Landwirtschaft und den Aufbau einer Siedlung.", "The second era expands survival with material logistics, agriculture and settlement building.", "La deuxième ère étend la survie avec la logistique des matériaux, l’agriculture et la construction d’une colonie.", "La segunda era amplía la supervivencia con logística de materiales, agricultura y construcción de asentamientos.", "A segunda era amplia a sobrevivência com logística de materiais, agricultura e construção de assentamentos."),
      facts: [L("29 Hauptquests", "29 main quests", "29 quêtes principales", "29 misiones principales", "29 missões principais"), L("12 Nebenquests", "12 side quests", "12 quêtes secondaires", "12 misiones secundarias", "12 missões secundárias"), L("170 Erfahrungsbelohnungen", "170 XP rewards", "170 points d’expérience", "170 puntos de experiencia", "170 pontos de experiência")]
    }
  ];

  const shell = document.getElementById("web-codex");
  if (!shell) return;

  const categoriesNode = document.getElementById("codex-categories");
  const search = document.getElementById("codex-search");
  const count = document.getElementById("codex-count");
  const list = document.getElementById("codex-entry-list");
  const detail = document.getElementById("codex-detail");
  const detailIcon = document.getElementById("codex-detail-icon");
  const detailMeta = document.getElementById("codex-detail-meta");
  const detailTitle = document.getElementById("codex-detail-title");
  const detailSummary = document.getElementById("codex-detail-summary");
  const detailBody = document.getElementById("codex-detail-body");
  const supportedLanguages = ["de", "en", "fr", "es", "pt-BR"];
  const categoryOrder = ["all", "Creatures", "Flora", "Resources", "Materials", "ToolsAndItems", "StructuresAndStations", "SurvivalAndWorld"];
  let language = supportedLanguages.includes(document.documentElement.lang) ? document.documentElement.lang : "en";
  let activeCategory = "all";
  let activeEntry = "material-units";
  let lastFocus = null;

  const t = (value) => value?.[language] ?? value?.en ?? "";
  const normalise = (value) => value.toLocaleLowerCase(language).normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function setUiText() {
    document.querySelectorAll("[data-codex-ui]").forEach((node) => {
      const key = node.dataset.codexUi;
      if (ui[key]) node.textContent = t(ui[key]);
    });
    search.placeholder = t(ui.searchPlaceholder);
    search.setAttribute("aria-label", t(ui.searchLabel));
  }

  function renderCategories() {
    categoriesNode.replaceChildren();
    categoryOrder.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "codex-category";
      button.textContent = t(categoryLabels[category]);
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(activeCategory === category));
      button.addEventListener("click", () => {
        activeCategory = category;
        render();
      });
      categoriesNode.append(button);
    });
  }

  function getFilteredEntries() {
    const query = normalise(search.value.trim());
    return entries.filter((entry) => {
      if (activeCategory !== "all" && entry.category !== activeCategory) return false;
      if (!query) return true;
      const haystack = [t(entry.title), t(entry.summary), ...(entry.paragraphs ?? []).map(t), ...(entry.facts ?? []).map(t)].join(" ");
      return normalise(haystack).includes(query);
    });
  }

  function renderList(filtered) {
    list.replaceChildren();
    count.textContent = filtered.length === 1 ? t(ui.oneEntry) : t(ui.entries).replace("{count}", filtered.length);
    if (!filtered.length) {
      const empty = document.createElement("p");
      empty.className = "codex-empty";
      empty.textContent = t(ui.noResults);
      list.append(empty);
      return;
    }

    if (!filtered.some((entry) => entry.id === activeEntry)) activeEntry = filtered[0].id;
    filtered.forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "codex-entry";
      button.dataset.entry = entry.id;
      button.setAttribute("role", "option");
      button.setAttribute("aria-selected", String(activeEntry === entry.id));
      const image = document.createElement("img");
      image.src = entry.icon;
      image.alt = "";
      const copy = document.createElement("span");
      const name = document.createElement("strong");
      name.textContent = t(entry.title);
      const meta = document.createElement("small");
      meta.textContent = `${t(ui.era)} ${entry.era} · ${t(categoryLabels[entry.category])}`;
      copy.append(name, meta);
      button.append(image, copy);
      button.addEventListener("click", () => {
        activeEntry = entry.id;
        renderList(filtered);
        renderDetail(entry);
      });
      list.append(button);
    });
  }

  function renderDetail(entry) {
    if (!entry) {
      detail.hidden = true;
      return;
    }
    detail.hidden = false;
    detailIcon.src = entry.icon;
    detailTitle.textContent = t(entry.title);
    detailMeta.textContent = `${t(ui.era)} ${entry.era} · ${t(categoryLabels[entry.category])}`;
    detailSummary.textContent = t(entry.summary);
    detailBody.replaceChildren();

    (entry.paragraphs ?? []).forEach((paragraph) => {
      const node = document.createElement("p");
      node.textContent = t(paragraph);
      detailBody.append(node);
    });

    if (entry.unitTable) {
      const heading = document.createElement("h4");
      heading.textContent = t(ui.scale);
      const table = document.createElement("div");
      table.className = "codex-unit-table";
      [["V", "1 V"], ["Vo", "5 V"], ["Ven", "25 V"], ["Vado", "125 V"], ["Versi", "625 V"]].forEach(([unit, equivalent]) => {
        const row = document.createElement("div");
        const label = document.createElement("strong");
        const value = document.createElement("span");
        label.textContent = unit;
        value.textContent = `${t(ui.equivalent)} ${equivalent}`;
        row.append(label, value);
        table.append(row);
      });
      detailBody.append(heading, table);
    }

    if (entry.facts?.length) {
      const facts = document.createElement("ul");
      facts.className = "codex-facts";
      entry.facts.forEach((fact) => {
        const item = document.createElement("li");
        item.textContent = t(fact);
        facts.append(item);
      });
      detailBody.append(facts);
    }
  }

  function render() {
    setUiText();
    renderCategories();
    const filtered = getFilteredEntries();
    renderList(filtered);
    renderDetail(filtered.find((entry) => entry.id === activeEntry));
  }

  function openCodex(entryId) {
    lastFocus = document.activeElement;
    if (entryId && entries.some((entry) => entry.id === entryId)) {
      activeEntry = entryId;
      activeCategory = "all";
      search.value = "";
    }
    shell.hidden = false;
    document.body.classList.add("codex-open");
    render();
    window.requestAnimationFrame(() => search.focus());
  }

  function closeCodex() {
    shell.hidden = true;
    document.body.classList.remove("codex-open");
    if (lastFocus instanceof HTMLElement) lastFocus.focus();
  }

  document.querySelectorAll("[data-codex-open]").forEach((button) => {
    button.addEventListener("click", () => openCodex(button.dataset.codexOpen));
  });
  document.querySelectorAll("[data-codex-close]").forEach((button) => button.addEventListener("click", closeCodex));
  search.addEventListener("input", render);

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLElement && (target.matches("input, textarea, select") || target.isContentEditable);
    if (event.key.toLowerCase() === "j" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      shell.hidden ? openCodex() : closeCodex();
      return;
    }
    if (event.key === "Escape" && !shell.hidden) {
      event.preventDefault();
      closeCodex();
      return;
    }
    if (event.key === "Tab" && !shell.hidden) {
      const focusable = [...shell.querySelectorAll('button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((node) => !node.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  document.addEventListener("versaliate:language", (event) => {
    language = supportedLanguages.includes(event.detail?.language) ? event.detail.language : "en";
    render();
  });

  render();
})();
