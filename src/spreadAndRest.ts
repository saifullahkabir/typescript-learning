//* spread operator

// spread for array
const friends = ['Abul', 'Tabul'];
const schoolFriends = ['Pinku', 'Chintu', 'Bulbul'];
const collegeFriends = ['Montu', 'Monika'];

friends.push(...schoolFriends);
friends.push(...collegeFriends)

// console.log(friends);

// spread for object
const user = { name: "Rana", phoneNo: "018000000000" };
const otherInfo = { hobby: 'nothing', favoriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//* rest operator
const sendInvite = (...friends: string[]) => {
    console.log(friends);
    friends.forEach((friend: string) => console.log(`Sent invitation to ${friend}`))
}

sendInvite('Abul', "Monika", "Pinku");
