import React, { useRef, useState } from "react";
import '../Styles/EditableText.css';

const EditableText = props => {
    const [isEdited, setIsEdited] = useState(false);
    const textRef = useRef(null);
    const defaultText = props.defaultText ? props.defaultText : "Heading text here"
    
    const handleEdit = () => {
        textRef.current.contentEditable = true;
        textRef.current.focus();
        textRef.animation = 'none';
        setIsEdited(true);
  }

  return (
    <div className="editText">
     <h1 ref={textRef} 
        onClick={handleEdit} 
        className={`editor${isEdited ? 'edited' : ''}`} >
       {defaultText}</h1>
    </div>
  );
};
export default EditableText;
