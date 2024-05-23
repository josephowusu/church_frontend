export const Router = {
    Members: {
        title: 'Members',
        subPages: [
            {
                name: 'memberTable',
                title: 'Members Table',
                href: '/member-table',
                icon: '',
                subPages: []
            },
            {
                name: 'memberRegister',
                title: 'Register Members',
                href: '/register-member-form',
                icon: '',
                subPages: []
            }
        ]
    },
    Attendance: {
        title: 'Attendance',
        subPages: [
            {
                name: 'markAttendance',
                title: 'mark Attendance', 
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
    OPERATIONS: {
        title: 'Report',
        subPages: [
            {
                name: 'accountBalance',
                title: 'Yiwala',
                href: '/account-balance',
                icon: '',
                subPages: []
            }
        ]
    }
}