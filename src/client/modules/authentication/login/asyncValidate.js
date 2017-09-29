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

const asyncValidate = (values) => {
    return fetch('http://localhost:3001/validate', {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(values)
    })
}

export default asyncValidate