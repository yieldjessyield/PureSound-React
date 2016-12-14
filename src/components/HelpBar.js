import React from 'react';
// import { Rails call for like artists?, delete and new actions } from '../actions/RailsActions'
import '../App.css';

export default function HelpBar() {
  return(
    <div>
      <br/>
      <div id='helpText'>
        <img className="helpIcons" src={require("../images/leftArrow.svg")}/>&nbsp;&nbsp;p r e s s&nbsp; t h e&nbsp;  l e f t&nbsp; a r r o w&nbsp; t o&nbsp; ' n a h '&nbsp; o r&nbsp; c l i c k&nbsp; ' x '<br/><br/>
        <img className="helpIcons" src={require("../images/rightArrow.svg")}/>&nbsp;&nbsp;p r e s s&nbsp; t h e&nbsp; r i g h t&nbsp; a r r o w&nbsp; t o&nbsp; ' l i k e '&nbsp; o r&nbsp; c l i c k&nbsp; ' &#9825; '<br/><br/>
        <img className="helpIcons" src={require("../images/upArrow.svg")}/>&nbsp;&nbsp;p r e s s&nbsp; t h e&nbsp; u p&nbsp; a r r o w&nbsp; t o&nbsp; h i d e&nbsp; s o n g s<br/><br/>
        <img className="helpIcons" src={require("../images/downArrow.svg")}/>&nbsp;&nbsp;p r e s s&nbsp; t h e&nbsp; d o w n&nbsp; a r r o w&nbsp; t o&nbsp; s h o w&nbsp; s o n g s&nbsp; o r&nbsp; c l i c k&nbsp; t h e&nbsp; a r t i s t&nbsp; p h o t o<br/><br/>
        <img className="helpIcons" src={require("../images/click.svg")}/>&nbsp;&nbsp;c l i c k&nbsp; t h e&nbsp; s o n g&nbsp; t o&nbsp; p l a y / p a u s e<br/><br/>
        <img className="helpIcons" src={require("../images/doubleClick.svg")}/>&nbsp;&nbsp;h o v e r&nbsp; o v e r&nbsp; t h e&nbsp; s o n g&nbsp; t o&nbsp; s h o w&nbsp; i t s&nbsp; t i t l e<br/><br/>
      </div>
      <div className='yourLikedArtists'>help</div>
    </div>
    )}
