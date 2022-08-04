import React,{useState} from "react";
const AddEditContact=()=>{
    const[contact,setContact]=useState({
        name:"",
        phoneNumber:"",
        email:""
    })
    const handelChange=(event)=>{
setContact({...contact,
[event.target.name]:event.target.value
})
    }
    return<div>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add/EditContact</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" name="name" placeholder="name" value={contact.name} onChange={handelChange}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">PhoneNumber</label>
    <input type="number" class="form-control" id="formGroupExampleInput2" name="phoneNumber" placeholder="number" value={contact.phoneNumber} onChange={handelChange}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="email" class="form-control" id="formGroupExampleInput2" name="email" placeholder="Email" value={contact.email} onChange={handelChange}/>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
        <button type="submit"  class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
}
export default AddEditContact