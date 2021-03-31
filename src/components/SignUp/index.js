import React, {useState } from "react"
import auth  from "../Firebase/firebase"
// import { Link, useHistory } from "react-router-dom"
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

function SignUp() {
 
console.log(`this is ${auth}`)
  return (
    <div>
      <Card>
        
          <h2 className="text-center mb-4">Sign Up</h2>
         
          <form onSubmit>
            
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </div>
  )
}
export default SignUp