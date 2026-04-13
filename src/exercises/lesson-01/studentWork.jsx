//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Arturo Castilleja';
  const age = 49;
  const hobbies = ['Drawing', 'Soccer', '3D Printing'];
  return (
    <div>
      {/* add JSX here */}
      <h1>My Name is : {name}</h1>
      {/*Short Paragraph describing myself*/}
      <p>
        Hello my name is {name} and I am originaly from South Texas. My age is{' '}
        {age} <br />
        and I am currently livin in Florida. I am excited to start learning
        React.{' '}
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
