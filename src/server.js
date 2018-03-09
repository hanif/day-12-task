const chalk = require('chalk');
const app = require('./app');

const port = 4000;

// eslint-disable-next-line no-console
console.log(String.raw`
                       _             _       _
                      | |           | |     | |
 _ _ _  ___  ____   _ | | ____  ____| | ____| | _   ___
| | | |/ _ \|  _ \ / || |/ _  )/ ___) |/ _  | || \ /___)
| | | | |_| | | | ( (_| ( (/ /| |   | ( ( | | |_) )___ |
 \____|\___/|_| |_|\____|\____)_|   |_|\_||_|____/(___/
`);

// eslint-disable-next-line no-console
console.log(chalk.green(`Running on ${chalk.underline(process.env.NODE_ENV)} environment`));

// eslint-disable-next-line no-console
console.log(chalk.yellow('Setting up environment...'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(chalk.bgBlue(`Server started on port ${port}`));

  // eslint-disable-next-line no-console
  console.log(chalk.bgBlue(`PID is ${process.pid}`));
});
