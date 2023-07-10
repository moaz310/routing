export class AuthService{
    loggedIn = false;

    logIn(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }

    isAuthenticated(): Promise<boolean>{
        const promise = new Promise<boolean>(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn);
                }, 800)
            }
        )
        return promise;
    }
}