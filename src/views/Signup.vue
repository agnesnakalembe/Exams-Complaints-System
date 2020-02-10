<template>
  <div>
    <div class="header">
        <h1 class="pt-5">Results Complaints Platform</h1>
        <h3 class="p-3">Sign up here</h3>
    </div>
    <div class="form-section container pt-4">
      <form action>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Student Name</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">User Category</label>
          <div class="col-sm-10">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Student</option>
              <option>Staff</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">Staff_ID Number</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="inputPassword">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-4 col-form-label">Student_ID Number</label>
              <div class="col-sm-8">
                <input type="password" class="form-control" id="inputPassword">
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Course code</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Create password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">sign up</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1{
    font-size: 50px; 
}

.form-section{
    max-width: 1000px;
    /* text-align: center; */
}
.header{
    background-color: rgb(102, 241, 102);
    border-bottom: solid 3px gray;
}
form{
    border: 1px solid grey;
    border-radius: 20px;
    padding: 20px;
    background-color: rgb(230, 255, 230);
}
</style>

<script>
export default {
  name: "signup"
};
</script>
