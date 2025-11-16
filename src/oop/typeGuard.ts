//* type guard using typeof and in

// type guard using typeof
type AlphaNeumeric = number | string;

const add = (a: AlphaNeumeric, b: AlphaNeumeric) => {
  // typeof type guard
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // number + number = number
  } else {
    return a.toString() + b.toString(); // string + string
  }
};

add(20, 2); // 22
add("2", 2); // 22
add("2", "2"); // 22

// in guard
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    
  // 'in' type guard → check whether property exists
  if ("role" in user) {
    console.log(`This ${user.name} and his role is: ${user.role}`);
  } else {
    console.log(user.name);
  }
};

getUserInfo({ name: "Normal", role: "Admin" });
