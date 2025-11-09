import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const hotspots = [
  { 
    id: 'crowpanel', 
    title: 'Hjärnan i Systemet (CrowPanel)',
    description: 'Detta är hjärnan i hela systemet. Tänk på den som en universal-fjärrkontroll med en pekskärm. Härifrån kan du styra alla andra apparater som är anslutna, utan att behöva leta efter olika fjärrkontroller.',
    style: { top: '23%', left: '33%', width: '34%', height: '55%' }
  },
  { 
    id: 'tv', 
    title: 'TV:n',
    description: 'Detta är din vanliga TV. Kontrollpanelen kan sätta på och stänga av den, byta kanal eller välja vilken apparat som ska visas på skärmen, till exempel PlayStation eller mediaspelaren.',
    style: { top: '15%', left: '5%', width: '28%', height: '25%' }
  },
  { 
    id: 'optv', 
    title: 'Ljudsystemet (OPTV)',
    description: 'Den här svarta lådan är hemmabiosystemet. Den tar emot ljudet från TV:n, spelkonsolen eller när du spelar musik och skickar ut det till högtalarna för att ge ett fylligt och bra ljud, nästan som på bio.',
    style: { top: '51%', left: '10%', width: '23%', height: '12%' }
  },
  { 
    id: 'ps5', 
    title: 'PlayStation 5',
    description: 'Detta är en spelkonsol. Du kan starta den direkt från kontrollpanelen för att börja spela, utan att behöva använda handkontrollen för att sätta på den.',
    style: { top: '20%', left: '78%', width: '15%', height: '40%' }
  },
  {
    id: 'shield',
    title: 'Mediaspelare (NVIDIA Shield)',
    description: 'Detta är en mediaspelare, lite som en Apple TV eller en modernare video. Den används för att titta på filmer och serier från appar som Netflix. Du kan starta den och välja vad du vill se från kontrollpanelen.',
    style: { top: '65%', left: '77%', width: '18%', height: '10%' }
  },
  {
    id: 'irbridge',
    title: 'Översättaren (A1-IR bridge)',
    description: 'Denna lilla dosa är en smart "översättare". Den tar emot de moderna signalerna från kontrollpanelen och omvandlar dem till gamla hederliga fjärrkontrollsignaler som TV:n och ljudsystemet förstår.',
    style: { top: '78%', left: '79%', width: '14%', height: '10%' }
  },
  {
    id: 'spotify',
    title: 'Spela musik (Spotify)',
    description: 'Tryck här på skärmen för att spela musik från Spotify. Musiken kommer automatiskt att spelas upp genom det stora ljudsystemet.',
    style: { top: '29%', left: '37%', width: '26%', height: '10%' }
  },
  {
    id: 'ps5_button',
    title: 'Välj PlayStation 5',
    description: 'Tryck här för att växla TV:ns bild till PlayStation 5. Då blir TV:n redo för att du ska kunna börja spela.',
    style: { top: '41.5%', left: '37%', width: '12%', height: '10%' }
  },
  {
    id: 'netflix_button',
    title: 'Titta på Netflix',
    description: 'Tryck här för att starta Netflix-appen. Då kan du börja titta på filmer och serier direkt.',
    style: { top: '41.5%', left: '51%', width: '12%', height: '10%' }
  },
  {
    id: 'temp_button',
    title: 'Temperatur',
    description: 'Detta visar den nuvarande temperaturen i rummet. Om systemet är kopplat till en termostat skulle du kunna ändra värmen härifrån.',
    style: { top: '54%', left: '37%', width: '12%', height: '12%' }
  },
  {
    id: 'voice_button',
    title: 'Röststyrning',
    description: 'Tryck här för att prata med kontrollpanelen. Istället för att trycka kan du säga kommandon som "Sätt på TV:n" eller "Spela musik".',
    style: { top: '54%', left: '51%', width: '12%', height: '12%' }
  }
];

const App = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleHotspotClick = (hotspot) => {
    setActiveHotspot(hotspot);
  };

  const closeModal = () => {
    setActiveHotspot(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Utforska Hemma-systemet</h1>
      <p style={styles.instructions}>Klicka på de pulserande rutorna i bilden för att läsa vad de gör.</p>
      <div style={styles.imageWrapper}>
        <img src="https://i.imgur.com/8o9mZ2e.jpeg" alt="En översikt av ett smart hem-system med en central kontrollpanel, TV, ljudsystem, PS5 och andra enheter." style={styles.mainImage} />
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            aria-label={`Information om ${spot.title}`}
            style={{ ...styles.hotspot, ...spot.style }}
            onClick={() => handleHotspotClick(spot)}
          />
        ))}
      </div>

      {activeHotspot && (
        <div style={styles.modalOverlay} onClick={closeModal} role="dialog" aria-modal="true">
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>{activeHotspot.title}</h2>
            <p style={styles.modalDescription}>{activeHotspot.description}</p>
            <button style={styles.modalCloseButton} onClick={closeModal}>Stäng</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    textAlign: 'center',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#333',
  },
  instructions: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  imageWrapper: {
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
  },
  mainImage: {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    border: '1px solid #d0d0d0',
  },
  hotspot: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 123, 255, 0.2)',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    padding: '0',
    transition: 'background-color 0.2s ease',
    boxSizing: 'border-box',
    animation: 'pulse 2s infinite ease-in-out',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '30px 40px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    textAlign: 'left',
    animation: 'fadeIn 0.3s ease-out',
  },
  modalTitle: {
    marginTop: 0,
    fontSize: '1.8rem',
    color: '#222',
  },
  modalDescription: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#555',
  },
  modalCloseButton: {
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 0,
    padding: '12px 24px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
    70% { box-shadow: 0 0 0 12px rgba(0, 123, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
  }

  button.hotspot:hover, button.hotspot:focus-visible {
     background-color: rgba(0, 123, 255, 0.4);
     animation-play-state: paused;
  }
  
  button:focus-visible {
    outline: none;
  }
  
  button.modalCloseButton:hover {
    background-color: #0056b3;
  }
`;
document.head.appendChild(styleSheet);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
