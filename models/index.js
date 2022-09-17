const User = require('./User');
const Post = require('./Post');

// Users will have many posts, so the models have to be linked with a "hasMany" to define that relationship
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A mirror of the first model association. The "belongsTo" defines that a Post can only belong to a single User
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });


module.exports = { User, Post };