const fs = require('fs');

fs.writeFileSync('Challenge_I.txt', 'Este es el primer challenge');

fs.appendFileSync('Challenge_I.txt', ' Esta línea se agregó con el append');
