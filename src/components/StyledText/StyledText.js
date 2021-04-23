import React from 'react';
import styled from 'styled-components';

export default function StyledText({text, styles}){
  //set default style/className for main paragraph
  if (!styles.default.style && !styles.default.className) {
    throw Error('StyledText Component [default]: nor styles, nor className set');
  }

  let style = {};
  let className = '';
  if (styles.default.style) style = styles.default.style;
  if (styles.default.className) className = styles.default.className;

  //return word of sentence OR styled span if we have tags
  const createWordComponent = word => {
    let output = word;
    if (/<(\w+?)>(.+)<\/\1>/.test(word)){
      const tagName = word.replace(/<(\w+?)>(.+)<\/\1>/, '$1');
      const text = word.replace(/<(\w+?)>(.+)<\/\1>/, '$2');

      if (!styles[tagName].style && !styles[tagName].className) {
        throw Error(`StyledText Component [${tagName}]: nor styles, nor className set`);
      }

      if (styles[tagName].style) {
        const StyledSpan = styled.span(styles[tagName].style)
        output = <StyledSpan> {text} </StyledSpan>
      }
      else if (styles[tagName].className) {
        const StyledSpan = styled.span({})
        output = <StyledSpan className={styles[tagName].className}> {text} </StyledSpan>
      }
    }
    return output;
  }

  //create array of groups of words and objects (without this we`ll have every word at single line in our html code! not good)
  const inputWords = text.split(/ +/).map(createWordComponent);
  const words = [];
  if (text) {
    let prevTextWord = '';
    for (let word of inputWords) {
      if (typeof word === 'object') {
        words.push(prevTextWord);
        words.push(word);
        prevTextWord = '';
      }
      else if (typeof word === 'string') {
        prevTextWord += ' ' + word;
      }
    }
  }

  const StyledParagraph = styled.p(style);
  return <StyledParagraph className={className}>{words}</StyledParagraph>
}

//Usage
{/* <StyledText 
  text="Let's make some <ml>multistyle</ml> <ms>multistyle</ms> text for <pixi>Pixi.js!</pixi>"
  styles={{
      "default": {
          // style : {
          //     fontFamily: "Arial",
          //     fontSize: "24px",
          //     color: "#cccccc",
          //     align: "center"
          // },
          className: 'review__item',
      },
      "ml": {
          style: {
              fontStyle: "italic",
              color: "#ff8888"
          }},
      "ms": {
          style: {
              fontStyle: "italic",
              color: "#4488ff"
          }},
      "pixi": {
          style: {
              fontSize: "64px",
              color: "#efefef"
          }},
  }}/> */}