const trailNames = [
  {
    name: "Cascade Head Trail",
    length: 4.72,
    elevation: 1310,
    location: "Rose Lodge, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall. Upper trailhead is closed Jan 1-Jul 15",
    hiketype: "Out and back",
    description:
      "Hiking trail through forests & meadows of a scenic headland with wildflowers & sweeping ocean views.The Cascade Head Preserve, the beautiful coastal area through which a good portion of this trail travels, is owned and maintained by The Nature Conservancy.",
    images: [
      "/assets/images/cascadeHead/cascadehead1.jpg",
      "/assets/video/CascadeHead.gif",
      "/assets/images/cascadeHead/cascadehead3.jpg",
      "/assets/images/cascadeHead/cascadehead4.jpg",
      "/assets/video/cascadehead2.gif",
      "/assets/images/cascadeHead/cascadehead6.jpg",
      "/assets/images/cascadeHead/cascadehead7.jpg",
      "/assets/images/cascadeHead/cascadehead8.jpg",
      "/assets/images/cascadeHead/cascadehead9.jpg",
      "/assets/images/cascadeHead/cascadehead10.jpg",
      "/assets/images/cascadeHead/cascadehead11.jpg",
      "/assets/images/cascadeHead/cascadehead12.jpg",
    ],
  },
  {
    name: "Angels Rest Trail",
    length: 4.5,
    elevation: 1475,
    location: "Corbett, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Out and back",
    description:
      "Hiking trail with a waterfall & panoramic views of the Columbia River Gorge from a rocky summit.The real draw, however, is the perspective of the Columbia River below - like you're on a balcony over a great auditorium.",
    images: [
      "/assets/images/angelsRest/AngelsRest1.webp",
      "/assets/images/angelsRest/AngelsRest2.webp",
      "/assets/images/angelsRest/AngelsRest3.webp",
      "/assets/images/angelsRest/AngelsRest4.webp",
      "/assets/images/angelsRest/AngelsRest5.webp",
      "/assets/images/angelsRest/AngelsRest6.webp",
      "/assets/images/angelsRest/AngelsRest7.webp",
      "/assets/images/angelsRest/AngelsRest8.webp",
      "/assets/images/angelsRest/AngelsRest9.webp",
      "/assets/images/angelsRest/AngelsRest10.webp",
      "/assets/images/angelsRest/AngelsRest11.webp",
      "/assets/images/angelsRest/AngelsRest12.webp",
    ],
  },
  {
    name : "Smith Rock Trail",
    length: 6.15,
    elevation: 1600,
    location: "Terrebonne, Oregon",
    difficulty: "Hard",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Loop",
    description:
      "Smith Rock State Park is a state park located in central Oregon's high desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels.",
    images: [
      "/assets/images/smithRock/smithrock1.jpeg",
      "/assets/images/smithRock/smithrock2.jpeg",
      "/assets/images/smithRock/smithrock3.jpeg",
      "/assets/images/smithRock/smithrock4.jpeg",
      "/assets/images/smithRock/smithrock5.jpeg",
      "/assets/images/smithRock/smithrock6.jpeg",
      "/assets/images/smithRock/smithrock7.jpeg",
      "/assets/images/smithRock/smithrock8.jpeg",
      "/assets/images/smithRock/smithrock9.jpeg",
      "/assets/images/smithRock/smithrock10.jpeg",
      "/assets/images/smithRock/smithrock11.jpeg",
      "/assets/images/smithRock/smithrock12.jpeg",
    ],
  },
  {
    name: "Eagle Creek Trail",
    length: 12.21,
    elevation: 1600,
    location: "Cascade Locks, Oregon",
    difficulty: "Hard",
    seasons: "Spring, Summer, Fall",
    hiketype: "Out and back",
    description:
      "The Eagle Creek Trail is a popular hiking trail that follows the Eagle Creek through the Columbia River Gorge in Oregon. The trail is known for its verdant beauty and the numerous waterfalls along its route.",
    images: [
      "/assets/images/eagleCreek/eaglecreek1.jpeg",
      "/assets/images/eagleCreek/eaglecreek2.jpeg",
      "/assets/images/eagleCreek/eaglecreek3.jpeg",
      "/assets/images/eagleCreek/eaglecreek4.jpeg",
      "/assets/images/eagleCreek/eaglecreek5.jpeg",
      "/assets/images/eagleCreek/eaglecreek6.jpeg",
      "/assets/images/eagleCreek/eaglecreek7.jpeg",
      "/assets/images/eagleCreek/eaglecreek8.jpeg",
      "/assets/images/eagleCreek/eaglecreek9.jpeg",
      "/assets/images/eagleCreek/eaglecreek10.jpeg",
      "/assets/images/eagleCreek/eaglecreek11.jpeg",
      "/assets/images/eagleCreek/eaglecreek12.jpeg",
    ],
  },
  {
    name: "Multnomah-Wahkeena Loop",
    length: 5.06,
    elevation: 1600,
    location: "Corbett, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Loop",
    description:
      "The Multnomah-Wahkeena Loop is a popular hiking trail in the Columbia River Gorge. The trail is known for its stunning views of the Columbia River and the surrounding mountains.",
    images: [
      "/assets/images/wahkeena/wahkeena1.jpeg",
      "/assets/images/wahkeena/wahkeena2.jpeg",
      "/assets/images/wahkeena/wahkeena3.jpeg",
      "/assets/images/wahkeena/wahkeena4.jpeg",
      "/assets/images/wahkeena/wahkeena5.jpeg",
      "/assets/images/wahkeena/wahkeena6.jpeg",
      "/assets/images/wahkeena/wahkeena7.jpeg",
      "/assets/images/wahkeena/wahkeena8.jpeg",
      "/assets/images/wahkeena/wahkeena9.jpeg",
      "/assets/images/wahkeena/wahkeena10.jpeg",
      "/assets/images/wahkeena/wahkeena11.jpeg",
      "/assets/images/wahkeena/wahkeena12.jpeg",
    ],
  },
  {
    name: "Mirror Lake Trail",
    length: 4.2,
    elevation: 700,
    location: "Government Camp, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Out and back",
    description:
      "The Mirror Lake Trail is a popular hiking trail in the Mount Hood National Forest. The trail is known for its stunning views of Mount Hood and the surrounding mountains.",
    images: [
      "/assets/images/mirrorLake/mirrorlake1.jpeg",
      "/assets/images/mirrorLake/mirrorlake2.jpeg",
      "/assets/images/mirrorLake/mirrorlake3.jpeg",
      "/assets/images/mirrorLake/mirrorlake4.jpeg",
      "/assets/images/mirrorLake/mirrorlake5.jpeg",
      "/assets/images/mirrorLake/mirrorlake6.jpeg",
      "/assets/images/mirrorLake/mirrorlake7.jpeg",
      "/assets/images/mirrorLake/mirrorlake8.jpeg",
      "/assets/images/mirrorLake/mirrorlake9.jpeg",
      "/assets/images/mirrorLake/mirrorlake10.jpeg",
      "/assets/images/mirrorLake/mirrorlake11.jpeg",
      "/assets/images/mirrorLake/mirrorlake12.jpeg",
    ],
  },
  {
    name: "Cape Perpetua Trail", 
    length: .62,
    elevation: 1100,
    location: "Yachats, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Loop",
    description:
      "The Cape Perpetua Trail is a popular hiking trail in the Siuslaw National Forest. The trail is known for its stunning views of the Pacific Ocean and the surrounding coastline.",
    images: [
      "/assets/images/capePerpetua/capeperpetua1.jpeg",
      "/assets/images/capePerpetua/capeperpetua2.jpeg",
      "/assets/images/capePerpetua/capeperpetua3.jpeg",
      "/assets/images/capePerpetua/capeperpetua4.jpeg",
      "/assets/images/capePerpetua/capeperpetua5.jpeg",
      "/assets/images/capePerpetua/capeperpetua6.jpeg",
      "/assets/images/capePerpetua/capeperpetua7.jpeg",
      "/assets/images/capePerpetua/capeperpetua8.jpeg",
      "/assets/images/capePerpetua/capeperpetua9.jpeg",
      "/assets/images/capePerpetua/capeperpetua10.jpeg",
      "/assets/images/capePerpetua/capeperpetua11.jpeg",
      "/assets/images/capePerpetua/capeperpetua12.jpeg",
    ],
  },
  {
    name: "Garfield Peak Trail",
    length: 3.54,
    elevation: 1000,
    location: "Crater Lake, Oregon",
    difficulty: "Moderate",
    seasons: "Summer, Fall",
    hiketype: "Out and back",
    description:
      "Garfield Peak Trail is a 3.54 mile out and back trail located near Crater Lake, Oregon that features a lake and is rated as moderate. The trail is primarily used for hiking and is best used from June until October.",
    images: [
      "/assets/images/garfieldPeak/Garfieldpeak1.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak2.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak3.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak4.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak5.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak6.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak7.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak8.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak9.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak10.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak11.jpeg",
      "/assets/images/garfieldPeak/Garfieldpeak12.jpeg",
    ],
  },
  {
    name: "Cape kiwanda Trail",
    length: 2.2,
    elevation: 230,
    location: "Pacific City, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "loop",
    description:
      "Cape kiwanda Trail is a 2.2 mile loop trail located near Pacific City, Oregon that offers scenic views and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.",
    images: [
      "/assets/images/capeKiwanda/capekiwanda1.jpeg",
      "/assets/images/capeKiwanda/capekiwanda2.jpeg",
      "/assets/images/capeKiwanda/capekiwanda3.jpeg",
      "/assets/images/capeKiwanda/capekiwanda4.jpeg",
      "/assets/images/capeKiwanda/capekiwanda5.jpeg",
      "/assets/images/capeKiwanda/capekiwanda6.jpeg",
      "/assets/images/capeKiwanda/capekiwanda7.jpeg",
      "/assets/images/capeKiwanda/capekiwanda8.jpeg",
      "/assets/images/capeKiwanda/capekiwanda9.jpeg",
      "/assets/images/capeKiwanda/capekiwanda10.jpeg",
      "/assets/images/capeKiwanda/capekiwanda11.jpeg",
      "/assets/images/capeKiwanda/capekiwanda12.jpeg",
    ],
  },
  {
    name: "Tamolitch Blue Pool Trail",
    length: 3.9,
    elevation: 351,
    location: "Blue River, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Out and back",
    description:
      "Head out on this 3.9-mile out-and-back trail near Blue River, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 28 min to complete. This is a very popular area for birding, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
    images: [
      "/assets/images/TamolitchBluePool/bluePool1.jpeg",
      "/assets/images/TamolitchBluePool/bluePool2.jpeg",
      "/assets/images/TamolitchBluePool/bluePool3.jpeg",
      "/assets/images/TamolitchBluePool/bluePool4.jpeg",
      "/assets/images/TamolitchBluePool/bluePool5.jpeg",
      "/assets/images/TamolitchBluePool/bluePool6.jpeg",
      "/assets/images/TamolitchBluePool/bluePool7.jpeg",
      "/assets/images/TamolitchBluePool/bluePool8.jpeg",
      "/assets/images/TamolitchBluePool/bluePool9.jpeg",
      "/assets/images/TamolitchBluePool/bluePool10.jpeg",
      "/assets/images/TamolitchBluePool/bluePool11.jpeg",
      "/assets/images/TamolitchBluePool/bluePool12.jpeg",
    ],
  },
  {
    name: "Opal Creek Trail",
    length: 9.3,
    elevation: 1056,
    location: "Lyons, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer",
    hiketype: "Out and back",
    description:
      "Head out on this 9.3-mile out-and-back trail near Lyons, Oregon. Generally considered a moderately challenging route, it takes an average of 3 h 45 min to complete. This is a popular trail for birding, hiking, and running, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through September.",
    images: [
      "/assets/images/opalCreek/opalcreek1.jpeg",
      "/assets/images/opalCreek/opalcreek2.jpeg",
      "/assets/images/opalCreek/opalcreek3.jpeg",
      "/assets/images/opalCreek/opalcreek4.jpeg",
      "/assets/images/opalCreek/opalcreek5.jpeg",
      "/assets/images/opalCreek/opalcreek6.jpeg",
      "/assets/images/opalCreek/opalcreek7.jpeg",
      "/assets/images/opalCreek/opalcreek8.jpeg",
      "/assets/images/opalCreek/opalcreek9.jpeg",
      "/assets/images/opalCreek/opalcreek10.jpeg",
      "/assets/images/opalCreek/opalcreek11.jpeg",
      "/assets/images/opalCreek/opalcreek12.jpeg",
    ],
  },
  {
    name: "Cape Falcon Trail",
    length: 4.5,
    elevation: 580,
    location: "Nehalem, Oregon",
    difficulty: "Moderate",
    seasons: "Spring, Summer, Fall, Winter",
    hiketype: "Out and back",
    description: "Check out this 4.5-mile out-and-back trail near Nehalem, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 54 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. Dogs are welcome, but must be on a leash.",
    images: [
      "/assets/images/capeFalcon/capeFalcon1.jpeg",
      "/assets/images/capeFalcon/capeFalcon2.jpeg",
      "/assets/images/capeFalcon/capeFalcon3.jpeg",
      "/assets/images/capeFalcon/capeFalcon4.jpeg",
      "/assets/images/capeFalcon/capeFalcon5.jpeg",
      "/assets/images/capeFalcon/capeFalcon6.jpeg",
      "/assets/images/capeFalcon/capeFalcon7.jpeg",
      "/assets/images/capeFalcon/capeFalcon8.jpeg",
      "/assets/images/capeFalcon/capeFalcon9.jpeg",
      "/assets/images/capeFalcon/capeFalcon10.jpeg",
      "/assets/images/capeFalcon/capeFalcon11.jpeg",
      "/assets/images/capeFalcon/capeFalcon12.jpeg",
    ],
  },
  {
    name: "Adams Glacier Trail",
    length: 12.3,
    elevation: 1699,
    location: "Mount Adams, Washington",
    difficulty: "Hard",
    seasons: "Summer",
    hiketype: "Out and back",
    description:
      "Adams Glacier Meadows, also known as High Camp. The shortest approach for day hikers is via the Killen Creek Trail, which rises through montane woods on a rather aggressively stepped trail before reaching lush subalpine meadows and then the Pacific Crest Trail.",
    images: [
      "/assets/images/adamsGlacier/adamsGlacier1.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier2.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier3.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier4.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier5.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier6.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier7.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier8.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier9.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier10.jpg",
      "/assets/images/adamsGlacier/adamsGlacier11.jpeg",
      "/assets/images/adamsGlacier/adamsGlacier12.jpeg",
    ],
  },
  {
    name: "Battle Ax Mountain Trail",
    length: 13.1,
    elevation: 3353,
    location: "Detroit, Oregon",
    difficulty: "Hard",
    seasons: "Spring, Summer, Fall",
    hiketype: "Loop",
    description:
      "Battle Ax Mountain Trail is a 13.1 mile loop trail located near Detroit, Oregon that features a lake and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from June until October.",
    images: [
      "/assets/images/battleAx/battleAx1.jpeg",
      "/assets/images/battleAx/battleAx2.jpeg",
      "/assets/images/battleAx/battleAx3.jpeg",
      "/assets/images/battleAx/battleAx4.jpeg",
      "/assets/images/battleAx/battleAx5.jpeg",
      "/assets/images/battleAx/battleAx6.jpeg",
      "/assets/images/battleAx/battleAx7.jpeg",
      "/assets/images/battleAx/battleAx8.jpeg",
      "/assets/images/battleAx/battleAx9.jpeg",
      "/assets/images/battleAx/battleAx10.jpeg",
      "/assets/images/battleAx/battleAx11.jpeg",
      "/assets/images/battleAx/battleAx12.jpeg",
    ],
  },
  {
    name: "Belknap Crater Trail",
    length: 7.0,
    elevation: 1830,
    location: "Sisters, Oregon",
    difficulty: "Hard",
    seasons: "Summer, Fall",
    hiketype: "Out and back",
    description:
      "Check out this 7.0-mile out-and-back trail near Sisters, Oregon. Generally considered a challenging route. This trail is great for hiking, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are June through October.",
    images: [
      "/assets/images/belknapCrater/belknap1.jpeg",
      "/assets/images/belknapCrater/belknap2.jpeg",
      "/assets/images/belknapCrater/belknap3.jpeg",
      "/assets/images/belknapCrater/belknap4.jpeg",
      "/assets/images/belknapCrater/belknap5.jpeg",
      "/assets/images/belknapCrater/belknap6.jpeg",
      "/assets/images/belknapCrater/belknap7.jpeg",
      "/assets/images/belknapCrater/belknap8.jpeg",
      "/assets/images/belknapCrater/belknap9.jpeg",
      "/assets/images/belknapCrater/belknap10.jpeg",
      "/assets/images/belknapCrater/belknap11.jpeg",
      "/assets/images/belknapCrater/belknap12.jpeg",
    ],
  }
];

export default trailNames;
