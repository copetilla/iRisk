const data = {
    third: [
        {
            title: 'People Interaction', questions: [
                { text: 'Yes', points: 3, AM: null },
                { text: 'No', points: 1, AM: null },
            ]
        },
        {
            title: 'Privilaged Access', questions: [
                { text: 'Yes', points: 5, AM: null },
                { text: 'No', points: 3, AM: null },
            ]
        },
        {
            title: 'Access method', questions: [
                { text: 'Third Party Enviroment', points: 6, AM: null },
                { text: 'Company VPN, no direct access', points: 2, AM: null },
            ]
        },
        {
            title: 'Contract Longevity', questions: [
                { text: 'less than 5 months', points: -10, AM: 'TPE' },
                { text: 'less 1 year', points: 4, AM: 'TPE' },
                { text: 'more than 1 year', points: 6, AM: 'TPE' },
                { text: 'less than 5 months', points: -8, AM: 'VPN' },
                { text: 'less 1 year', points: -3, AM: 'VPN' },
                { text: 'more than 1 year', points: -1, AM: 'VPN' },
            ]
        },
        {
            title: 'Fisical Security', questions: [
                { text: 'Hosting Provider', points: 6, AM: 'TPE' },
                { text: 'Fisical Archiving', points: 6, AM: 'TPE' },
                { text: 'N/A', points: 3, AM: 'TPE' },
            ]
        },
        {
            title: 'Data Classification', questions: [
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
    ]
}

export default data;