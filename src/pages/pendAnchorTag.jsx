import React from 'react'

const appendAnchorTag = () => {

    const anchor1 = document.createElement('a');
    const anchor2 = document.createElement('a');
    anchor1.href = 'https://play.google.com/';
    anchor2.href = 'https://www.apple.com/id/app-store/';
    anchor1.innerHTML = 'Play Store';
    anchor1.setAttribute("class", "anchor1");
    anchor2.innerHTML = 'App Store';
    anchor2.setAttribute("class", "anchor2");

    return (
        <div>
            <button onClick={appendAnchorTag}> Create New Anchor Tag</button>
            <ul id="Linklist"></ul>
        </div>

    )
}

export default appendAnchorTag;