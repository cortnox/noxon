import * as classes from './Section.module.css';
import { ReactNode } from 'react';

const Section = (props:{
  children: ReactNode,
}) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
