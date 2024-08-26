const schema = () => {
  return (
    <div>
      <h1>Basic9Recordform</h1>
      customID: dropdown,
      studentName: ,
      term: dropdown,
      Mathematics_classScore:number,
      Mathematics_examScore: number,
      Mathematics_totalScore: number,
      Mathematics_position: number,
      Mathematics_grade: number,
      Mathematics_remarks: textarea,

      <h1>AddTeacherForm</h1>
      fullName: text,
      dateOfBirth: text,
      gender: dropdown,
      nationality:text,
      phone: number,
      email: email,
      address: text,
      qualifications: text,
      experience: text,
      position: text,
      startDate: date,
      salary: text,
      emergencyContact: number,
      status: dropdown,

      <h1>AddEventForm</h1>
      title:text,
      description: text,
      start:date,
      end: date,
      term: dropdown,
      status: dropdown,
    
    </div>
  );
};

export default schema;
