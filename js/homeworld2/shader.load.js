function deserialize(code) {
    // console.log(code);
    postMessage({finish: true, code});
}

function error(e) {
    postMessage({finish: true, error: e});
}

onmessage = (event) => {
    if(event.data.path) {
        fetch(event.data.path)
            .then(o => o.text())
            .then(deserialize)
            .catch(error);
    }
};
