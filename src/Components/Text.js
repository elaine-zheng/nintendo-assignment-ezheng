import React, {useState } from "react";
import '../Styles/Text.css';

const Text = ({text , maxLength}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="text">
      {text.length > maxLength && !showFullText ? (
        <div>
          {text.slice(0, maxLength)}
          <span>...</span>
          <button onClick={toggleText} className="read-more">Read more</button>
        </div>
      ) : (
        <div>
          {showFullText ? text : text.slice(0, maxLength)}
          {showFullText && (
            <button className="read-more" onClick={toggleText}>Read less</button>
          )}
        </div>
      )}
    </div>
  );
};
export default Text;
