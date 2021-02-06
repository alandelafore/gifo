


function getTrendings2() {
  
  
      
      url=`https://api.giphy.com/v1/gifs/categories?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT`
   
   
    fetch(url)
      .then(function (response) {
        return (response = response.json());
      })
      .then(function (info) {
          console.log(info.data,"lo que trae");
       
      });
  }



