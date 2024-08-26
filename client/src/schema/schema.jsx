const schema = () => {
  return (
    <div>
      <h1>Basic9Recordform</h1>
      customID: dropdown,
      studentName: text,
      term: dropdown,
      Mathematics_classScore:number,
      Mathematics_examScore: number,
      Mathematics_totalScore: number,
      Mathematics_position: number,
      Mathematics_grade: number,
      Mathematics_remarks: textarea,

      <h1>AddTeacherForm</h1>
      customID: dropdown,
      fullName: text,
      dateOfBirth: text,
      gender: dropdown,
      nationality:text,
      phone: number,
      email: email,
      address: text,
      qualifications: text,
      experience:text,
      position:text,
      startDate:date,
      salary: text,
      emergencyContact: number,
      status: dropdown,

      <h1>AddEventForm</h1>
      customID: dropdown,
      title:text,
      description: text,
      start:date,
      end: date,
      term: dropdown,
      status: dropdown,

      <h1>AddStudentForm</h1>
      customID: dropdown,
      registrationDate: date,
      firstName:text,
      middleName:text,
      lastName: text,
      dateOfBirth: date,
      age: number,
      sex: dropdown,
      nationality: text,
      hometown: text,
      parentGuardian: text,
      address: text,
      occupation: text,
      religiousDenomination: text,
      houseNumber: text,
      phoneNumber: number,
      status: dropdown,

      <h1>Register</h1>
      email: email,
      username:text,
      password: password

      <h1>Login</h1>
      email:emil,
      username:text
    </div>
  );
};

export default schema;
