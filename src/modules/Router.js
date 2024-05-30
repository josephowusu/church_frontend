export const Router = {
    // Members: {
    //     title: 'Members',
    //     subPages: [
    //         {
    //             name: 'memberTable',
    //             title: 'Members Table',
    //             href: '/member-table',
    //             icon: '',
    //             subPages: []
    //         },
    //         {
    //             name: 'memberRegister',
    //             title: 'Register Members',
    //             href: '/register-member-form',
    //             icon: '',
    //             subPages: []
    //         }
    //     ]
    // },
    Attendance: {
        title: 'Attendance',
        subPages: [
            {
                name: 'markAttendance',
                title: 'Mark Attendance', 
                href: '/mark_attendance',
                icon: '',
                subPages: []
            },
            {
                name: 'viewAttendance',
                title: 'View Attendance', 
                href: '/view_attendance',
                icon: '',
                subPages: []
            }
        ]
    },
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
    }
}