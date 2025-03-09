#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const ejs = require('ejs');
const fsExtra = require('fs-extra');

const TEMPLATE_DIR = path.join(__dirname, '../templates/basic');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


(async () => {
  const chalk = (await import('chalk')).default;

  const question = (text, def) => new Promise(resolve => {
    rl.question(`${text} ${chalk.gray(def)} `, answer => {
      resolve(answer.trim() || def);
    });
  });

  const projectName = process.argv[2] || await question('⚪ Project name:', 'my-app');

  const targetDir = path.join(process.cwd(), projectName);
  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`❗ Folder "${projectName}" already exists!`));
    process.exit(1);
  }

  const serverNeeded = (await question('❓ Include PostgreSQL server in your project? [Y/n]', 'Y')).toLowerCase() === 'y';

  let serverConfig = {};
  let clientConfig = {};

  if (serverNeeded) {
    serverConfig = {
      dbUser: await question('❔ DB username:', 'postgres'),
      dbPassword: await question('❔ DB password:', 'password'),
      dbPort: await question('❔ DB port:', '5432'),
      dbName: await question('❔ DB name:', 'mydatabase'),
      serverPort: await question('❔ Server port:', '3001'),
    };
  }

  clientConfig.clientPort = await question('🌍 Client proxy port:', '3001');

  rl.close();

  fs.mkdirSync(targetDir, { recursive: true });
  fsExtra.copySync(TEMPLATE_DIR, targetDir);

  // 🔹 Шаблонизируем client/package.json
  const clientPackageTemplatePath = `${targetDir}/client/package.json.ejs`;
  const clientPackageTemplate = fs.readFileSync(clientPackageTemplatePath, 'utf8');
  const renderedClientPackage = ejs.render(clientPackageTemplate, {
    projectName,
    serverPort: clientConfig.clientPort,
  });
  fs.writeFileSync(`${targetDir}/client/package.json`, renderedClientPackage);
  fs.unlinkSync(clientPackageTemplatePath);

  if (serverNeeded) {
    // 🔹 Шаблонизируем server/package.json
    const serverPackageTemplatePath = `${targetDir}/server/package.json.ejs`;
    const serverPackageTemplate = fs.readFileSync(serverPackageTemplatePath, 'utf8');
    const renderedServerPackage = ejs.render(serverPackageTemplate, {
      projectName,
      serverPort: serverConfig.serverPort,
    });
    fs.writeFileSync(`${targetDir}/server/package.json`, renderedServerPackage);
    fs.unlinkSync(serverPackageTemplatePath);

    // 🔹 Шаблонизируем .env сервера
    const envTemplatePath = `${targetDir}/server/.env.ejs`;
    const envTemplate = fs.readFileSync(envTemplatePath, 'utf8');
    const renderedEnv = ejs.render(envTemplate, serverConfig);
    fs.writeFileSync(`${targetDir}/server/.env`, renderedEnv);
    fs.unlinkSync(envTemplatePath);
  } else {
    fsExtra.removeSync(`${targetDir}/server`);
  }

  console.log(chalk.cyan(`\n✅ Project "${projectName}" successfully created!`));
  console.log(chalk.cyan(`📁 Structure:`));
  console.log(chalk.white(serverNeeded
    ? `
${projectName}
├── client (React-app)
└── server (Node + Express server with PostgreSQL)
`
    : `
${projectName}
└── client (React-app)
`
  ));

  console.log(chalk.cyan('⚪ Next steps:'));
  console.log(chalk.white(!serverNeeded
    ? `${chalk.gray(`INSTALL DEPENDENCIES AND RUN APP:`)} cd ${projectName}/client && npm install && npm start`
    : `${chalk.gray(`INSTALL DEPENDENCIES AND RUN APP:`)} cd ${projectName}/server && npm install && cd ../client && npm install && npm start`
  ));
  console.log(chalk.gray('It may take a long time to install all the dependencies'));
  
  console.log(chalk.inverse('\nbuild by https://github.com/sharagulov'));
})();
