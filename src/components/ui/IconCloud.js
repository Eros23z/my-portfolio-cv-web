import React, { useEffect, useState, useMemo } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import { useTheme } from "../../context/ThemeContext";

// Configuración visual de la esfera
const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    depth: 1,
    scrolling: "no",
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const RenderIconCloud = ({ iconSlugs }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
        // Ajustamos los colores según el tema (Blanco en Dark Mode, Negro en Light Mode)
        bgHex: theme === 'dark' ? "#ffffff" : "#000000",
        fallbackHex: theme === 'dark' ? "#ffffff" : "#000000",
        minContrastRatio: theme === 'dark' ? 2 : 1.2,
      })
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};