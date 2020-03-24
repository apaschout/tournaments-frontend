import { helper } from "@ember/component/helper";

function add([a, b]) {
    return a +b
}

export default helper(add);