import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypingAnimation = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Roboto",
        color: "#00000",
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      startDelay={2000}
      cursorColor="#3F3D56"
      multiText={[
        "I am a Front-end developer",
        "I am a MERN Stack Developer",
        "I am a React Developer",
      ]}
      multiTextDelay={1000}
      typeSpeed={30}
    />
  );
};

export default TypingAnimation;
