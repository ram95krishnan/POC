
export default function (value=false,action){
  console.log("JS Reducer");
    switch (action.type){
            case 'JS' :
                            return action.payload
                            break;
  }
  console.log("---> JS  " );
  return value;
}
