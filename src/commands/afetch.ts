import os from "os";
import chalk from "chalk";
import { Command } from "./command.js";
import si from "systeminformation";
import { headerCase } from "change-case";
import screenSize from "screenz";

const afetch: Command = {
  fn: async (state) => {
    const osInfo = await si.osInfo();
    const uptime = os.uptime();
    const memInfo = await si.mem();
    const totalMemory = (memInfo.total / 1024 / 1024).toFixed(0);
    const freeMemory = (memInfo.available / 1024 / 1024).toFixed(0);
    const temporaryDir = os.tmpdir();
    const osRelease = os.release();
    const osHostname = os.hostname();
    const cpu = os.cpus()[0].model;

    state.message += `${chalk.white("    ░")}${chalk.white(
      "                      ╗"
    )}     ${chalk.yellowBright(os.userInfo().username)}${chalk.white(
      "@"
    )}${chalk.yellowBright(osHostname)}\n`;
    state.message +=
      chalk.white("             ░░") +
      chalk.white("            ║") +
      "     " +
      chalk.white("-------------------------------------------") +
      "\n";

    state.message +=
      chalk.yellow("▄▀█ █ ") +
      chalk.white("░░") +
      chalk.yellowBright("█▀█ █") +
      chalk.white("░") +
      chalk.yellowBright("█ ▄▀█") +
      chalk.white("        ║") +
      chalk.yellowBright("     Total Memory") +
      chalk.white(": ") +
      chalk.white(`${totalMemory}`) +
      chalk.white(" MB") +
      "\n";

    state.message +=
      chalk.yellowBright("█▀█ █▄▄ █▀▀ █▀█ █▀") +
      chalk.yellow("█") +
      chalk.white("        ║") +
      chalk.yellowBright("     Free Memory") +
      chalk.white(": ") +
      chalk.white(`${freeMemory}`) +
      chalk.white(" MB") +
      "\n";

    state.message +=
      chalk.white("   ░") +
      chalk.white("                       ║") +
      chalk.yellowBright("     Hostname") +
      chalk.white(": ") +
      chalk.white(osHostname) +
      "\n";

    state.message +=
      chalk.white("                ░") +
      chalk.white("          ╝") +
      chalk.yellowBright("     Release") +
      chalk.white(": ") +
      chalk.white(osRelease) +
      "\n";

    state.message += " ";
    state.message +=
      chalk.white("                          ╗") +
      chalk.yellowBright("     Tmpdir") +
      chalk.white(": ") +
      chalk.white(temporaryDir) +
      "\n";

    state.message +=
      chalk.white("                           ║") +
      chalk.yellowBright("     Terminal Resolution") +
      chalk.white(": ") +
      chalk.white(`${screenSize.width}x${screenSize.height}`) +
      "\n";

    state.message +=
      chalk.white("                           ║") +
      chalk.yellowBright("     Shell") +
      chalk.white(": ") +
      chalk.white("AlphaTerm") +
      "\n";

    state.message +=
      chalk.white("                           ║") +
      chalk.yellowBright("     Platform") +
      chalk.white(": ") +
      chalk.white(headerCase(os.platform())) +
      "\n";

    state.message +=
      chalk.white("                           ║") +
      chalk.yellowBright("     CPU") +
      chalk.white(": ") +
      chalk.white(cpu) +
      "\n";

    state.message +=
      chalk.white("                           ╝") +
      chalk.yellowBright("     GPU") +
      chalk.white(": ") +
      "placeholder" +
      chalk.white("" + "\n");

    return state;
  },
};

export default afetch;
