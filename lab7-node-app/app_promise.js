const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let sid = 'B6004804';
        if (sid) {
            resolve({ id: sid, name: 'Puwanat' });
        } else {
            reject(new Error('Error 404 Bad Request'));
        }
    }, 1000);
})

p.then(result => {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })