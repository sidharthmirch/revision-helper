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
      `../public/images${path}/${i}.png`
    );
    i++;
  });
  console.log(`Update [subject].js to reflect the new count for ${path}: ${i}`);
};

rename("/Mathematics");
