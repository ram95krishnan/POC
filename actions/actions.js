export const action = (val, course) => {
  console.log("The selected course is : ",course.course + " " + val);
  switch(course.course)
  {
    case 'HTML' :
                  return{
                      type : 'HTML',
                      payload : val
                  }
                  break;

    case 'CSS' :
                  return{
                      type : 'CSS',
                      payload : val
                  }
                  break;

    case 'JS' :
                  return{
                      type : 'JS',
                      payload : val
                  }
                  break;

    case 'REACT' :
                  return{
                      type: 'REACT',
                      payload : val
                  }
                  break;
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
