"use strict";

function createAreaDesc(name, description, id) {
    return `<h1>${name}</h1>
            <p>${description}</p>
            <p>${id}</p>`;
}

module.exports = createAreaDesc;