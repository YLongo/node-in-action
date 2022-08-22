import _ from 'lodash';

function divComp() {
    var eleDiv = document.createElement('div');
    eleDiv.innerHTML = _.join(['hello', 'webpack server dev ... ...', '&', 'NodeJS  VueJS ...', '!'], ' ');
    return eleDiv;
}

document.write("hello node")

document.body.appendChild(divComp());
