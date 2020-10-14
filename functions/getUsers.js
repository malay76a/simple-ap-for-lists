const mocker = require('mocker-data-generator').default;
const uuid = () =>'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==с?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16));

const user = {
    id: {
        function: function() {
            return uuid();
        }
    },
    firstName: {
        faker: 'name.firstName'
    },
    lastName: {
        faker: 'name.lastName'
    },
    group: {
        values: ['Management', 'Accounting', 'Human Resources', 'IT']
    },
    experience: {
        function: function() {
            return Math.floor(Math.random() * Math.floor(5));
        }
    }
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            ...mocker().schema('user', user, 20).buildSync(),
            sortFields: [
                'group',
                'experience'
            ]
        })
    };
};