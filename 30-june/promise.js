
function transferMoney(amount) {
    return new Promise((resolve, reject) => {

        console.log(" Processing payment...");


        setTimeout(() => {

            let balance = 1000;

            // Check if balance is sufficient
            if (balance >= amount) {
                resolve(` ₹${amount} transferred successfully.`);
            } else {
                reject(" Insufficient balance.");
            }

        }, 2000);
    });
}


transferMoney(5000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });