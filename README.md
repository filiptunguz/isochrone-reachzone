# Isochrone Map Component 🗺️

An interactive component built with **React**, **Vite**, **TypeScript**, **TailwindCSS**, and **React-Leaflet**, designed to visualize isochrones (reachable areas) on an OpenStreetMap-based map based on selected transportation mode and travel time.

![Isochrone Search Map Gif](./assets/isochrone-reachzone.gif)

## Features

- **Transport Mode Selection**: Choose between walking, driving, biking, or public transport.
- **Travel Time Slider**: Adjust the travel time dynamically.
- **Live Map Updates**: Map view centers and updates the isochrone instantly on form change.
- **OpenStreetMap Integration**: Map tiles rendered using React-Leaflet and OpenStreetMap.
- **Isochrone Polygon Display**: Visualizes the reachable area as a styled polygon overlay.
- **Responsive & Performant**: Built with Vite, TailwindCSS, and optimized rendering for a smooth experience.

## Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: TailwindCSS
- **Map & GIS**: React-Leaflet (Leaflet), OpenStreetMap tiles
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/isochrone-map-component.git
cd isochrone-map-component
npm install
