import { helper } from "@ember/component/helper";

function actionByRel([item, rel]) {
    for (let i = 0; i < item.actions.length; i++) {
        if (item.actions[i].rel == rel) {
            return item.actions[i]
        }
    }
}

export default helper(actionByRel);