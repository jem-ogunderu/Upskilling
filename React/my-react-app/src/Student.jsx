



function Student(props) {
  return (
    <div>
      <h2>{props.student.name}</h2>
      <p>Age: {props.student.age}</p>
      <p>Major: {props.student.major}</p>
    </div>
  )
}

export default Student