import React from "react";
import "./AnimatedBackground2.css"; 

export default function AnimatedBackground() {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 20}).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}
