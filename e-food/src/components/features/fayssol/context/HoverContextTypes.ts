import { createContext } from 'react';

// interface HoverContextType {
//   isHovered: boolean;
//   handleMouseEnter: () => void;
//   handleMouseLeave: () => void;
// }

// const HoverContext = createContext<HoverContextType | null>(null);
const HoverContext = createContext<any>("pub-context");


export default HoverContext;
