import si from "systeminformation";
import readline from "readline";
import chalk from "chalk";
import os from "os";

export const blank = () => "\n".repeat(process.stdout.rows);

export const getGpuInfo = () => {};

export class Prompt {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async getPrefix() {
    const osInfo = await si.osInfo();
    return `${os.userInfo().username}@${osInfo.hostname}:${process
      .cwd()
      .slice(0, 25)
      .concat("...")}`;
  }

  async prompt(msg?: string) {
    return new Promise<string>((resolve) => {
      this.getPrefix().then((prefix) => {
        this.rl.question(
          msg ?? chalk.white(`${prefix}\n${chalk.yellowBright("> ")}`),
          resolve
        );
      });
    });
  }
}
