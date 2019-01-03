function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return goodUsers.some(boolsome => submittedUsers.every(item => goodUsers.includes(item)));
      };
    }
    
    module.exports = checkUsersValid