const fs = require('fs');
const songHashData = require('./SongHashData.json');
const playerData = require('./PlayerData.json');

const hashMap = Object.keys(songHashData)
  .map(key => ({ key, ...songHashData[key] }))
  .map(s => ({ oldHash: s.key.match(/CustomLevels.(\S*) .*$/)[1], newHash: s.songHash }))
  .reduce((acc, curr) => ({ ...acc, [curr.oldHash]: curr.newHash }), {});

const hashRegex = /custom_level_(\S*) .*$/;

playerData.localPlayers[0].favoritesLevelIds = playerData.localPlayers[0].favoritesLevelIds
  .map(s => {
    if (hashRegex.test(s) === false) return s;

    const oldHash = s.match(hashRegex)[1];
    return `custom_level_${hashMap[oldHash]}`;
  });

playerData.localPlayers[0].levelsStatsData = playerData.localPlayers[0].levelsStatsData
  .map(s => {
    if (hashRegex.test(s.levelId) === false) return s;

    const oldHash = s.levelId.match(hashRegex)[1];
    return { ...s, levelId: `custom_level_${hashMap[oldHash]}` };
  });

fs.writeFileSync('./PlayerData.dat', JSON.stringify(playerData), 'utf8');
