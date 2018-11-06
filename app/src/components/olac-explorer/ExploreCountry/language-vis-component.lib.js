"use strict";

const { sum, compact, flattenDeep } = require("lodash");

module.exports = {
    generateMapData,
    extractResourceTypes
};

function generateMapData({ languages, types, selectedType }) {
    let geoJSON = {
        type: "FeatureCollection",
        features: languages.map(language => {
            return {
                type: "Feature",
                properties: {
                    id: language.code,
                    code: language.code,
                    name: language.name,
                    status: language.status,
                    resources: language.stats,
                    total: getTotalResources({
                        types,
                        selectedType,
                        language
                    })
                },
                geometry: {
                    type: "Point",
                    coordinates: [language.coords[1], language.coords[0]]
                }
            };
        })
    };
    // console.log(JSON.stringify(geoJSON.features, null, 2));
    return geoJSON;

    function getTotalResources({ types, selectedType, language }) {
        let count;
        if (selectedType) {
            count = compact(language.stats.map(entry => entry[selectedType]));
            return count[0];
        } else {
            count = flattenDeep(
                types.map(type =>
                    compact(language.stats.map(entry => entry[type]))
                )
            );
            return sum(count);
        }
    }
}

function extractResourceTypes(data) {
    let types = {};
    data.forEach(language => {
        language.stats.forEach(type => {
            let key = Object.keys(type)[0];
            types[key] = "";
        });
    });
    return Object.keys(types).sort();
}
