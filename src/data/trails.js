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
  }
];

export default trailNames;
