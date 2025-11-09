//* object destructuring

const user = {
    id: 123,
    name: {
        firstName: "Saifullah",
        middleName: "Kabir",
        lastName: "Rana",
    },
    gender: 'Male',
    favoriteColor: "Black",
};

//  const myFavoriteColor = user.favoriteColor;
//  const myLastName = user.name.lastName;

const { favoriteColor: myFavoriteColor, name: { lastName } } = user;  // name alias
// console.log(lastName);

//* array destructuring

const friends = ['Ablu', 'Bablu', 'Tablu'];

// const myBestFriend = friends[1];

const [, myBestFriend] = friends
console.log(myBestFriend);