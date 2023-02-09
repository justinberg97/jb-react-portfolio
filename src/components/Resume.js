import React from "react";
import profilePic from "./profile.jpg";
import { Content, Heading, Image, Paragraph } from "bloomer";

function About() {
  return (
    <Content className="about">
      <Heading className="content is-medium">
        Full Stack Developer
      </Heading>
      <hr />
      <Image
        className="justin-pic"
        src={profilePic}
        alt="Justin Berg"
      />
      <Paragraph className="content is-italic mt-4">
        Hi, I'm Emily! I'm a technical writer and full stack developer who's always
        on a quest to improve my skills. I believe that being familiar with the
        technology behind the words I write can only make my work better.
      </Paragraph>
      <Paragraph className="content">
        As a technical writer, I see myself as a product manager for learning
        resources. I aim to create an advanced learning ecosystem where users can
        easily find what they need in the moment, and also explore content on
        their own terms using various media like video, audio, and documentation.
      </Paragraph>
    </Content>
  );
}

export default About;