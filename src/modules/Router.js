export const Router = {
    TitesAndOfferings: {
        title: 'Tithes & Offerings',
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
    },
    Administrator: {
        title: 'Administrator',
        subPages: [
            {
                name: 'branches',
                title: 'Branches', 
                href: '/branches',
                icon: '',
                subPages: []
            },
            {
                name: 'assignAdminRole',
                title: 'Assign Admin Role', 
                href: '/assignAdminRole',
                icon: '',
                subPages: []
            },
        ]
    }
}