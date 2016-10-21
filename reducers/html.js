
export default function (value=false,action){
  console.log("HTML Reducer");

    switch (action.type){
            case 'HTML' :
                            return action.payload;
                            break;
  }
  console.log("---> HTML ");
  return value;
}
