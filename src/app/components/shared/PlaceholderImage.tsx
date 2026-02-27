import React from 'react';

/**
 * PlaceholderImage Component
 * Generates custom geometric placeholder images using SVG
 * Eliminates dependency on Unsplash or stock photos
 */

interface PlaceholderImageProps {
  type:
    | 'kitchen'
    | 'bathroom'
    | 'team'
    | 'construction'
    | 'home-exterior'
    | 'location'
    | 'project'
    | 'tools';
  width?: number;
  height?: number;
  className?: string;
  seed?: number;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  type,
  width = 1080,
  height = 720,
  className = '',
  seed = 0,
}) => {
  const generatePlaceholder = () => {
    const themes = {
      kitchen: {
        bg: '#2D3E50',
        accent1: '#D97B2B',
        accent2: '#F8E1C9',
        shapes: 'kitchen-shapes'
      },
      bathroom: {
        bg: '#1E3A5F',
        accent1: '#5BA3D0',
        accent2: '#B8D4E8',
        shapes: 'bathroom-shapes'
      },
      team: {
        bg: '#0F172A',
        accent1: '#2563EB',
        accent2: '#60A5FA',
        shapes: 'person-shapes'
      },
      construction: {
        bg: '#1C1917',
        accent1: '#D97B2B',
        accent2: '#78716C',
        shapes: 'construction-shapes'
      },
      'home-exterior': {
        bg: '#334155',
        accent1: '#94A3B8',
        accent2: '#CBD5E1',
        shapes: 'house-shapes'
      },
      location: {
        bg: '#0C4A6E',
        accent1: '#0EA5E9',
        accent2: '#BAE6FD',
        shapes: 'location-shapes'
      },
      project: {
        bg: '#44403C',
        accent1: '#D97B2B',
        accent2: '#A8A29E',
        shapes: 'project-shapes'
      },
      tools: {
        bg: '#1E293B',
        accent1: '#F59E0B',
        accent2: '#FCD34D',
        shapes: 'tools-shapes'
      },
    };

    const theme = themes[type] || themes.project;

    // Generate unique geometric patterns based on type and seed
    const renderShapes = () => {
      const offset = seed * 50;

      switch (type) {
        case 'kitchen':
          return (
            <>
              {/* Cabinet rectangles */}
              <rect x={100 + offset} y="400" width="200" height="280" fill={theme.accent1} opacity="0.7"/>
              <rect x={320 + offset} y="400" width="200" height="280" fill={theme.accent1} opacity="0.5"/>
              <rect x={540 + offset} y="400" width="200" height="280" fill={theme.accent1} opacity="0.6"/>

              {/* Countertop */}
              <rect x={80 + offset} y="370" width="660" height="30" fill={theme.accent2} opacity="0.8"/>

              {/* Backsplash tiles */}
              {[...Array(12)].map((_, i) => (
                <rect
                  key={i}
                  x={100 + (i * 55) + offset}
                  y={200 + ((i % 3) * 55)}
                  width="50"
                  height="50"
                  fill={theme.accent2}
                  opacity="0.4"
                  stroke={theme.accent1}
                  strokeWidth="2"
                />
              ))}
            </>
          );

        case 'bathroom':
          return (
            <>
              {/* Shower enclosure */}
              <rect x="150" y="150" width="300" height="400" fill="none" stroke={theme.accent2} strokeWidth="4" opacity="0.7"/>

              {/* Tile pattern */}
              {[...Array(20)].map((_, i) => (
                <rect
                  key={i}
                  x={160 + ((i % 5) * 58)}
                  y={160 + (Math.floor(i / 5) * 58)}
                  width="55"
                  height="55"
                  fill={theme.accent1}
                  opacity="0.3"
                  stroke={theme.accent2}
                  strokeWidth="1"
                />
              ))}

              {/* Vanity */}
              <rect x="500" y="350" width="250" height="200" fill={theme.accent1} opacity="0.6"/>
              <circle cx="625" cy="420" r="30" fill={theme.accent2} opacity="0.5"/>
            </>
          );

        case 'team':
          return (
            <>
              {/* Person silhouette */}
              <circle cx="400" cy="250" r="80" fill={theme.accent1} opacity="0.7"/>
              <path
                d="M 320 350 Q 400 380 480 350 L 500 550 L 300 550 Z"
                fill={theme.accent1}
                opacity="0.6"
              />

              {/* Hard hat */}
              <path
                d="M 320 220 L 480 220 L 490 260 L 310 260 Z"
                fill={theme.accent2}
                opacity="0.8"
              />

              {/* Tools icon */}
              <rect x="250" y="450" width="8" height="80" fill={theme.accent2} opacity="0.5" transform="rotate(45 254 490)"/>
            </>
          );

        case 'construction':
          return (
            <>
              {/* Building frame */}
              <rect x="200" y="200" width="400" height="350" fill="none" stroke={theme.accent1} strokeWidth="8" opacity="0.7"/>

              {/* Framing studs */}
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x={220 + (i * 60)}
                  y="210"
                  width="20"
                  height="330"
                  fill={theme.accent2}
                  opacity="0.4"
                />
              ))}

              {/* Roof line - V shape */}
              <path
                d="M 150 200 L 400 80 L 650 200 Z"
                fill="none"
                stroke={theme.accent1}
                strokeWidth="6"
                opacity="0.8"
              />
            </>
          );

        case 'home-exterior':
          return (
            <>
              {/* House structure */}
              <rect x="250" y="300" width="500" height="350" fill={theme.accent1} opacity="0.6"/>

              {/* Roof - V shaped */}
              <path
                d="M 200 300 L 500 150 L 800 300 Z"
                fill={theme.accent2}
                opacity="0.7"
              />

              {/* Windows */}
              {[...Array(4)].map((_, i) => (
                <rect
                  key={i}
                  x={300 + ((i % 2) * 200)}
                  y={350 + (Math.floor(i / 2) * 120)}
                  width="100"
                  height="80"
                  fill={theme.bg}
                  opacity="0.8"
                  stroke={theme.accent2}
                  strokeWidth="3"
                />
              ))}

              {/* Door */}
              <rect x="425" y="490" width="100" height="160" fill={theme.accent2} opacity="0.7"/>
            </>
          );

        case 'location':
          return (
            <>
              {/* Map pin */}
              <circle cx="400" cy="300" r="80" fill="none" stroke={theme.accent1} strokeWidth="6" opacity="0.7"/>
              <circle cx="400" cy="300" r="40" fill={theme.accent1} opacity="0.6"/>
              <path
                d="M 400 380 Q 400 450 400 500 Q 380 480 360 470 Q 420 480 400 500 Q 400 480 440 470 Z"
                fill={theme.accent1}
                opacity="0.6"
              />

              {/* Map grid lines */}
              {[...Array(8)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="100"
                  y1={150 + (i * 60)}
                  x2="700"
                  y2={150 + (i * 60)}
                  stroke={theme.accent2}
                  strokeWidth="2"
                  opacity="0.2"
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={150 + (i * 75)}
                  y1="150"
                  x2={150 + (i * 75)}
                  y2="550"
                  stroke={theme.accent2}
                  strokeWidth="2"
                  opacity="0.2"
                />
              ))}
            </>
          );

        case 'tools':
          return (
            <>
              {/* Hammer */}
              <rect x="250" y="300" width="30" height="200" fill={theme.accent2} opacity="0.7" transform="rotate(-30 265 400)"/>
              <rect x="220" y="280" width="90" height="50" fill={theme.accent1} opacity="0.8" transform="rotate(-30 265 305)"/>

              {/* Wrench */}
              <circle cx="450" cy="350" r="30" fill="none" stroke={theme.accent2} strokeWidth="8" opacity="0.7"/>
              <rect x="440" y="350" width="20" height="150" fill={theme.accent2} opacity="0.6"/>

              {/* Level */}
              <rect x="550" y="380" width="180" height="30" fill={theme.accent1} opacity="0.7"/>
              <circle cx="640" cy="395" r="10" fill={theme.accent2} opacity="0.9"/>
            </>
          );

        default:
          return (
            <>
              {/* Default geometric pattern */}
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x={150 + (i % 3) * 200}
                  y={200 + Math.floor(i / 3) * 200}
                  width="150"
                  height="150"
                  fill={i % 2 === 0 ? theme.accent1 : theme.accent2}
                  opacity="0.6"
                  transform={`rotate(${i * 15} ${225 + (i % 3) * 200} ${275 + Math.floor(i / 3) * 200})`}
                />
              ))}
            </>
          );
      }
    };

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Background */}
        <rect width={width} height={height} fill={theme.bg}/>

        {/* Diagonal accent lines for depth */}
        <line x1="0" y1="0" x2={width} y2={height} stroke={theme.accent1} strokeWidth="2" opacity="0.1"/>
        <line x1={width} y1="0" x2="0" y2={height} stroke={theme.accent2} strokeWidth="2" opacity="0.1"/>

        {/* Main shapes */}
        <g transform={`translate(${(width - 800) / 2}, ${(height - 720) / 2})`}>
          {renderShapes()}
        </g>

        {/* Overlay grid pattern */}
        <pattern id={`grid-${type}-${seed}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={theme.accent2} strokeWidth="0.5" opacity="0.1"/>
        </pattern>
        <rect width={width} height={height} fill={`url(#grid-${type}-${seed})`}/>

        {/* Company branding watermark */}
        <text
          x={width / 2}
          y={height - 30}
          textAnchor="middle"
          fill={theme.accent2}
          opacity="0.3"
          fontSize="24"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          FRANCO & SONS CONSTRUCTION
        </text>
      </svg>
    );
  };

  return generatePlaceholder();
};

/**
 * Helper function to generate a data URL for the placeholder
 * Useful for direct image src attributes
 */
export const generatePlaceholderDataURL = (
  type: PlaceholderImageProps['type'],
  width = 1080,
  height = 720,
  seed = 0
): string => {
  // This would need to be rendered server-side or using canvas
  // For now, return a simple placeholder
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#2D3E50"/>
      <text x="50%" y="50%" text-anchor="middle" fill="#D97B2B" font-size="48" font-family="Inter">
        ${type.toUpperCase()}
      </text>
    </svg>
  `)}`;
};

export default PlaceholderImage;
