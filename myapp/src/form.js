import React from 'react'

const MyForm = ({name, lastName, submitName}) => {
    return (
    <form>
        <h1>Forms</h1>
      <label>
       {name}
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" /> 
      <label><br></br>
        {lastName}
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <label><br></br>
      Age:
        <input type="number" name="number" />
      </label>
      <input type="submit" value="Submit" />
      <label><br></br>
        Email ID:
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Submit" />
      <label><br></br>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value={submitName} />
    </form>
      )
}

export default MyForm