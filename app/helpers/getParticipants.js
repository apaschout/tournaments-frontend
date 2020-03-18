import { helper } from "@ember/component/helper";

function getParticipants(params) {
    let trn = params[0]
    let partItem
    let res = []
    for (let i = 0; i < trn.items.length; i++) {
        if (trn.items[i].type == "participants") {
            partItem = trn.items[i]
            break
        }
    }
    for (let i = 0; i < partItem.items.length; i++) {
        res.push(partItem.items[i])
    }

    return res
}

export default helper(getParticipants);