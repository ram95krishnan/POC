export default function (value = false, action){
  console.log("HTML Reducer");
    switch (action.type){
            case 'HTML' :
                            return true;
                            break;
            case 'CSS'  :
                            return true;
                            break;

            case 'JS'   :
                            return true;
                            break;

            case 'REACT'   :
                            return true;
                            break;

  }
    return value;
}
