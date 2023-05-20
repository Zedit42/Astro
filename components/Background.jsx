"use client"
import React, { useState, useRef, useEffect } from "react";

const Image = () => {
  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const imageRect = imageRef.current.getBoundingClientRect();
    const imageCenterY = imageRect.top + imageRect.height / 2;
    const imageCenterX = imageRect.left + imageRect.width / 2;
    const mouseY = mousePosition.y;
    const mouseX = mousePosition.x;

    const yPosition =
      5 * (mouseY - imageCenterY) / window.innerHeight;
    const xPosition =
      5 * (mouseX - imageCenterX) / window.innerWidth;

    setYPosition(yPosition);
    setXPosition(xPosition);
  }, [mousePosition, imageRef]);

  return (
    <div
      ref={imageRef}
      className="h-screen w-screem -z-20 fixed"
      style={{
        top: "0%",
        left: "0%",
        transform: `translate(${xPosition}%, ${yPosition}%)`
      }}
    >
      <img
        className="h-screen w-screen scale-105 object-cover"
        src="/duotone.png"
        alt="Your Image"
      />
    </div>
  );
};

export default Image;