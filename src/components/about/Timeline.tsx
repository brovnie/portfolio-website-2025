"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Timeline = () => {
  return (
    <div>
      <h2 className="font-display py-5 text-4xl">My work experience</h2>
      <VerticalTimeline
        layout="1-column-left"
        className="dark:bg-dark dark:before:bg-dark"
        animate={true}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work dark:text-white relative"
          date="2023 - 2024"
          iconClassName="dark:border-slate-500 dark:border-2"
        >
          <h3 className="vertical-timeline-element-title text-xl pb-3 font-bold">
            Medior Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle italic">
            Ideal Systems, Vilvoorde
          </h4>
          <p>User Experience, Visual Design</p>
          <p>ReactNative | React | ReactQuery | Redux | AWS | NodeJS</p>
          <div className="dark:blur-sm rounded-sm border border-slate-200 absolute size-full top-0 left-0"></div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work dark:text-white relative"
          date="2021 - 2022"
          iconClassName="dark:border-slate-500 dark:border-2"
        >
          <h3 className="vertical-timeline-element-title text-xl pb-3 font-bold">
            Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle italic">
            GreenBananas, Aalst
          </h4>
          <p>User Experience, Visual Design</p>
          <p>Wordpress | Magento | VueJS | PHP</p>
          <div className="dark:blur-sm rounded-sm border border-slate-200 absolute size-full top-0 left-0"></div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
