import { CSSProperties } from "react";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";

export default function App() {
  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 8,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 300,
      trace: 3,
      explosion: 1000,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.02,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: true,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3",
        ],
        volume: {
          min: 10,
          max: 20,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 1,
      },
    },
  });

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1531177071211-ed1b7991958b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundSize: "cover",
    MozillaBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    // background: "#000",
  };
  const toggleSound = () => {
    setOptions({
      sound: {
        enabled: !options.sound.enabled,
      },
    });
  };
  return (
    <Fireworks style={style} enabled={enabled} options={options}></Fireworks>
  );
}
