"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { H2 } from "../ui/H2";

export const Timeline = () => {
  return (
    <div className="pt-7">
      <H2 type="small" title="Work experience" />
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
          <p>
            Built and published mobile applications using React Native, handling
            feature development, testing, and app store deployment. Designed UI
            for new features in Figma, while gaining expertise in TypeScript,
            React Query, and UX design through a Professional Diploma sponsored
            by Ideal Systems.
          </p>
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
          <p>
            Started as an intern and later joined full-time, building webshops
            with Magento and WooCommerce, as well as WordPress sites using PHP
            and JavaScript. On the Vendit project, I was responsible for
            front-end layout and styling using Tailwind CSS and Alpine.js,
            preparing responsive HTML for integration with a .NET backend.
          </p>
          <p>Wordpress | Magento | VueJS | PHP</p>
          <div className="dark:blur-sm rounded-sm border border-slate-200 absolute size-full top-0 left-0"></div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
