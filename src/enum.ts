//* enum  
// "enum" (short for "enumeration") means a collection of related constant values.  
// এটি fixed set of values define করতে ব্যবহৃত হয় — যেমন role, direction, status etc


//* normally we could define roles like this using union type:
// type UserRoles = "Admin" | "Editor" | "Viewer";

//* but using "enum" is better when you want to group constants with a name:
enum UserRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);


//! Problems of enum:
// 1. Extra bundle size: ছোট enum হলেও, compile হলে function হয়ে যায়।
// 2. Runtime code add হয়: TypeScript normally type check করে, কিন্তু enum compile হয়ে runtime এও থেকে যায়।
// 3. Tree-shaking problem: কিছু bundler enum properly remove করতে পারে না।
// 4. Alternative আছে: as const বা union literal types।
