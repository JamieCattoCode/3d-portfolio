import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Backdrop } from "@mui/material";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index, handleCardOpen }) => {
  const { name, description, extendedDescription, tags, image, source_code_link } = project;

  const openCardOnClick = () => {
    handleCardOpen(index);
  }
  
  return (
    <motion.div variants={fadeIn('up', 'string', index*0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '__blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
                />
            </div>
            <div
              onClick={openCardOnClick}
              className="black-gradient w-10 h-10 rounded-full justify-center items-center flex cursor-pointer"
              >
              <h1 className="w-1/2 h-1/2 text-[20px] text-center mb-5">
                ...
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const AdditionalInfoCard = ({ index, name, extendedDescription, cardOpen, handleCardClose }) => {
  console.log(index, cardOpen)
  return (
    <Backdrop
      open={(cardOpen.index === index) && cardOpen.open}
      onClick={handleCardClose}
    >
        <div className="box-border bg-[#1a2767] min-h-[250px] w-[450px] text-center p-7 z-50 shadow-2xl rounded-xl">
          <h4 className="text-white font-bold text-[24px]">{name}</h4>
          <p className="text-sm text-secondary mt-3">{extendedDescription}</p>
        </div>
      </Backdrop>
  )
}

const Works = () => {
  const [cardOpen, setCardOpen] = useState({ index: null, open: false });
  
  const disableScrolling = () => {
    const topScroll = window.pageYOffset || document.documentElement.scrollTop;
    const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  
    window.onscroll = () => {
      window.scrollTo(leftScroll, topScroll);
    };
  }
  
  const enableScrolling = () => {
    window.onscroll = () => {};
  }
  
  const handleCardOpen = (cardIndex) => {
    console.log('Changing state')
    setCardOpen({ index: cardIndex, open: true });
    disableScrolling();
  }
  
  const handleCardClose = () => {
    setCardOpen({ index: null, open: false });
    enableScrolling();
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work so far</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn('', '', 0.1, 1)}
        >
          Working on projects is my favourite part of development. 
          <br />
          It&apos;s common to see portfolios filled with template projects passed as original work. However, in my case all
          projects are my own unless stated otherwise. I recommend you read the description and check out the README in Github
          link.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            project={project}
            index={index}
            handleCardOpen={handleCardOpen}
          />
        ))}
      </div>
      <div>
        {projects.map((project, index) => (
          <AdditionalInfoCard 
            index={index}
            key={`addinfo-${index}`}
            name={project.name}
            extendedDescription={project.extendedDescription}
            cardOpen={cardOpen}
            handleCardClose={handleCardClose}
          />
        ))}
      </div>
    </>
  )
}

const WorksWrapped = SectionWrapper(Works, 'work');

export default WorksWrapped;