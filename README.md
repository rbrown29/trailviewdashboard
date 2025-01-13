# Trail View Dashboard

This project is a web-based application for exploring hiking trails like the **Cascade Head Trail**. It provides detailed trail information, interactive maps, elevation charts, weather data, and images of the trail.

Live Sites: 
[Cascade Head Trail](https://viewcascadehead.netlify.app/)

## Features

### 1. **Trail Information**
- Displays key trail details such as:
  - Name, length, elevation, and location.
  - Difficulty level, seasons, and hike type.
  - Comprehensive description of the trail.

### 2. **Interactive Map**
- Mapbox integration for visualizing the trail.
- Features include:
  - Hillshading and terrain view.
  - Interactive popups displaying distance and elevation.
  - Hover effects to highlight specific trail points.

### 3. **Elevation Chart**
- Chart.js integration to display elevation profiles.
- Interactive chart synced with the map to show corresponding points.

### 4. **Weather Component**
- Fetches real-time weather data based on the trail's location.
- Displays current temperature, weather conditions, and more.

### 5. **Trail Images**
- Gallery of trail images organized in rows for easy viewing.
- Responsive design to adapt to different screen sizes.

## Project Structure
```
/src
  ├── assets
  │   └── images
  │       └── cascadeHead
  ├── components
  │   ├── Cards.jsx
  │   ├── Dashboard.jsx
  │   ├── Footer.jsx
  │   ├── Header.jsx
  │   ├── StaticMap.jsx
  │   ├── ElevationChart.jsx
  │   ├── Weather.jsx
  │   └── Images.jsx
  ├── data
  │   ├── cardLinks.js
  │   ├── links.js
  │   └── trails.js
  ├── utils
  │   └── parseTCX.js
  ├── App.jsx
  ├── main.jsx
  └── styles.css

```

## Environment Variables
Create a `.env` file in the root directory and add the following:

```
VITE_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_token
VITE_APP_WEATHER_API_KEY=your_openweathermap_api_key
```

Replace `your_mapbox_token` and `your_openweathermap_api_key` with your actual API keys.

## Scripts
- `npm run dev` - Start the development server.
- `npm run build` - Build the application for production.
- `npm run preview` - Preview the production build locally.

## Technologies Used
- **React**: Frontend framework.
- **Vite**: Fast build tool.
- **Mapbox GL JS**: Interactive map integration.
- **Chart.js**: Elevation chart.
- **OpenWeatherMap API**: Real-time weather data.
- **CSS**: Custom styles with responsiveness.

## Deployment
1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` folder to a hosting platform like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).

---

## Video

https://github.com/user-attachments/assets/ad677430-f412-4fe9-8fd9-4f34f53acd9a

---

---

## ScreenShots

![Trail](/public/images_readMe_github/image1.png)

![Trail](/public/images_readMe_github/image2.png)

![Trail](/public/images_readMe_github/image3.png)

![Trail](/public/images_readMe_github/image4.png)

![Trail](/public/images_readMe_github/image5.png)

---

Happy Hiking! 🌲🏔️


