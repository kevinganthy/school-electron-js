<script>
  let users = $state([]);

  async function fetchUsers() {
    users = await window.users.getUsers();
    console.log(users);
  }

  fetchUsers();
</script>

<ul>
  {#each users as user}
    <li>{user}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
</style>