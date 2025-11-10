//* union : |

type UserRole = 'admin' | 'moderator' | 'user';

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    } else if (role === 'moderator') {
        return 'Moderatoar Dashborad';
    } else {
        return 'User Dashboard';
    }
}
getDashboard('user');

//* intersection : &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const SaifullahKabir: EmployeeManager = {
    id: '123',
    name: 'Saifullah Kabir',
    phoneNo: '01800000000',
    designation: 'Manager',
    teamSize: 20
}