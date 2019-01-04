    function loadUsers(userIds, load, done) {
      var users = []
      
      userIds.forEach(function(id, i){
      		load(id, function(user){
      			return done(user);
      		})
      })
    }
    
    module.exports = loadUsers
