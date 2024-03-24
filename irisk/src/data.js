const lor = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum nesciunt, dolore facilis laborum eius voluptate laudantium odio ut dignissimos quae enim! Tempora unde officia facilis debitis, quod quos aspernatur.'

const PI = lor;
const PA = lor;
const AM = lor;
const CL = lor;
const FS = lor;
const DC = lor;
const RQ = lor;
const Im = lor;

let data = {
    PSlist: {
        questions: [
            { id: 'TP', name: 'Third Party' },
            { id: 'C', name: 'Company' },
            { id: 'ND', name: 'No Data' }
        ],
        name: 'Procesing Scenario'
    },
    third: [
        {
            title: 'People Interaction', info: PI, questions: [
                { text: 'Yes', points: 3, AM: null },
                { text: 'No', points: 1, AM: null },
            ]
        },
        {
            title: 'Privilaged Access', info: PA, questions: [
                { text: 'Yes', points: 5, AM: null },
                { text: 'No', points: 3, AM: null },
            ]
        },
        {
            title: 'Access method', info: AM, questions: [
                { text: 'Third Party Enviroment', points: 6, AM: 'TPE' },
                { text: 'Company VPN, no direct access', points: 2, AM: 'VPN' },
            ]
        },
        {
            title: 'Contract Longevity', info: CL, questions: [
                { text: 'less than 5 months', points: -10, AM: 'TPE' },
                { text: 'less 1 year', points: 4, AM: 'TPE' },
                { text: 'more than 1 year', points: 6, AM: 'TPE' },
                { text: 'less than 5 months', points: -8, AM: 'VPN' },
                { text: 'less 1 year', points: -3, AM: 'VPN' },
                { text: 'more than 1 year', points: -1, AM: 'VPN' },
            ]
        },
        {
            title: 'Fisical Security', info: FS, questions: [
                { text: 'Hosting Provider', points: 6, AM: 'TPE' },
                { text: 'Fisical Archiving', points: 6, AM: 'TPE' },
                { text: 'N/A', points: 3, AM: 'TPE' },
            ]
        },
        {
            title: 'Data Classification', info: DC, questions: [
                { text: 'Public', points: -10, AM: 'TPE' },
                { text: 'Internal', points: -8, AM: 'TPE' },
                { text: 'Confidential', points: 4, AM: 'TPE' },
                { text: 'Restricted', points: 6, AM: 'TPE' },
                { text: 'Public', points: 1, AM: 'VPN' },
                { text: 'Internal', points: 1, AM: 'VPN' },
                { text: 'Confidential', points: 4, AM: 'VPN' },
                { text: 'Restricted', points: 6, AM: 'VPN' },
            ]
        },
        {
            title: 'Records Quantity', info: RQ, questions: [
                { text: 'less than 50 records', points: 3, AM: 'TPE' },
                { text: 'More than 50 records', points: 6, AM: 'TPE' },
                { text: 'No records in scope', points: -2, AM: 'TPE' },
                { text: 'less than 50 records', points: 1, AM: 'VPN' },
                { text: 'More than 50 records', points: 3, AM: 'VPN' },
                { text: 'No records in scope', points: -2, AM: 'VPN' },
            ]
        },
        {
            title: 'Impacted', info: Im, questions: [
                { text: 'Company', points: 3, AM: 'TPE' },
                { text: 'Client', points: 4, AM: 'TPE' },
                { text: 'Customer', points: 5, AM: 'TPE' },
                { text: 'N/A', points: 1, AM: 'TPE' },
                { text: 'Company', points: 3, AM: 'VPN' },
                { text: 'Client', points: 2, AM: 'VPN' },
                { text: 'Customer', points: 2, AM: 'VPN' },
                { text: 'N/A', points: 1, AM: 'VPN' },
            ]
        }
    ],
    company: [
        {
            title: 'Privilaged Access', info: PA, questions: [
                { text: 'Yes', points: 5 },
                { text: 'No', points: 3 }
            ]
        },
        {
            title: 'Access method', info: AM, questions: [
                { text: 'Company DVI', points: 2 },
                { text: 'Company Laptops', points: 2 },
                { text: 'Other', points: 4 },
            ]
        },
        {
            title: 'Contract Longevity', info: CL, questions: [
                { text: 'less than 5 months', points: 1 },
                { text: 'less 1 year', points: 2 },
                { text: 'more than 1 year', points: 4 },
            ]
        },
        {
            title: 'Data Classification', info: DC, questions: [
                { text: 'Public', points: 1 },
                { text: 'Internal', points: 1 },
                { text: 'Confidential', points: 4 },
                { text: 'Restricted', points: 6 },
            ]
        },
        {
            title: 'Records Quantity', info: RQ, questions: [
                { text: 'less than 50 records', points: -1 },
                { text: 'More than 50 records', points: 2 },
                { text: 'No records in scope', points: -2 },
            ]
        },
        {
            title: 'Impacted', info: Im, questions: [
                { text: 'Company', points: 3 },
                { text: 'Client', points: 4 },
                { text: 'Customer', points: 5 },
                { text: 'N/A', points: 1 },
            ]
        }

    ],
    noData: [{
        title: 'Contract Longevity', info: CL, questions: [
            { text: 'less than 5 months', points: 2 },
            { text: 'less 1 year', points: 4 },
            { text: 'more than 1 year', points: 6 },
        ]
    }]
}

export default data;