const createClassRoom = (numbersOfStudents = 0) => {
  const studentSeat = (seat = 0) => {
    return () => {
      return seat;
    };
  };
  const students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    students[i] = studentSeat(i + 1);
  }
  return students;
};

const classRoom = createClassRoom(10);
