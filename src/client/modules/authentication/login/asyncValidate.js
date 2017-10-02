// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
//
// const asyncValidate = (values /*, dispatch */) => {
//     return sleep(1000).then(() => {
//         // simulate server latency
//         if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
//             throw {username: 'That username is taken'}
//         }
//     })
// }

const asyncValidate = async (values) => {
    let response;
    try {
        response = await fetch('http://localhost:3001/validate', {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(values)
        });

        if (response.status !== 200) {
            const err = await response.json();
            throw err;
        }

    } catch (error) {
        console.warn(error);
        throw error;
    }
}

export default asyncValidate