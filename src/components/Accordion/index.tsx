import React, { useRef, useState } from 'react'
import { AccordionSection, AccordionButton, Content, Text } from './styles'
import { FiChevronRight } from 'react-icons/fi'


interface AccordionProps {
  title:string
}

export const Accordion:React.FC<AccordionProps> = ({title, children}) =>{
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current?.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <AccordionSection>
      <AccordionButton className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div>
          <p className="accordion__title">{title}</p>
        </div>
        {/* <Chevron className={` ${setRotate}`} width={10} fill={"#777"} /> */}
        <FiChevronRight className={` ${setRotate}`} width={25} style={{fontSize:'2rem'}} />
      </AccordionButton>
      <Content
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <Text className="accordion__text">
          {children}
        </Text>
      </Content>
    </AccordionSection>
  );
}

export default Accordion
