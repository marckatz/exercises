


function DropDown({browse}){
    return(
        <li className = 'dropdownItem'>
          <img src={browse.img}></img>
          <a> {browse.text} </a>
        </li>
      );
    }

export default DropDown



//*/}

{/* <ul>
            <DropDown browse = {browse} img = {FullBody} text = {"All Muscles"}/>
            <DropDown img = {Abs} text = {"Abdominals"}/>
            <DropDown img = {Abductors} text = {"Abductors"}/>
            <DropDown img = {Abductors} text = {"Adductors"}/>
            <DropDown img = {Biceps} text = {"Biceps"}/>
            <DropDown img = {Chest} text = {"Chest"}/>
            <DropDown img = {Forearms} text = {"Forearms"}/>
            <DropDown img = {Glutes} text = {"Glutes"}/>
            <DropDown img = {Hamstrings} text = {"Hamstrings"}/>
            <DropDown img = {Lats} text = {"Lats"}/>
            <DropDown img = {Lower_Back} text = {"Lower_Back"}/>
            <DropDown img = {Middle_Back} text = {"Middle Back"}/>
            <DropDown img = {Neck} text = {"Neck"}/>
            <DropDown img = {Quadriceps} text = {"Quadriceps"}/>
            <DropDown img = {Traps} text = {"Traps"}/>
            <DropDown img = {Triceps} text = {"Triceps"}/>
          </ul> */}