import React, { FC } from 'react';
import './TemplateBox.css';

interface TemplateBoxProps {
  title: string;
  imageUrl: string;
}

const TemplateBox: FC<TemplateBoxProps> = ({ title, imageUrl }) => {
   return (

    <div className="template-box">
      <div className="template-box__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="template-box__title">{title}</div>
    </div>
  );
}

export default TemplateBox;
