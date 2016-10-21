
export default function (value=false,action){
  console.log("REACT Reducer");
    switch (action.type){
            case 'REACT' :
                            return action.payload
                            break;
  }
  console.log("---> REACT " );
  return value;
}
