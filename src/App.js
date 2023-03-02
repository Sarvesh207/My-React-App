
import './App.css';



// function SayHi(props){
//   return <h1>Hi Admin {props.name}</h1>
// }
// function SayHiAdmin(props){
//   return <h1>Hi Admin {props.name}</h1>
// }


// Exercise 1
// function HomePage(props){
//   if(props.admin){
//     return <AdminUserComponents></AdminUserComponents>
//   }else{
//     return <NormalUserComponents></NormalUserComponents>
//   }
// }

// function AdminUserComponents(){
//   return <h1>Hii this Admin user components</h1>
// }

// function NormalUserComponents(){
//   return <h1>Hello Normal user Components </h1>
// }
// Exercise 2

function SchoolManagement(name){
  switch(name){

    case "Admin":{
      return( <Trusty></Trusty>)
    }
    case "Teacher":{
      return (<Teacher></Teacher>)
    }
    case "Student":{
      return (<Student></Student>)
    }
    case "Parent":{
     return (<Parent></Parent>)
    }
    default : return (
      <Student></Student>
    )
  }
}
// function SchoolManagement(name){
//   switch(name){

//     case "Admin":{
//       return( <div>Admin</div>)
//     }
//     case "Teacher":{
//       return (<div>Teacher</div>)
//     }
//     case "Student":{
//       return (<div>Student</div>)
//     }
//     case "Parent":{
//      return (<div>Parent</div>)
//     }
//     default :{ return(
//       <div>hii I am normal user</div>
//     )
//   }
//   }
// }

function Trusty(){
  return <h1>hey I'm Trusty</h1>
}

function Teacher(name){
  return <h1>hey I'm Teacher </h1>
}

function Student(){
  return <h1>hey I'm Student</h1>
}

function Parent(){
  return <h1>hey I'm Parent</h1>
}

function NormalUser(){
  return <h1>Hii I am Normal user</h1>
}

//  
function App() {
  const name = "Parent";
  // const NormalUserComponent = <SayHi name="Sarvesh"></SayHi>
 
  // const AdminUserComponent = <SayHiAdmin name="Rachana"></SayHiAdmin>
  return (
    <div >
      <h1>Hii there everyone hi</h1>
      
      <SchoolManagement name={name}></SchoolManagement>
    </div>
  );
  // if(admin){
  //   return AdminUserComponent;
  // }else{
  //   return NormalUserComponent;
  // }
  // School
  // admin
  // teacher
  // student
  // parent
}

export default App;
