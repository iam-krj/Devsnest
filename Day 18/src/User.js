function User() {
        
    const item = [
      {  name: "Dola", cal: " 50", comp : "Dominos"},
      {  name: "hola", cal: " 60", comp : "Dominogs"},
      {  name: "jola", cal: " 670", comp : "Dominghos"},
      {  name: "lola", cal: " 6780", comp : "Domighjnos"}
      // [ name= "H","L",]
      // [ place = "z", "f"]
    
    ]
    
  return(
    <div>
        {
      item.map((user) => (
        <div>{user.name} :- <br />{user.cal} calories <br /> {user.comp}</div>))
        // <div>{}</div>),
        // <div>{user.comp}</div>))
}
    </div>
  )

        }

export default User;