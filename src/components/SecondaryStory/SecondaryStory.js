import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      'image'
      'heading'
      'abstract';
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
  }
`;

const Abstract = styled.p`
  display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
  grid-area: abstract;
  font-size: 1rem;
  overflow: hidden;
  white-space: pre-wrap;
  align-self: start;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
  }
`;

export default SecondaryStory;
