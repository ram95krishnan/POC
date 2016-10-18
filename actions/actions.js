export const action = (val, course) => {
  console.log("The selected course is : ",course.course);
  return{
      type : course.course,
      id : course.id,
      value : val
        }
}
/*
export const css = (val) => {
  console.log("The _______ selected is : ",param);
  return{
      type : 'CSS',
      payload :val
        }
},

export const js = (val) => {
  console.log("The _______ selected is : ",param);
  return{
      type : 'JS',
      payload :val
        }
},

export const react = (val) => {
  console.log("The _______ selected is : ",param);
  return{
      type : 'REACT',
      payload :val
        }
},
*/
