let funcaoQueFazLogDeUsuarioDoGitHub = (userid) => {
  fetch(`https://api.github.com/users/${userid}`)
  .then(function (response){
      return response.json()
  })
  .then(function (data){
      console.log('all data:', data);
      console.log('name: ', data.name);
  })
  .catch(error => {
      console.error(error);
  })
};

funcaoQueFazLogDeUsuarioDoGitHub('willsg89');