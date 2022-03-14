var Sequelize = require('sequelize');

const user = 'nftopytwtsdjxq'
const host = 'ec2-34-247-151-118.eu-west-1.compute.amazonaws.com'
const database = 'd24pd823t95d85'
const password = 'a5e402eb099a31b4dec9d25ba6226bb8baf755644409c5f4ae2f65755b853836'
const port = '5432'
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})




var searchGithub = sequelize.define('searchGithub', {
    

           login: Sequelize.STRING,
          node_id: Sequelize.STRING,
            avatar_url: Sequelize.STRING,
            gravatar_id: Sequelize.STRING,
          url: Sequelize.STRING,
          html_url: Sequelize.STRING,
            followers_url: Sequelize.STRING,
          following_url: Sequelize.STRING,
        gists_url: Sequelize.STRING,
      starred_url: Sequelize.STRING,
            subscriptions_url: Sequelize.STRING,
            organizations_url: Sequelize.STRING,
              repos_url: Sequelize.STRING,
            events_url: Sequelize.STRING,
            received_events_url: Sequelize.STRING,
            type: Sequelize.STRING,
            site_admin: Sequelize.STRING,
            name: Sequelize.STRING,
              company: Sequelize.STRING,
            blog: Sequelize.STRING,
            location: Sequelize.STRING,
              email: Sequelize.STRING,
            hireable: Sequelize.STRING,
            bio: Sequelize.STRING,
              twitter_username: Sequelize.STRING,
            public_repos: Sequelize.STRING,
          public_gists: Sequelize.STRING,
          followers: Sequelize.STRING,
          following: Sequelize.STRING,
          created_at: Sequelize.STRING,
          updated_at: Sequelize.STRING,
            searchGithub_pke: Sequelize.STRING
    
});



sequelize.sync().then(function() {
  return 0
}).then(function() {
 console.log("ALL IS FINE")
});

