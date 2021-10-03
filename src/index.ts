// this is easy to decrypt so just change it if u want it longer or more secure

import chalk from "chalk";
import readline from "readline";
import { blank, Prompt } from "./util.js";
import { md5, sha256 } from "hash-wasm";
import os from "os";
import afetch from "./commands/afetch.js";
import { State } from "./commands/command.js";
import { headerCase } from "change-case";

const prompt = new Prompt();

console.log(blank());
console.log(chalk.gray(`Welcome, ${headerCase(os.userInfo().username)}.\n`));
const answer = await prompt.prompt();
const state: State = {
  message: "",
};

if (answer == "encode") {
  state.message += blank();

  console.log(
    chalk.white("░") +
      chalk.yellowBright("█████╗") +
      chalk.white("░") +
      chalk.yellowBright("██╗") +
      chalk.white("░░░░░") +
      chalk.yellowBright("██████╗") +
      chalk.white("░") +
      chalk.yellowBright("██╗") +
      chalk.white("░░") +
      chalk.yellowBright("██╗") +
      chalk.white("░") +
      chalk.yellowBright("█████╗") +
      chalk.white("░")
  );
  console.log(
    chalk.yellowBright("██╔══██╗██║") +
      chalk.white("░░░░░") +
      chalk.yellowBright("██╔══██╗██║") +
      chalk.white("░░") +
      chalk.yellowBright("██║██╔══██╗")
  );
  console.log(
    chalk.yellowBright("███████║██║") +
      chalk.white("░░░░░") +
      chalk.yellowBright("██████╔╝███████║███████║")
  );
  console.log(
    chalk.yellowBright("██╔══██║██║") +
      chalk.white("░░░░░") +
      chalk.yellowBright("██╔═══╝") +
      chalk.white("░") +
      chalk.yellowBright("██╔══██║██╔══██║")
  );
  console.log(
    chalk.yellowBright("██║") +
      chalk.white("░░") +
      chalk.yellowBright("██║███████╗██║") +
      chalk.white("░░░░░") +
      chalk.yellowBright("██║") +
      chalk.white("░░") +
      chalk.yellowBright("██║██║") +
      chalk.white("░░") +
      chalk.yellowBright("██║")
  );
  console.log(
    chalk.yellowBright("╚═╝") +
      chalk.white("░░") +
      chalk.yellowBright("╚═╝╚══════╝╚═╝") +
      chalk.white("░░░░░") +
      chalk.yellowBright("╚═╝") +
      chalk.white("░░") +
      chalk.yellowBright("╚═╝╚═╝") +
      chalk.white("░░") +
      chalk.yellowBright("╚═╝")
  );
  for (let i = 0; i <= 27; i++) {
    console.log(" ");
  }

  console.log(chalk.gray("──────────────────────────────────────────────────"));
  const type = await prompt.prompt(
    chalk.yellow(
      "Please specify an encryption type:\nMD5\nSHA256\nBASE64\n\n> "
    )
  );
  const message = await prompt.prompt(
    chalk.white("Please specify a message: \n> ")
  );
  console.log(chalk.gray("──────────────────────────────────────────────────"));

  const typel = type.toLowerCase();
  switch (typel) {
    case "md5": {
      const md5msg = md5(message); // this
      console.log("\n" + md5msg);
      console.log(
        chalk.gray("──────────────────────────────────────────────────")
      );
      break;
    }
    case "sha256": {
      const hash = await sha256(message);
      console.log(`\n${hash}`);
      console.log(
        chalk.gray("──────────────────────────────────────────────────")
      );
      break;
    }
    case "base64": {
      const buff = Buffer.from(message);
      const base64 = buff.toString("base64");
      console.log(`\n${base64}`);
      console.log(
        chalk.gray("──────────────────────────────────────────────────")
      );
      break;
    }
  }

  //rl.close();//try it
} else if (answer == "afetch") {
  await afetch.fn(state);
} else {
  state.message += chalk.red(
    "Sorry, That is not a valid command.\nPlease run: help"
  );
}
// TODO: while loop for running prompt
console.log(state.message);
process.exit(0);

// dont do anything for a second
