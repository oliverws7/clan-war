const sequelize = require('./config/database');
const Clan = require('./models/Clan');
const User = require('./models/User');

async function seed() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced (force: true)');

        // Create a default clan
        const clan = await Clan.create({
            name: 'Os Bárbaros',
            tag: '#L98JQV',
            medals: 18450,
            members: [
                { name: 'KingSlayer', tag: '#123', role: 'Leader', decksUsed: 4, lastActive: new Date() },
                { name: 'ArcherQueen', tag: '#456', role: 'Co-Leader', decksUsed: 4, lastActive: new Date() }
            ]
        });
        console.log('Default clan created');

        // Create a default user
        const UserMod = require('./models/User');
        await UserMod.create({
            email: 'lider@clashclan.com',
            password: '123', // In a real app, use bcrypt
            clanTag: '#L98JQV',
            role: 'leader'
        });
        console.log('Default user created');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
