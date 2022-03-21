const fs = require("fs");
/*
 * Don't run this unless you're willing to NUKE the image content
 * Before running this command, please cd to folder and run:
 * sudo rm -f .DS_Store
 */

const rename = (path) => {
  let i = 0;
  fs.readdirSync(`${process.cwd()}/images${path}`).forEach((file) => {
    fs.renameSync(
      `${process.cwd()}/images${path}/${file}`,
      `${process.cwd()}/images${path}/${i}.png`
    );
    i++;
  });
};

const questionCount = (path) => {
  let count = 0;
  fs.readdirSync(`${process.cwd()}/images${path}`).forEach((file) => {
    count++
  });
  console.log(count)
  fs.writeFileSync(`${process.cwd()}/images${path}/count.txt`, count.toString())
}

questionCount("/Mathematics")