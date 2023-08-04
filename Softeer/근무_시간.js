const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let minutes = 0

// input
rl.on("line", (input) => {
    let time = input.split(" ").map(e => {
        return e.split(":").map(e => Number(e))
    })
    minutes += (time[1][0] - time[0][0]) * 60 + time[1][1] - time[0][1];
})

// output
rl.on("close", () => {
    console.log(minutes);
    process.exit();
})