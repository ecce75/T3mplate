export const poser = (exercise, pose) => {
    switch (exercise) {
        case 'standing hamstring curl':
            if (pose.keypoints[10].position.y >= 30) {
                console.log(pose.keypoints[10]);
            } else {
                console.log("leg lifted too high");
            }
            break;
        case 'latteral raise':
            //left elbow
            if (pose.keypoints[7].position.y >= 190) {
                console.log("left arm moving correctly");
            } else if (pose.keypoints[7].position.y < 190) {
                console.log("left elbow is too high");
            }
            //right elbow
            if (pose.keypoints[8].position.y >= 190) {
                console.log("right arm moving correctly");
            } else if (pose.keypoints[8].position.y < 190) {
                console.log("right elbow is too high");
            }
            break;
        case 'side leg lift':
            console.log('side leg lift');
            break;
        default: console.log("not a valid/recognized/implemented pose");
    }
}