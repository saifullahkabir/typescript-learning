// type guard
// in typeof

type AlphaNeumeric = number | string;

const add = (a: AlphaNeumeric, b: AlphaNeumeric) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

add(20, 2); // 22
add('2', 2); // 22
add('2', '2'); // 22

// in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
   if("role" in user){
     console.log(`This ${user.name} and his role is: ${user.role}`);
   }else{
    console.log(user.name);
   }
};

getUserInfo({name: 'Normal' , role: 'Admin'});