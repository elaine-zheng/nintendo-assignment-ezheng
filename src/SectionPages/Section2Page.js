import React from "react";
import EditableText from "../Components/EditableText";
import Text from "../Components/Text";
import Button from "../Components/Button";
import { sections } from "../constants";

const sectionContent = sections.find((section) => section.page === 'section2');

const Section2Page = props => {
  return (
    <div className='page'
    >
      <EditableText defaultText="Section 2 Header here..."/>
      <img src="https://picsum.photos/id/937/4188/2792/?grayscale" alt="template"></img>
      <p>10/01/2020</p>
      <b>Title copy Lorem ipsum dolor sit amet, consectetur</b>
      <Text text={sectionContent.content} maxLength={120} />
      <Button mode="dark" label="Button" />
      <Button mode="dark" label="Button" />
    </div>
  );
};
export default Section2Page;
