class User {
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username, password) {
        if (username !== this.username || password !== this.password) {
            console.log('Login failed');
        } else {
            console.log('Login successful');
        }
    }

    setPassword(oldPassword, newPassword) {
        let isValid = this.verifyPassword(newPassword);

        if (oldPassword !== this.password || isValid === false) {
            console.log("Change password failed");
        } else {
            this.password = newPassword;
            console.log("Change password is successful");
        }
    }

    verifyPassword(newPassword) {
        if (newPassword.length >= 6) {
            return true;
        }
        return false;
    }
}
class Author {
    constructor(email, name, username, password, numOfPost) {
        super(name, username, password)
        this.email = email
        this.numOfPost = numOfPost;
        
    }
    createPost(){
        this.numOfPost++;
    }
    getNumOfPost(){
        return this.numOfPost;
    }

}
let author1 = new Author("au@gmail.com", "Huy", "author1", "1234567");

const myAcc = new User("Anh", "huyanh", "123456");
myAcc.login("huyanh", "123456");
myAcc.setPassword("123456", "1234567");