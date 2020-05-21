const checkAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'Puwanat' && password == '6004804') {
                console.log('-----checkAuth-----');
                resolve({ authData: username + password });
            } else {
                reject(new Error('Authentication Fail!!'))
            }
        }, 2000)
    });
}

const getStudent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('-----getStudent-----');
            const data = { name: 'Puwanat Torcheewee', permission: 'Admin' };
            resolve(data);
        }, 3000);
    });
}

const getTheResult = async() => {
    const auth = await checkAuth('Puwanat', '6004804');
    const data = await getStudent(auth);
    console.log(data);
}

console.log('-----Start-----');
getTheResult();
console.log('-----Finish-----');