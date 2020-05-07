import { helper } from "@ember/component/helper";

function linkByRel([item, rel]) {
    for (let i = 0; i<item.links.length; i++) {
        if (item.links[i].rel == rel) {
            return item.links[i].href
        }
    }
}

export default helper(linkByRel);