//* as const assertion
// enum এর বিকল্প — যাতে runtime code না তৈরি হয় এবং সব value readonly থাকে।


//? আগের enum টা এখন দরকার নাই কারণ আমরা as const দিয়ে কাজ করছি।
// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }



/* ==> যখন "as const" ব্যবহার করা হয়, তখন object এর property গুলো readonly হয়ে যায়।
  যেমন:
  readonly Admin: 'Admin',
  readonly Editor: 'Editor',
  readonly Viewer: 'Viewer',

  1. typeof operator → কোনো variable/object এর টাইপ বের করতে ব্যবহৃত হয়।
  2. keyof operator → কোনো object এর সব key গুলার নামকে string literal union বানায়।


  typeof UserRoles {
  Admin: 'Admin',
  Editor: 'Editor',
  Viewer: 'Viewer',
  }

  keyof typeof UserRoles ->
  'Admin' | 'Editor' | 'Viewer'
 */

const UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
} as const;   // as const মানে এই object টি immutable (read-only)।

const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable);