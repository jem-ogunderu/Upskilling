//import MyButton from "./MyButton"
import Student from "./Student"

function App() {

  const students = [{
    name: "John Doe",
    age: 20,
    major: "Computer Science"
  },
  {
    name: "Jane Smith",
    age: 22,
    major: "Mathematics"
  }]

  return (
    <div>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  )
}

export default App