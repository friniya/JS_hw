const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" 
    },
];

const emailRegex = /^([\w.-]+(?:\.[\w.-]+)*)@(gmail\.com|yahoo\.com)$/i;

function validateEmails(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (!validateEmails(obj[key])) {
                return false;
            }
        } else if (key === 'email') {
            if (!emailRegex.test(obj[key])) {
                return false;
            }
        }
    }
    return true;
}

const result = validateEmails(arr);
console.log(result); 