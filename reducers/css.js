export default function (value = false, action){
  console.log("CSS Reducer");
    switch (action.type){
            case 'CSS' :
                            return true;
    }
    return value;
}
