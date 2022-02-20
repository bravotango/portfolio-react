import React from 'react';

const Project = (props) => {
  const primary = props.primary ? 'primary' : '';
  return (
    <article className={primary} id={props.id}>
      <h3>{props.title}</h3>
      <p>
        <strong>Description</strong>
        {props.description}
        <strong>Repo</strong>
        <a href={props.repo} target='_blank'>
          {props.repo}
        </a>
        <strong>Deployed location</strong>
        <a href={props.deployedLocation} target='_blank'>
          {props.deployedLocation}
        </a>
      </p>
    </article>
  );
};

export default Project;
