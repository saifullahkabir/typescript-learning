
const UserRoles = {
    Admin: 'ADMIN',
    Editor: 'Editor',
    Viewer: 'VIEWER',
} as const;

// (typeof UserRoles)[keyof typeof UserRoles] মানে:
// 1. typeof UserRoles → পুরো object এর type
// 2. keyof typeof UserRoles → "Admin" | "Editor" | "Viewer"
// 3. (typeof UserRoles)[...] → ওই key গুলার corresponding value type

// তাই শেষমেশ role এর type হবে: "ADMIN" | "Editor" | "VIEWER"

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);