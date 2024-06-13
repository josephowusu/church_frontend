export const Router = {
    TitesAndOfferings: {
        title: 'Tithes & Offerings',
        icon:'fa-solid fa-money-bills fa-lg menu-icon',
        subPages: [
            {
                name: 'dues',
                title: 'Dues', 
                href: '/dues',
                icon: '',
                subPages: []
            },
            {
                name: 'tithes',
                title: 'Tithes', 
                href: '/tithes',
                icon: '',
                subPages: []
            },
            {
                name: 'offerings',
                title: 'Offerings', 
                href: '/offerings',
                icon: '',
                subPages: []
            }
        ]
    },
    Message: {
        title: 'Messages',
        icon:'fa-brands fa-signal-messenger fa-lg menu-icon',
        subPages: [
            {
                name: 'sms',
                title: 'SMS', 
                href: '/send_sms',
                icon: '',
                subPages: []
            },
            {
                name: 'email',
                title: 'Email', 
                href: '/send_email',
                icon: '',
                subPages: []
            }
        ]
    }
}