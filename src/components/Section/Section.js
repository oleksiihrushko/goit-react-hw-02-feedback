import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={styles.mainTitle}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: 'Awesome Section Title',
};

export default Section;
