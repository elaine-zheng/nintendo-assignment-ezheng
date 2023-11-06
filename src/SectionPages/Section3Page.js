import React from "react";
import EditableText from "../Components/EditableText";
import Text from "../Components/Text";
import Button from "../Components/Button";
import { sections } from "../constants";

const sectionContent = sections.find((section) => section.page === 'section3');

const Section3Page = props => {

  return (
    <div className='page'
    >
      <EditableText defaultText="Section 3 Header here..."/>
      <img src="https://picsum.photos/id/692/3888/2592/?grayscale" alt="template"></img>
      <p>03/13/2023</p>
      <b>Title copy Lorem ipsum dolor sit amet, consectetur</b>
      <Text text={sectionContent.content} maxLength={50} />
      <Button mode="light" label="Button" />
      <Button mode="light" label="Button" />
    </div>
  );
};
export default Section3Page;
