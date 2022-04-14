/* author: Logan Machida */

var dbms = require('./dbms_promise');

async function updateTrophies(username) {
    const result = await dbms.dbquery(`SELECT * FROM USER_PROFILES WHERE USERNAME='${username}'`);
    if (result.length == 0) return false;
    const trails_completed = result[0]["TRAILS_COMPLETED"];
    const distance_walked = result[0]["DISATANCE_WALKED"];
    const elevation_gained = result[0]["ELEVATION_GAINED"];
    
    let newAchievements = "0000000000000000"
        if(trails_completed >= 1){
            var index = 0;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(trails_completed >= 5){
            var index = 1;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(trails_completed >= 10){
            var index = 2;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }

        if(distance_walked >= 10){
            var index = 3;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(distance_walked >= 20){
            var index = 4;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(distance_walked >= 30){
            var index = 5;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }

        if(elevation_gained >= 1000){
            var index = 6;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(elevation_gained >= 2000){
            var index = 7;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
        if(elevation_gained >= 3000){
            var index = 8;
            newAchievements= newAchievements.substring(0, index) + '1' + newAchievements.substring(index + 1);
        }
    

    await dbms.dbquery(`UPDATE USER_PROFILES SET ACHIEVEMENTS='${newAchievements}' WHERE USERNAME='${username}'`);


}

module.exports = {
    updateTrophies: updateTrophies
}