import React from "react";
import EditableText from "../Components/EditableText";
import Text from "../Components/Text";
import Button from "../Components/Button";
import { sections } from "../constants";

const sectionContent = sections.find((section) => section.page === 'section1');

const Section1Page = props => {

  return (
    <div className='page'
    >

      <EditableText />
      <img src="https://picsum.photos/id/274/3824/2520/?grayscale" alt="template example"></img>
      <p>05/01/22</p>
      <b>Title copy Lorem ipsum dolor sit amet, consectetur</b>
      <Text text={sectionContent.content} maxLength={120} />
      <Button mode="dark" label="Button" />
      <Button mode="light" label="Button" />
    </div>
  );
};
export default Section1Page;
