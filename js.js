
        let x = "Joe"
        let y = "Doe" 
        console.log (`${x} <> ${y}`)

        let personal = {
            name: "Joe",
            surname: "Doe",
            email: "joesoft@gmail.com",
        }
     
      delete personal.email
      console.log(personal)

      let stringsNames = ["Miriam", "Josi", "Paulo", "Jo", "Laura", "Marie", "Larry", "Arlos", "Iraci","Vanuzia"]
      for (strings of stringsNames){
          console.log(strings)
      }
     
      let randomNumbers100 = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
      //[Math.floor(Math.random() * 100)]
      console.log (randomNumbers100)