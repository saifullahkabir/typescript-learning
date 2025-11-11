//* as const assertion
// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }
/* ==>when use as count so
  readonly Admin: 'Admin',
  readonly Editor: 'Editor',
  readonly Viewer: 'Viewer',

  1. typeof operator
  2. keyof operator

  typeof UserRoles {
  Admin: 'Admin',
  Editor: 'Editor',
  Viewer: 'Viewer',
  }

  keyof typeof UserRoles
  'Admin' | 'Editor' | 'Viewer'
 */
var UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
};
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
var isEditPermissable = canEdit(UserRoles.Viewer);
console.log(isEditPermissable);
