var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
function testAllValid(users){
const isValid = users.every(function(user){
    const isExit = goodUsers.some(function(goodUser){
        return user.id == goodUser.id
    })
    return isExit
})
return isValid
}
console.log(testAllValid)