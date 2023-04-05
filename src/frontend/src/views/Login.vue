<template>
  <div class="modal">
    <form >
      <div class="head">
        <h1>Log in</h1>
      </div>
      <div class="container">
        <label for="login">Login</label>
        <input type="text" placeholder="Login" name="login" />
        <label for="pass">Password</label>
        <input type="password" placeholder="Password" name="pass" />
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style scoped>
  form {
    width: 100%;
    height: 100%;
    border: 3px solid #f1f1f1;
  }
  .head {
    margin: 0px 18vh;
  }

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  button {
    background-color: #04AA6D;
    color: white;
    border: none;
    cursor: pointer;
    margin: 16px 8px;
    width: 100%;
    padding: 14px 20px;
    border-radius: 25px;
  }
  .modal {
    width: 100%;
    height: 100%;
  }
  button:hover {
    background-color: #058051;
  }
  .container {
    padding: 16px;
  }
</style>