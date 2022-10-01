console.log("Welcome to LOGIN & SIGNUP");
const input = require("readline-sync")
console.log("Enter (help) to see options");
const database = {}
while(true){
    const features = input.question(">>>")
    if (features === "help") console.log("1.Signup\n2.Login\n3.help\n4.exit\nDEVS options");
    
    else if (features === "1"||features === "signup") {
        const name = input.question("Enter Name-:")
        const number = input.question("Enter number-:")
        const password = input.question("Enter Password-:")
        while (true){
            const g_mail = input.question("Enter g_mail-:")
            if (g_mail.slice(g_mail.length-10)=="@gmail.com"){
                const value_list = [name,number,password,g_mail]
                var property_list = ["Name","Ph_Number","password","Email"]
                const sub_dict = {}
                for (i in value_list){
                    sub_dict[property_list[i]]=value_list[i]
                }
                database[g_mail] = sub_dict
                console.log("Account created.");
                break
            }
            else console.log("Invalid format.");}}
    else if (features === "2" ||features === "login"){
        gmail = input.question("Enter Gmail-:")
        if (gmail in database){
            passwd = input.question("Enter password-:")
            if (database[gmail]["password"] == passwd){
                console.log("Login successful.");
                choose = input.question("update(y/n)-:")
                if (choose == "y"){
                    console.log(property_list);
                    
                }

            }
            else console.log("incorrect password");
        }
        else console.log("Gmail not found");
    }
    else if (features === "dev") console.log("info sir",database);
    else if (features === "exit") break
    else console.log("Command! not found.");

}

