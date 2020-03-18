import { helper } from "@ember/component/helper";

function propertyByName([item, name]) {
    for (let i = 0; i<item.properties.length; i++) {
        if (item.properties[i].name == name) {
            return item.properties[i].value
        }
    }
}

export default helper(propertyByName);