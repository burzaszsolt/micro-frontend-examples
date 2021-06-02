import React from "react";
import { Slide } from "../Slide/Slide";

export const staticSlides = [
  <Slide title="Micro frontends" subTitle="What?">
    <h3>
      "An architectural style where independently deliverable frontend
      applications are composed into a greater whole"
    </h3>
    <ul>
      <li>micro services of the frontend world</li>
      <li>monolith vs micro frontends</li>
      <li>website as composition of features</li>
      <li>independent teams</li>
    </ul>
  </Slide>,
  <Slide title="Micro frontends" subTitle="When?">
    <ul>
      <li>big project</li>
      <li>scale development (independent teams)</li>
      <li>clear domains</li>
      <li>migration from legacy</li>
    </ul>
  </Slide>,
  <Slide title="Micro frontends" subTitle="Why not?">
    <ul>
      <li>duplication of dependencies (react)</li>
      <li>environmental differences (prod vs dev)</li>
      <li>
        operational complexity (more repos, pipelines, more tools, more
        resources)
      </li>
    </ul>
  </Slide>,
  <Slide title="Micro frontends" subTitle="Why?">
    <ul>
      <li>incremental upgrades (migrate piece by piece)</li>
      <li>smaller codebases (independent components)</li>
      <li>independent deployment (reduces risk and scope)</li>
      <li>autonomous teams</li>
    </ul>
  </Slide>,
  <Slide title="Micro frontends" subTitle="How?">
    <ul>
      <li>Custom Elements</li>
      <li>React</li>
      <li>Module Federation</li>
    </ul>
  </Slide>,
];
